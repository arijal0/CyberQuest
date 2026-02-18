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
    title: "Professor, Fisk University",
    department: "Computer Science",
    photo: "/placeholder.svg",
    shortBio: "Leads the CyberQuest vision and coordinates faculty research priorities.",
    focus: ["Cybersecurity education", "Secure systems", "Student mentorship"],
    education: ["Ph.D. in Computer Science", "M.S. in Information Assurance"],
    coursesDescription:
      "Dr. Zhang teaches Cybersecurity Fundamentals, Secure Systems, and a Research Seminar, integrating project-based learning and research mentorship with core security concepts.",
    highlights: [
      "Program vision and strategic partnerships",
      "Curriculum alignment across outcomes",
      "Research integration and assessment",
    ],
    bio: "Dr. Zhang oversees CyberQuest planning and execution, ensuring that research, teaching, and outreach are tightly aligned with project goals and student outcomes.",
    email: "nzhang@fisk.edu",
    // Replace with actual Google Scholar profile URL (e.g. https://scholar.google.com/citations?user=...)
    googleScholarUrl: "https://scholar.google.com/citations?user=NING_ZHANG_SCHOLAR_ID",
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
    role: "Co-Investigator",
    title: "Professor, Fisk University",
    department: "Computer Science",
    photo: "/placeholder.svg",
    shortBio: "Leads assessment strategies and outcome-based evaluation.",
    focus: ["Network security", "Systems thinking", "Assessment & evaluation"],
    education: ["Ph.D. in Computer Engineering", "M.S. in Computer Science"],
    coursesDescription:
      "Dr. Yu Zhang teaches Network Security, Systems Security, and Capstone Design, connecting technical content with program-level assessment and learning outcomes.",
    highlights: [
      "Program assessment and evaluation",
      "Learning outcomes validation",
      "Continuous improvement strategy",
    ],
    bio: "Dr. Yu Zhang develops CyberQuest assessment plans that measure growth, mastery, and student impact over time.",
    googleScholarUrl: "https://scholar.google.com/citations?hl=en&user=p6z9Id4AAAAJ",
  },
];
