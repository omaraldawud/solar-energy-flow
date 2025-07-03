export type IconKey = 
    | 'FaHome' 
    | 'FaBuilding' 
    | 'FaTools' 
    | 'FaProjectDiagram' 
    | 'FaBatteryFull' 
    | 'FaSolarPanel' ;

export interface SolarService {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  linkText: string;
  icon: IconKey;
}

const solarServicesData: SolarService[] = [
  {
    id: 1,
    title: 'Residential Solar Panel Installation',
    description: 'Top quality solar panel installation for your home.  Custom-designed solar solutions for homeowners to reduce electricity bills and gain energy independence.',
    imageUrl: "/images/solar-panles/solar-panel-installation.jpg",
    linkText: 'Learn more',
    icon: 'FaHome',
  },
  {
    id: 2,
    title: 'Commercial & Industrial Solar Solutions',
    description: 'Scalable solar systems for businesses, warehouses, and industrial facilities to lower operating costs and meet sustainability goals.',
    imageUrl: "/images/solar-panles/commercial-solar-installation.jpg",
    linkText: 'Get commercial solar installation quote',
    icon: 'FaBuilding',
  },
  {
    id: 3,
    title: 'Solar Battery Storage Systems',
    description: 'Integrate high-capacity battery storage for backup power, energy independence, and enhanced savings.',
    imageUrl: "/images/solar-battery-system-bg.webp",
    linkText: 'Schedule service',
    icon: 'FaBatteryFull',
  },

  {
    id: 4,
    title: 'Solar System Design',
    description: 'Tailored Energy Solutions with Cutting-Edge Technology. Free custom designs optimized for your energy needs. Includes panel placement, inverter sizing, and savings projections.',
    imageUrl: "/images/residential-solar-system-design.jpg",
    linkText: 'Free complete solar system design',
    icon: 'FaProjectDiagram',
  },
  {
    id: 5,
    title: 'Premium Solar Panels',
    description: 'Our premium solar panels feature state-of-the-art technology designed for maximum efficiency and long-term reliability. High-efficiency panels with 22%+ energy conversion, built to withstand harsh weather. Backed by 25-year warranties for lasting performance.',
    imageUrl: "/images/solar-panel-design.jpg",
    linkText: 'Schedule service',
    icon: 'FaSolarPanel',
  },
  {
    id: 6,
    title: 'Maintenance & Repair',
    description: 'Reliable service for solar systems.  Ongoing system checks, cleaning, performance optimization, and real-time monitoring to keep your solar investment running efficiently.',
    imageUrl: "/images/solar-panles/solar-maintenance.jpg",
    linkText: 'Schedule service',
    icon: 'FaTools',
  },
];



export default solarServicesData;
