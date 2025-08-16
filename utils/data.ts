export type PointType = {
  text: string;
  subpoint?: string[];
};

export type ItemType = {
  itemTitle: string;
  points: PointType[];
};

export type OurServicesDataType = {
  title: string;
  items: ItemType[];
};


export const OurServicesData = [
  {
    title: "Content Marketing/Public Relations",
    items: [
      {
        itemTitle: "Content Marketing/Public Relations",
        points: [
          { text: "Developing compelling narratives that resonate with target audiences." },
          { text: "Crafting content strategies that align with brand objectives." },
          { text: "Leveraging various platforms to amplify brand messaging." },
          { text: "Engaging with influencers to expand reach and credibility." },
          { text: "Monitoring media coverage to manage brand reputation." }
        ]
      }
    ]
  },
  {
    title: "Custom Research",
    items: [
      {
        itemTitle: "Custom Research",
        points: [
          { text: "Conducting surveys and focus groups to gather consumer insights." },
          { text: "Analyzing market trends to identify opportunities and threats." },
          { text: "Providing actionable recommendations based on research findings." },
          { text: "Delivering comprehensive reports to inform strategic decisions." }
        ]
      }
    ]
  },
  {
    title: "Analytics and Reporting",
    items: [
      {
        itemTitle: "Analytics and Reporting",
        points: [
          { text: "Utilizing data analytics tools to measure campaign performance." },
          { text: "Generating reports that highlight key performance indicators." },
          { text: "Providing insights to optimize future marketing efforts." },
          { text: "Ensuring transparency and accountability through detailed reporting." }
        ]
      }
    ]
  },
  {
    title: "Business Consulting",
    items: [
      {
        itemTitle: "Business Consulting",
        points: [
          {
            text: 'As a core service, we are here to help you identify the right media for your organization’s publicity, their current impressions and rank them accordingly. We also can provide contextual short, medium and long term strategic solutions according to your needs.'
          },
          {
            text: 'As far as market research is concerned, we help businesses understand their target market, competitors, and overall industry landscape. This involves gathering and analyzing data to inform strategic decisions about product development, marketing, and sales. We conduct various types of research, such as surveys, focus groups, and competitor analysis, to provide actionable insights for our clients.'
          },
          {
            text: 'Starting and running a business is challenging because of the sheer number of tasks it takes to succeed. To navigate this challenge we, as a consultant, offer a wide range of services, including:',
            subpoint: [
              'Providing expertise in a specific market',
              'Identifying problems',
              'Supplementing existing staff',
              'Initiating change',
              'Providing objectivity',
              'Teaching and training employees',
              'Doing the “dirty work,” such as laying off staff',
              'Reviving an organization',
              'Creating a new business',
              'Influencing other people, such as lobbyists'
            ]
          },
          {
            text: 'We provide our clients with industry-specific data from primary sources often tailored to specific business needs and industries. These services enable clients to make informed decisions, optimize operations, and improve customer experiences through reliable and accessible data. We also offer data analytical services, allowing users to derive insights from the organization’s data they access.'
          },
          { text: 'Assisting in the development of business strategies that drive growth.' },
          { text: 'Providing guidance on organizational structure and process improvements.' },
          { text: 'Helping businesses navigate regulatory and compliance challenges.' },
          { text: 'Offering insights into financial management and cost optimization.' }
        ]
      }
    ]
  }
];
