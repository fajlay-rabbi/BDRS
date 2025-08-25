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

export type NavbarContentType = {
  title?: string;
  children: (NavbarContentType | string)[];
}



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

export const navbarContent = [
  {
    "title": "Insights",
    "children": [
      {
        "title": "BDRS Insights",
        "children": [
          {
            "title": "Industries",
            "children": [
              "Business Services", "Consumer Products", "Education", "Energy & Environment",
              "Financial Services", "Healthcare Services", "Industrials", "Life Sciences & Pharma",
              "Media & Entertainment", "MedTech", "Private Equity", "Retail", "Sustainability",
              "Technology", "Travel, Transport & Logistics"
            ]
          },
        ]
      },
      {
        "title": "Sustainability Centre of Excellence",
        "children": [
          {
            "title": "",
            "children": [
              "Navigating the Journey to Decarbonisation",
              "Fuelling the Future of Aviation",
              "Creating Value Through Sustainability",
              "Global Corporate Sustainability Survey 2022",
            ]
          }
        ]
      },
      {
        "title": "Consumer Insights Center",
        "children": [
          {
            "title": "",
            "children": [
              "View Our Insights",
            ]
          }
        ]
      },
      {
        "title": "Healthcare Insights Center",
        "children": [
          {
            "title": "",
            "children": [
              "View Our Insights",
            ]
          }
        ]
      },
      {
        "title": "Webinars",
        "children": [
          {
            "title": "",
            "children": [
              "View Our Webinars",
            ]
          }
        ]
      },
      {
        "title": "Podcasts",
        "children": [
          {
            "title": "",
            "children": [
              "Listen To Our Podcasts",
            ]
          }
        ]
      },
    ]
  },
  {
    "title": "Industries",
    "children": [
      {
        "title": "Business Services",
        "children": [
          {
            "title": 'Practice Areas',
            "children": [
              "Industrial and Professional Services", "Freight & Logistics",
              "Outsourcing and Support Services", "Properties and Facilities Management",
              "Recruitment and Staffing"]
          }
        ]
      },
      {
        "title": "Consumer Products",
        "children": [
          {
            "title": "Practice Areas",
            "children": [
              "Apparel", "Beauty & Personal Care", "Food & Beverage", "Food Ingredients",
              "Footwear", "Health & Wellness", "Home Furnishings", "Household Products",
              "Pet", "Sporting Goods"
            ]
          }
        ]
      },
      {
        "title": "Education",
        "children": [
          {
            "title": "Practice Areas",
            "children": [
              "Transnational Education", "K-12", "Higher Education", "Education Technology"
            ]
          }
        ]
      },
      {
        "title": "Energy & Environment",
        "children": [
          {
            "title": "Practice Areas",
            "children": [
              "Environmental Services", "Oil & Gas", "Power & Utilities", "Renewables",
              "Waste & Recycling", "Water"
            ]
          }
        ]
      },
      {
        "title": "Financial Services",
        "children": [
          {
            "title": "Practice Areas",
            "children": [
              "Banking", "Debt Management", "Insurance", "Investment & Wealth Management",
              "Payments", "Specialist Lending"
            ]
          }
        ]
      },
      {
        "title": "Healthcare Services",
        "children": [
          {
            "title": "Practice Areas",
            "children": [
              "Health Plan and Private Health Insurance", "Employer Healthcare", "Acute Care and Hospital",
              "Physician Practice Management", "Mental and Behavioral Health",
              "Post-Acute Care, Long-Term Care and Residential Care", "Homecare and Home Healthcare",
              "Diagnostic and Ancillary Services", "Tech-Enabled Services and Healthcare IT",
              "Healthcare Supply Chain", "Telehealth and Digital Transformation"
            ]
          }
        ]
      },
    ]
  },
  {
    "title": "Capabilities",
    "children": [
      {
        "title": "Analytical Sciences",
        "children": [
          {
            "title": "Practice Areas",
            "children": ["Analytical Sciences"]
          }
        ]
      },
      {
        "title": "Artificial Intelligence",
        "children": [
          {
            "title": "Practice Areas",
            "children": ["Analytical Sciences", "Unlock the Power of AI"]
          }
        ]
      },
      {
        "title": "Data & Analytics",
        "children": [
          {
            "title": "Practice Areas",
            "children": ["Advanced Analytics Strategy", "Unlock the Power of AI"]
          }
        ]
      },
      {
        "title": "Digital",
        "children": [
          {
            "title": "",
            "children": [
              "Advance Digital Maturity", "Assess Digital Potential", "Create a Digital Culture",
              "Deliver Impactful Experiences", "Launch and Amplify Disruptive New Businesses",
              "Unlock the Power of AI"
            ]
          }
        ]
      },
      {
        "title": "Major Capital Projects Advisory",
        "children": [
          {
            "title": "",
            "children": ["Major Capital Projects Advisory"]
          }
        ]
      },
      {
        "title": "Marketing & Sales",
        "children": [
          {
            "title": "",
            "children": [
              "Loyalty & Customer Experience", "Marketing Strategy", "Sales Force Effectiveness",
              "New Product", "Brand Strategy", "Channel Strategy", "Customer Targeting and Value Proposition",
              "Go-to-Market and Commercial Organization"
            ]
          }
        ]
      },
      {
        "title": "Mergers & Acquisitions",
        "children": [
          {
            "title": "",
            "children": [
              "Carve-outs & Divestitures", "Due Diligence", "Exit Support",
              "Joint Ventures & Alliances", "M&A Synergies", "Post-Merger Integration", "Target Identification",
              "Operational Due Diligence"
            ]
          }
        ]
      },
      {
        "title": "Operations & Supply Chain",
        "children": [
          {
            "title": "",
            "children": [
              "Planning", "Procurement", "Manufacturing", "Logistics", "Distribution", "Supply Chain Strategy"
            ]
          }
        ]
      },
    ]
  },
{
  "title": "Leadership",
  "children": [
    {
      "title": "Leadership",
      "children": [
        { "title": "Americas", "children": [] },
        { "title": "Asia-Pacific", "children": [] },
        { "title": "Europe", "children": [] },
        { "title": "Expansion to the Middle East", "children": [] }
      ]
    }
  ]
},
{
  "title": "About",
  "children": [
    {
      "title": "About B.D.R.S",
      "children": [
        { "title": "Who We Are", "children": [] },
        { "title": "What We Do", "children": [] },
        { "title": "What We Believe", "children": [] },
        { "title": "Our Sustainability", "children": [] }
      ]
    },
    {
      "title": "Who We Are",
      "children": [
        { "title": "Get to Know Our People", "children": [] },
        { "title": "Meet Our Practitioners", "children": [] },
        { "title": "Learn Who Heads Our Organization", "children": [] },
        { "title": "Look at All the Places We Go", "children": [] },
        { "title": "Find B.D.R.S In the News", "children": [] }
      ]
    },
    {
      "title": "What We Do",
      "children": [
        { "title": "Discover the B.D.R.S Collaborative", "children": [] },
        { "title": "The Edge Strategy framework", "children": [] },
        { "title": "B.D.R.S Sustainability Centre of Excellence", "children": [] },
        { "title": "B.D.R.S at the World Economic Forum", "children": [] },
        { "title": "Our Sustainability", "children": [] },
        { "title": "Environmental Responsibility", "children": [] },
        { "title": "Community Responsibility", "children": [] },
        { "title": "Diversity and Inclusion", "children": [] },
        { "title": "Pro Bono Work", "children": [] },
        { "title": "The B.D.R.S Network", "children": [] },
        { "title": "Books", "children": [] },
        { "title": "Predictable Winners", "children": [] }
      ]
    }
  ]
},
{
  "title": "Careers",
  "children": [
    {
      "title": "Careers at B.D.R.S",
      "children": [
        { "title": "Why Join B.D.R.S?", "children": [] },
        { "title": "Life at B.D.R.S", "children": [] },
        { "title": "The B.D.R.S Career", "children": [] }
      ]
    },
    {
      "title": "Why Join B.D.R.S?",
      "children": [
        { "title": "Who We Are", "children": [] },
        { "title": "Get to Know Our People", "children": [] },
        { "title": "Meet Our Practitioners", "children": [] },
        { "title": "Learn Who Heads Our Organization", "children": [] },
        { "title": "Look at All the Places We Go", "children": [] },
        { "title": "Find B.D.R.S in the News", "children": [] },
        { "title": "What You'll Do", "children": [] },
        { "title": "Enhanced Opportunities", "children": [] },
        { "title": "Flexible Work Options", "children": [] },
        { "title": "Mentorship & Coaching", "children": [] },
        { "title": "Roles at B.D.R.S", "children": [] },
        { "title": "Training & Professional Development", "children": [] },
        { "title": "What We Do", "children": [] },
        { "title": "Discover B.D.R.S Collaborative", "children": [] },
        { "title": "Books", "children": [] },
        { "title": "Edge Strategy Framework", "children": [] },
        { "title": "B.D.R.S Sustainability Centre of Excellence", "children": [] },
        { "title": "We Are Global", "children": [] },
        { "title": "International Programs", "children": [] }
      ]
    },
    {
      "title": "Life at B.D.R.S",
      "children": [
        { "title": "Community Responsibility", "children": [] },
        { "title": "The B.D.R.S Network", "children": [] },
        { "title": "Diversity and Inclusion", "children": [] },
        { "title": "Environmental Responsibility", "children": [] },
        { "title": "Pro Bono Work", "children": [] }
      ]
    },
    {
      "title": "The B.D.R.S Career",
      "children": [
        { "title": "Enhanced Opportunities", "children": [] },
        { "title": "Flexible Work Options", "children": [] },
        { "title": "International Programs", "children": [] },
        { "title": "Mentorship & Coaching", "children": [] },
        { "title": "Roles at B.D.R.S", "children": [] },
        { "title": "Senior Staff Development", "children": [] },
        { "title": "Training and Professional Development", "children": [] },
        { "title": "Apply", "children": [] },
        { "title": "Why L.E.K", "children": [] },
        { "title": "Life at B.D.R.S", "children": [] },
        { "title": "The B.D.R.S Career", "children": [] },
        { "title": "Life at B.D.R.S Blog", "children": [] },
        { "title": "Discovering a Consulting Career", "children": [] },
        { "title": "Inside B.D.R.S", "children": [] },
        { "title": "The Recruiting Experience", "children": [] }
      ]
    }
  ]
}

]

