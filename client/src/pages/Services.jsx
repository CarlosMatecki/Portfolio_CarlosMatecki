
import Layout from "../components/layout"

export default function Services(){
    return (
        <>
            <Layout />
            <section className="services-container">
                <div className="services-hero">
                    <h1>Services & Skills</h1>
                    <p>Transforming ideas into digital reality through modern web technologies</p>
                </div>

                <div className="services-grid">
                    <div className="service-card">
                        <div className="service-icon">💻</div>
                        <h3>Frontend Development</h3>
                        <p>Creating responsive, interactive user interfaces with modern frameworks</p>
                        <div className="tech-stack">
                            <span className="tech-tag">React</span>
                            <span className="tech-tag">JavaScript</span>
                            <span className="tech-tag">CSS3</span>
                            <span className="tech-tag">HTML5</span>
                        </div>
                    </div>

                    <div className="service-card">
                        <div className="service-icon">⚙️</div>
                        <h3>Backend Development</h3>
                        <p>Building robust server-side applications and APIs</p>
                        <div className="tech-stack">
                            <span className="tech-tag">Node.js</span>
                            <span className="tech-tag">Express</span>
                            <span className="tech-tag">MongoDB</span>
                            <span className="tech-tag">REST APIs</span>
                        </div>
                    </div>

                    <div className="service-card">
                        <div className="service-icon">📱</div>
                        <h3>Responsive Design</h3>
                        <p>Mobile-first approach ensuring perfect experience across all devices</p>
                        <div className="tech-stack">
                            <span className="tech-tag">CSS Grid</span>
                            <span className="tech-tag">Flexbox</span>
                            <span className="tech-tag">Media Queries</span>
                            <span className="tech-tag">Bootstrap</span>
                        </div>
                    </div>

                    <div className="service-card">
                        <div className="service-icon">🚀</div>
                        <h3>Performance Optimization</h3>
                        <p>Optimizing applications for speed, SEO, and user experience</p>
                        <div className="tech-stack">
                            <span className="tech-tag">Vite</span>
                            <span className="tech-tag">Webpack</span>
                            <span className="tech-tag">Lighthouse</span>
                            <span className="tech-tag">PWA</span>
                        </div>
                    </div>

                    <div className="service-card">
                        <div className="service-icon">🗃️</div>
                        <h3>Database Management</h3>
                        <p>Designing and managing efficient database solutions</p>
                        <div className="tech-stack">
                            <span className="tech-tag">MongoDB</span>
                            <span className="tech-tag">PostgreSQL</span>
                            <span className="tech-tag">Firebase</span>
                            <span className="tech-tag">Prisma</span>
                        </div>
                    </div>

                    <div className="service-card">
                        <div className="service-icon">🔧</div>
                        <h3>Development Tools</h3>
                        <p>Utilizing modern development tools and best practices</p>
                        <div className="tech-stack">
                            <span className="tech-tag">Git</span>
                            <span className="tech-tag">VS Code</span>
                            <span className="tech-tag">Docker</span>
                            <span className="tech-tag">ESLint</span>
                        </div>
                    </div>
                </div>

                <div className="cta-section">
                    <h2>Ready to work together?</h2>
                    <p>Let's discuss your project and bring your vision to life</p>
                    <a href="/contact" className="cta-button">Get In Touch</a>
                </div>
            </section>
        </>
    )
}