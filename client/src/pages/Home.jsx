
import Layout from "../components/layout"
import Reveal from "../components/Reveal"
import { Link } from 'react-router-dom'
import { flagshipProjects } from "../data/projects"

export default function Home(){
    const skillHighlights = [
        {
            icon: "🎨",
            title: "Shader Programming",
            description: "Creating stunning visual effects with GLSL, HLSL, and modern graphics APIs like OpenGL and DirectX",
        },
        {
            icon: "⚡",
            title: "Real-time Rendering",
            description: "Optimizing performance for 60+ FPS graphics applications and interactive visualizations",
        },
        {
            icon: "🖥️",
            title: "3D Graphics",
            description: "Building immersive 3D environments, particle systems, and procedural content generation",
        },
    ]

    return (
        <>
            <Layout />
            <main className="home-container">
                <section className="hero">
                    <Reveal as="div" className="hero-content" direction="up">
                        <h1 className="hero-title">
                            Hi, I'm <span className="highlight">Carlos Matecki</span>
                        </h1>
                        <h2 className="hero-subtitle">Graphics Programmer</h2>
                        <p className="hero-description">
                            I create immersive visual experiences through code, specializing in real-time graphics,
                            shader programming, and computer graphics. Passionate about pushing the boundaries of what's possible with pixels.
                        </p>
                        <div className="hero-buttons">
                            <Link to="/project" className="btn btn-primary">View My Work</Link>
                            <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
                        </div>
                    </Reveal>
                    <Reveal as="div" className="hero-image" direction="up" delay={180}>
                        <div className="profile-placeholder">
                            <span>🎮</span>
                        </div>
                    </Reveal>
                </section>

                <Reveal as="section" className="skills-preview" direction="up" delay={120}>
                    <h2>What I Do</h2>
                    <div className="skills-grid">
                        {skillHighlights.map((skill, index) => (
                            <Reveal
                                as="div"
                                className="skill-item"
                                delay={index * 140}
                                direction="up"
                                key={skill.title}
                            >
                                <div className="skill-icon">{skill.icon}</div>
                                <h3>{skill.title}</h3>
                                <p>{skill.description}</p>
                            </Reveal>
                        ))}
                    </div>
                </Reveal>

                <Reveal as="section" className="featured-projects" direction="up" delay={160}>
                    <h2>Featured Projects</h2>
                    <div className="projects-grid">
                        {flagshipProjects.slice(0, 3).map((project, index) => {
                            const heroShot = project.screenshots?.[0];
                            const cardStyle = heroShot
                                ? {
                                    backgroundImage: `url(${heroShot.src})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }
                                : undefined;

                            return (
                                <Reveal
                                    as="div"
                                    className="project-card"
                                    delay={index * 140}
                                    direction="up"
                                    key={project.title}
                                >
                                    <div className="project-image" style={cardStyle}>
                                        {!heroShot && (
                                            <div className="project-placeholder">
                                                {project.title.charAt(0)}
                                            </div>
                                        )}
                                    </div>
                                    <div className="project-content">
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                        {project.features?.length ? (
                                            <div className="project-features">
                                                <h4>Highlights</h4>
                                                <ul>
                                                    {project.features.slice(0, 3).map((feature) => (
                                                        <li key={feature}>{feature}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ) : null}
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                    <Reveal as="div" className="projects-cta" delay={420} direction="up">
                        <Link to="/project" className="btn btn-outline">View All Projects</Link>
                    </Reveal>
                </Reveal>

                <Reveal as="section" className="cta-section" direction="up" delay={200}>
                    <Reveal as="div" className="cta-content" delay={80} direction="up">
                        <h2>Let's Build Something Amazing Together</h2>
                        <p>Ready to turn your ideas into reality? Let's discuss your next project!</p>
                        <Link to="/contact" className="btn btn-primary">Start a Project</Link>
                    </Reveal>
                </Reveal>
            </main>
        </>
    )
}
