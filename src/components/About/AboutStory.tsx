import React from 'react';

type AboutStoryProps = Record<string, never>;

const AboutStory: React.FC<AboutStoryProps> = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2015, Primestore began as a small manufacturing company with a big vision:
                to become the world's leading exporter of premium school stationery products. What started
                as a local operation has grown into a global enterprise serving distributors across five continents.
              </p>
              <p>
                Our journey has been marked by continuous innovation, unwavering commitment to quality,
                and deep understanding of international market needs. From geometry sets to custom book covers,
                we've expanded our product range while maintaining the highest standards of manufacturing excellence.
              </p>
              <p>
                Today, we're proud to be the trusted partner of choice for international wholesalers,
                educational institutions, and distributors who demand nothing but the best for their markets.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Company timeline and growth"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
