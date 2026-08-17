export const personalInfo = {
    name: 'Ankit Thapa',
    role: 'Full-Stack Developer',
    tagline: 'Building clean, functional web experiences.',
    bio: "I'm a full-stack developer who enjoys turning ideas into clean, functional products — crafting intuitive interfaces on the frontend and building solid, reliable logic on the backend. I care about writing code that's both efficient and easy to understand, and I'm always exploring new tools to sharpen my craft.",
    location: 'Kathmandu, Basundhara',
    email: 'ankitthapamagarr@gmail.com',
    github: 'https://github.com/ankeetmgr',
    linkedin: 'https://linkedin.com/in/ankeetmgr',
    // No resume yet — components below only show the CV button when this is set.
    cv: '',
};

// Two tiers, matching where Ankit actually is right now: skills he's
// comfortable with, and ones he's actively learning.
export const skills = [
    {
        category: 'Core',
        icon: '💻',
        items: [
            { name: 'HTML', level: 'Intermediate' },
            { name: 'CSS', level: 'Intermediate' },
            { name: 'C', level: 'Intermediate' },
            { name: 'Java', level: 'Intermediate' },
        ],
    },
    {
        category: 'Learning',
        icon: '🌱',
        items: [
            { name: 'JavaScript', level: 'Basic' },
            { name: 'Python', level: 'Basic' },
        ],
    },
];

// Empty on purpose — no real projects yet. The Projects component shows
// a "coming soon" state automatically when this array is empty.
export const projects = [];

export const education = [
    {
        degree: 'Bachelor of Computer Applications (BCA)',
        institution: '',
        location: 'Kathmandu',
        period: 'Ongoing',
    },
];

// No certifications yet — Education component hides this block when empty.
export const certifications = [];

// No achievements listed yet — About component hides this block when empty.
export const achievements = [];

export const languages = [];
