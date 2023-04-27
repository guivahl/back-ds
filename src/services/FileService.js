const fs = require('fs');
const path = require('path');
const AWS = require('aws-sdk');
const mime = require('mime-types')
const {
  AWS_BUCKET,
  AWS_ACCESS_KEY,
  AWS_SECRET_ACCESS_KEY,
} = require('../config');

/*
  A linha abaixo é necessária para remover mensagem do pacote da AWS sugerindo a 
  migração da versão do pacote 'aws-sdk' para v3.
*/
require('aws-sdk/lib/maintenance_mode_message').suppress = true;

class FileService {
  constructor() {
    this.s3 = new AWS.S3({
      accessKeyId: AWS_ACCESS_KEY,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
    });
  }

  async save(
    filePath,
    userEmail,
  ) {
    const fileData = fs.readFileSync(filePath);
    const fileExtension = path.extname(filePath);
    const contentType = mime.lookup(fileExtension);

    const timestamp = Date.now();
    const key = `proposals/${userEmail}_${timestamp}${fileExtension}.pdf`;

    const s3Params = {
      Bucket: AWS_BUCKET,
      Key: key,
      Body: fileData,
      ContentType: contentType
    };

    return new Promise(async (resolve, reject) => {
      this.s3.upload(s3Params, (err, data) => {
        if (err) reject(err);

        resolve(data.Location);
      });
    });
  }
}

module.exports = new FileService();
