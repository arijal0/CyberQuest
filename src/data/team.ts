export type FacultyMember = {
  id: string;
  name: string;
  role: string;
  title: string;
  department: string;
  photo: string;
  shortBio: string;
  focus: string[];
  education: string[];
  /** Short paragraph describing courses taught and teaching areas */
  coursesDescription: string;
  highlights: string[];
  bio: string;
  /** Optional contact / link fields — only rendered when provided */
  portfolioUrl?: string;
  email?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  googleScholarUrl?: string;
};

export const facultyMembers: FacultyMember[] = [
  {
    id: "ning-zhang",
    name: "Dr. Ning Zhang",
    role: "Principal Investigator",
    title: "Assistant Professor of Computer Science and Data Science",
    department: "Mathematics and Computer Science",
    photo: "/ning.png",
    shortBio:
      "Research focus: machine learning, with applications of deep learning to neuroimaging (e.g., fMRI).",
    focus: ["Machine Learning", "Deep learning", "NeuroImaging Processing"],
    education: ["Ph.D. in Computational Science"],
    coursesDescription:
      "CSCI120 Intro to Computer Science II, CSCI241 Data Structures & Algorithms, CSCI380 Machine Learning",
    highlights: ["Leading development of the CyberSecurity Concentration at Fisk"],
    bio: "Dr. Ning Zhang is an Assistant Professor of Computer Science and Data Science at Fisk University. His research focuses on machine learning, data mining, and computational approaches for analyzing complex, high-dimensional data. His work applies machine learning and deep learning methods to neuroimaging data, particularly functional MRI, to study patterns in brain activity and support research on neurological conditions. He collaborates with researchers in neuroscience, medical imaging, chemistry, and related fields",
    email: "nzhang@fisk.edu",
    portfolioUrl: "https://ningzhangfisk.github.io/",
    linkedinUrl: "https://www.linkedin.com/in/ning-zhang-367ba5151/",
    githubUrl: "https://github.com/ningzhangfisk",
  },
  {
    id: "hina-raja",
    name: "Dr. Hina Raja",
    role: "Co-Investigator",
    title: "Professor, Fisk University",
    department: "Computer Science",
    photo: "/placeholder.svg",
    shortBio: "Guides community outreach and inclusive learning experiences.",
    focus: ["Applied security", "Privacy & ethics", "Community engagement"],
    education: ["Ph.D. in Computer Science", "M.S. in Software Engineering"],
    coursesDescription:
      "Dr. Raja teaches Ethical Hacking, Privacy & Policy, and Secure Coding, emphasizing responsible practice and community-oriented applications of security and privacy.",
    highlights: [
      "Outreach partnerships and recruitment",
      "Ethical practice and governance",
      "Student engagement initiatives",
    ],
    bio: "Dr. Raja focuses on responsible cybersecurity practices and inclusive learning, connecting CyberQuest to local and regional community partners.",
    googleScholarUrl: "https://scholar.google.com/citations?user=HINA_RAJA_SCHOLAR_ID",
  },
  {
    id: "qi-li",
    name: "Dr. Qi Li",
    role: "Co-Investigator",
    title: "Professor, Fisk University",
    department: "Computer Science",
    photo: "/placeholder.svg",
    shortBio: "Designs hands-on labs and reinforces technical rigor across modules.",
    focus: ["Cryptography", "Secure software", "Hands-on labs"],
    education: ["Ph.D. in Computer Science", "M.S. in Applied Mathematics"],
    coursesDescription:
      "Dr. Li teaches Applied Cryptography, Secure Software Design, and Algorithms, with a focus on hands-on labs and implementation that support the CyberQuest curriculum.",
    highlights: [
      "Lab module development",
      "Student research mentorship",
      "Technical review and quality assurance",
    ],
    bio: "Dr. Li ensures that CyberQuest students gain a deep, practical understanding of cryptography and secure software through applied labs and projects.",
    googleScholarUrl: "https://scholar.google.com/citations?user=QI_LI_SCHOLAR_ID",
  },
  {
    id: "yu-zhang",
    name: "Dr. Yu Zhang",
    role: "Co-PI",
    title: "Assistant Professor",
    department: "Mathematics and Computer Science Department",
    photo: "/yu.png",
    shortBio: "Expert in AI- and Quantum-assisted resource management in Iot and satellites.",
    focus: ["AI", "Quantum computing and communication", "IoTs", "satellite"],
    education: ["Ph.D. in Electrical and Computer Engineering"],
    coursesDescription: "Operating System, Database Management",
    highlights: ["develop the new cybersecurity program"],
    bio: "Dr. Yu Zhang is an assistant professor in the Mathematics & Computer Science Department at Fisk University. He obtained his Ph.D. in Electrical and Computer Engineering from the University of Texas at San Antonio in July 2025, co-supervised by Dr. Yuanxiong Guo (UTSA) and Dr. Yanmin Gong (Texas A&M University).",
    email: "yzhang@fisk.edu",
    portfolioUrl: "https://yu-zhang-eugene.github.io/",
    linkedinUrl: "https://www.linkedin.com/in/eugeneyuzhang",
    googleScholarUrl: "https://scholar.google.com/citations?hl=en&user=p6z9Id4AAAAJ",
  },
];

export const studentResearchAssistants: FacultyMember[] = [
  {
    id: "fatimah-badmos",
    name: "Fatimah Badmos",
    role: "Student Research Assistant",
    title: "Undergraduate, Computer Science",
    department: "Computer Science Department",
    photo: "/placeholder.svg",
    shortBio: "Supports course development for the Digital Forensics curriculum.",
    focus: ["Course development", "Digital forensics", "Learning materials"],
    education: ["Undergraduate student, Computer Science"],
    coursesDescription:
      "Contributes to the design and refinement of Digital Forensics course content and supporting materials.",
    highlights: ["Co-developing Digital Forensics modules", "Supporting lab and assignment design"],
    bio: "Fatimah Badmos serves as a CyberQuest Student Research Assistant focused on Digital Forensics course development, helping shape hands-on content and examples for undergraduate learners.",
    linkedinUrl: "https://www.linkedin.com/in/fatimah-badmos/",
  },
  {
    id: "diwash-patel",
    name: "Diwash Patel",
    role: "Student Research Assistant",
    title: "Undergraduate, Computer Science",
    department: "Computer Science Department",
    photo: "/placeholder.svg",
    shortBio: "Works on course development for Intro to Cryptography.",
    focus: ["Course development", "Intro to Cryptography", "Problem sets"],
    education: ["Undergraduate student, Computer Science"],
    coursesDescription:
      "Supports the Intro to Cryptography course through example design, practice problems, and materials refinement.",
    highlights: [
      "Designing cryptography-focused practice problems",
      "Helping align course materials with CyberQuest objectives",
    ],
    bio: "Diwash Patel contributes to the Intro to Cryptography course as a Student Research Assistant, helping build approachable, rigorous materials for students new to cybersecurity and cryptography.",
    linkedinUrl: "https://www.linkedin.com/in/diwashpatel",
  },
  {
    id: "ikechukwu-mgbemele",
    name: "Ikechukwu Mgbemele",
    role: "Student Research Assistant",
    title: "Undergraduate, Computer Science",
    department: "Computer Science Department",
    photo: "/placeholder.svg",
    shortBio: "Helps design course and lab materials for Intro to Cybersecurity.",
    focus: ["Intro to Cybersecurity", "Course and lab development", "Hands-on learning"],
    education: ["Undergraduate student, Computer Science"],
    coursesDescription:
      "Supports Intro to Cybersecurity through lab design, scenario development, and course content contributions.",
    highlights: [
      "Co-developing Intro to Cybersecurity labs",
      "Creating hands-on exercises for core security concepts",
    ],
    bio: "Ikechukwu Mgbemele serves as a Student Research Assistant working on Intro to Cybersecurity, contributing to both course structure and lab experiences that ground theory in practice.",
    linkedinUrl: "https://www.linkedin.com/in/imgbemele",
    portfolioUrl: "https://ikechi.vercel.app/",
  },
  {
    id: "onyekachi-ibekwe",
    name: "Onyekachi Ibekwe",
    role: "Student Research Assistant",
    title: "Undergraduate, Computer Science",
    department: "Computer Science Department",
    photo: "/placeholder.svg",
    shortBio: "Supports lab setup and environment configuration for CyberQuest courses.",
    focus: ["Lab setup", "Environment configuration", "Tooling support"],
    education: ["Undergraduate student, Computer Science"],
    coursesDescription:
      "Assists with setting up and maintaining lab environments that support CyberQuest coursework.",
    highlights: [
      "Configuring lab environments for cybersecurity courses",
      "Helping maintain reliable tooling for student labs",
    ],
    bio: "Onyekachi Ibekwe focuses on lab setup as a Student Research Assistant, helping ensure that CyberQuest courses run on stable, well-configured environments for hands-on learning.",
    linkedinUrl: "https://www.linkedin.com/in/onyekachi-ibekwe",
  },
  {
    id: "abishek-bhatta",
    name: "Abishek Bhatta",
    role: "Student Research Assistant",
    title: "Undergraduate, Computer Science",
    department: "Computer Science Department",
    photo: "/placeholder.svg",
    shortBio:
      "Contributes to hardware setup, software installation, and testing for CyberQuest labs.",
    focus: ["Hardware setup", "Software installation", "Testing"],
    education: ["Undergraduate student, Computer Science"],
    coursesDescription:
      "Supports CyberQuest labs by preparing hardware, installing software, and testing learning environments.",
    highlights: [
      "Deploying and testing lab hardware configurations",
      "Verifying software stacks for course readiness",
    ],
    bio: "As a Student Research Assistant, Abishek Bhatta works on hardware and software infrastructure for CyberQuest, helping verify that lab setups are robust and ready for student use.",
    linkedinUrl: "https://www.linkedin.com/in/abishek-bhatta",
  },
  {
    id: "ramika-pandey",
    name: "Ramika Pandey",
    role: "Student Research Assistant",
    title: "Undergraduate, Computer Science",
    department: "Computer Science Department",
    photo: "/placeholder.svg",
    shortBio: "Supports Digital Forensics course development and learning materials.",
    focus: ["Course development", "Digital forensics", "Student support"],
    education: ["Undergraduate student, Computer Science"],
    coursesDescription:
      "Collaborates on Digital Forensics course materials and examples that connect theory to practice.",
    highlights: [
      "Co-developing Digital Forensics examples and case studies",
      "Supporting refinement of course learning resources",
    ],
    bio: "Ramika Pandey is a Student Research Assistant contributing to Digital Forensics course development, helping craft example-driven content that strengthens student understanding.",
    linkedinUrl: "https://www.linkedin.com/in/ramika-p-8879b4263/",
  },
];
