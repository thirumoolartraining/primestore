import React from 'react';
import HomeHero from '../components/Home/HomeHero';
import HomeFeatures from '../components/Home/HomeFeatures';
import HomeFeaturedProducts from '../components/Home/HomeFeaturedProducts';
import HomeWhyChoose from '../components/Home/HomeWhyChoose';
import HomeCTA from '../components/Home/HomeCTA';
import { products } from '../data/products';

const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen">
      <HomeHero />
      <HomeFeatures />
      <HomeFeaturedProducts products={featuredProducts} />
      <HomeWhyChoose />
      <HomeCTA />
    </div>
  );
};

export default Home;
