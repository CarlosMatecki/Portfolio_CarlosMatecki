
import Layout from "../components/layout"
import { useState } from "react"

export default function Project(){
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: "Ocean Wave Simulation",
            category: "rendering",
            description: "Real-time ocean wave simulation using FFT-based water rendering with dynamic lighting and realistic water physics.",
            image: "🌊",
            technologies: ["OpenGL", "GLSL", "C++", "FFT", "PBR"],
            liveUrl: "#",
            githubUrl: "https://github.com/carcodee",
            features: ["FFT Wave Generation", "Dynamic Lighting", "Foam Simulation", "Real-time Reflections"]
        },
        {
            id: 2,
            title: "Particle System Engine",
            category: "engine",
            description: "High-performance particle system with GPU acceleration, custom compute shaders, and advanced collision detection.",
            image: "✨",
            technologies: ["DirectX 12", "Compute Shaders", "C++", "HLSL"],
            liveUrl: "#",
            githubUrl: "https://github.com/carcodee",
            features: ["GPU Acceleration", "Collision Detection", "Dynamic LOD", "Memory Pool Optimization"]
        },
        {
            id: 3,
            title: "Ray Tracing Renderer",
            category: "rendering",
            description: "Custom ray tracing engine with global illumination, physically-based materials, and advanced denoising techniques.",
            image: "🎯",
            technologies: ["CUDA", "OptiX", "C++", "BVH", "Monte Carlo"],
            liveUrl: "#",
            githubUrl: "https://github.com/carcodee",
            features: ["Global Illumination", "PBR Materials", "Temporal Denoising", "Importance Sampling"]
        },
        {
            id: 4,
            title: "Volumetric Lighting System",
            category: "effects",
            description: "Advanced volumetric lighting with god rays, atmospheric scattering, and dynamic fog rendering.",
            image: "☀️",
            technologies: ["Vulkan", "GLSL", "C++", "Raymarching"],
            liveUrl: "#",
            githubUrl: "https://github.com/carcodee",
            features: ["God Rays", "Atmospheric Scattering", "Dynamic Fog", "Temporal Upsampling"]
        },
        {
            id: 5,
            title: "Procedural Terrain Generator",
            category: "engine",
            description: "Real-time procedural terrain generation with multiple noise layers, LOD system, and GPU-based grass rendering.",
            image: "🏔️",
            technologies: ["OpenGL", "C++", "Perlin Noise", "Tessellation"],
            liveUrl: "#",
            githubUrl: "https://github.com/carcodee",
            features: ["Infinite Terrain", "Dynamic LOD", "GPU Grass", "Multi-threaded Generation"]
        },
        {
            id: 6,
            title: "Real-time Fluid Simulation",
            category: "simulation",
            description: "Physics-based fluid simulation using SPH (Smoothed Particle Hydrodynamics) with GPU acceleration.",
            image: "💧",
            technologies: ["CUDA", "OpenGL", "C++", "SPH", "Compute Shaders"],
            liveUrl: "#",
            githubUrl: "https://github.com/carcodee",
            features: ["SPH Simulation", "Surface Reconstruction", "GPU Acceleration", "Real-time Interaction"]
        }
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <>
            <Layout />
            <main className="projects-container">
                <section className="projects-hero">
                    <h1>My Projects</h1>
                    <p>A showcase of my recent work and technical skills</p>
                </section>

                <section className="projects-filter">
                    <div className="filter-buttons">
                        <button
                            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                            onClick={() => setFilter('all')}
                        >
                            All Projects
                        </button>
                        <button
                            className={`filter-btn ${filter === 'rendering' ? 'active' : ''}`}
                            onClick={() => setFilter('rendering')}
                        >
                            Rendering
                        </button>
                        <button
                            className={`filter-btn ${filter === 'engine' ? 'active' : ''}`}
                            onClick={() => setFilter('engine')}
                        >
                            Engine
                        </button>
                        <button
                            className={`filter-btn ${filter === 'effects' ? 'active' : ''}`}
                            onClick={() => setFilter('effects')}
                        >
                            Effects
                        </button>
                        <button
                            className={`filter-btn ${filter === 'simulation' ? 'active' : ''}`}
                            onClick={() => setFilter('simulation')}
                        >
                            Simulation
                        </button>
                    </div>
                </section>

                <section className="projects-grid">
                    {filteredProjects.map(project => (
                        <div key={project.id} className="project-card">
                            <div className="project-image">
                                <div className="project-placeholder">
                                    <span style={{fontSize: '3rem'}}>{project.image}</span>
                                </div>
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                                            🔗 Live Demo
                                        </a>
                                        <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                                            🔗 GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="project-content">
                                <div className="project-header">
                                    <h3>{project.title}</h3>
                                    <span className="project-category">{project.category}</span>
                                </div>

                                <p className="project-description">{project.description}</p>

                                <div className="project-features">
                                    <h4>Key Features:</h4>
                                    <ul>
                                        {project.features.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="project-technologies">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                <section className="projects-cta">
                    <div className="cta-content">
                        <h2>Interested in Working Together?</h2>
                        <p>I'm always open to discussing new opportunities and interesting projects.</p>
                        <div className="cta-buttons">
                            <a href="/contact" className="btn btn-primary">Get In Touch</a>
                            <a href="https://github.com/carcodee" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                View GitHub
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}