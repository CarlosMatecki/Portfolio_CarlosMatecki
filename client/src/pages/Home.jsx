
import Layout from "../components/layout"
import { Link } from 'react-router-dom'

export default function Home(){
    return (
        <>
            <Layout />
            <main className="home-container">
                <section className="hero">
                    <div className="hero-content">
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
                    </div>
                    <div className="hero-image">
                        <div className="profile-placeholder">
                            <span>🎮</span>
                        </div>
                    </div>
                </section>

                <section className="skills-preview">
                    <h2>What I Do</h2>
                    <div className="skills-grid">
                        <div className="skill-item">
                            <div className="skill-icon">🎨</div>
                            <h3>Shader Programming</h3>
                            <p>Creating stunning visual effects with GLSL, HLSL, and modern graphics APIs like OpenGL and DirectX</p>
                        </div>
                        <div className="skill-item">
                            <div className="skill-icon">⚡</div>
                            <h3>Real-time Rendering</h3>
                            <p>Optimizing performance for 60+ FPS graphics applications and interactive visualizations</p>
                        </div>
                        <div className="skill-item">
                            <div className="skill-icon">🖥️</div>
                            <h3>3D Graphics</h3>
                            <p>Building immersive 3D environments, particle systems, and procedural content generation</p>
                        </div>
                    </div>
                </section>

                <section className="featured-projects">
                    <h2>Featured Projects</h2>
                    <div className="projects-grid">
                        <div className="project-card">
                            <div className="project-image">
                                <div className="project-placeholder">🌊</div>
                            </div>
                            <div className="project-content">
                                <h3>Ocean Wave Simulation</h3>
                                <p>Real-time ocean wave simulation using FFT-based water rendering with dynamic lighting</p>
                                <div className="project-tech">
                                    <span>OpenGL</span>
                                    <span>GLSL</span>
                                    <span>C++</span>
                                </div>
                            </div>
                        </div>

                        <div className="project-card">
                            <div className="project-image">
                                <div className="project-placeholder">✨</div>
                            </div>
                            <div className="project-content">
                                <h3>Particle System Engine</h3>
                                <p>High-performance particle system with GPU acceleration and custom compute shaders</p>
                                <div className="project-tech">
                                    <span>DirectX 12</span>
                                    <span>Compute Shaders</span>
                                    <span>C++</span>
                                </div>
                            </div>
                        </div>

                        <div className="project-card">
                            <div className="project-image">
                                <div className="project-placeholder">🎯</div>
                            </div>
                            <div className="project-content">
                                <h3>Ray Tracing Renderer</h3>
                                <p>Custom ray tracing engine with global illumination and physically-based materials</p>
                                <div className="project-tech">
                                    <span>CUDA</span>
                                    <span>OptiX</span>
                                    <span>C++</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="projects-cta">
                        <Link to="/project" className="btn btn-outline">View All Projects</Link>
                    </div>
                </section>

                <section className="cta-section">
                    <div className="cta-content">
                        <h2>Let's Build Something Amazing Together</h2>
                        <p>Ready to turn your ideas into reality? Let's discuss your next project!</p>
                        <Link to="/contact" className="btn btn-primary">Start a Project</Link>
                    </div>
                </section>
            </main>
        </>
    )
}