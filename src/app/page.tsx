"use client";

import { Mail, Linkedin, Github, Instagram, Facebook, Download, Code, Palette, Smartphone, Globe, Server, Database } from "lucide-react";

const DATA = {
  name: "Binit Ghosh",
  role: "Developer • Designer • Creative Technologist",
  location: "Kolkata, India",
  summary: "Versatile developer and creative professional blending design, development, and editing to deliver impactful solutions across digital media.",
  profileImageUrl: "https://i.ibb.co/ZzT0wN3L/Untitled-1.jpg",
  services: [
    {
      title: "Web Development",
      description: "Modern, responsive, and interactive websites using React, Next.js, GSAP, and Framer Motion.",
      icon: <Code className="h-6 w-6" />
    },
    {
      title: "Creative & Visual Design",
      description: "UI/UX, branding, and social media content creation tailored for engagement and usability.",
      icon: <Palette className="h-6 w-6" />
    },
    {
      title: "Video & Photo Editing",
      description: "Professional editing with advanced visual effects, animation, color grading, and storytelling.",
      icon: <Smartphone className="h-6 w-6" />
    },
    {
      title: "Cinematography & Photography",
      description: "Filmed and photographed influencers and participated in Canon photograph fest.",
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: "Backend Systems",
      description: "Creating robust and secure server-side applications.",
      icon: <Server className="h-6 w-6" />
    },
    {
      title: "Database Design",
      description: "Designing efficient database schemas and optimization strategies.",
      icon: <Database className="h-6 w-6" />
    }
  ],
  skills: [
    "Project Management",
    "Video Editing",
    "Web Development",
    "Project Planning",
    "Idea Development & Brainstorming",
    "Attention to Detail",
    "Adaptability",
    "Decision-Making",
    "Time Management",
    "Excellent Communication",
    "Multitasking",
    "Virtual Assistance",
    "Online Tutoring",
    "Podcast Production",
    "Photography Services",
    "Voice-over Talent",
    "Social Media Content Creation"
  ],
  projects: [
    {
      title: "The Arcade",
      description: "An animated dynamic e-commerce store for gaming accessories and tech items.",
      tags: ["Jsp", "css3", "javascript", "servelet"],
      link: "https://github.com/binit242/The-ARCADE-Original1.git",
      imageUrl: "https://i.ibb.co/rKLcwBsc/Screenshot-2025-01-12-193925.png"
    },
    {
      title: "The Accord",
      description: "A device-independent contact manager with cloud storage and authentication.",
      tags: ["html5", "css3", "javascript", "springboot", "thymleaf", "ajax", "cloudinary"],
      link: "https://drive.google.com/drive/folders/1CGkfceSY6GpCazSDfkNX9CZR1qeE7GDr?usp=sharing",
      imageUrl: "https://i.ibb.co/Jj0P8NJp/Screenshot-2025-06-03-095246.png"
    },
    {
      title: "The Oblog",
      description: "A simple tech-stack site design using HTML, CSS, and jQuery.",
      tags: ["html5", "scss", "javascript"],
      link: "https://github.com/binit242/Generic_futurestic-site-.git",
      imageUrl: "https://i.ibb.co/Fk2B7b18/image.png"
    },
    {
      title: "3D Portfolio",
      description: "A portfolio showcasing modern web design standards and 3D models.",
      tags: ["Tailwind", "Typescript", "Spline"],
      link: "https://binit-ghosh-3dportfolio-primary.netlify.app",
      imageUrl: ""
    },
    {
      title: "The Passmate",
      description: "A theoretical password manager optimized for PC.",
      tags: ["Html5", "Css3", "Javascript"],
      link: "https://github.com/binit242/PASSWORD_MGR.git",
      imageUrl: "https://i.ibb.co/cKx6mrQr/Screenshot-2025-07-11-133918.png"
    },
    {
      title: "The Design Portfolio",
      description: "A design and video editing portfolio developed with Tailwind and React.",
      tags: ["Tailwind", "ReactJs", "Rive", "Reactbits"],
      link: "https://github.com/binit242/Portfolio-Design.git",
      imageUrl: "https://i.ibb.co/S4rN2yQJ/Screenshot-2025-07-21-132021.png"
    }
  ],
  experience: [
    {
      role: "Freelancer",
      organization: "Remote",
      period: "01/2022 — Current",
      points: [
        "Created content for websites, blogs, and social media accounts.",
        "Implemented VFX, animation, color correction, and audio mixing.",
        "Organized and archived media assets for efficiency."
      ]
    },
    {
      role: "Digital Asset Reviewer",
      organization: "Indeed, Kolkata",
      period: "07/2023 — 07/2023",
      points: [
        "Researched industry trends and provided recommendations for ads.",
        "Audited digital assets in databases and improved reach.",
        "Maintained accurate review records for ad content."
      ]
    }
  ],
  education: [
    {
      school: "Bachelor of Computer Applications, Techno India Institute of Technology, Kolkata, WB, India",
      detail: "05/2025"
    },
    {
      school: "ThakurNagar High School, North 24 Pgs, WB, India",
      detail: "05/2022"
    },
    {
      school: "Gaighata High School, Gaighata, North 24 Pgs, WB, India",
      detail: "05/2020"
    }
  ],
  contact: {
    email: "binit108walla@gmail.com",
    phone: "7076494138",
    website: "https://binit-ghosh-3dportfolio-primary.netlify.app"
  },
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/binit-ghosh",
      icon: <Linkedin className="h-5 w-5" />
    },
    {
      name: "GitHub",
      url: "https://github.com/binit242",
      icon: <Github className="h-5 w-5" />
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/",
      icon: <Instagram className="h-5 w-5" />
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/",
      icon: <Facebook className="h-5 w-5" />
    }
  ]
};

export default function BinitGhoshCV() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="sticky top-0 z-10 bg-white border-b border-gray-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">{DATA.name}</h1>
            <p>{DATA.role}</p>
          </div>
          <button
            className="flex items-center gap-2 px-4 py-2 rounded bg-gray-800 text-white hover:bg-gray-700"
            onClick={() => window.open("resume FINAL.pdf (1).pdf", "_blank")}
          >
            <Download className="h-4 w-4" />
            Download Resume
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Profile Section */}
        <section className="text-center mb-12">
          <img
            src={DATA.profileImageUrl}
            alt={DATA.name}
            className="rounded-full w-32 h-32 mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold">{DATA.name}</h1>
          <p className="text-gray-600">{DATA.role}</p>
          <p className="text-gray-600">{DATA.summary}</p>
          <div className="flex justify-center gap-4 mt-4">
            {DATA.socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DATA.services.map((service, index) => (
              <div key={index} className="border rounded-lg p-4 bg-white shadow hover:shadow-lg">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white border rounded-full text-gray-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DATA.projects.map((project, index) => (
              <div key={index} className="border rounded-lg p-4 bg-white shadow hover:shadow-lg">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="rounded-t-lg w-full h-48 object-cover mb-4"
                  />
                ) : (
                  <div className="bg-gray-200 rounded-t-lg w-full h-48 flex items-center justify-center mb-4">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  View Project
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <div className="space-y-4">
            {DATA.experience.map((exp, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-bold">{exp.role}</h3>
                <p className="text-gray-600">{exp.organization} • {exp.period}</p>
                <ul className="list-disc pl-5 text-gray-600">
                  {exp.points.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="space-y-4">
            {DATA.education.map((edu, index) => (
              <div key={index} className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-bold">{edu.school}</h3>
                <p className="text-gray-600">{edu.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Mail className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <h3 className="font-bold">Email</h3>
              <a href={`mailto:${DATA.contact.email}`} className="text-gray-600 hover:text-blue-600">
                {DATA.contact.email}
              </a>
            </div>
            <div className="text-center">
              <Smartphone className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <h3 className="font-bold">Phone</h3>
              <a href={`tel:${DATA.contact.phone}`} className="text-gray-600 hover:text-blue-600">
                {DATA.contact.phone}
              </a>
            </div>
            <div className="text-center">
              <Globe className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <h3 className="font-bold">Website</h3>
              <a href={DATA.contact.website} className="text-gray-600 hover:text-blue-600">
                {DATA.contact.website}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-4">
        <div className="text-center">
          <p>© {new Date().getFullYear()} {DATA.name}. All rights reserved.</p>
          <p className="text-gray-400">Designed and built with ❤️ by Binit</p>
        </div>
      </footer>
    </div>
  );
}