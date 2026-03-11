import {
  BookOpen,
  Lock,
  Network,
  GraduationCap,
  Search,
  Target,
  Cloud,
  Gamepad2,
  Monitor,
  Brain,
  Leaf,
  HeartPulse,
} from "lucide-react";

export type CourseType = "CR" | "E";

export interface Course {
  name: string;
  type: CourseType;
  credits: number;
  description: string;
  icon: typeof BookOpen;
  topics: string[];
}

export const courses: Course[] = [
  {
    name: "Cybersecurity Fundamentals",
    type: "CR",
    credits: 3,
    description:
      "Case studies, threat modeling, and risk assessment forming the foundation of cybersecurity knowledge.",
    icon: BookOpen,
    topics: ["Threat Modeling", "Risk Assessment", "Case Studies"],
  },
  {
    name: "Introduction to Cryptography",
    type: "CR",
    credits: 3,
    description:
      "Encryption algorithms, hash functions, and key management techniques for secure communication.",
    icon: Lock,
    topics: ["Encryption", "Hash Functions", "Key Management"],
  },
  {
    name: "Network Security with Lab",
    type: "CR",
    credits: 4,
    description: "Firewalls, VPNs, intrusion detection systems, and hands-on lab simulations.",
    icon: Network,
    topics: ["Firewalls", "VPNs", "IDS", "Lab Simulations"],
  },
  {
    name: "Cybersecurity Capstone Seminar",
    type: "CR",
    credits: 2,
    description:
      "Real-world projects integrating ethical, legal, and technical cybersecurity challenges.",
    icon: GraduationCap,
    topics: ["Real-world Projects", "Ethics", "Legal Issues"],
  },
  {
    name: "Digital Forensics",
    type: "E",
    credits: 3,
    description: "Evidence preservation and analysis using tools like FTK and SleuthKit.",
    icon: Search,
    topics: ["FTK", "SleuthKit", "Evidence Preservation"],
  },
  {
    name: "Penetration Testing",
    type: "E",
    credits: 3,
    description: "Ethical hacking methodologies and vulnerability assessments for system security.",
    icon: Target,
    topics: ["Ethical Hacking", "Vulnerability Assessment"],
  },
  {
    name: "Cloud Security",
    type: "E",
    credits: 3,
    description:
      "Cloud security models, multi-tenant access control, and securing cloud infrastructure.",
    icon: Cloud,
    topics: ["Cloud Models", "Multi-tenant Security", "Access Control"],
  },
];

export interface ExperientialTask {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: typeof Gamepad2;
  highlights: string[];
}

export const experientialTasks: ExperientialTask[] = [
  {
    id: "xr",
    title: "Extended Reality & Game-based Pedagogy",
    subtitle: "Task 2.1",
    description:
      "VR/AR/MR simulations and gamified learning platforms create immersive cybersecurity scenarios — from threat detection exercises to penetration testing in virtual environments.",
    icon: Gamepad2,
    highlights: [
      "VR/AR/MR simulations",
      "Gamified learning platforms",
      "Immersive threat detection",
      "Virtual penetration testing",
    ],
  },
  {
    id: "collab",
    title: "Collaborative Learning & Virtual Classroom",
    subtitle: "Task 2.2",
    description:
      "Remote labs, virtual classrooms, and problem-based / project-based learning (PBL) with reflective practice. Tools like CySecLearn enable hands-on network intrusion detection.",
    icon: Monitor,
    highlights: [
      "Remote labs & virtual classrooms",
      "Problem-based learning (PBL)",
      "CySecLearn platform",
      "Reflective practice",
    ],
  },
];

export interface ResearchArea {
  title: string;
  icon: typeof Brain;
  description: string;
  buddyDetail: string;
  topics: string[];
}

export const researchAreas: ResearchArea[] = [
  {
    title: "AI & Cybersecurity",
    icon: Brain,
    description:
      "Federated learning, GANs for intrusion detection, and adversarial attack/defense scenarios.",
    buddyDetail:
      "Fisk undergraduates partner with Meharry MS/PhD students and faculty mentors to explore AI-driven security through structured mentorship and shared lab access.",
    topics: ["Federated Learning", "GANs", "Adversarial ML", "Mentorship"],
  },
  {
    title: "Data Science & Environmental Monitoring",
    icon: Leaf,
    description:
      "Sensor data, satellites, and IoT for air/water quality monitoring, deforestation tracking, and climate anomaly detection.",
    buddyDetail:
      "Cross-institutional buddy pairs conduct capstone research using shared datasets, with regular progress reviews and co-supervised projects.",
    topics: ["IoT Sensors", "Satellite Data", "Climate Analytics", "Capstone Projects"],
  },
  {
    title: "Security & Privacy in Healthcare",
    icon: HeartPulse,
    description:
      "Post-quantum cryptography, homomorphic encryption, and differential privacy for protecting healthcare data.",
    buddyDetail:
      "Buddies collaborate across Fisk and Meharry labs on real-world healthcare data challenges, with access to shared resources and interdisciplinary guidance.",
    topics: [
      "Post-quantum Crypto",
      "Homomorphic Encryption",
      "Differential Privacy",
      "Shared Labs",
    ],
  },
];
