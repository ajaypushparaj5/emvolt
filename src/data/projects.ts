export type Project = {
    id: string;
    category: string;
    title: string;
    description: string;
    image: string;
};

export const projectsData: Project[] = [
    {
        id: "1",
        category: "BRIGHTO PAINTS",
        title: "COMMERCIAL HV INSTALLATION",
        description: "Join our expert engineering team in delivering comprehensive high-voltage electrical installations and structured cablings for one of the city's premier commercial towers.",
        image: "/brightopaints.jpeg", // REPLACE THIS WITH ACTUAL URL/PATH
    },
    {
        id: "2",
        category: "AL AQSAR INDUSTRIES",
        title: "INDUSTRIAL CHILLER PLANTS",
        description: "Complete design, supply, and installation of massive centralized district cooling and chiller plants for maximum energy efficiency.",
        image: "/alaqsarindustries.jpeg", // REPLACE THIS WITH ACTUAL URL/PATH
    },
    {
        id: "3",
        category: "PLUMBING & SANITATION",
        title: "LUXURY HOTEL PIPING",
        description: "Advanced plumbing, drainage, and water supply network implementation for a 5-star hotel development, ensuring perfect pressure and hygiene.",
        image: "/building.jpeg", // REPLACE THIS WITH ACTUAL URL/PATH
    },
    {
        id: "4",
        category: "FIRE ALARM & CCTV",
        title: "INTEGRATED SECURITY",
        description: "State-of-the-art fire alarm and CCTV monitoring systems approved by local defense authorities for maximum building safety.",
        image: "/building2.jpeg", // REPLACE THIS WITH ACTUAL URL/PATH
    }
];
