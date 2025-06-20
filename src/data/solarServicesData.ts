import { IconType } from 'react-icons';
import { FaHome, FaBuilding, FaTools } from 'react-icons/fa';
export type IconKey = 'FaHome' | 'FaBuilding' | 'FaTools';


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
    title: 'Residential Solar Installation',
    description: 'Top quality solar panel installation for your home.',
    imageUrl: "/images/solar-panles/solar-panel-installation.jpg",
    linkText: 'Learn more',
    icon: 'FaHome',
  },
  {
    id: 2,
    title: 'Commercial Solar Solutions',
    description: 'Scalable solar solutions for your business.',
    imageUrl: "/images/solar-panles/commercial-solar-installation.jpg",
    linkText: 'Get a quote',
    icon: 'FaBuilding',
  },
  {
    id: 3,
    title: 'Maintenance & Repair',
    description: 'Reliable service for solar systems.',
    imageUrl: "/images/solar-panles/solar-maintenance.jpg",
    linkText: 'Schedule service',
    icon: 'FaTools',
  },
];

export default solarServicesData;
