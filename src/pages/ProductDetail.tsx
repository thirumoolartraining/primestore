import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Plus, Minus, Check, Star, Truck, Award, Shield } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(100);
  const [selectedImage, setSelectedImage] = useState(0);
  const [customizations, setCustomizations] = useState<Record<string, any>>({});
  const [quantityMessage, setQuantityMessage] = useState<string>('');

  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/products" className="text-blue-600 hover:text-blue-800">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const currentPrice = product.pricing.find(tier => 
    quantity >= tier.minQuantity && 
    (!tier.maxQuantity || quantity <= tier.maxQuantity)
  )?.price || product.pricing[0].price;

  const getValidQuantity = (inputQuantity: number): number => {
    const increment = product.orderIncrement || 1;
    const minQuantity = product.moq;
    
    if (inputQuantity < minQuantity) {
      return minQuantity;
    }
    
    // Round up to nearest valid increment
    const remainder = (inputQuantity - minQuantity) % increment;
    if (remainder === 0) {
      return inputQuantity;
    }
    
    return inputQuantity + (increment - remainder);
  };

  const showQuantityMessage = (message: string) => {
    setQuantityMessage(message);
    setTimeout(() => setQuantityMessage(''), 3000);
  };
  const handleAddToCart = () => {
    addItem(product, quantity, customizations);
  };

  const handleQuantityChange = (newQuantity: number) => {
    const validQuantity = getValidQuantity(newQuantity);
    const increment = product.orderIncrement || 1;
    
    if (newQuantity < product.moq) {
      showQuantityMessage(`Minimum order quantity is ${product.moq} pieces`);
    } else if (newQuantity !== validQuantity) {
      showQuantityMessage(`Quantity adjusted to ${validQuantity} (must be in multiples of ${increment})`);
    }
    
    setQuantity(validQuantity);
  };

  const handleQuantityIncrement = () => {
    const increment = product.orderIncrement || 1;
    handleQuantityChange(quantity + increment);
  };

  const handleQuantityDecrement = () => {
    const increment = product.orderIncrement || 1;
    handleQuantityChange(quantity - increment);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center mb-8">
          <Link to="/products" className="flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`border-2 rounded-md overflow-hidden ${
                    selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-lg text-gray-600">{product.description}</p>
            </div>

            {/* Pricing */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Pricing Tiers</h3>
              <div className="space-y-3">
                {product.pricing.map((tier, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center p-3 rounded-md ${
                      quantity >= tier.minQuantity && (!tier.maxQuantity || quantity <= tier.maxQuantity)
                        ? 'bg-blue-50 border border-blue-200'
                        : 'bg-gray-50'
                    }`}
                  >
                    <span className="text-sm font-medium">
                      {tier.minQuantity}+ pcs
                      {tier.maxQuantity && ` (up to ${tier.maxQuantity})`}
                    </span>
                    <span className="text-lg font-bold text-blue-600">
                      ₹{tier.price.toFixed(0)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <div className="flex items-center justify-between mb-4">
                <label className="text-lg font-semibold text-gray-900">Quantity</label>
                <span className="text-sm text-gray-500">MOQ: {product.moq} pcs</span>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={handleQuantityDecrement}
                  className="p-2 border border-gray-300 rounded-md hover:bg-gray-50"
                  disabled={quantity <= product.moq}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => {
                    const inputValue = parseInt(e.target.value) || product.moq;
                    setQuantity(inputValue);
                  }}
                  onBlur={(e) => {
                    const inputValue = parseInt(e.target.value) || product.moq;
                    handleQuantityChange(inputValue);
                  }}
                  min={product.moq}
                  className="w-24 px-3 py-2 border border-gray-300 rounded-md text-center focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  onClick={handleQuantityIncrement}
                  className="p-2 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              {quantityMessage && (
                <div className="mt-2 p-2 bg-orange-100 border border-orange-300 rounded-md text-sm text-orange-800">
                  {quantityMessage}
                </div>
              )}
              <div className="mt-4 p-4 bg-blue-50 rounded-md">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Total Price:</span>
                  <span className="text-2xl font-bold text-blue-600">
                    ₹{(currentPrice * quantity).toFixed(0)}
                  </span>
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  ₹{currentPrice.toFixed(0)} per piece
                </div>
              </div>
            </div>

            {/* Customization Options */}
            {product.customizable && (
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Customization Options</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Logo/Branding
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      onChange={(e) => setCustomizations({...customizations, logo: e.target.files?.[0]})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Custom Colors
                    </label>
                    <div className="grid grid-cols-6 gap-2">
                      {['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'].map((color) => (
                        <button
                          key={color}
                          onClick={() => setCustomizations({...customizations, color})}
                          className={`w-8 h-8 rounded-full border-2 ${
                            customizations.color === color ? 'border-gray-900' : 'border-gray-300'
                          }`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Add to Cart */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Add to Cart
              </button>
              <Link
                to="/request-quote"
                className="flex-1 bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600 transition-colors text-center"
              >
                Request Quote
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-medium">Quality Assured</div>
              </div>
              <div className="text-center">
                <Truck className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-sm font-medium">Global Shipping</div>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-sm font-medium">Quality Assured</div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="border-b">
              <nav className="flex">
                <button className="px-6 py-4 border-b-2 border-blue-500 text-blue-600 font-medium">
                  Specifications
                </button>
                <button className="px-6 py-4 text-gray-500 hover:text-gray-700">
                  Features
                </button>
                <button className="px-6 py-4 text-gray-500 hover:text-gray-700">
                  Shipping Info
                </button>
              </nav>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Technical Specifications</h4>
                  <dl className="space-y-2">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <dt className="text-gray-600">{key}:</dt>
                        <dd className="font-medium">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Key Features</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct) => (
                <div key={relatedProduct.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Link to={`/products/${relatedProduct.slug}`}>
                    <img
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-200"
                    />
                  </Link>
                  <div className="p-4">
                    <Link to={`/products/${relatedProduct.slug}`}>
                      <h3 className="font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                        {relatedProduct.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-gray-600 mt-1">
                      Starting from ₹{relatedProduct.pricing[relatedProduct.pricing.length - 1].price.toFixed(0)}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;