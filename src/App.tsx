/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Cart } from '@/components/Cart';
import { Product, CartItem } from '@/types';
import { Home } from '@/pages/Home';
import { ShippingPolicy } from '@/pages/ShippingPolicy';
import { PrivacyPolicy } from '@/pages/PrivacyPolicy';
import { CookiePolicy } from '@/pages/CookiePolicy';
import { Button } from '@/components/ui/button';
import { ScrollToTop } from '@/components/ScrollToTop';
import { ThemeProvider } from '@/components/ThemeProvider';
import { CookieBanner } from '@/components/CookieBanner';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <ThemeProvider defaultTheme="light" storageKey="alxstore-theme">
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-background font-sans antialiased text-foreground selection:bg-primary/30">
          <Navbar
            cartCount={cartCount}
            onOpenCart={() => setIsCartOpen(true)}
            onSearch={setSearchQuery}
          />

          <Routes>
            <Route 
              path="/" 
              element={
                <Home 
                  addToCart={addToCart} 
                  searchQuery={searchQuery} 
                  setSearchQuery={setSearchQuery} 
                />
              } 
            />
            <Route path="/shipping" element={<ShippingPolicy />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/cookies" element={<CookiePolicy />} />
          </Routes>

          <footer className="border-t border-border bg-muted/50 py-20 backdrop-blur-xl">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
                <div className="col-span-2">
                  <h3 className="text-3xl font-black tracking-tighter">ALXSTORE</h3>
                  <p className="mt-4 max-w-xs text-muted-foreground">
                    Il tuo dealer di riferimento per il TCG di One Piece e Riftbound.
                  </p>
                </div>
                <div>
                  <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-foreground">Link Rapidi</h4>
                  <ul className="space-y-4 text-sm text-muted-foreground">
                    <li><Link to="/" className="hover:text-primary">Home</Link></li>
                    <li><Link to="/shipping" className="hover:text-primary">Spedizioni</Link></li>
                    <li><a href="#" className="hover:text-primary">FAQ</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-foreground">Contatti</h4>
                  <ul className="space-y-4 text-sm text-muted-foreground">
                    <li><a href="mailto:alexanderchxn@icloud.com" className="hover:text-primary">alexanderchxn@icloud.com</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-foreground">Legale</h4>
                  <ul className="space-y-4 text-sm text-muted-foreground">
                    <li><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
                    <li><a href="#" className="hover:text-primary">Termini di Servizio</a></li>
                    <li><Link to="/cookies" className="hover:text-primary">Cookie Policy</Link></li>
                  </ul>
                </div>
              </div>
              <div className="mt-20 border-t border-border pt-8 text-center text-xs font-medium text-muted-foreground">
                <p>© 2026 ALXSTORE. All rights reserved. | VAT 04371930241</p>
              </div>
            </div>
          </footer>

          <Cart
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            items={cartItems}
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromCart}
          />
          <CookieBanner />
        </div>
      </Router>
    </ThemeProvider>
  );
}
