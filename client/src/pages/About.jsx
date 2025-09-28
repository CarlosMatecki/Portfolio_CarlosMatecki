
import Layout from "../components/layout"

export default function About(){
    return (
        <>
            <Layout />
            <main className="about-container">
                <section className="about-hero">
                    <div className="about-content">
                        <h1>About Me</h1>
                        <p className="about-intro">
                            I'm a passionate graphics programmer with a love for creating stunning visual experiences and pushing the boundaries of real-time rendering.
                        </p>
                    </div>
                    <div className="about-image">
                        <div className="profile-image">
                            <span>👤</span>
                        </div>
                    </div>
                </section>

                <section className="about-story">
                    <h2>My Journey</h2>
                    <div className="story-content">
                        <p>
                            My journey into graphics programming began with a fascination for how pixels come to life and has evolved into a passion for building
                            cutting-edge visual systems. I believe in writing optimized, performance-critical code and creating
                            immersive experiences that inspire and captivate users.
                        </p>
                        <p>
                            When I'm not coding, you can find me experimenting with new rendering techniques, contributing to graphics
                            libraries, or sharing knowledge about computer graphics with the developer community.
                        </p>
                    </div>
                </section>

                <section className="skills-section">
                    <h2>Technical Skills</h2>
                    <div className="skills-categories">
                        <div className="skill-category">
                            <h3>Graphics Programming</h3>
                            <div className="skill-list">
                                <span className="skill-tag">Vulkan</span>
                                <span className="skill-tag">OpenGL</span>
                                <span className="skill-tag">DirectX 11/12</span>
                                <span className="skill-tag">GLSL</span>
                                <span className="skill-tag">HLSL</span>
                                <span className="skill-tag">CUDA</span>
                                <span className="skill-tag">Compute Shaders</span>
                            </div>
                        </div>

                        <div className="skill-category">
                            <h3>Programming Languages</h3>
                            <div className="skill-list">
                                <span className="skill-tag">C++</span>
                                <span className="skill-tag">C</span>
                                <span className="skill-tag">C#</span>
                                <span className="skill-tag">C#</span>
                                <span className="skill-tag">Python</span>
                                <span className="skill-tag">Assembly</span>
                            </div>
                        </div>

                        <div className="skill-category">
                            <h3>Tools & Engines</h3>
                            <div className="skill-list">
                                <span className="skill-tag">Unreal Engine</span>
                                <span className="skill-tag">Unity</span>
                                <span className="skill-tag">Blender</span>
                                <span className="skill-tag">Maya</span>
                                <span className="skill-tag">RenderDoc</span>
                                <span className="skill-tag">Nsight Graphics</span>
                                <span className="skill-tag">Visual Studio</span>
                                <span className="skill-tag">Git & GitHub</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="timeline-section">
                    <h2>Experience Timeline</h2>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-date">2024</div>
                            <div className="timeline-content">
                                <h3>Graphics Programmer</h3>
                                <p>Currently working on cutting-edge graphics projects, specializing in real-time rendering and shader optimization</p>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-date">2023</div>
                            <div className="timeline-content">
                                <h3>Computer Graphics Studies</h3>
                                <p>Intensive study of computer graphics algorithms, linear algebra, and GPU programming</p>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-date">2022</div>
                            <div className="timeline-content">
                                <h3>Started Graphics Programming Journey</h3>
                                <p>Began learning programming fundamentals and exploring 3D graphics and rendering pipelines</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="values-section">
                    <h2>What Drives Me</h2>
                    <div className="values-grid">
                        <div className="value-item">
                            <div className="value-icon">🎯</div>
                            <h3>Performance Optimization</h3>
                            <p>I enjoy pushing hardware to its limits and achieving maximum performance</p>
                        </div>

                        <div className="value-item">
                            <div className="value-icon">🚀</div>
                            <h3>Innovation</h3>
                            <p>Always exploring cutting-edge rendering techniques and graphics research</p>
                        </div>

                        <div className="value-item">
                            <div className="value-icon">🎨</div>
                            <h3>Visual Excellence</h3>
                            <p>Believing that beautiful graphics can transform any experience</p>
                        </div>

                        <div className="value-item">
                            <div className="value-icon">✨</div>
                            <h3>Immersive Experiences</h3>
                            <p>Creating visual experiences that captivate and inspire users</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}