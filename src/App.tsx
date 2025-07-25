import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import ScrollToTop from './components/Common/ScrollToTop';
import ScrollToTopOnNavigate from './components/Common/ScrollToTopOnNavigate';
import CartSidebar from './components/Cart/CartSidebar';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import CustomBookCovers from './pages/CustomBookCovers';
import About from './pages/About';
import Contact from './pages/Contact';
import RequestQuote from './pages/RequestQuote';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import ShippingPolicy from './pages/ShippingPolicy';
import CancellationRefundPolicy from './pages/CancellationRefundPolicy';
import NotFound from './pages/NotFound';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <ScrollToTopOnNavigate />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:slug" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
              <Route path="/custom-book-covers" element={<CustomBookCovers />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/request-quote" element={<RequestQuote />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsAndConditions />} />
              <Route path="/shipping-policy" element={<ShippingPolicy />} />
              <Route path="/cancellation-refund-policy" element={<CancellationRefundPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <CartSidebar />
          <ScrollToTop />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;