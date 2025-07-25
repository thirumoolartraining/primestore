import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Globe, Factory, Target, Heart, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const milestones = [
    { year: '2015', event: 'Company founded with focus on school stationery manufacturing' },
    { year: '2017', event: 'First international export to Southeast Asia' },
    { year: '2019', event: 'Quality management systems implemented' },
    { year: '2021', event: 'Expanded to serve 25+ countries globally' },
    { year: '2022', event: 'Launched custom book cover printing services' },
    { year: '2023', event: 'Reached 1 million products exported milestone' },
    { year: '2024', event: 'Serving 50+ countries with 500+ B2B clients' }
  ];

  const values = [
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Primestore
                <span className="block text-orange-400">Global Excellence</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                For nearly a decade, we've been the trusted partner for international distributors 
                seeking premium school stationery products. Our commitment to quality, innovation, 
                and customer success drives everything we do.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
            <div className="relative">
              <img
                src="/images/about/GE.jpg"
                alt="Global Excellence in Stationery Manufacturing"
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">9+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-600">B2B Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">1M+</div>
              <div className="text-gray-600">Products Exported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">99.5%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
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

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600">Key milestones in our growth story</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-lg shadow-md p-6 relative">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <p className="text-gray-700">{milestone.event}</p>
                      <div className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full ${
                        index % 2 === 0 ? '-right-10' : '-left-10'
                      }`}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581091226825-c6a89e7e4801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern manufacturing facility"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -top-6 -right-6 bg-green-500 text-white p-4 rounded-lg shadow-lg">
                <Factory className="h-8 w-8" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Manufacturing Excellence</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our state-of-the-art manufacturing facility spans 50,000 square feet and houses 
                the latest production equipment and quality control systems.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality Management Systems</h4>
                    <p className="text-gray-600">Comprehensive quality control processes ensure consistent product excellence</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Advanced Equipment</h4>
                    <p className="text-gray-600">Latest machinery for precision manufacturing and custom production</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Skilled Workforce</h4>
                    <p className="text-gray-600">Experienced team of 200+ professionals dedicated to quality craftsmanship</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Capacity & Scalability</h4>
                    <p className="text-gray-600">Production capacity of 1 million pieces per month with room for expansion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Standards</h2>
            <p className="text-lg text-gray-600">Our commitment to quality is backed by international certifications</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Excellence</h3>
              <p className="text-sm text-gray-600">Comprehensive quality management systems for consistent excellence</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">CE Marking</h3>
              <p className="text-sm text-gray-600">European Conformity marking for product safety and compliance</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ethical Manufacturing</h3>
              <p className="text-sm text-gray-600">Responsible manufacturing practices and ethical business standards</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <Factory className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced Manufacturing</h3>
              <p className="text-sm text-gray-600">Modern production facilities with latest technology and equipment</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Partner with Global Excellence
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of international distributors who trust Primestore for their stationery needs. 
            Experience the difference of working with industry leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
            >
              Explore Products
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-blue-600"
            >
              Start Partnership
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;