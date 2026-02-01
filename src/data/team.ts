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
  courses: string[];
  highlights: string[];
  bio: string;
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
    courses: ["Cybersecurity Fundamentals", "Secure Systems", "Research Seminar"],
    highlights: [
      "Program vision and strategic partnerships",
      "Curriculum alignment across outcomes",
      "Research integration and assessment",
    ],
    bio:
      "Dr. Zhang oversees CyberQuest planning and execution, ensuring that research, teaching, and outreach are tightly aligned with project goals and student outcomes.",
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
    courses: ["Ethical Hacking", "Privacy & Policy", "Secure Coding"],
    highlights: [
      "Outreach partnerships and recruitment",
      "Ethical practice and governance",
      "Student engagement initiatives",
    ],
    bio:
      "Dr. Raja focuses on responsible cybersecurity practices and inclusive learning, connecting CyberQuest to local and regional community partners.",
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
    courses: ["Applied Cryptography", "Secure Software Design", "Algorithms"],
    highlights: [
      "Lab module development",
      "Student research mentorship",
      "Technical review and quality assurance",
    ],
    bio:
      "Dr. Li ensures that CyberQuest students gain a deep, practical understanding of cryptography and secure software through applied labs and projects.",
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
    courses: ["Network Security", "Systems Security", "Capstone Design"],
    highlights: [
      "Program assessment and evaluation",
      "Learning outcomes validation",
      "Continuous improvement strategy",
    ],
    bio:
      "Dr. Yu Zhang develops CyberQuest assessment plans that measure growth, mastery, and student impact over time.",
  },
];
