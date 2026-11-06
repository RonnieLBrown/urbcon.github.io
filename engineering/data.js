const DISCIPLINES = [
  {
    id: "mechanical",
    icon: "⚙️",
    name: "Mechanical Engineering",
    blurb: "Designs machines, engines, and anything with moving parts.",
    topics: ["engines", "robotics", "thermodynamics", "manufacturing", "machines"],
    careers: ["Product Design Engineer", "Automotive Engineer", "HVAC Engineer", "Robotics Engineer"],
    fact: "Mechanical engineering is the broadest engineering discipline — it touches everything from tiny watch gears to jet engines."
  },
  {
    id: "electrical",
    icon: "⚡",
    name: "Electrical Engineering",
    blurb: "Works with electricity, electronics, circuits, and power systems.",
    topics: ["circuits", "power", "signals", "microchips", "electronics"],
    careers: ["Power Systems Engineer", "Electronics Designer", "Controls Engineer", "RF Engineer"],
    fact: "The chip in a modern smartphone can contain over 15 billion transistors — all designed by electrical engineers."
  },
  {
    id: "civil",
    icon: "🏗️",
    name: "Civil Engineering",
    blurb: "Plans and builds infrastructure like roads, bridges, and buildings.",
    topics: ["bridges", "buildings", "roads", "water systems", "construction"],
    careers: ["Structural Engineer", "Transportation Engineer", "Geotechnical Engineer", "Urban Planner"],
    fact: "The Golden Gate Bridge was designed to sway up to 27 feet in strong winds without failing."
  },
  {
    id: "software",
    icon: "💻",
    name: "Software Engineering",
    blurb: "Designs and builds the applications and systems that run on computers.",
    topics: ["apps", "algorithms", "web", "systems", "code"],
    careers: ["Software Developer", "Systems Architect", "Site Reliability Engineer", "Game Developer"],
    fact: "The first computer bug was an actual moth, found stuck in a relay of the Harvard Mark II in 1947."
  },
  {
    id: "chemical",
    icon: "🧪",
    name: "Chemical Engineering",
    blurb: "Turns raw materials into useful products through chemical processes.",
    topics: ["reactions", "materials", "energy", "processes", "pharmaceuticals"],
    careers: ["Process Engineer", "Materials Engineer", "Petrochemical Engineer", "Pharmaceutical Engineer"],
    fact: "Chemical engineers helped scale up penicillin production from lab quantities to millions of doses during WWII."
  },
  {
    id: "aerospace",
    icon: "🚀",
    name: "Aerospace Engineering",
    blurb: "Designs aircraft, spacecraft, and everything that needs to fly.",
    topics: ["aircraft", "rockets", "spacecraft", "aerodynamics", "propulsion"],
    careers: ["Aerodynamicist", "Propulsion Engineer", "Avionics Engineer", "Spacecraft Systems Engineer"],
    fact: "A Boeing 747 has around six million parts, roughly half of which are fasteners."
  },
  {
    id: "biomedical",
    icon: "🧬",
    name: "Biomedical Engineering",
    blurb: "Applies engineering principles to medicine and biology.",
    topics: ["prosthetics", "medical devices", "imaging", "biomechanics", "implants"],
    careers: ["Medical Device Engineer", "Clinical Engineer", "Biomechanics Researcher", "Imaging Engineer"],
    fact: "The first successful artificial heart transplant took place in 1982, running on compressed air."
  },
  {
    id: "environmental",
    icon: "🌿",
    name: "Environmental Engineering",
    blurb: "Protects people and ecosystems from environmental hazards.",
    topics: ["water treatment", "pollution", "sustainability", "waste", "climate"],
    careers: ["Water Resources Engineer", "Sustainability Consultant", "Air Quality Engineer", "Waste Management Engineer"],
    fact: "Modern water treatment plants can remove over 99.9% of harmful pathogens before water reaches your tap."
  },
  {
    id: "industrial",
    icon: "🏭",
    name: "Industrial Engineering",
    blurb: "Optimizes complex processes, systems, and organizations.",
    topics: ["logistics", "optimization", "manufacturing", "supply chain", "efficiency"],
    careers: ["Operations Engineer", "Supply Chain Analyst", "Quality Engineer", "Process Improvement Engineer"],
    fact: "Industrial engineering principles from Henry Ford's assembly line cut Model T production time from 12 hours to about 90 minutes."
  },
  {
    id: "materials",
    icon: "🪨",
    name: "Materials Engineering",
    blurb: "Develops and improves the materials everything else is built from.",
    topics: ["metals", "polymers", "ceramics", "composites", "nanomaterials"],
    careers: ["Metallurgist", "Polymer Engineer", "Nanomaterials Researcher", "Failure Analyst"],
    fact: "Graphene, a material one atom thick, is roughly 200 times stronger than steel by weight."
  }
];
