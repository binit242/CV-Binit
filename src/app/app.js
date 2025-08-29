import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Phone,
  Globe,
  Instagram,
  Facebook,
  Link as LinkIcon,
  ArrowRight,
  Download,
  Code2,
  Palette,
  Layers,
  Rocket,
  ExternalLink,
} from "lucide-react";

const DATA = {
  name: "Binit Ghosh",
  role: "Developer • Designer • Creative Technologist",
  location: "Kolkata, India",
  summary:
    "Versatile developer and creative professional blending design, development, and editing to deliver impactful solutions across digital media.",
  email: "binitghosh326@gmail.com",
  phone: "7076494138",
  website: "https://binit-ghosh-3dportfolio-primary.netlify.app",
  socials: {
    linkedin:
      "https://www.linkedin.com/in/binit-ghosh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/binit242",
    instagram:
      "https://www.instagram.com/p/DCMP6LEy1xl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    facebook: "https://www.facebook.com/kutu.ghosh.980",
  },
  services: [
    { icon: Code2, title: "Web Development", blurb: "Modern, responsive, and interactive websites using React, Next.js, GSAP, and Framer Motion." },
    { icon: Palette, title: "Creative & Visual Design", blurb: "UI/UX, branding, and social media content creation tailored for engagement and usability." },
    { icon: Layers, title: "Video & Photo Editing", blurb: "Professional editing with advanced visual effects, animation, color grading, and storytelling." },
    { icon: Rocket, title: "Cinematography & Photography", blurb: "I've filmed and photgraphed several influancers and also did landscape photography and participated canon photograph fest." },
  ],
  skills: [
    "Project Management","Video Editing","Web Development","Project Planning","Idea Development & Brainstorming","Attention to Detail","Adaptability","Decision-Making","Time Management","Excellent Communication","Multitasking","Virtual Assistance","Online Tutoring","Podcast Production","Photography Services","Voice-over Talent","Social Media Content Creation",
  ],
  projects: [
    { title: "The Arcade", tags: ["html5", "css3", "javascript" , "springboot" , "thymleaf" , "ajax" , "cloudinary"], desc: "The arcade is a simple but elegant animated dynamic ecom store mainly for gaming accesories and tech items that i created with my group ankita thapa,sumanta paul,modhuja modak,sourin paul,rahul deule as a group project for our minor projects.", link: "https://github.com/binit242/The-ARCADE-Original1.git" },
    { title: "The Oblog", tags: ["html5", "scss" , "javascript"], desc: "a simple general simple tech-stack site design done using html,css,jquery only.", link: "https://github.com/binit242/Generic_futurestic-site-.git" },
    { title: "Digital Asset Management (Indeed)", tags: ["Auditing", "Digital Assets"], desc: "Performed audits, maintained databases, and optimized digital assets for better ad reach and effectiveness.", link: "#" },
  ],
  experience: [
    { role: "Freelancer", org: "Remote", period: "01/2022 — Current", points: ["Created content for websites, blogs, and social media accounts.","Implemented VFX, animation, color correction, and audio mixing.","Organized and archived media assets for efficiency.","Produced motion graphics for explainer and animated videos.","Collaborated with designers on synchronized audio and visual effects.","Used Git for source code management and collaboration."]},
    { role: "Digital Asset Reviewer", org: "Indeed, Kolkata", period: "07/2023 — 07/2023", points: ["Researched industry trends and provided recommendations for ads.","Audited digital assets in databases and improved reach.","Maintained accurate review records for ad content."]},
  ],
  education: [
    { school: "Bachelor of Computer Applications, Techno India Institute of Technology, Kolkata, WB, India", detail: "05/2022" },
    { school: "ThakurNagar High School, North 24 Pgs, WB, India", detail: "05/2022" },
    { school: "Gaighata High School, Gaighata, North 24 Pgs, WB, India", detail: "05/2020" },
  ],
  resumePdfUrl: "/resume FINAL.pdf",
};

const Section = ({ id, title, children }) => (
  <section id={id} className="max-w-6xl mx-auto px-6 py-16">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
    >
      {title}
    </motion.h2>
    {children}
  </section>
);

const Card = ({ children }) => (
  <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">{children}</div>
);

export default function CVWebsite() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Hero */}
      <section id="hero" className="max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-5xl font-extrabold">{DATA.name}</motion.h1>
        <p className="mt-4 text-xl text-white/70">{DATA.role}</p>
        <p className="mt-6 max-w-2xl mx-auto text-white/70">{DATA.summary}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href={`mailto:${DATA.email}`} className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500">Email</a>
          <a href={DATA.socials.linkedin} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500">LinkedIn</a>
          <a href={DATA.socials.github} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700">GitHub</a>
          <a href={DATA.socials.instagram} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-pink-600 hover:bg-pink-500 flex items-center gap-2"><Instagram className="w-4 h-4"/>Instagram</a>
          <a href={DATA.socials.facebook} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-blue-800 hover:bg-blue-700 flex items-center gap-2"><Facebook className="w-4 h-4"/>Facebook</a>
          {DATA.resumePdfUrl && <a href={DATA.resumePdfUrl} className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 flex items-center gap-2"><Download className="w-4 h-4"/> Download CV</a>}
        </div>
      </section>

      {/* Services */}
      <Section id="services" title="Services">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DATA.services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Card key={i}>
                <div className="flex items-center gap-3 text-cyan-300"><Icon className="w-6 h-6"/><span className="font-semibold">{s.title}</span></div>
                <p className="mt-3 text-white/70">{s.blurb}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <div className="flex flex-wrap gap-3">
          {DATA.skills.map((sk,i) => <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm">{sk}</span>)}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DATA.projects.map((p,i) => (
            <Card key={i}>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-white/70">{p.desc}</p>
              <div className="mt-2 flex flex-wrap gap-2">{p.tags.map((t,idx) => <span key={idx} className="px-2 py-1 bg-white/10 rounded text-xs">{t}</span>)}</div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <div className="space-y-8">
          {DATA.experience.map((e,i) => (
            <Card key={i}>
              <div className="flex justify-between items-center flex-wrap gap-2"><span className="font-semibold">{e.role} • {e.org}</span><span className="text-sm text-white/60">{e.period}</span></div>
              <ul className="list-disc list-inside mt-2 space-y-1 text-white/70">{e.points.map((pt,idx)=><li key={idx}>{pt}</li>)}</ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title="Education">
        <div className="grid md:grid-cols-2 gap-6">
          {DATA.education.map((ed,i)=>(<Card key={i}><div className="font-semibold">{ed.school}</div><div className="text-sm text-white/60">{ed.detail}</div></Card>))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <Card>
          <p>Email: {DATA.email}</p>
          <p className="mt-2">Phone: {DATA.phone}</p>
          <a href={DATA.website} target="_blank" rel="noreferrer" className="mt-2 block text-cyan-400">{DATA.website}</a>
        </Card>
      </Section>

      {/* Footer */}
      <footer className="py-6 border-t border-white/10 text-center text-white/60">© {new Date().getFullYear()} {DATA.name}. All rights reserved.</footer>
    </div>
  );
}

/*
====================
HOW TO HOST FOR FREE
====================
1. Create a new project with Next.js or Vite + React.
   Example: npx create-next-app cv-website

2. Copy this code into `app/page.tsx` (Next.js App Router) or `src/App.jsx` (Vite).

3. Place your `resume FINAL.pdf` file into the `public/` folder.

4. Push the repo to GitHub.

5. Free Hosting Options:
   - Vercel (recommended for Next.js): vercel.com
   - Netlify: netlify.com
   - GitHub Pages (works best with Vite/CRA).

6. After deployment, you’ll get a public link you can share with anyone anytime.
*/
