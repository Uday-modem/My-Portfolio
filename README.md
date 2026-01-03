🚀 Full-Stack IoT Developer Portfolio
Live Demo: https://my-portfolio-blue-delta-gl8a1kp0tt.vercel.app/

📋 Table of Contents
Overview

Features

Tech Stack

Project Structure

Installation

Usage

Sections

Customization

Performance Metrics

Deployment

Contact

👨‍💻 Overview
An interactive, responsive portfolio showcasing full-stack web development expertise and IoT projects. Built with vanilla HTML, CSS, and JavaScript—no frameworks or dependencies. Features animated hero sections, 3D tech stack ring, dynamic project gallery, and drag-and-drop image timeline.

Author: Modem Uday Kiran Kumar
Role: Full-Stack Developer | IoT Enthusiast | Problem Solver
Education: Final Year B.Tech ECE, JNTUA
Training: Kodnest Full-Stack Java Development

✨ Features
🎨 Visual Design
✅ Dark/Light Theme Toggle - Auto-detect OS preference or manual control

✅ Smooth Animations - Floating shapes, spinning ring, wipe text effects

✅ Responsive Design - Mobile, tablet, desktop optimized

✅ Backdrop Blur Effects - Modern glassmorphism navbar

✅ Color-coded UI - Semantic color tokens with CSS variables

🎯 Interactive Components
✅ 3D Tech Stack Ring - Draggable rotating tech stack visualization

✅ Animated Wipe Text - Role/title auto-rotation with smooth transitions

✅ Project Modal - Click cards to view detailed project information

✅ Floating Ring Animation - Profile image with rotating gradient border

✅ Drag-and-Drop Gallery - "My Journey" scattered photo timeline

✅ Mobile Menu - Hamburger navigation for mobile devices

📱 Responsive Breakpoints
Desktop: 1024px+ (Full grid layout)

Tablet: 768px - 1023px (2-column layout)

Mobile: < 480px (Single column, stacked)

🛠️ Tech Stack
Layer	Technology
Frontend	HTML5, CSS3 (Vanilla - No frameworks)
Scripting	Vanilla JavaScript (ES6+)
Icons	Font Awesome 6.4.0
Deployment	Vercel
Version Control	Git/GitHub
Fonts	System fonts (Geist, Inter, Segoe UI)
No External Dependencies
✅ No React, Vue, Angular

✅ No Bootstrap or Tailwind

✅ No jQuery or libraries

✅ Pure JavaScript for interactivity

✅ CSS Grid & Flexbox for layout

📂 Project Structure
text
portfolio/
├── index.html           # Main HTML file (13KB)
├── styles.css          # Optimized CSS (650 lines, 46KB)
├── script.js           # JavaScript logic (16KB)
├── README.md           # This file
├── .gitignore          # Git configuration
└── assets/
    ├── logo.png
    ├── profile.png
    ├── project1.png    # Smart University System
    ├── project2.png    # Health Vital Dashboard
    ├── project3.png    # IoT Home Automation
    ├── smartuniversitymanagementsystemcircuitdiagram.jpg
    ├── UI_Designing.png
    ├── homeAutomation.jpg
    ├── FullStackDevelopment.png
    ├── hackathon.png
    └── MyResume.pdf
🚀 Installation
Prerequisites
Modern web browser (Chrome, Firefox, Safari, Edge)

No server or build tools required

Local Setup
bash
# Clone the repository
git clone https://github.com/Uday-modem/portfolio.git
cd portfolio

# Open in browser
open index.html
# OR
python -m http.server 8000  # Local server (Python 3)
# OR
npx http-server             # Using Node.js
Then visit: http://localhost:8000

📖 Usage
Viewing the Portfolio
Open live link: https://my-portfolio-blue-delta-gl8a1kp0tt.vercel.app/

Navigate using sticky navbar or scroll

Click projects to view modals

Toggle theme button for dark/light mode

Drag tech stack ring to rotate

Drag images in "My Journey" section

Navigation
About - Hero section with intro and CTA

Tech Stack - 3D rotating technology visualization

Projects - Featured projects with details

Achievements - Key accomplishments and certifications

Gallery - Visual timeline of work

Contact - Links to email, LinkedIn, GitHub

🎯 Sections Breakdown
1️⃣ Navbar (Fixed Header)
Logo with hover effect

Navigation links with active states

Theme toggle button

Mobile hamburger menu

Backdrop blur effect

2️⃣ Hero Section (About)
Animated gradient shapes

Dynamic wipe-text role switching

Quick facts (Languages, Education, Training)

Floating profile image with spinning ring

Primary CTA: "Let's Build Together"

Secondary CTA: Download Resume

3️⃣ Tech Stack (3D Ring)
10 technologies: Java, Spring, JavaScript, Node.js, SQL, IoT, ESP32, Python, Git, React

Draggable 3D rotation

Hover effects on tech items

Perspective 3D transform

4️⃣ Projects Gallery
3 featured projects displayed in grid

Hover card animations

Modal popups with full details:

Project title and role

Duration (e.g., "Aug 2024 - Present")

Description and tech stack

Skill tags

Projects Included:

Smart University Management System (Spring Boot + React + ESP32)

Health Vital Dashboard (Node.js + MongoDB + React)

IoT Home Automation with Gas Detection (Blynk + ESP32)

5️⃣ Achievements Section
3 key accomplishments:

TCS CodeVita S13 (DSA & Problem-Solving)

NPTEL Certified (IoT & Embedded Systems)

Hackathon Veteran (12-Hour Hackathon)

Icon + title + description format

Fade-in animation on scroll

6️⃣ My Journey (Gallery)
Scattered, draggable images

Visible projects and milestones

Rotated positioning for visual interest

Drag to reposition

7️⃣ Contact Section
3 primary CTAs:

Email button

LinkedIn profile link

GitHub profile link

Clean, minimal design

8️⃣ Footer
Copyright notice

Built/designed by credit

🎨 Customization
Change Theme Colors
Edit :root in styles.css:

css
:root {
  --color-primary: #2180008D;        /* Main brand color */
  --color-primary-hover: #1D7480;    /* Hover state */
  --color-text: #134252;              /* Text color */
  --color-background: #FCF8F9;        /* Background */
}
Update Your Info
Edit index.html:

Line 47: Your name and title

Line 52-54: Role options (wipe text)

Line 55: Bio/description

Line 57-59: Quick facts

Line 62: Profile image

Line 68: Resume PDF link

Add/Edit Projects
In index.html, modify project grid (lines 150-180):

xml
<div class="gallery-item project-card" onclick="openModal('projectName')">
  <img src="projectImage.png" alt="Project" class="gallery-img">
  <div class="gallery-overlay">
    <h3>Project Title</h3>
    <p>Technology Stack</p>
  </div>
</div>
Then add modal data in script.js.

Change Animations
Edit keyframes in styles.css:

@keyframes float - Shape floating animation

@keyframes spinRing - Profile ring rotation

@keyframes floatImage - Profile image bob

@keyframes slideUp - Modal entrance

📊 Performance Metrics
Metric	Value	Status
File Size (HTML)	13 KB	✅ Lightweight
File Size (CSS)	46 KB	✅ Optimized
File Size (JS)	16 KB	✅ Minimal
Total Bundle	~75 KB	✅ Fast
Dependencies	0 (except Font Awesome)	✅ No bloat
Lighthouse Score	95+	✅ Excellent
Mobile Friendly	Yes	✅ Responsive
Dark Mode	Yes	✅ Supported
CSS Optimization History
Original: 1950 lines

Cleaned: 650 lines

Reduction: 67% smaller

Impact: ZERO visual changes

🚀 Deployment
Vercel (Current)
bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Your project is live at:
# https://my-portfolio-blue-delta-gl8a1kp0tt.vercel.app/
GitHub Pages
bash
# Push to GitHub
git add .
git commit -m "Portfolio update"
git push origin main

# Enable GitHub Pages in repo settings
# Select: main branch, root folder
# Your site: https://username.github.io/portfolio
Netlify
bash
# Drag and drop files to Netlify
# OR connect GitHub repo for auto-deploy
🌙 Dark Mode
Auto Detection
Portfolio automatically detects OS preference:

Uses @media (prefers-color-scheme: dark)

Light mode on Windows/bright, Dark mode on macOS/dark

Manual Toggle
Click theme button in navbar to override OS setting:

Uses [data-color-scheme="dark"] attribute

Preference persists in current session

🔧 Key JavaScript Features
Theme Toggle
javascript
// Toggle dark/light mode
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
3D Ring Rotation
javascript
// Drag to rotate tech stack ring
const ring = document.getElementById('techRing');
// Tracks mouse movement and applies 3D rotation
Wipe Text Animation
javascript
// Auto-rotate role titles with wipe effect
// Cycles through: Full Stack Developer → IoT Enthusiast → Problem Solver
Project Modal
javascript
// Click project card → Opens modal with details
function openModal(projectName) { /* ... */ }
Scatter Gallery
javascript
// Drag images in "My Journey" section
// Draggable with mouse tracking
📱 Responsive Behavior
Desktop (1024px+)
Full navigation bar

3-column project grid

Side-by-side hero layout

Full 3D ring visualization

Tablet (768px - 1023px)
Navbar collapses to hamburger

2-column project grid

Centered hero layout

Smaller tech stack ring

Mobile (< 480px)
Full hamburger menu

1-column layout

Stacked buttons

Smaller fonts and spacing

Optimized touch targets

🎯 SEO & Meta
xml
<title>Portfolio - Full Stack IoT Developer</title>
<meta name="description" content="Interactive portfolio showcasing full-stack web development and IoT projects">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
📝 License
This portfolio is open source. Feel free to:

✅ Fork and customize

✅ Use as template for your portfolio

✅ Learn from the code

✅ Share with others

Credit appreciated but not required!

🤝 Contributing
Want to suggest improvements?

Fork the repository

Create feature branch: git checkout -b feature/improvement

Commit changes: git commit -m "Add improvement"

Push to branch: git push origin feature/improvement

Submit pull request

📧 Contact
Modem Uday Kiran Kumar

📧 Email: 232h5a0411@audisankara.ac.in

💼 LinkedIn: modem-uday-kiran-kumar

🐙 GitHub: Uday-modem

🌐 Portfolio: Live Link

🙏 Acknowledgments
Font Awesome - Icon library

Vercel - Hosting platform

Kodnest - Full-stack training

JNTUA - Academic institution

📅 Last Updated
January 4, 2026

Recent Changes
✅ CSS optimized (1950 → 650 lines)

✅ Removed duplicate dark mode variables

✅ Enhanced mobile responsiveness

✅ Added wipe text animation

✅ Implemented 3D tech stack ring

✅ Created project modal system

✅ Built drag-and-drop gallery

Made with ❤️ by Modem Uday Kiran Kumar | Deployed on Vercel
