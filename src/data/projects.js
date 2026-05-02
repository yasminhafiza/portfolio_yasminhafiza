const img = (path) => new URL(`../assets/images/${path}`, import.meta.url).href

export const projects = [
    {
        id: 1,
        title: 'IT Services Website PT Solusi Daya Infonesia Tech Services',
        type: 'web',
        category: 'Saas Website',
        images: [
            img('sdi1.PNG'),
            img('sdi2.PNG'),
            img('sdi3.PNG'),
            img('sdi4.PNG')
        ],
        description: 'As a Frontend Developer, Build responsive and user-friendly web interfaces using Vue.js and Tailwind CSS. Optimize performance across devices and collaborate with stakeholders to deliver effective frontend solutions.',
        technologies: ['Vue.js', 'Tailwind CSS'],
        link: '#'
    },
    {
        id: 2,
        title: 'SiPeta WebGIS Flood Prone Area Mapping System',
        type: 'web',
        category: 'WebGIS',
        images: [
            img('sipeta1.png'),
            img('sipeta2.png'),
            img('sipeta3.png'),
        ],
        description: 'Analyzed system requirements and designed workflows for flood-prone area mapping. Developed web-based features using PHP and MySQL for data management and visualization. Created system documentation and conducted testing (UAT & Black Box) to ensure the system met user requirements.',
        technologies: ['Tailwind CSS', 'PHP', 'JavaScript', 'HTML', 'Leaflet', 'System Analyst', 'Documentation', 'Testing', 'User Acceptance Testing (UAT)', 'Black Box Testing'],
        link: '#'
    },
    {
        id: 3,
        title: "Mom's Cemara Cake Shop Website",
        type: 'web',
        category: 'E-commerce',
        images: [
            img('moms1.png'),
            img('moms2.png')
        ],
        description: 'Desain UI modern dengan pendekatan user-centered untuk meningkatkan pengalaman pengguna melalui riset dan prototyping.',
        technologies: ['Trello', 'PHP', 'MySQL', 'Project Management'],
        link: '#'
    },
    {
        id: 4,
        title: 'Zafer Parfum Website',
        type: 'web',
        category: 'E-commerce',
        images: [
            img('zafer1.png'),
            img('zafer2.png'),
            img('zafer3.png')
        ],
        description: 'A web-based e-commerce application developed using PHP, MySQL, Bootstrap, and JavaScript. The system design was created using Draw.io, while application testing was conducted through User Acceptance Testing (UAT) and Blackbox Testing to ensure functionality and suitability for user needs.',
        technologies: ['HTML', 'Bootstrap', 'JavaScript', 'Documentation', 'System Analyst', 'Testing', 'User Acceptance Testing (UAT)', 'Black Box Testing'],
        link: '#'
    },
    {
        id: 5,
        title: 'E-Doktrin',
        type: 'web',
        category: 'Document Archive System',
        images: [
            img('landing page.png'),
            img('halaman asal doktrin.png'),
            img('dashboard.png')
        ],
        description: 'A web-based document archive system developed using CodeIgniter, PHP, MySQL, Bootstrap, and JavaScript. Application testing was conducted through User Acceptance Testing (UAT) and Blackbox Testing to ensure functionality and suitability for user needs.',
        technologies: ['HTML', 'Bootstrap', 'JavaScript', 'CodeIgniter', 'Manual Book'],
        link: '#'
    },
    {
        id: 6,
        title: 'PCS HRGA Dashboard',
        type: 'Power BI',
        category: 'Power BI Dashboard',
        images: [
            img('BI1.png'),
            img('BI2.png')
        ],
        description: '',
        technologies: ['Data Visualization', 'Power BI'],
        link: '#'
    },
    {
        id: 7,
        title: 'Hotel Ticket and Travel Tracking Dashboard',
        type: 'Power BI',
        category: 'Power BI Dashboard',
        images: [
            img('BI3.png')
        ],
        description: '',
        technologies: ['Data Visualization', 'Power BI'],
        link: '#'
    },
    {
        id: 8,
        title: 'Isra Miraj Flyer',
        type: 'Canva',
        category: 'Canva Design',
        images: [
            img('canva1.png'),
            img('canva3.png')
        ],
        description: '',
        technologies: ['Canva', 'Poster Design'],
        link: '#'
    },
    {
        id: 9,
        title: 'EstimaClaim System Design',
        type: 'System Analysis & Design',
        category: 'EstimaClaim',
        images: [
            img('Estimaclaim.png'),
            img('Estimaclaim1.png'),
            img('Estimaclaim2.png'),
            img('Estimaclaim3.png'),
            img('Estimaclaim4.png'),
        ],
        description: 'A system designed to manage voucher claims and invoice processing, including invoice uploads, claim validation, and approval workflow monitoring based on business processes.',
        technologies: ['Draw.io', 'Flowchart', 'Use Case Diagram', 'Activity Diagram', 'Business Process'],
        link: '#'
    },
    {
        id: 10,
        title: 'EstimaCore System Design',
        type: 'System Analysis & Design',
        category: 'EstimaCore',
        images: [
            img('Estimacore.png'),
            img('Estimacore1.png')
        ],
        description: 'A system for cost estimation and project management that includes price searching, cost calculation, SLD handling, and inventory management.',
        technologies: ['Flowchart', 'Draw.io', 'Use Case Diagram'],
        link: '#'
    }
]