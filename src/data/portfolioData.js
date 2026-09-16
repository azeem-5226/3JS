export const skills = {
  frontend: [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Responsive Design', level: 90 },
  ],
  programming: [
    { name: 'JavaScript', level: 80 },
    { name: 'Python', level: 60 },
    { name: 'SQL', level: 70 },
  ],
  backend: [
    { name: 'Node.js', level: 50 },
    { name: 'Express', level: 50 },
    { name: 'MongoDB', level: 45 },
  ],
  tools: [
    { name: 'Git', level: 75 },
    { name: 'GitHub', level: 80 },
    { name: 'VS Code', level: 90 },
  ],
};

export const projects = [
  {
    id: 'automob-mechanic',
    title: 'AutoMob-Mechanic',
    description: 'A vehicle service booking web application designed to help users easily book maintenance and repair services.',
    image: '/assets/images/automob1.png',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
    github: '#',
    live: '#',
    features: [
      'User authentication',
      'Service booking system',
      'Admin dashboard for managing appointments',
      'Responsive design'
    ]
  },
  {
    id: 'recipe-app',
    title: 'Recipe App',
    description: 'Dynamic recipe search application where users can discover, save, and learn how to cook various meals.',
    image: '/assets/images/AL=SHIFA   CLINIC IMAGE.png',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'External API'],
    github: '#',
    live: '#',
    features: [
      'Search functionality by ingredient',
      'Detailed recipe views',
      'Save favorite recipes',
      'Dynamic filtering'
    ]
  },
  {
    id: 'zoom-clone',
    title: 'Zoom Clone',
    description: 'Real-time video calling project simulating the core functionality of Zoom.',
    image: '/assets/images/streamify-image.png',
    technologies: ['React', 'WebRTC', 'Socket.io', 'Node.js'],
    github: '#',
    live: '#',
    features: [
      'Real-time video and audio',
      'Screen sharing',
      'Chat functionality',
      'Mute/unmute controls'
    ]
  }
];

export const certificates = [
  { id: 1, name: 'JavaScript Certificate', issuer: 'HackerRank / freeCodeCamp', date: '2023', image: '/assets/certificates/JavaScript.png' },
  { id: 2, name: 'HTML5 Certificate', issuer: 'SoloLearn', date: '2023', image: '/assets/certificates/HTML5 - The Language.png' },
  { id: 3, name: 'CSS3 Certificate', issuer: 'SoloLearn', date: '2023', image: '/assets/certificates/css3.png' },
  { id: 4, name: 'Advanced HTML', issuer: 'Coursera', date: '2024', image: '/assets/certificates/Advanced HTML Concepts.png' },
  { id: 5, name: 'Frontend Web Developer', issuer: 'Udacity', date: '2024', image: '/assets/certificates/Frontend web developer .png' },
  { id: 6, name: 'CCNA', issuer: 'Cisco', date: '2023', image: '/assets/certificates/CCNA.png' }
];

export const journey = [
  { year: '2022', title: 'Started Web Development', description: 'Began exploring HTML, CSS, and basic programming concepts.' },
  { year: '2023', title: 'Learned JavaScript', description: 'Dove deep into JavaScript, algorithms, and DOM manipulation.' },
  { year: '2024', title: 'Started React', description: 'Began building interactive UIs using React and component-based architecture.' },
  { year: '2025', title: 'Started MERN Stack', description: 'Expanding into full-stack by learning Node.js, Express, and MongoDB.' },
  { year: '2026', title: 'Exploring Three.js', description: 'Focusing on advanced frontend experiences, WebGL, and 3D animations.' },
];
