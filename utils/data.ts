export type OurServicesDataType = {
    title: string;
    items: {
        itemTitle: string;
        points: string[];
    }[];
};

export const OurServicesData = [
    {
        title: "Management & Development Consulting",
        items: [
            {
                itemTitle: "Management & Development Consulting",
                points: [
                    'Market Assessment',
                    'Value Chain Assessment',
                    'Policy Advocacy'
                ]
            },
            {
                itemTitle: "Technical Assistance",
                points: [
                    'Inclusive Market Systems',
                    'Impact Assessment'
                ]
            },
            {
                itemTitle: "Strategy Implementation",
                points: [
                    'Project Management'
                ]
            },
        ]
    },
    {
        title: "Ecosystem & Investments",
        items: [
            {
                itemTitle: "Ecosystem & Investments",
                points: [
                    'Accelerator and Incubator Management',
                    'Investment Advisory',
                    'Blended Finance and Catalytic Funding',
                    'Advocacy and Systems Development',
                ]
            }
        ]
    },
    {
        title: "Market Entry Advisory",
        items: [
            {
                itemTitle: "Market Entry Advisory",
                points: [
                    'Market Entry Strategy and Support Services',
                ]
            }
        ]
    },
    {
        title: "Digital Transformation",
        items: [
            {
                itemTitle: "Digital Transformation",
                points: [
                    'Technology for Social Good',
                    'Advanced Analytics Engine Development',
                ]
            }
        ]
    }
]