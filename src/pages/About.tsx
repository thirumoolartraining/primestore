import React from 'react';
import { Award, Globe, Target, Heart } from 'lucide-react';
import AboutHero from '../components/About/AboutHero';
import AboutStats from '../components/About/AboutStats';
import AboutStory from '../components/About/AboutStory';
import AboutTimeline, { Milestone } from '../components/About/AboutTimeline';
import AboutValues, { ValueItem } from '../components/About/AboutValues';
import AboutManufacturing from '../components/About/AboutManufacturing';
import AboutCertifications from '../components/About/AboutCertifications';
import AboutCTA from '../components/About/AboutCTA';
import { getImageUrl } from '../utils/imageUtils';

const heroImage = getImageUrl('images/about/GE.jpg');

const milestones: Milestone[] = [
  { year: '2015', event: 'Company founded with focus on school stationery manufacturing' },
  { year: '2017', event: 'First international export to Southeast Asia' },
  { year: '2019', event: 'Quality management systems implemented' },
  { year: '2021', event: 'Expanded to serve 25+ countries globally' },
  { year: '2022', event: 'Launched custom book cover printing services' },
  { year: '2023', event: 'Reached 1 million products exported milestone' },
  { year: '2024', event: 'Serving 50+ countries with 500+ B2B clients' }
];

const values: ValueItem[] = [
  {
    icon: Target,
    title: 'Quality First',
    description: 'Every product undergoes rigorous quality control to meet international standards'
  },
  {
    icon: Globe,
    title: 'Global Mindset',
    description: 'Understanding diverse market needs and cultural requirements worldwide'
  },
  {
    icon: Heart,
    title: 'Customer Success',
    description: 'Building long-term partnerships through exceptional service and reliability'
  },
  {
    icon: Award,
    title: 'Innovation',
    description: 'Continuously improving products and processes to stay ahead of market demands'
  }
];

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AboutHero imageUrl={heroImage} />
      <AboutStats />
      <AboutStory />
      <AboutTimeline milestones={milestones} />
      <AboutValues values={values} />
      <AboutManufacturing />
      <AboutCertifications />
      <AboutCTA />
    </div>
  );
};

export default About;
