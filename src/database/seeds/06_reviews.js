exports.seed = async (knex) => {
  const reviews = [
    {
      proposalId: 1,
      reviewedOn: '05/03/2021',
      presentation: '2 - Regular',
      relevance: '3 - Bom',
      methodology: '2 - Regular',
      wasAdequate: true,
      workPlan: '2 - Exequível',
      wasApproved: false,
      summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor erat, a lacinia tellus. Mauris rutrum, leo eget tempor vulputate, diam magna consequat nunc, at lacinia nulla augue sed magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam cursus quam nec pellentesque tristique. Integer sed sem ultricies, pellentesque turpis et, convallis urna. Pellentesque iaculis sem sagittis sapien congue pharetra. Nunc varius nunc ut ipsum facilisis commodo. Sed vestibulum, ipsum ac mattis facilisis, velit ex dignissim dui, id commodo purus turpis et risus. Aenean malesuada, felis at pharetra porta, nibh ligula faucibus nunc, ac feugiat nisl erat vel ante. Nunc mattis, risus pretium ultricies interdum, nibh lectus posuere erat, ut dignissim lacus dui in massa. Phasellus eleifend diam at sem blandit, sit amet consectetur massa fringilla. Aenean pretium aliquam nisi nec blandit. Proin semper, dui non fringilla ultrices, nibh dolor mollis justo, posuere feugiat neque nisi ac massa. Donec fermentum consectetur orci, ac imperdiet mauris imperdiet eget. Proin augue enim, porttitor nec nulla eu, eleifend mollis nunc.
     Praesent sit amet bibendum metus, id accumsan nibh. Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. Praesent sollicitudin tempus vestibulum. Ut sollicitudin posuere velit, vel hendrerit turpis facilisis ut. Aliquam sit amet eros id risus maximus facilisis. Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis. Vestibulum sodales accumsan finibus. Sed in felis non nunc mattis tincidunt vitae eu ipsum. Phasellus venenatis massa tellus, ac dapibus turpis tempor id.
     Donec sit amet orci vulputate turpis tristique molestie.`,
      strengths: 'Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. ',
      weaknesses: 'Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim.',
      details: 'Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis.',
      reviewerEmail: 'larissa@inf.ufpel.edu.br',
    },

    {
      proposalId: 1,
      reviewedOn: '06/04/2021',
      presentation: '4 - Excelente',
      relevance: '3 - Bom',
      methodology: '3 - Bom',
      wasAdequate: false,
      workPlan: '2 - Exequível',
      wasApproved: true,
      summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor erat, a lacinia tellus. Mauris rutrum, leo eget tempor vulputate, diam magna consequat nunc, at lacinia nulla augue sed magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam cursus quam nec pellentesque tristique. Integer sed sem ultricies, pellentesque turpis et, convallis urna. Pellentesque iaculis sem sagittis sapien congue pharetra. Nunc varius nunc ut ipsum facilisis commodo. Sed vestibulum, ipsum ac mattis facilisis, velit ex dignissim dui, id commodo purus turpis et risus. Aenean malesuada, felis at pharetra porta, nibh ligula faucibus nunc, ac feugiat nisl erat vel ante. Nunc mattis, risus pretium ultricies interdum, nibh lectus posuere erat, ut dignissim lacus dui in massa. Phasellus eleifend diam at sem blandit, sit amet consectetur massa fringilla. Aenean pretium aliquam nisi nec blandit. Proin semper, dui non fringilla ultrices, nibh dolor mollis justo, posuere feugiat neque nisi ac massa. Donec fermentum consectetur orci, ac imperdiet mauris imperdiet eget. Proin augue enim, porttitor nec nulla eu, eleifend mollis nunc.
    Praesent sit amet bibendum metus, id accumsan nibh. Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. Praesent sollicitudin tempus vestibulum. Ut sollicitudin posuere velit, vel hendrerit turpis facilisis ut. Aliquam sit amet eros id risus maximus facilisis. Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis. Vestibulum sodales accumsan finibus. Sed in felis non nunc mattis tincidunt vitae eu ipsum. Phasellus venenatis massa tellus, ac dapibus turpis tempor id.
    Donec sit amet orci vulputate turpis tristique molestie.`,
      strengths: 'Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. ',
      weaknesses: 'Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim.',
      details: 'Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis.',
      reviewerEmail: 'larissa@inf.ufpel.edu.br',
    },

    {
      proposalId: 2,
      reviewedOn: '22/03/2023',
      presentation: '4 - Excelente',
      relevance: '3 - Bom',
      methodology: '3 - Bom',
      wasAdequate: true,
      workPlan: '2 - Exequível',
      wasApproved: true,
      summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor erat, a lacinia tellus. Mauris rutrum, leo eget tempor vulputate, diam magna consequat nunc, at lacinia nulla augue sed magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam cursus quam nec pellentesque tristique. Integer sed sem ultricies, pellentesque turpis et, convallis urna. Pellentesque iaculis sem sagittis sapien congue pharetra. Nunc varius nunc ut ipsum facilisis commodo. Sed vestibulum, ipsum ac mattis facilisis, velit ex dignissim dui, id commodo purus turpis et risus. Aenean malesuada, felis at pharetra porta, nibh ligula faucibus nunc, ac feugiat nisl erat vel ante. Nunc mattis, risus pretium ultricies interdum, nibh lectus posuere erat, ut dignissim lacus dui in massa. Phasellus eleifend diam at sem blandit, sit amet consectetur massa fringilla. Aenean pretium aliquam nisi nec blandit. Proin semper, dui non fringilla ultrices, nibh dolor mollis justo, posuere feugiat neque nisi ac massa. Donec fermentum consectetur orci, ac imperdiet mauris imperdiet eget. Proin augue enim, porttitor nec nulla eu, eleifend mollis nunc.
    Praesent sit amet bibendum metus, id accumsan nibh. Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. Praesent sollicitudin tempus vestibulum. Ut sollicitudin posuere velit, vel hendrerit turpis facilisis ut. Aliquam sit amet eros id risus maximus facilisis. Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis. Vestibulum sodales accumsan finibus. Sed in felis non nunc mattis tincidunt vitae eu ipsum. Phasellus venenatis massa tellus, ac dapibus turpis tempor id.
    Donec sit amet orci vulputate turpis tristique molestie.`,
      strengths: 'Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. ',
      weaknesses: 'Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim.',
      details: 'Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis.',
      reviewerEmail: 'larissa@inf.ufpel.edu.br',
    },
    {
      proposalId: 2,
      reviewedOn: '25/03/2023',
      presentation: '4 - Excelente',
      relevance: '3 - Bom',
      methodology: '3 - Bom',
      wasAdequate: true,
      workPlan: '2 - Exequível',
      wasApproved: false,
      summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor erat, a lacinia tellus. Mauris rutrum, leo eget tempor vulputate, diam magna consequat nunc, at lacinia nulla augue sed magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam cursus quam nec pellentesque tristique. Integer sed sem ultricies, pellentesque turpis et, convallis urna. Pellentesque iaculis sem sagittis sapien congue pharetra. Nunc varius nunc ut ipsum facilisis commodo. Sed vestibulum, ipsum ac mattis facilisis, velit ex dignissim dui, id commodo purus turpis et risus. Aenean malesuada, felis at pharetra porta, nibh ligula faucibus nunc, ac feugiat nisl erat vel ante. Nunc mattis, risus pretium ultricies interdum, nibh lectus posuere erat, ut dignissim lacus dui in massa. Phasellus eleifend diam at sem blandit, sit amet consectetur massa fringilla. Aenean pretium aliquam nisi nec blandit. Proin semper, dui non fringilla ultrices, nibh dolor mollis justo, posuere feugiat neque nisi ac massa. Donec fermentum consectetur orci, ac imperdiet mauris imperdiet eget. Proin augue enim, porttitor nec nulla eu, eleifend mollis nunc.
    Praesent sit amet bibendum metus, id accumsan nibh. Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. Praesent sollicitudin tempus vestibulum. Ut sollicitudin posuere velit, vel hendrerit turpis facilisis ut. Aliquam sit amet eros id risus maximus facilisis. Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis. Vestibulum sodales accumsan finibus. Sed in felis non nunc mattis tincidunt vitae eu ipsum. Phasellus venenatis massa tellus, ac dapibus turpis tempor id.
    Donec sit amet orci vulputate turpis tristique molestie.`,
      strengths: 'Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. ',
      weaknesses: 'Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim.',
      details: 'Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis.',
      reviewerEmail: 'larissa@inf.ufpel.edu.br',
    },
    {
      proposalId: 3,
      reviewedOn: '22/03/2023',
      presentation: '4 - Excelente',
      relevance: '3 - Bom',
      methodology: '3 - Bom',
      wasAdequate: true,
      workPlan: '2 - Exequível',
      wasApproved: true,
      summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor erat, a lacinia tellus. Mauris rutrum, leo eget tempor vulputate, diam magna consequat nunc, at lacinia nulla augue sed magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam cursus quam nec pellentesque tristique. Integer sed sem ultricies, pellentesque turpis et, convallis urna. Pellentesque iaculis sem sagittis sapien congue pharetra. Nunc varius nunc ut ipsum facilisis commodo. Sed vestibulum, ipsum ac mattis facilisis, velit ex dignissim dui, id commodo purus turpis et risus. Aenean malesuada, felis at pharetra porta, nibh ligula faucibus nunc, ac feugiat nisl erat vel ante. Nunc mattis, risus pretium ultricies interdum, nibh lectus posuere erat, ut dignissim lacus dui in massa. Phasellus eleifend diam at sem blandit, sit amet consectetur massa fringilla. Aenean pretium aliquam nisi nec blandit. Proin semper, dui non fringilla ultrices, nibh dolor mollis justo, posuere feugiat neque nisi ac massa. Donec fermentum consectetur orci, ac imperdiet mauris imperdiet eget. Proin augue enim, porttitor nec nulla eu, eleifend mollis nunc.
    Praesent sit amet bibendum metus, id accumsan nibh. Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. Praesent sollicitudin tempus vestibulum. Ut sollicitudin posuere velit, vel hendrerit turpis facilisis ut. Aliquam sit amet eros id risus maximus facilisis. Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis. Vestibulum sodales accumsan finibus. Sed in felis non nunc mattis tincidunt vitae eu ipsum. Phasellus venenatis massa tellus, ac dapibus turpis tempor id.
    Donec sit amet orci vulputate turpis tristique molestie.`,
      strengths: 'Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. ',
      weaknesses: 'Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim.',
      details: 'Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis.',
      reviewerEmail: 'larissa@inf.ufpel.edu.br',
    },
    {
      proposalId: 3,
      reviewedOn: '22/03/2023',
      presentation: '4 - Excelente',
      relevance: '3 - Bom',
      methodology: '3 - Bom',
      wasAdequate: true,
      workPlan: '2 - Exequível',
      wasApproved: true,
      summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor erat, a lacinia tellus. Mauris rutrum, leo eget tempor vulputate, diam magna consequat nunc, at lacinia nulla augue sed magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam cursus quam nec pellentesque tristique. Integer sed sem ultricies, pellentesque turpis et, convallis urna. Pellentesque iaculis sem sagittis sapien congue pharetra. Nunc varius nunc ut ipsum facilisis commodo. Sed vestibulum, ipsum ac mattis facilisis, velit ex dignissim dui, id commodo purus turpis et risus. Aenean malesuada, felis at pharetra porta, nibh ligula faucibus nunc, ac feugiat nisl erat vel ante. Nunc mattis, risus pretium ultricies interdum, nibh lectus posuere erat, ut dignissim lacus dui in massa. Phasellus eleifend diam at sem blandit, sit amet consectetur massa fringilla. Aenean pretium aliquam nisi nec blandit. Proin semper, dui non fringilla ultrices, nibh dolor mollis justo, posuere feugiat neque nisi ac massa. Donec fermentum consectetur orci, ac imperdiet mauris imperdiet eget. Proin augue enim, porttitor nec nulla eu, eleifend mollis nunc.
    Praesent sit amet bibendum metus, id accumsan nibh. Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. Praesent sollicitudin tempus vestibulum. Ut sollicitudin posuere velit, vel hendrerit turpis facilisis ut. Aliquam sit amet eros id risus maximus facilisis. Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis. Vestibulum sodales accumsan finibus. Sed in felis non nunc mattis tincidunt vitae eu ipsum. Phasellus venenatis massa tellus, ac dapibus turpis tempor id.
    Donec sit amet orci vulputate turpis tristique molestie.`,
      strengths: 'Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. ',
      weaknesses: 'Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim.',
      details: 'Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis.',
      reviewerEmail: 'larissa@inf.ufpel.edu.br',
    },
    {
      proposalId: 4,
      reviewedOn: '22/03/2023',
      presentation: '4 - Excelente',
      relevance: '3 - Bom',
      methodology: '3 - Bom',
      wasAdequate: true,
      workPlan: '2 - Exequível',
      wasApproved: true,
      summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor erat, a lacinia tellus. Mauris rutrum, leo eget tempor vulputate, diam magna consequat nunc, at lacinia nulla augue sed magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam cursus quam nec pellentesque tristique. Integer sed sem ultricies, pellentesque turpis et, convallis urna. Pellentesque iaculis sem sagittis sapien congue pharetra. Nunc varius nunc ut ipsum facilisis commodo. Sed vestibulum, ipsum ac mattis facilisis, velit ex dignissim dui, id commodo purus turpis et risus. Aenean malesuada, felis at pharetra porta, nibh ligula faucibus nunc, ac feugiat nisl erat vel ante. Nunc mattis, risus pretium ultricies interdum, nibh lectus posuere erat, ut dignissim lacus dui in massa. Phasellus eleifend diam at sem blandit, sit amet consectetur massa fringilla. Aenean pretium aliquam nisi nec blandit. Proin semper, dui non fringilla ultrices, nibh dolor mollis justo, posuere feugiat neque nisi ac massa. Donec fermentum consectetur orci, ac imperdiet mauris imperdiet eget. Proin augue enim, porttitor nec nulla eu, eleifend mollis nunc.
    Praesent sit amet bibendum metus, id accumsan nibh. Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. Praesent sollicitudin tempus vestibulum. Ut sollicitudin posuere velit, vel hendrerit turpis facilisis ut. Aliquam sit amet eros id risus maximus facilisis. Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis. Vestibulum sodales accumsan finibus. Sed in felis non nunc mattis tincidunt vitae eu ipsum. Phasellus venenatis massa tellus, ac dapibus turpis tempor id.
    Donec sit amet orci vulputate turpis tristique molestie.`,
      strengths: 'Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. ',
      weaknesses: 'Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim.',
      details: 'Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis.',
      reviewerEmail: 'ulisses@inf.ufpel.edu.br',
    },
    {
      proposalId: 4,
      reviewedOn: '22/03/2023',
      presentation: '4 - Excelente',
      relevance: '3 - Bom',
      methodology: '3 - Bom',
      wasAdequate: true,
      workPlan: '2 - Exequível',
      wasApproved: true,
      summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor erat, a lacinia tellus. Mauris rutrum, leo eget tempor vulputate, diam magna consequat nunc, at lacinia nulla augue sed magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam cursus quam nec pellentesque tristique. Integer sed sem ultricies, pellentesque turpis et, convallis urna. Pellentesque iaculis sem sagittis sapien congue pharetra. Nunc varius nunc ut ipsum facilisis commodo. Sed vestibulum, ipsum ac mattis facilisis, velit ex dignissim dui, id commodo purus turpis et risus. Aenean malesuada, felis at pharetra porta, nibh ligula faucibus nunc, ac feugiat nisl erat vel ante. Nunc mattis, risus pretium ultricies interdum, nibh lectus posuere erat, ut dignissim lacus dui in massa. Phasellus eleifend diam at sem blandit, sit amet consectetur massa fringilla. Aenean pretium aliquam nisi nec blandit. Proin semper, dui non fringilla ultrices, nibh dolor mollis justo, posuere feugiat neque nisi ac massa. Donec fermentum consectetur orci, ac imperdiet mauris imperdiet eget. Proin augue enim, porttitor nec nulla eu, eleifend mollis nunc.
    Praesent sit amet bibendum metus, id accumsan nibh. Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. Praesent sollicitudin tempus vestibulum. Ut sollicitudin posuere velit, vel hendrerit turpis facilisis ut. Aliquam sit amet eros id risus maximus facilisis. Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis. Vestibulum sodales accumsan finibus. Sed in felis non nunc mattis tincidunt vitae eu ipsum. Phasellus venenatis massa tellus, ac dapibus turpis tempor id.
    Donec sit amet orci vulputate turpis tristique molestie.`,
      strengths: 'Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. ',
      weaknesses: 'Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim.',
      details: 'Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis.',
      reviewerEmail: 'rafael.torchelsen@inf.ufpel.edu.br',
    },
    {
      proposalId: 5,
      reviewedOn: '22/03/2023',
      presentation: '4 - Excelente',
      relevance: '3 - Bom',
      methodology: '3 - Bom',
      wasAdequate: true,
      workPlan: '2 - Exequível',
      wasApproved: true,
      summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor erat, a lacinia tellus. Mauris rutrum, leo eget tempor vulputate, diam magna consequat nunc, at lacinia nulla augue sed magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam cursus quam nec pellentesque tristique. Integer sed sem ultricies, pellentesque turpis et, convallis urna. Pellentesque iaculis sem sagittis sapien congue pharetra. Nunc varius nunc ut ipsum facilisis commodo. Sed vestibulum, ipsum ac mattis facilisis, velit ex dignissim dui, id commodo purus turpis et risus. Aenean malesuada, felis at pharetra porta, nibh ligula faucibus nunc, ac feugiat nisl erat vel ante. Nunc mattis, risus pretium ultricies interdum, nibh lectus posuere erat, ut dignissim lacus dui in massa. Phasellus eleifend diam at sem blandit, sit amet consectetur massa fringilla. Aenean pretium aliquam nisi nec blandit. Proin semper, dui non fringilla ultrices, nibh dolor mollis justo, posuere feugiat neque nisi ac massa. Donec fermentum consectetur orci, ac imperdiet mauris imperdiet eget. Proin augue enim, porttitor nec nulla eu, eleifend mollis nunc.
    Praesent sit amet bibendum metus, id accumsan nibh. Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. Praesent sollicitudin tempus vestibulum. Ut sollicitudin posuere velit, vel hendrerit turpis facilisis ut. Aliquam sit amet eros id risus maximus facilisis. Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis. Vestibulum sodales accumsan finibus. Sed in felis non nunc mattis tincidunt vitae eu ipsum. Phasellus venenatis massa tellus, ac dapibus turpis tempor id.
    Donec sit amet orci vulputate turpis tristique molestie.`,
      strengths: 'Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. ',
      weaknesses: 'Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim.',
      details: 'Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis.',
      reviewerEmail: 'rafael.torchelsen@inf.ufpel.edu.br',
    },
    {
      proposalId: 5,
      reviewedOn: '22/03/2023',
      presentation: '4 - Excelente',
      relevance: '3 - Bom',
      methodology: '3 - Bom',
      wasAdequate: true,
      workPlan: '2 - Exequível',
      wasApproved: true,
      summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor erat, a lacinia tellus. Mauris rutrum, leo eget tempor vulputate, diam magna consequat nunc, at lacinia nulla augue sed magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam cursus quam nec pellentesque tristique. Integer sed sem ultricies, pellentesque turpis et, convallis urna. Pellentesque iaculis sem sagittis sapien congue pharetra. Nunc varius nunc ut ipsum facilisis commodo. Sed vestibulum, ipsum ac mattis facilisis, velit ex dignissim dui, id commodo purus turpis et risus. Aenean malesuada, felis at pharetra porta, nibh ligula faucibus nunc, ac feugiat nisl erat vel ante. Nunc mattis, risus pretium ultricies interdum, nibh lectus posuere erat, ut dignissim lacus dui in massa. Phasellus eleifend diam at sem blandit, sit amet consectetur massa fringilla. Aenean pretium aliquam nisi nec blandit. Proin semper, dui non fringilla ultrices, nibh dolor mollis justo, posuere feugiat neque nisi ac massa. Donec fermentum consectetur orci, ac imperdiet mauris imperdiet eget. Proin augue enim, porttitor nec nulla eu, eleifend mollis nunc.
    Praesent sit amet bibendum metus, id accumsan nibh. Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. Praesent sollicitudin tempus vestibulum. Ut sollicitudin posuere velit, vel hendrerit turpis facilisis ut. Aliquam sit amet eros id risus maximus facilisis. Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis. Vestibulum sodales accumsan finibus. Sed in felis non nunc mattis tincidunt vitae eu ipsum. Phasellus venenatis massa tellus, ac dapibus turpis tempor id.
    Donec sit amet orci vulputate turpis tristique molestie.`,
      strengths: 'Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. ',
      weaknesses: 'Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim.',
      details: 'Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis.',
      reviewerEmail: 'ulisses@inf.ufpel.edu.br',
    },
    {
      proposalId: 6,
      reviewedOn: '22/03/2023',
      presentation: '4 - Excelente',
      relevance: '3 - Bom',
      methodology: '3 - Bom',
      wasAdequate: true,
      workPlan: '2 - Exequível',
      wasApproved: true,
      summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor erat, a lacinia tellus. Mauris rutrum, leo eget tempor vulputate, diam magna consequat nunc, at lacinia nulla augue sed magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam cursus quam nec pellentesque tristique. Integer sed sem ultricies, pellentesque turpis et, convallis urna. Pellentesque iaculis sem sagittis sapien congue pharetra. Nunc varius nunc ut ipsum facilisis commodo. Sed vestibulum, ipsum ac mattis facilisis, velit ex dignissim dui, id commodo purus turpis et risus. Aenean malesuada, felis at pharetra porta, nibh ligula faucibus nunc, ac feugiat nisl erat vel ante. Nunc mattis, risus pretium ultricies interdum, nibh lectus posuere erat, ut dignissim lacus dui in massa. Phasellus eleifend diam at sem blandit, sit amet consectetur massa fringilla. Aenean pretium aliquam nisi nec blandit. Proin semper, dui non fringilla ultrices, nibh dolor mollis justo, posuere feugiat neque nisi ac massa. Donec fermentum consectetur orci, ac imperdiet mauris imperdiet eget. Proin augue enim, porttitor nec nulla eu, eleifend mollis nunc.
    Praesent sit amet bibendum metus, id accumsan nibh. Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. Praesent sollicitudin tempus vestibulum. Ut sollicitudin posuere velit, vel hendrerit turpis facilisis ut. Aliquam sit amet eros id risus maximus facilisis. Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis. Vestibulum sodales accumsan finibus. Sed in felis non nunc mattis tincidunt vitae eu ipsum. Phasellus venenatis massa tellus, ac dapibus turpis tempor id.
    Donec sit amet orci vulputate turpis tristique molestie.`,
      strengths: 'Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. ',
      weaknesses: 'Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim.',
      details: 'Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis.',
      reviewerEmail: 'larissa@inf.ufpel.edu.br',
    },
    {
      proposalId: 6,
      reviewedOn: '22/03/2023',
      presentation: '4 - Excelente',
      relevance: '3 - Bom',
      methodology: '3 - Bom',
      wasAdequate: true,
      workPlan: '2 - Exequível',
      wasApproved: true,
      summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor erat, a lacinia tellus. Mauris rutrum, leo eget tempor vulputate, diam magna consequat nunc, at lacinia nulla augue sed magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam cursus quam nec pellentesque tristique. Integer sed sem ultricies, pellentesque turpis et, convallis urna. Pellentesque iaculis sem sagittis sapien congue pharetra. Nunc varius nunc ut ipsum facilisis commodo. Sed vestibulum, ipsum ac mattis facilisis, velit ex dignissim dui, id commodo purus turpis et risus. Aenean malesuada, felis at pharetra porta, nibh ligula faucibus nunc, ac feugiat nisl erat vel ante. Nunc mattis, risus pretium ultricies interdum, nibh lectus posuere erat, ut dignissim lacus dui in massa. Phasellus eleifend diam at sem blandit, sit amet consectetur massa fringilla. Aenean pretium aliquam nisi nec blandit. Proin semper, dui non fringilla ultrices, nibh dolor mollis justo, posuere feugiat neque nisi ac massa. Donec fermentum consectetur orci, ac imperdiet mauris imperdiet eget. Proin augue enim, porttitor nec nulla eu, eleifend mollis nunc.
    Praesent sit amet bibendum metus, id accumsan nibh. Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. Praesent sollicitudin tempus vestibulum. Ut sollicitudin posuere velit, vel hendrerit turpis facilisis ut. Aliquam sit amet eros id risus maximus facilisis. Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis. Vestibulum sodales accumsan finibus. Sed in felis non nunc mattis tincidunt vitae eu ipsum. Phasellus venenatis massa tellus, ac dapibus turpis tempor id.
    Donec sit amet orci vulputate turpis tristique molestie.`,
      strengths: 'Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. ',
      weaknesses: 'Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim.',
      details: 'Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis.',
      reviewerEmail: 'ulisses@inf.ufpel.edu.br',
    },
    {
      proposalId: 7,
      reviewedOn: '23/03/2023',
      presentation: '4 - Excelente',
      relevance: '3 - Bom',
      methodology: '3 - Bom',
      wasAdequate: true,
      workPlan: '2 - Exequível',
      wasApproved: true,
      summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor erat, a lacinia tellus. Mauris rutrum, leo eget tempor vulputate, diam magna consequat nunc, at lacinia nulla augue sed magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam cursus quam nec pellentesque tristique. Integer sed sem ultricies, pellentesque turpis et, convallis urna. Pellentesque iaculis sem sagittis sapien congue pharetra. Nunc varius nunc ut ipsum facilisis commodo. Sed vestibulum, ipsum ac mattis facilisis, velit ex dignissim dui, id commodo purus turpis et risus. Aenean malesuada, felis at pharetra porta, nibh ligula faucibus nunc, ac feugiat nisl erat vel ante. Nunc mattis, risus pretium ultricies interdum, nibh lectus posuere erat, ut dignissim lacus dui in massa. Phasellus eleifend diam at sem blandit, sit amet consectetur massa fringilla. Aenean pretium aliquam nisi nec blandit. Proin semper, dui non fringilla ultrices, nibh dolor mollis justo, posuere feugiat neque nisi ac massa. Donec fermentum consectetur orci, ac imperdiet mauris imperdiet eget. Proin augue enim, porttitor nec nulla eu, eleifend mollis nunc.
    Praesent sit amet bibendum metus, id accumsan nibh. Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. Praesent sollicitudin tempus vestibulum. Ut sollicitudin posuere velit, vel hendrerit turpis facilisis ut. Aliquam sit amet eros id risus maximus facilisis. Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis. Vestibulum sodales accumsan finibus. Sed in felis non nunc mattis tincidunt vitae eu ipsum. Phasellus venenatis massa tellus, ac dapibus turpis tempor id.
    Donec sit amet orci vulputate turpis tristique molestie.`,
      strengths: 'Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. ',
      weaknesses: 'Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim.',
      details: 'Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis.',
      reviewerEmail: 'adubois@inf.ufpel.edu.br',
    },
    {
      proposalId: 7,
      reviewedOn: '24/03/2023',
      presentation: '4 - Excelente',
      relevance: '4 - Excelente',
      methodology: '3 - Bom',
      wasAdequate: true,
      workPlan: '2 - Exequível',
      wasApproved: true,
      summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor erat, a lacinia tellus. Mauris rutrum, leo eget tempor vulputate, diam magna consequat nunc, at lacinia nulla augue sed magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam cursus quam nec pellentesque tristique. Integer sed sem ultricies, pellentesque turpis et, convallis urna. Pellentesque iaculis sem sagittis sapien congue pharetra. Nunc varius nunc ut ipsum facilisis commodo. Sed vestibulum, ipsum ac mattis facilisis, velit ex dignissim dui, id commodo purus turpis et risus. Aenean malesuada, felis at pharetra porta, nibh ligula faucibus nunc, ac feugiat nisl erat vel ante. Nunc mattis, risus pretium ultricies interdum, nibh lectus posuere erat, ut dignissim lacus dui in massa. Phasellus eleifend diam at sem blandit, sit amet consectetur massa fringilla. Aenean pretium aliquam nisi nec blandit. Proin semper, dui non fringilla ultrices, nibh dolor mollis justo, posuere feugiat neque nisi ac massa. Donec fermentum consectetur orci, ac imperdiet mauris imperdiet eget. Proin augue enim, porttitor nec nulla eu, eleifend mollis nunc.
    Praesent sit amet bibendum metus, id accumsan nibh. Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. Praesent sollicitudin tempus vestibulum. Ut sollicitudin posuere velit, vel hendrerit turpis facilisis ut. Aliquam sit amet eros id risus maximus facilisis. Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis. Vestibulum sodales accumsan finibus. Sed in felis non nunc mattis tincidunt vitae eu ipsum. Phasellus venenatis massa tellus, ac dapibus turpis tempor id.
    Donec sit amet orci vulputate turpis tristique molestie.`,
      strengths: 'Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. ',
      weaknesses: 'Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim.',
      details: 'Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis.',
      reviewerEmail: 'cfdsantos@inf.ufpel.edu.br',
    },
    {
      proposalId: 8,
      reviewedOn: '22/03/2023',
      presentation: '4 - Excelente',
      relevance: '3 - Bom',
      methodology: '4 - Excelente',
      wasAdequate: true,
      workPlan: '2 - Exequível',
      wasApproved: true,
      summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor erat, a lacinia tellus. Mauris rutrum, leo eget tempor vulputate, diam magna consequat nunc, at lacinia nulla augue sed magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam cursus quam nec pellentesque tristique. Integer sed sem ultricies, pellentesque turpis et, convallis urna. Pellentesque iaculis sem sagittis sapien congue pharetra. Nunc varius nunc ut ipsum facilisis commodo. Sed vestibulum, ipsum ac mattis facilisis, velit ex dignissim dui, id commodo purus turpis et risus. Aenean malesuada, felis at pharetra porta, nibh ligula faucibus nunc, ac feugiat nisl erat vel ante. Nunc mattis, risus pretium ultricies interdum, nibh lectus posuere erat, ut dignissim lacus dui in massa. Phasellus eleifend diam at sem blandit, sit amet consectetur massa fringilla. Aenean pretium aliquam nisi nec blandit. Proin semper, dui non fringilla ultrices, nibh dolor mollis justo, posuere feugiat neque nisi ac massa. Donec fermentum consectetur orci, ac imperdiet mauris imperdiet eget. Proin augue enim, porttitor nec nulla eu, eleifend mollis nunc.
    Praesent sit amet bibendum metus, id accumsan nibh. Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. Praesent sollicitudin tempus vestibulum. Ut sollicitudin posuere velit, vel hendrerit turpis facilisis ut. Aliquam sit amet eros id risus maximus facilisis. Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis. Vestibulum sodales accumsan finibus. Sed in felis non nunc mattis tincidunt vitae eu ipsum. Phasellus venenatis massa tellus, ac dapibus turpis tempor id.
    Donec sit amet orci vulputate turpis tristique molestie.`,
      strengths: 'Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. ',
      weaknesses: 'Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim.',
      details: 'Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis.',
      reviewerEmail: 'marilton@inf.ufpel.edu.br',
    },
    {
      proposalId: 8,
      reviewedOn: '22/03/2023',
      presentation: '4 - Excelente',
      relevance: '3 - Bom',
      methodology: '3 - Bom',
      wasAdequate: true,
      workPlan: '2 - Exequível',
      wasApproved: true,
      summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor erat, a lacinia tellus. Mauris rutrum, leo eget tempor vulputate, diam magna consequat nunc, at lacinia nulla augue sed magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam cursus quam nec pellentesque tristique. Integer sed sem ultricies, pellentesque turpis et, convallis urna. Pellentesque iaculis sem sagittis sapien congue pharetra. Nunc varius nunc ut ipsum facilisis commodo. Sed vestibulum, ipsum ac mattis facilisis, velit ex dignissim dui, id commodo purus turpis et risus. Aenean malesuada, felis at pharetra porta, nibh ligula faucibus nunc, ac feugiat nisl erat vel ante. Nunc mattis, risus pretium ultricies interdum, nibh lectus posuere erat, ut dignissim lacus dui in massa. Phasellus eleifend diam at sem blandit, sit amet consectetur massa fringilla. Aenean pretium aliquam nisi nec blandit. Proin semper, dui non fringilla ultrices, nibh dolor mollis justo, posuere feugiat neque nisi ac massa. Donec fermentum consectetur orci, ac imperdiet mauris imperdiet eget. Proin augue enim, porttitor nec nulla eu, eleifend mollis nunc.
    Praesent sit amet bibendum metus, id accumsan nibh. Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. Praesent sollicitudin tempus vestibulum. Ut sollicitudin posuere velit, vel hendrerit turpis facilisis ut. Aliquam sit amet eros id risus maximus facilisis. Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis. Vestibulum sodales accumsan finibus. Sed in felis non nunc mattis tincidunt vitae eu ipsum. Phasellus venenatis massa tellus, ac dapibus turpis tempor id.
    Donec sit amet orci vulputate turpis tristique molestie.`,
      strengths: 'Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. ',
      weaknesses: 'Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim.',
      details: 'Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis.',
      reviewerEmail: 'larissa@inf.ufpel.edu.br',
    },

  ];
  await knex.raw('ALTER SEQUENCE reviews_id_seq RESTART WITH 1');

  await knex('reviews').del();

  await knex('reviews').insert(reviews);
};
