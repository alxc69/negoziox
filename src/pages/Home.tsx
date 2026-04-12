import { useState, useMemo } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import { Product, CartItem } from '@/types';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';

interface HomeProps {
  addToCart: (product: Product) => void;
  setSearchQuery: (query: string) => void;
  searchQuery: string;
}

export function Home({ addToCart, setSearchQuery, searchQuery }: HomeProps) {
  const [selectedCategory, setSelectedCategory] = useState('Tutti');

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'Tutti' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort: Preorders first
    return [...filtered].sort((a, b) => {
      if (a.isPreorder && !b.isPreorder) return -1;
      if (!a.isPreorder && b.isPreorder) return 1;
      return 0;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.3em] text-primary outline outline-1 outline-primary/20">
              Trading Card Game Specialist
            </span>
            <h1 className="mb-6 text-6xl font-black tracking-tighter sm:text-8xl lg:text-9xl text-foreground">
              ALX<span className="text-primary">STORE</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg font-medium text-muted-foreground sm:text-xl">
              Il tuo dealer di riferimento per il TCG di One Piece e Riftbound.
            </p>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
        </div>
      </section>

      <section id="products-grid" className="container mx-auto px-4 pb-24">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-black tracking-tight sm:text-5xl uppercase text-foreground">i nostri prodotti</h2>
            <p className="mt-2 text-muted-foreground">Esplora i nostri prodotti selezionati</p>
          </div>
          <div className="hidden sm:block">
            <div className="flex gap-2">
              {['Tutti', 'One Piece', 'Riftbound'].map((cat) => (
                <Button 
                  key={cat} 
                  variant={selectedCategory === cat ? "default" : "ghost"} 
                  className={`rounded-xl text-xs font-bold uppercase tracking-widest ${
                    selectedCategory === cat 
                      ? "bg-primary text-primary-foreground" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex h-64 flex-col items-center justify-center text-center"
          >
            <p className="text-2xl font-bold text-foreground">Nessun prodotto trovato</p>
            <p className="text-muted-foreground">Prova a cambiare i termini di ricerca.</p>
          </motion.div>
        )}
      </section>
    </main>
  );
}
