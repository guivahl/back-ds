exports.seed = async (knex) => {
  const proposals = [
    {
      title: 'Decisão de modo de codificação de nuvens de pontos segundo o padrão G-PCC utilizando aprendizado de máquina',
      coadvisor: 'Guilherme Corrêa',
      filePath: 'https://vahl-ds-dev.s3.amazonaws.com/proposals/lwtavares%40inf.ufpel.edu.br_1682599194028.pdf',
      abstract: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor erat, a lacinia tellus. Mauris rutrum, leo eget tempor vulputate, diam magna consequat nunc, at lacinia nulla augue sed magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam cursus quam nec pellentesque tristique. Integer sed sem ultricies, pellentesque turpis et, convallis urna. Pellentesque iaculis sem sagittis sapien congue pharetra. Nunc varius nunc ut ipsum facilisis commodo. Sed vestibulum, ipsum ac mattis facilisis, velit ex dignissim dui, id commodo purus turpis et risus. Aenean malesuada, felis at pharetra porta, nibh ligula faucibus nunc, ac feugiat nisl erat vel ante. Nunc mattis, risus pretium ultricies interdum, nibh lectus posuere erat, ut dignissim lacus dui in massa. Phasellus eleifend diam at sem blandit, sit amet consectetur massa fringilla. Aenean pretium aliquam nisi nec blandit. Proin semper, dui non fringilla ultrices, nibh dolor mollis justo, posuere feugiat neque nisi ac massa. Donec fermentum consectetur orci, ac imperdiet mauris imperdiet eget. Proin augue enim, porttitor nec nulla eu, eleifend mollis nunc.
     Donec sit amet orci vulputate turpis tristique molestie. Etiam id nibh non nisi commodo semper. Integer interdum, orci nec mollis malesuada, dui magna fermentum nisl, sed finibus risus odio nec neque. Praesent mauris lectus, condimentum id ligula vel, commodo tempus augue. In semper ultrices scelerisque. Praesent dignissim vulputate justo posuere porta. Donec ligula sem, lobortis ultricies lectus quis, eleifend pharetra lorem. Aliquam vel interdum est, sit amet consequat nisi. Duis nec accumsan lorem, eu suscipit elit.`,
      keywords: 'inteligência artifical; nuvens de pontos; aprendizado de máquina',
      classId: 3,
      studentEmail: 'lwtavares@inf.ufpel.edu.br',
      advisorEmail: 'cfdsantos@inf.ufpel.edu.br',
    },
    {
      title: 'Decisão de modo de codificação de nuvens de pontos segundo o padrão G-PCC utilizando aprendizado de máquina',
      coadvisor: 'Guilherme Corrêa',
      filePath: 'https://vahl-ds-dev.s3.amazonaws.com/proposals/lwtavares%40inf.ufpel.edu.br_1682599194028.pdf',
      abstract: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor erat, a lacinia tellus. Mauris rutrum, leo eget tempor vulputate, diam magna consequat nunc, at lacinia nulla augue sed magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam cursus quam nec pellentesque tristique. Integer sed sem ultricies, pellentesque turpis et, convallis urna. Pellentesque iaculis sem sagittis sapien congue pharetra. Nunc varius nunc ut ipsum facilisis commodo. Sed vestibulum, ipsum ac mattis facilisis, velit ex dignissim dui, id commodo purus turpis et risus. Aenean malesuada, felis at pharetra porta, nibh ligula faucibus nunc, ac feugiat nisl erat vel ante. Nunc mattis, risus pretium ultricies interdum, nibh lectus posuere erat, ut dignissim lacus dui in massa. Phasellus eleifend diam at sem blandit, sit amet consectetur massa fringilla. Aenean pretium aliquam nisi nec blandit. Proin semper, dui non fringilla ultrices, nibh dolor mollis justo, posuere feugiat neque nisi ac massa. Donec fermentum consectetur orci, ac imperdiet mauris imperdiet eget. Proin augue enim, porttitor nec nulla eu, eleifend mollis nunc.
     Donec sit amet orci vulputate turpis tristique molestie. Etiam id nibh non nisi commodo semper. Integer interdum, orci nec mollis malesuada, dui magna fermentum nisl, sed finibus risus odio nec neque. Praesent mauris lectus, condimentum id ligula vel, commodo tempus augue. In semper ultrices scelerisque. Praesent dignissim vulputate justo posuere porta. Donec ligula sem, lobortis ultricies lectus quis, eleifend pharetra lorem. Aliquam vel interdum est, sit amet consequat nisi. Duis nec accumsan lorem, eu suscipit elit.`,
      keywords: 'inteligência artifical; nuvens de pontos; aprendizado de máquina',
      classId: 3,
      studentEmail: 'lwtavares@inf.ufpel.edu.br',
      advisorEmail: 'cfdsantos@inf.ufpel.edu.br',
    },
    {
      title: 'Decisão de modo de codificação de nuvens de pontos segundo o padrão G-PCC utilizando aprendizado de máquina',
      coadvisor: 'Guilherme Corrêa',
      filePath: 'https://vahl-ds-dev.s3.amazonaws.com/proposals/lwtavares%40inf.ufpel.edu.br_1682599194028.pdf',
      abstract: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor erat, a lacinia tellus. Mauris rutrum, leo eget tempor vulputate, diam magna consequat nunc, at lacinia nulla augue sed magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam cursus quam nec pellentesque tristique. Integer sed sem ultricies, pellentesque turpis et, convallis urna. Pellentesque iaculis sem sagittis sapien congue pharetra. Nunc varius nunc ut ipsum facilisis commodo. Sed vestibulum, ipsum ac mattis facilisis, velit ex dignissim dui, id commodo purus turpis et risus. Aenean malesuada, felis at pharetra porta, nibh ligula faucibus nunc, ac feugiat nisl erat vel ante. Nunc mattis, risus pretium ultricies interdum, nibh lectus posuere erat, ut dignissim lacus dui in massa. Phasellus eleifend diam at sem blandit, sit amet consectetur massa fringilla. Aenean pretium aliquam nisi nec blandit. Proin semper, dui non fringilla ultrices, nibh dolor mollis justo, posuere feugiat neque nisi ac massa. Donec fermentum consectetur orci, ac imperdiet mauris imperdiet eget. Proin augue enim, porttitor nec nulla eu, eleifend mollis nunc.
     Donec sit amet orci vulputate turpis tristique molestie. Etiam id nibh non nisi commodo semper. Integer interdum, orci nec mollis malesuada, dui magna fermentum nisl, sed finibus risus odio nec neque. Praesent mauris lectus, condimentum id ligula vel, commodo tempus augue. In semper ultrices scelerisque. Praesent dignissim vulputate justo posuere porta. Donec ligula sem, lobortis ultricies lectus quis, eleifend pharetra lorem. Aliquam vel interdum est, sit amet consequat nisi. Duis nec accumsan lorem, eu suscipit elit.`,
      keywords: 'inteligência artifical; nuvens de pontos; aprendizado de máquina',
      classId: 2,
      studentEmail: 'lwtavares@inf.ufpel.edu.br',
      advisorEmail: 'cfdsantos@inf.ufpel.edu.br',
    },
    {
      title: 'Um benchmark para comparar modelo de atores utilizando Java e Elixir',
      filePath: 'https://vahl-ds-dev.s3.sa-east-1.amazonaws.com/proposals/gdsvahl%40inf.ufpel.edu.br_1682558710388.pdf',
      abstract: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor erat, a lacinia tellus. Mauris rutrum, leo eget tempor vulputate, diam magna consequat nunc, at lacinia nulla augue sed magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam cursus quam nec pellentesque tristique. Integer sed sem ultricies, pellentesque turpis et, convallis urna. Pellentesque iaculis sem sagittis sapien congue pharetra. Nunc varius nunc ut ipsum facilisis commodo. Sed vestibulum, ipsum ac mattis facilisis, velit ex dignissim dui, id commodo purus turpis et risus. Aenean malesuada, felis at pharetra porta, nibh ligula faucibus nunc, ac feugiat nisl erat vel ante. Nunc mattis, risus pretium ultricies interdum, nibh lectus posuere erat, ut dignissim lacus dui in massa. Phasellus eleifend diam at sem blandit, sit amet consectetur massa fringilla. Aenean pretium aliquam nisi nec blandit. Proin semper, dui non fringilla ultrices, nibh dolor mollis justo, posuere feugiat neque nisi ac massa. Donec fermentum consectetur orci, ac imperdiet mauris imperdiet eget. Proin augue enim, porttitor nec nulla eu, eleifend mollis nunc.
     Donec sit amet orci vulputate turpis tristique molestie. Etiam id nibh non nisi commodo semper. Integer interdum, orci nec mollis malesuada, dui magna fermentum nisl, sed finibus risus odio nec neque. Praesent mauris lectus, condimentum id ligula vel, commodo tempus augue. In semper ultrices scelerisque. Praesent dignissim vulputate justo posuere porta. Donec ligula sem, lobortis ultricies lectus quis, eleifend pharetra lorem. Aliquam vel interdum est, sit amet consequat nisi. Duis nec accumsan lorem, eu suscipit elit.`,
      keywords: 'inteligência artifical; nuvens de pontos; aprendizado de máquina',
      classId: 4,
      studentEmail: 'gdsvahl@inf.ufpel.edu.br',
      advisorEmail: 'adubois@inf.ufpel.edu.br',
    },
    {
      title: 'Uma ferramenta semi-supervisionada para anotação automática de Lesões de fundo causadas por Retinopatia Diabética',
      coadvisor: 'Carlos Alexandre Silva dos Santos',
      filePath: 'https://vahl-ds-dev.s3.amazonaws.com/proposals/marcelo.sdias%40inf.ufpel.edu.br_1682599053672.pdf',
      abstract: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor erat, a lacinia tellus. Mauris rutrum, leo eget tempor vulputate, diam magna consequat nunc, at lacinia nulla augue sed magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam cursus quam nec pellentesque tristique. Integer sed sem ultricies, pellentesque turpis et, convallis urna. Pellentesque iaculis sem sagittis sapien congue pharetra. Nunc varius nunc ut ipsum facilisis commodo. Sed vestibulum, ipsum ac mattis facilisis, velit ex dignissim dui, id commodo purus turpis et risus. Aenean malesuada, felis at pharetra porta, nibh ligula faucibus nunc, ac feugiat nisl erat vel ante. Nunc mattis, risus pretium ultricies interdum, nibh lectus posuere erat, ut dignissim lacus dui in massa. Phasellus eleifend diam at sem blandit, sit amet consectetur massa fringilla. Aenean pretium aliquam nisi nec blandit. Proin semper, dui non fringilla ultrices, nibh dolor mollis justo, posuere feugiat neque nisi ac massa. Donec fermentum consectetur orci, ac imperdiet mauris imperdiet eget. Proin augue enim, porttitor nec nulla eu, eleifend mollis nunc.
     Donec sit amet orci vulputate turpis tristique molestie. Etiam id nibh non nisi commodo semper. Integer interdum, orci nec mollis malesuada, dui magna fermentum nisl, sed finibus risus odio nec neque. Praesent mauris lectus, condimentum id ligula vel, commodo tempus augue. In semper ultrices scelerisque. Praesent dignissim vulputate justo posuere porta. Donec ligula sem, lobortis ultricies lectus quis, eleifend pharetra lorem. Aliquam vel interdum est, sit amet consequat nisi. Duis nec accumsan lorem, eu suscipit elit.`,
      keywords: 'inteligência artifical; análise de imagens; aprendizado profundo',
      classId: 1,
      studentEmail: 'marcelo.sdias@inf.ufpel.edu.br',
      advisorEmail: 'marilton@inf.ufpel.edu.br',
    },
    {
      title: 'Criação de dataset para treinamento de rede neural com foco em melhoria de qualidade visual de vídeos comprimidos',
      coadvisor: 'Gilberto Kreisler Franco Neto',
      filePath: 'https://vahl-ds-dev.s3.amazonaws.com/proposals/mamota%40inf.ufpel.edu.br_1682599251742.pdf',
      abstract: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor erat, a lacinia tellus. Mauris rutrum, leo eget tempor vulputate, diam magna consequat nunc, at lacinia nulla augue sed magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam cursus quam nec pellentesque tristique. Integer sed sem ultricies, pellentesque turpis et, convallis urna. Pellentesque iaculis sem sagittis sapien congue pharetra. Nunc varius nunc ut ipsum facilisis commodo. Sed vestibulum, ipsum ac mattis facilisis, velit ex dignissim dui, id commodo purus turpis et risus. Aenean malesuada, felis at pharetra porta, nibh ligula faucibus nunc, ac feugiat nisl erat vel ante. Nunc mattis, risus pretium ultricies interdum, nibh lectus posuere erat, ut dignissim lacus dui in massa. Phasellus eleifend diam at sem blandit, sit amet consectetur massa fringilla. Aenean pretium aliquam nisi nec blandit. Proin semper, dui non fringilla ultrices, nibh dolor mollis justo, posuere feugiat neque nisi ac massa. Donec fermentum consectetur orci, ac imperdiet mauris imperdiet eget. Proin augue enim, porttitor nec nulla eu, eleifend mollis nunc.
     Donec sit amet orci vulputate turpis tristique molestie. Etiam id nibh non nisi commodo semper. Integer interdum, orci nec mollis malesuada, dui magna fermentum nisl, sed finibus risus odio nec neque. Praesent mauris lectus, condimentum id ligula vel, commodo tempus augue. In semper ultrices scelerisque. Praesent dignissim vulputate justo posuere porta. Donec ligula sem, lobortis ultricies lectus quis, eleifend pharetra lorem. Aliquam vel interdum est, sit amet consequat nisi. Duis nec accumsan lorem, eu suscipit elit.`,
      keywords: 'inteligência artifical; nuvens de pontos; aprendizado de máquina',
      classId: 1,
      studentEmail: 'mamota@inf.ufpel.edu.br',
      advisorEmail: 'gcorrea@inf.ufpel.edu.br',
    },
    {
      title: 'Uma ferramenta semi-supervisionada para anotação automática de Lesões de fundo causadas por Retinopatia Diabética',
      coadvisor: 'Carlos Alexandre Silva dos Santos',
      filePath: 'https://vahl-ds-dev.s3.amazonaws.com/proposals/marcelo.sdias%40inf.ufpel.edu.br_1682599053672.pdf',
      abstract: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor erat, a lacinia tellus. Mauris rutrum, leo eget tempor vulputate, diam magna consequat nunc, at lacinia nulla augue sed magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam cursus quam nec pellentesque tristique. Integer sed sem ultricies, pellentesque turpis et, convallis urna. Pellentesque iaculis sem sagittis sapien congue pharetra. Nunc varius nunc ut ipsum facilisis commodo. Sed vestibulum, ipsum ac mattis facilisis, velit ex dignissim dui, id commodo purus turpis et risus. Aenean malesuada, felis at pharetra porta, nibh ligula faucibus nunc, ac feugiat nisl erat vel ante. Nunc mattis, risus pretium ultricies interdum, nibh lectus posuere erat, ut dignissim lacus dui in massa. Phasellus eleifend diam at sem blandit, sit amet consectetur massa fringilla. Aenean pretium aliquam nisi nec blandit. Proin semper, dui non fringilla ultrices, nibh dolor mollis justo, posuere feugiat neque nisi ac massa. Donec fermentum consectetur orci, ac imperdiet mauris imperdiet eget. Proin augue enim, porttitor nec nulla eu, eleifend mollis nunc.
     Donec sit amet orci vulputate turpis tristique molestie. Etiam id nibh non nisi commodo semper. Integer interdum, orci nec mollis malesuada, dui magna fermentum nisl, sed finibus risus odio nec neque. Praesent mauris lectus, condimentum id ligula vel, commodo tempus augue. In semper ultrices scelerisque. Praesent dignissim vulputate justo posuere porta. Donec ligula sem, lobortis ultricies lectus quis, eleifend pharetra lorem. Aliquam vel interdum est, sit amet consequat nisi. Duis nec accumsan lorem, eu suscipit elit.`,
      keywords: 'inteligência artifical; análise de imagens; aprendizado profundo',
      classId: 1,
      studentEmail: 'marcelo.sdias@inf.ufpel.edu.br',
      advisorEmail: 'marilton@inf.ufpel.edu.br',
    },
    {
      title: 'Análise de Sentimentos Baseada em Aspectos Aplicada a Língua Portuguesa Utilizando Transformers: técnicas aplicadas para Data augmentation',
      filePath: 'https://vahl-ds-dev.s3.amazonaws.com/proposals/bdsvolcan%40inf.ufpel.edu.br_1683742608585.pdf',
      abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor erat, a lacinia tellus. Mauris rutrum, leo eget tempor vulputate, diam magna consequat nunc, at lacinia nulla augue sed magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam cursus quam nec pellentesque tristique. Integer sed sem ultricies, pellentesque turpis et, convallis urna. Pellentesque iaculis sem sagittis sapien congue pharetra. Nunc varius nunc ut ipsum facilisis commodo. Sed vestibulum, ipsum ac mattis facilisis, velit ex dignissim dui, id commodo purus turpis et risus. Aenean malesuada, felis at pharetra porta, nibh ligula faucibus nunc, ac feugiat nisl erat vel ante. Nunc mattis, risus pretium ultricies interdum, nibh lectus posuere erat, ut dignissim lacus dui in massa. Phasellus eleifend diam at sem blandit, sit amet consectetur massa fringilla. Aenean pretium aliquam nisi nec blandit. Proin semper, dui non fringilla ultrices, nibh dolor mollis justo, posuere feugiat neque nisi ac massa.',
      keywords: 'inteligência artifical; Análise de Sentimentos; Linguagem Natural',
      classId: 5,
      studentEmail: 'bdsvolcan@inf.ufpel.edu.br',
      advisorEmail: 'ulisses@inf.ufpel.edu.br',
    },
    {
      title: 'Análise de Sentimentos Baseada em Aspectos Aplicada a Língua Portuguesa Utilizando Transformers: técnicas aplicadas para Data augmentation',
      filePath: 'https://vahl-ds-dev.s3.amazonaws.com/proposals/bdsvolcan%40inf.ufpel.edu.br_1683742608585.pdf',
      abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor erat, a lacinia tellus. Mauris rutrum, leo eget tempor vulputate, diam magna consequat nunc, at lacinia nulla augue sed magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam cursus quam nec pellentesque tristique. Integer sed sem ultricies, pellentesque turpis et, convallis urna. Pellentesque iaculis sem sagittis sapien congue pharetra. Nunc varius nunc ut ipsum facilisis commodo. Sed vestibulum, ipsum ac mattis facilisis, velit ex dignissim dui, id commodo purus turpis et risus. Aenean malesuada, felis at pharetra porta, nibh ligula faucibus nunc, ac feugiat nisl erat vel ante. Nunc mattis, risus pretium ultricies interdum, nibh lectus posuere erat, ut dignissim lacus dui in massa. Phasellus eleifend diam at sem blandit, sit amet consectetur massa fringilla. Aenean pretium aliquam nisi nec blandit. Proin semper, dui non fringilla ultrices, nibh dolor mollis justo, posuere feugiat neque nisi ac massa.',
      keywords: 'inteligência artifical; Análise de Sentimentos; Linguagem Natural',
      classId: 5,
      studentEmail: 'bdsvolcan@inf.ufpel.edu.br',
      advisorEmail: 'ulisses@inf.ufpel.edu.br',
    },
  ];
  await knex.raw('ALTER SEQUENCE proposals_id_seq RESTART WITH 1');

  await knex('proposals').del();

  await knex('proposals').insert(proposals);
};
