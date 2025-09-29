export const flagshipProjects = [
  {
    title: "Vulkan Path tracer",
    description:
      "3D graphics engine utilizing the Vulkan ray tracing pipeline with path tracing support.",
    features: [
      "Global illumination through frame accumulation.",
      "Disney BSDF rendering model for realistic material representation.",
      "Bindless ray tracing for efficient resource management.",
      "Physically-based bloom for enhanced lighting effects.",
      "Asynchronous loading support for GLTF and OBJ models.",
      "Flexible and extensible material system.",
      "Multithreaded asset handling to optimize I/O operations.",
      "Custom implementation of ImGui.",
      "Optimized material system for ray tracing.",
      "Blending support for transparent materials."
    ],
    screenshots: [
      "img_rt_skull",
      "img_rt_kitchen"
    ].map((fileName, index) => ({
      id: index,
      fileName,
      src: `src/assets/images/${fileName}.avif`
    }))
  },
  {
    title: "CodeVkEngine",
    description:
      "Personal graphics engine extended from a public template and focused on rapid experimentation.",
    features: [
      "RenderGraph-based architecture that accelerates prototyping while remaining extensible.",
      "Automatic descriptor set handling for streamlined resource binding.",
      "Centralized resource manager covering assets and GPU buffers.",
      "Visual pipeline node editor to construct shaders and rendering passes.",
      "Modular Vulkan interface designed for flexibility across renderers.",
      "Shader hot reload and reflection system.",
      "GLTF loader integration.",
      "Simple first-person camera controller.",
      "ImGui integration for tooling and debugging.",
      "Cluster renderer with GPU occlusion culling for point lights and meshes.",
      "2D renderer featuring a paint canvas and Radiance Cascades implementation.",
      "Debug renderer to visualize meshes and diagnostics."
    ],
    screenshots: [
      "img_rc_normals",
      "img_rc_plain"
    ].map((fileName, index) => ({
      id: index,
      fileName,
      src: `src/assets/images/${fileName}.avif`
    }))
  },
  {
    title: "Unity Neural Network Visualization Tool",
    description:
      "Interactive Unity tool that visualizes and experiments with neural networks for educational purposes.",
    features: [
      "Dynamic visualization of neural network structures with animated feedback.",
      "Interactive manipulation of nodes with real-time updates.",
      "Modular design that integrates easily with Unity projects or external ML frameworks.",
      "Includes a color prediction example to demonstrate core workflows."
    ],
    screenshots: [
      "img_unity_neural_net",
    ].map((fileName, index) => ({
      id: index,
      fileName,
      src: `src/assets/images/${fileName}.avif`
    }))

  }
];
