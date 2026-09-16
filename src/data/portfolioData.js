export const skills = {
  frontend: [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 85 },
    { name: 'React.js', level: 80 },
    { name: 'Next.js', level: 75 },
    { name: 'Tailwind CSS', level: 90 },
  ],
  programming: [
    { name: 'JavaScript', level: 85 },
    { name: 'Python', level: 70 },
    { name: 'C / C++', level: 75 },
  ],
  backend: [
    { name: 'Node.js', level: 70 },
    { name: 'Express.js', level: 70 },
    { name: 'MongoDB', level: 65 },
    { name: 'REST APIs', level: 80 },
    { name: 'Socket.IO / WebRTC', level: 60 }
  ],
  tools: [
    { name: 'Git / GitHub', level: 85 },
    { name: 'VS Code', level: 95 },
    { name: 'Technical SEO', level: 80 }
  ],
};

export const projects = [
  {
    id: 'codekitworld',
    title: 'CodeKitWorld',
    description: 'A premium educational platform for developers featuring interactive courses, free notes, and a built-in browser IDE for a distraction-free learning experience.',
    image: 'https://codekitworld.vercel.app/logo.jpeg',
    technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'Interactive IDE'],
    github: '#',
    live: 'https://codekitworld.vercel.app/',
    features: [
      'Extensive library of free coding notes',
      'Interactive built-in browser IDE',
      'Distraction-free, ad-free learning',
      'High-quality structured tracks'
    ]
  },
  {
    id: 'al-shifa',
    title: 'Al-Shifa Clinic',
    description: 'Modern healthcare management software designed to simplify and organize daily clinic operations including patient records, doctors, and appointments.',
    image: '/assets/images/AL=SHIFA   CLINIC IMAGE.png',
    technologies: ['Frontend', 'Healthcare Management', 'Responsive Design', 'Patient Management'],
    github: '#',
    live: 'https://al-shifa-clinic-frontend.vercel.app/',
    features: [
      'Patient records management',
      'Appointment scheduling',
      'Prescription & billing tracking'
    ]
  },
  {
    id: 'streamify',
    title: 'Streamify',
    description: 'A modern real-time video calling and communication platform designed to help users connect, communicate, and build meaningful connections online.',
    image: '/assets/images/streamify-image.png',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Socket.IO', 'WebRTC'],
    github: '#',
    live: 'https://streamify-video-calls-frontend-eight.vercel.app/login',
    features: [
      'Real-Time Video Calling',
      'Real-Time Messaging & Groups',
      'Secure Authentication'
    ]
  }
];

export const certificates = [
  { id: 1, name: 'HTML5 Certificate', issuer: 'Web Development Basics', date: '2023', image: '/assets/certificate/HTML5 - The Language.png' },
  { id: 2, name: 'Advanced HTML', issuer: 'HTML Concepts', date: '2023', image: '/assets/certificate/Advanced HTML Concepts.png' },
  { id: 3, name: 'CSS3', issuer: 'Responsive Design', date: '2023', image: '/assets/certificate/css3.png' },
  { id: 4, name: 'JavaScript', issuer: 'Infosys Springboard', date: '2024', image: '/assets/certificate/JavaScript.png' },
  { id: 5, name: 'Frontend Web Developer', issuer: 'Infosys Springboard', date: '2024', image: '/assets/certificate/Frontend web developer .png' },
  { id: 6, name: 'CCNA', issuer: 'Networking — Cisco', date: '2023', image: '/assets/certificate/CCNA.png' },
  { id: 7, name: 'Networking & Web Tech', issuer: 'Certification', date: '2023', image: '/assets/certificate/image.png' },
  { id: 8, name: 'Deloitte', issuer: 'Technology Job Simulation', date: '2024', image: '/assets/images/image.png' },
  { id: 9, name: 'HP LIFE', issuer: 'Critical Thinking in the AI Era', date: '2024', image: '/assets/certificate/HP.png' }
];

export const journey = [
  { year: '2022', title: 'Started Web Development', description: 'Began exploring HTML, CSS, and basic programming concepts.' },
  { year: '2023', title: 'Learned JavaScript', description: 'Dove deep into JavaScript, algorithms, and DOM manipulation.' },
  { year: '2024', title: 'Started React', description: 'Began building interactive UIs using React and component-based architecture.' },
  { year: '2025', title: 'Started MERN Stack', description: 'Expanding into full-stack by learning Node.js, Express, and MongoDB.' },
  { year: '2026', title: 'Graduating', description: 'Completing B.Sc. Information Technology from Mumbai University.' },
];
