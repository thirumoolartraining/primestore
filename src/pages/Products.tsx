import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Grid, List, Search } from 'lucide-react';
import { products, categories } from '../data/products';

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-low':
          return a.pricing[0].price - b.pricing[0].price;
        case 'price-high':
          return b.pricing[0].price - a.pricing[0].price;
        case 'moq-low':
          return a.moq - b.moq;
        case 'moq-high':
          return b.moq - a.moq;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Catalog</h1>
          <p className="text-lg text-gray-600">
            Explore our comprehensive range of school stationery products designed for international export
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="moq-low">MOQ: Low to High</option>
                <option value="moq-high">MOQ: High to Low</option>
              </select>

              <div className="flex rounded-md border border-gray-300">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-blue-50 text-blue-600' : 'text-gray-600'}`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-blue-50 text-blue-600' : 'text-gray-600'}`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {/* Products Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Link to={`/products/${product.slug}`}>
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-200"
                  />
                </Link>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <Link to={`/products/${product.slug}`}>
                      <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    {product.customizable && (
                      <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded">
                        Custom
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Material:</span>
                      <span className="font-medium">{product.material}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">MOQ:</span>
                      <span className="font-medium">{product.moq} pcs</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm text-gray-500">Starting from</span>
                        <div className="text-2xl font-bold text-blue-600">
                          ₹{product.pricing[product.pricing.length - 1].price.toFixed(0)}
                        </div>
                      </div>
                      <Link
                        to={`/products/${product.slug}`}
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row gap-6">
                  <Link to={`/products/${product.slug}`} className="md:w-48 flex-shrink-0">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-32 md:h-24 object-cover rounded hover:scale-105 transition-transform duration-200"
                    />
                  </Link>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <Link to={`/products/${product.slug}`}>
                        <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      {product.customizable && (
                        <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded">
                          Customizable
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-gray-500">Material:</span>
                        <div className="font-medium">{product.material}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">MOQ:</span>
                        <div className="font-medium">{product.moq} pcs</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Starting Price:</span>
                        <div className="font-medium text-blue-600">
                          ₹{product.pricing[product.pricing.length - 1].price.toFixed(0)}
                        </div>
                      </div>
                      <div>
                        <Link
                          to={`/products/${product.slug}`}
                          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-center"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-4">No products found matching your criteria</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="text-blue-600 hover:text-blue-800"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;