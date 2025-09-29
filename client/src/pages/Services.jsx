import Layout from "../components/layout"
import Reveal from "../components/Reveal"

export default function Services(){
    const serviceOfferings = [
        {
            icon: "🖥️",
            title: "Real-Time Rendering",
            description: "Designing rendering architectures tailored for interactive experiences and visual fidelity",
            tech: ["OpenGL", "WebGPU", "Three.js", "C++"],
        },
        {
            icon: "✨",
            title: "Shader Authoring",
            description: "Crafting custom shaders to achieve cinematic lighting, stylized effects, and material realism",
            tech: ["GLSL", "HLSL", "ShaderToy", "WebGL"],
        },
        {
            icon: "📈",
            title: "Visualization Systems",
            description: "Turning complex datasets into intuitive, performant 3D and 2D visual narratives",
            tech: ["D3", "React Three Fiber", "Unity", "Blender"],
        },
        {
            icon: "⚡",
            title: "Performance Optimization",
            description: "Profiling GPU workloads and optimizing pipelines for smooth, reliable frame rates",
            tech: ["Nsight", "RenderDoc", "WebGL Insights", "Metal"],
        },
        {
            icon: "🛠️",
            title: "Graphics Tooling",
            description: "Building custom tools that streamline art pipelines and technical workflows",
            tech: ["Electron", "Python", "Qt", "Node.js"],
        },
        {
            icon: "🌐",
            title: "Interactive Experiences",
            description: "Delivering immersive web graphics, XR prototypes, and real-time storytelling applications",
            tech: ["WebXR", "Three.js", "A-Frame", "Unity XR"],
        },
    ]

    return (
        <>
            <Layout />
            <section className="services-container">
                <Reveal as="div" className="services-hero" direction="up">
                    <h1>Graphics Programming Services</h1>
                    <p>Building real-time visuals, immersive simulations, and polished rendering pipelines</p>
                </Reveal>

                <div className="services-grid">
                    {serviceOfferings.map((service, index) => (
                        <Reveal
                            as="div"
                            className="service-card"
                            delay={index * 120}
                            direction="up"
                            key={service.title}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <div className="tech-stack">
                                {service.tech.map((tech) => (
                                    <span className="tech-tag" key={tech}>{tech}</span>
                                ))}
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal as="div" className="cta-section" direction="up" delay={260}>
                    <h2>Ready to build your next visual experience?</h2>
                    <p>Let's collaborate on rendering systems, shaders, and tools that bring your ideas to life</p>
                    <a href="/contact" className="cta-button">Start a Project</a>
                </Reveal>
            </section>
        </>
    )
}
