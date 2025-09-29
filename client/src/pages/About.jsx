
import Layout from "../components/layout"
import Reveal from "../components/Reveal"

export default function About(){
    return (
        <>
            <Layout />
            <main className="about-container">
                <section className="about-hero">
                    <Reveal as="div" className="about-content" direction="up">
                        <h1>About Me</h1>
                        <p className="about-intro">
                            I'm a passionate graphics programmer with a love for creating stunning visual experiences and pushing the boundaries of real-time rendering.
                        </p>
                    </Reveal>
                    <Reveal as="div" className="about-image" direction="up" delay={160}>
                        <div className="profile-image">
                            <span>👤</span>
                        </div>
                    </Reveal>
                </section>

                <Reveal as="section" className="about-story" direction="up" delay={200}>
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
                </Reveal>

                <Reveal as="section" className="skills-section" direction="up" delay={240}>
                    <h2>Technical Skills</h2>
                    <div className="skills-categories">
                        <Reveal as="div" className="skill-category" delay={0} direction="up">
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
                        </Reveal>

                        <Reveal as="div" className="skill-category" delay={160} direction="up">
                            <h3>Programming Languages</h3>
                            <div className="skill-list">
                                <span className="skill-tag">C++</span>
                                <span className="skill-tag">C</span>
                                <span className="skill-tag">C#</span>
                                <span className="skill-tag">C#</span>
                                <span className="skill-tag">Python</span>
                                <span className="skill-tag">Assembly</span>
                            </div>
                        </Reveal>

                        <Reveal as="div" className="skill-category" delay={320} direction="up">
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
                        </Reveal>
                    </div>
                </Reveal>

                <Reveal as="section" className="timeline-section" direction="up" delay={260}>
                    <h2>Experience Timeline</h2>
                    <div className="timeline">
                        <Reveal as="div" className="timeline-item" delay={0} direction="up">
                            <div className="timeline-date">2024</div>
                            <div className="timeline-content">
                                <h3>Graphics Programmer</h3>
                                <p>Currently working on cutting-edge graphics projects, specializing in real-time rendering and shader optimization</p>
                            </div>
                        </Reveal>

                        <Reveal as="div" className="timeline-item" delay={160} direction="up">
                            <div className="timeline-date">2023</div>
                            <div className="timeline-content">
                                <h3>Computer Graphics Studies</h3>
                                <p>Intensive study of computer graphics algorithms, linear algebra, and GPU programming</p>
                            </div>
                        </Reveal>

                        <Reveal as="div" className="timeline-item" delay={320} direction="up">
                            <div className="timeline-date">2022</div>
                            <div className="timeline-content">
                                <h3>Started Graphics Programming Journey</h3>
                                <p>Began learning programming fundamentals and exploring 3D graphics and rendering pipelines</p>
                            </div>
                        </Reveal>
                    </div>
                </Reveal>

                <Reveal as="section" className="values-section" direction="up" delay={280}>
                    <h2>What Drives Me</h2>
                    <div className="values-grid">
                        <Reveal as="div" className="value-item" delay={0} direction="up">
                            <div className="value-icon">🎯</div>
                            <h3>Performance Optimization</h3>
                            <p>I enjoy pushing hardware to its limits and achieving maximum performance</p>
                        </Reveal>

                        <Reveal as="div" className="value-item" delay={140} direction="up">
                            <div className="value-icon">🚀</div>
                            <h3>Innovation</h3>
                            <p>Always exploring cutting-edge rendering techniques and graphics research</p>
                        </Reveal>

                        <Reveal as="div" className="value-item" delay={280} direction="up">
                            <div className="value-icon">🎨</div>
                            <h3>Visual Excellence</h3>
                            <p>Believing that beautiful graphics can transform any experience</p>
                        </Reveal>

                        <Reveal as="div" className="value-item" delay={420} direction="up">
                            <div className="value-icon">✨</div>
                            <h3>Immersive Experiences</h3>
                            <p>Creating visual experiences that captivate and inspire users</p>
                        </Reveal>
                    </div>
                </Reveal>
            </main>
        </>
    )
}
