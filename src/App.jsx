import AOS from "aos";
import "aos/dist/aos.css";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { TypeAnimation } from 'react-type-animation';
const projects = [
  {
    title: "Dynamic Portfolio Website",

    description:
      "A futuristic responsive portfolio website built using React and deployed on cloud platforms.",

    github: "https://github.com/",

    live: "https://vercel.com/",
  },

  {
    title: "Attendance Management System",

    description:
      "Cloud-based attendance tracking system with authentication and dashboard features.",

    github: "https://github.com/",

    live: "https://firebase.google.com/",
  },

  {
    title: "Cloud Hosting Project",

    description:
      "Website deployment and hosting using modern cloud technologies and platforms.",

    github: "https://github.com/",

    live: "https://render.com/",
  },
];
const currentHour = new Date().getHours();

let greeting = "";

if(currentHour < 12){
  greeting = "Good Morning";
}
else if(currentHour < 18){
  greeting = "Good Afternoon";
}
else{
  greeting = "Good Evening";
}
const particlesInit = async (main) => {
  await loadFull(main);
};
const ContactForm = () => {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await addDoc(collection(db, "messages"), {

        name,
        email,
        message,
        createdAt: new Date(),

      });

      alert("Message Sent Successfully!");

      setName("");
      setEmail("");
      setMessage("");

    } catch (error) {

      console.error(error);

      alert("Error sending message");

    }
  };
    return (

    <form className="contact-form" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>

      <button type="submit">Send Message</button>

    </form>
  );
};
function App() {
    useEffect(() => {

    AOS.init({
      duration: 1200,
    });

  }, []);
  return (
    <>
  <Particles
    id="tsparticles"
    init={particlesInit}
    options={{
      background: {
        color: {
          value: "transparent",
        },
      },

      fpsLimit: 60,

      particles: {
        color: {
          value: "#38bdf8",
        },

        links: {
          color: "#38bdf8",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },

        move: {
          enable: true,
          speed: 1,
        },

        number: {
          value: 40,
        },

        opacity: {
          value: 0.4,
        },

        size: {
          value: { min: 1, max: 4 },
        },
      },
    }}
  />
    <div>
      
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Aishwary</h2>

       <ul className="nav-links">
  <li><a href="#home">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#skills">Skills</a></li>
  <li><a href="#projects">Projects</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home" data-aos="zoom-in">
<h1>
  {greeting}, I'm <span>Aishwary Jaiswal</span>
</h1>

       <TypeAnimation
  sequence={[
    'Cloud Computing Intern',
    2000,
    'React Developer',
    2000,
    'Problem Solver',
    2000,
    'Tech Enthusiast',
    2000,
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
  className="typing-text"
/>

       <div className="hero-buttons">

  <button>
    Explore My Work
  </button>

  <a href="/CV.pdf" download>
    <button>
      Download Resume
    </button>
  </a>

</div>
      </section>
      {/* About Section */}

      <section className="about" id="about" data-aos="fade-up">
        <h2>About Me</h2>

        <p>
          I am a Computer Science student passionate about
          cloud computing, web development, and building
          real-world projects. Currently working as a Cloud
          Computing Intern and continuously learning modern
          technologies.
        </p>
      </section>
            {/* Skills Section */}

      <section className="skills" id="skills" data-aos="fade-up">

        <h2>My Skills</h2>

        <div className="skills-container">

          <div className="skill-card">
            <h3>Frontend</h3>
            <p>HTML, CSS, JavaScript, React</p>
          </div>

          <div className="skill-card">
            <h3>Cloud</h3>
            <p>AWS Basics, Firebase, Deployment</p>
          </div>

          <div className="skill-card">
            <h3>Programming</h3>
            <p>C++, Python, Problem Solving</p>
          </div>

        </div>

      </section>
            {/* Projects Section */}

      <section className="projects" id="projects" data-aos="fade-up">

        <h2>Projects</h2>

        <div className="projects-container">

  {projects.map((project, index) => (

    <div className="project-card" key={index}>

      <h3>{project.title}</h3>

      <p>{project.description}</p>

     <div className="project-buttons">

  <a href={project.github} target="_blank">
    <button>GitHub</button>
  </a>

  <a href={project.live} target="_blank">
    <button>Live Demo</button>
  </a>

</div>
    </div>

  ))}

</div>

      </section>
            {/* Contact Section */}

      <section className="contact" id="contact" data-aos="fade-up">

        <h2>Contact Me</h2>
        <ContactForm />

       <div className="social-icons">

  <a href="https://github.com/" target="_blank">
    <FaGithub />
  </a>

  <a href="https://linkedin.com/" target="_blank">
    <FaLinkedin />
  </a>

  <a href="mailto:your@email.com">
    <FaEnvelope />
  </a>

</div>

      </section>

      {/* Footer */}

      <footer className="footer">
        <p>© 2026 Aishwary Jaiswal | All Rights Reserved</p>
      </footer>
      </div>

    </>

  );
}

export default App;