 const customFish = [
    {
      id: 1,
      direction: "right" as const,
      size: 64,
      yOffset: "18vh",
      duration: 20,
      delay: -4,
      bodyColor: "#38BDF8",
      tailColor: "#0284C7",
      opacity: 0.9,
    },
    {
      id: 2,
      direction: "left" as const,
      size: 42,
      yOffset: "34vh",
      duration: 26,
      delay: -11,
      bodyColor: "#2DD4BF",
      tailColor: "#0D9488",
      opacity: 0.65,
    },
    {
      id: 3,
      direction: "right" as const,
      size: 80,
      yOffset: "68vh",
      duration: 16,
      delay: 2,
      bodyColor: "#F59E0B",
      tailColor: "#D97706",
      opacity: 0.95,
    },
    {
      id: 4,
      direction: "left" as const,
      size: 30,
      yOffset: "78vh",
      duration: 32,
      delay: -18,
      bodyColor: "#7DD3FC",
      tailColor: "#0369A1",
      opacity: 0.45, // Distant background fish
    },
  ];

  export default customFish;