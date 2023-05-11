exports.seed = async (knex) => {
  const reviews = [
    {
      proposalId: 1,
      reviewedOn: "21/03/2023",
      presentation: "2 - Regular",
      relevance: "3 - Bom",
      methodology: "2 - Regular",
      wasAdequate: true,
      workPlan: "2 - Exequível",
      wasApproved: false,
      summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor erat, a lacinia tellus. Mauris rutrum, leo eget tempor vulputate, diam magna consequat nunc, at lacinia nulla augue sed magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam cursus quam nec pellentesque tristique. Integer sed sem ultricies, pellentesque turpis et, convallis urna. Pellentesque iaculis sem sagittis sapien congue pharetra. Nunc varius nunc ut ipsum facilisis commodo. Sed vestibulum, ipsum ac mattis facilisis, velit ex dignissim dui, id commodo purus turpis et risus. Aenean malesuada, felis at pharetra porta, nibh ligula faucibus nunc, ac feugiat nisl erat vel ante. Nunc mattis, risus pretium ultricies interdum, nibh lectus posuere erat, ut dignissim lacus dui in massa. Phasellus eleifend diam at sem blandit, sit amet consectetur massa fringilla. Aenean pretium aliquam nisi nec blandit. Proin semper, dui non fringilla ultrices, nibh dolor mollis justo, posuere feugiat neque nisi ac massa.
     Donec sit amet orci vulputate turpis tristique molestie.`,
      strengths:
        "Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. ",
      weaknesses:
        "Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim.",
      details:
        "Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis.",
      reviewerEmail: "larissa@inf.ufpel.edu.br",
    },

    {
      proposalId: 1,
      reviewedOn: "22/03/2023",
      presentation: "4 - Excelente",
      relevance: "3 - Bom",
      methodology: "3 - Bom",
      wasAdequate: false,
      workPlan: "2 - Exequível",
      wasApproved: true,
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor erat, a lacinia tellus. Mauris rutrum, leo eget tempor vulputate, diam magna consequat nunc, at lacinia nulla augue sed magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam cursus quam nec pellentesque tristique. Integer sed sem ultricies, pellentesque turpis et, convallis urna. Pellentesque iaculis sem sagittis sapien congue pharetra. Nunc varius nunc ut ipsum facilisis commodo. Sed vestibulum, ipsum ac mattis facilisis, velit ex dignissim dui, id commodo purus turpis et risus. Aenean malesuada, felis at pharetra porta, nibh ligula faucibus nunc, ac feugiat nisl erat vel ante. Nunc mattis, risus pretium ultricies interdum, nibh lectus posuere erat, ut dignissim lacus dui in massa. Phasellus eleifend diam at sem blandit, sit amet consectetur massa fringilla. Aenean pretium aliquam nisi nec blandit. Proin semper, dui non fringilla ultrices, nibh dolor mollis justo, posuere feugiat neque nisi ac massa. ",
      strengths:
        "Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. ",
      weaknesses:
        "Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim.",
      details:
        "Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis.",
      reviewerEmail: "marilton@inf.ufpel.edu.br",
    },

    {
      proposalId: 2,
      reviewedOn: "05/04/2023",
      presentation: "4 - Excelente",
      relevance: "3 - Bom",
      methodology: "3 - Bom",
      wasAdequate: true,
      workPlan: "2 - Exequível",
      wasApproved: true,
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor erat, a lacinia tellus. Mauris rutrum, leo eget tempor vulputate, diam magna consequat nunc, at lacinia nulla augue sed magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam cursus quam nec pellentesque tristique. Integer sed sem ultricies, pellentesque turpis et, convallis urna. Pellentesque iaculis sem sagittis sapien congue pharetra. Nunc varius nunc ut ipsum facilisis commodo. Sed vestibulum, ipsum ac mattis facilisis, velit ex dignissim dui, id commodo purus turpis et risus. Aenean malesuada, felis at pharetra porta, nibh ligula faucibus nunc, ac feugiat nisl erat vel ante. Nunc mattis, risus pretium ultricies interdum, nibh lectus posuere erat, ut dignissim lacus dui in massa. Phasellus eleifend diam at sem blandit, sit amet consectetur massa fringilla. Aenean pretium aliquam nisi nec blandit. Proin semper, dui non fringilla ultrices, nibh dolor mollis justo, posuere feugiat neque nisi ac massa.",
      strengths:
        "Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. ",
      weaknesses:
        "Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim.",
      details:
        "Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis.",
      reviewerEmail: "larissa@inf.ufpel.edu.br",
    },
    {
      proposalId: 2,
      reviewedOn: "07/04/2023",
      presentation: "4 - Excelente",
      relevance: "3 - Bom",
      methodology: "3 - Bom",
      wasAdequate: true,
      workPlan: "2 - Exequível",
      wasApproved: false,
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor erat, a lacinia tellus. Mauris rutrum, leo eget tempor vulputate, diam magna consequat nunc, at lacinia nulla augue sed magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam cursus quam nec pellentesque tristique. Integer sed sem ultricies, pellentesque turpis et, convallis urna. Pellentesque iaculis sem sagittis sapien congue pharetra. Nunc varius nunc ut ipsum facilisis commodo. Sed vestibulum, ipsum ac mattis facilisis, velit ex dignissim dui, id commodo purus turpis et risus. Aenean malesuada, felis at pharetra porta, nibh ligula faucibus nunc, ac feugiat nisl erat vel ante. Nunc mattis, risus pretium ultricies interdum, nibh lectus posuere erat, ut dignissim lacus dui in massa. Phasellus eleifend diam at sem blandit, sit amet consectetur massa fringilla. Aenean pretium aliquam nisi nec blandit. Proin semper, dui non fringilla ultrices, nibh dolor mollis justo, posuere feugiat neque nisi ac massa",
      strengths:
        "Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. ",
      weaknesses:
        "Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim.",
      details:
        "Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis.",
      reviewerEmail: "ulisses@inf.ufpel.edu.br",
    },
    {
      proposalId: 3,
      reviewerEmail: "larissa@inf.ufpel.edu.br",
    },
    {
      proposalId: 3,
      reviewerEmail: "marilton@inf.ufpel.edu.br",
    },
    {
      proposalId: 4,
      reviewedOn: "22/03/2023",
      presentation: "4 - Excelente",
      relevance: "3 - Bom",
      methodology: "3 - Bom",
      wasAdequate: true,
      workPlan: "2 - Exequível",
      wasApproved: false,
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor erat, a lacinia tellus. Mauris rutrum, leo eget tempor vulputate, diam magna consequat nunc, at lacinia nulla augue sed magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam cursus quam nec pellentesque tristique. Integer sed sem ultricies, pellentesque turpis et, convallis urna. Pellentesque iaculis sem sagittis sapien congue pharetra. Nunc varius nunc ut ipsum facilisis commodo. Sed vestibulum, ipsum ac mattis facilisis, velit ex dignissim dui, id commodo purus turpis et risus. Aenean malesuada, felis at pharetra porta, nibh ligula faucibus nunc, ac feugiat nisl erat vel ante. Nunc mattis, risus pretium ultricies interdum, nibh lectus posuere erat, ut dignissim lacus dui in massa. Phasellus eleifend diam at sem blandit, sit amet consectetur massa fringilla. Aenean pretium aliquam nisi nec blandit. Proin semper, dui non fringilla ultrices, nibh dolor mollis justo, posuere feugiat neque nisi ac massa.",
      strengths:
        "Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. ",
      weaknesses:
        "Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim.",
      details:
        "Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis.",
      reviewerEmail: "ulisses@inf.ufpel.edu.br",
    },
    {
      proposalId: 4,
      reviewedOn: "22/03/2023",
      presentation: "4 - Excelente",
      relevance: "3 - Bom",
      methodology: "3 - Bom",
      wasAdequate: true,
      workPlan: "2 - Exequível",
      wasApproved: true,
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor erat, a lacinia tellus. Mauris rutrum, leo eget tempor vulputate, diam magna consequat nunc, at lacinia nulla augue sed magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam cursus quam nec pellentesque tristique. Integer sed sem ultricies, pellentesque turpis et, convallis urna. Pellentesque iaculis sem sagittis sapien congue pharetra. Nunc varius nunc ut ipsum facilisis commodo. Sed vestibulum, ipsum ac mattis facilisis, velit ex dignissim dui, id commodo purus turpis et risus. Aenean malesuada, felis at pharetra porta, nibh ligula faucibus nunc, ac feugiat nisl erat vel ante. Nunc mattis, risus pretium ultricies interdum, nibh lectus posuere erat, ut dignissim lacus dui in massa. Phasellus eleifend diam at sem blandit, sit amet consectetur massa fringilla. Aenean pretium aliquam nisi nec blandit. Proin semper, dui non fringilla ultrices, nibh dolor mollis justo, posuere feugiat neque nisi ac massa.",
      strengths:
        "Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. ",
      weaknesses:
        "Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim.",
      details:
        "Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis.",
      reviewerEmail: "rafael.torchelsen@inf.ufpel.edu.br",
    },
    {
      proposalId: 7,
      reviewedOn: "22/04/2023",
      presentation: "4 - Excelente",
      relevance: "3 - Bom",
      methodology: "3 - Bom",
      wasAdequate: true,
      workPlan: "2 - Exequível",
      wasApproved: false,
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor erat, a lacinia tellus. Mauris rutrum, leo eget tempor vulputate, diam magna consequat nunc, at lacinia nulla augue sed magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam cursus quam nec pellentesque tristique. Integer sed sem ultricies, pellentesque turpis et, convallis urna. Pellentesque iaculis sem sagittis sapien congue pharetra. Nunc varius nunc ut ipsum facilisis commodo. Sed vestibulum, ipsum ac mattis facilisis, velit ex dignissim dui, id commodo purus turpis et risus. Aenean malesuada, felis at pharetra porta, nibh ligula faucibus nunc, ac feugiat nisl erat vel ante. Nunc mattis, risus pretium ultricies interdum, nibh lectus posuere erat, ut dignissim lacus dui in massa. Phasellus eleifend diam at sem blandit, sit amet consectetur massa fringilla. Aenean pretium aliquam nisi nec blandit. Proin semper, dui non fringilla ultrices, nibh dolor mollis justo, posuere feugiat neque nisi ac massa.",
      strengths:
        "Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. ",
      weaknesses:
        "Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim.",
      details:
        "Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis.",
      reviewerEmail: "rafael.torchelsen@inf.ufpel.edu.br",
    },
    {
      proposalId: 7,
      reviewedOn: "24/04/2023",
      presentation: "4 - Excelente",
      relevance: "3 - Bom",
      methodology: "3 - Bom",
      wasAdequate: true,
      workPlan: "2 - Exequível",
      wasApproved: false,
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor erat, a lacinia tellus. Mauris rutrum, leo eget tempor vulputate, diam magna consequat nunc, at lacinia nulla augue sed magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam cursus quam nec pellentesque tristique. Integer sed sem ultricies, pellentesque turpis et, convallis urna. Pellentesque iaculis sem sagittis sapien congue pharetra. Nunc varius nunc ut ipsum facilisis commodo. Sed vestibulum, ipsum ac mattis facilisis, velit ex dignissim dui, id commodo purus turpis et risus. Aenean malesuada, felis at pharetra porta, nibh ligula faucibus nunc, ac feugiat nisl erat vel ante. Nunc mattis, risus pretium ultricies interdum, nibh lectus posuere erat, ut dignissim lacus dui in massa. Phasellus eleifend diam at sem blandit, sit amet consectetur massa fringilla. Aenean pretium aliquam nisi nec blandit. Proin semper, dui non fringilla ultrices, nibh dolor mollis justo, posuere feugiat neque nisi ac massa.",
      strengths:
        "Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. ",
      weaknesses:
        "Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim.",
      details:
        "Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis.",
      reviewerEmail: "gcorrea@inf.ufpel.edu.br",
    },
    {
      proposalId: 8,
      reviewedOn: "22/04/2023",
      presentation: "4 - Excelente",
      relevance: "3 - Bom",
      methodology: "3 - Bom",
      wasAdequate: true,
      workPlan: "2 - Exequível",
      wasApproved: false,
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor erat, a lacinia tellus. Mauris rutrum, leo eget tempor vulputate, diam magna consequat nunc, at lacinia nulla augue sed magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam cursus quam nec pellentesque tristique. Integer sed sem ultricies, pellentesque turpis et, convallis urna. Pellentesque iaculis sem sagittis sapien congue pharetra. Nunc varius nunc ut ipsum facilisis commodo. Sed vestibulum, ipsum ac mattis facilisis, velit ex dignissim dui, id commodo purus turpis et risus. Aenean malesuada, felis at pharetra porta, nibh ligula faucibus nunc, ac feugiat nisl erat vel ante. Nunc mattis, risus pretium ultricies interdum, nibh lectus posuere erat, ut dignissim lacus dui in massa. Phasellus eleifend diam at sem blandit, sit amet consectetur massa fringilla. Aenean pretium aliquam nisi nec blandit. Proin semper, dui non fringilla ultrices, nibh dolor mollis justo, posuere feugiat neque nisi ac massa.",
      strengths:
        "Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. ",
      weaknesses:
        "Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim.",
      details:
        "Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis.",
      reviewerEmail: "rafael.torchelsen@inf.ufpel.edu.br",
    },
    {
      proposalId: 8,
      reviewedOn: "24/04/2023",
      presentation: "4 - Excelente",
      relevance: "3 - Bom",
      methodology: "3 - Bom",
      wasAdequate: true,
      workPlan: "2 - Exequível",
      wasApproved: false,
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor erat, a lacinia tellus. Mauris rutrum, leo eget tempor vulputate, diam magna consequat nunc, at lacinia nulla augue sed magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam cursus quam nec pellentesque tristique. Integer sed sem ultricies, pellentesque turpis et, convallis urna. Pellentesque iaculis sem sagittis sapien congue pharetra. Nunc varius nunc ut ipsum facilisis commodo. Sed vestibulum, ipsum ac mattis facilisis, velit ex dignissim dui, id commodo purus turpis et risus. Aenean malesuada, felis at pharetra porta, nibh ligula faucibus nunc, ac feugiat nisl erat vel ante. Nunc mattis, risus pretium ultricies interdum, nibh lectus posuere erat, ut dignissim lacus dui in massa. Phasellus eleifend diam at sem blandit, sit amet consectetur massa fringilla. Aenean pretium aliquam nisi nec blandit. Proin semper, dui non fringilla ultrices, nibh dolor mollis justo, posuere feugiat neque nisi ac massa.",
      strengths:
        "Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. ",
      weaknesses:
        "Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim.",
      details:
        "Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis.",
      reviewerEmail: "gcorrea@inf.ufpel.edu.br",
    },
    {
      proposalId: 9,
      reviewerEmail: "gcorrea@inf.ufpel.edu.br",
    },
    {
      proposalId: 9,
      reviewerEmail: "rafael.torchelsen@inf.ufpel.edu.br",
    },
  ];
  await knex.raw("ALTER SEQUENCE reviews_id_seq RESTART WITH 1");

  await knex("reviews").del();

  await knex("reviews").insert(reviews);
};
