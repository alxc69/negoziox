import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('alxstore-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('alxstore-cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-6 left-6 right-6 z-[100] mx-auto max-w-4xl"
        >
          <div className="glass flex flex-col items-center justify-between gap-6 rounded-3xl border-border bg-background/80 p-6 shadow-2xl backdrop-blur-2xl md:flex-row md:p-8">
            <div className="flex items-center gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Cookie className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold tracking-tight text-foreground">Esperienza Personalizzata</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Utilizziamo i cookie per migliorare la tua navigazione e gestire il tuo carrello. 
                  Scopri di più nella nostra{' '}
                  <Link to="/cookies" className="font-bold text-primary hover:underline" onClick={() => setIsVisible(false)}>
                    Cookie Policy
                  </Link>.
                </p>
              </div>
            </div>
            
            <div className="flex w-full shrink-0 items-center gap-3 md:w-auto">
              <Button 
                variant="ghost" 
                className="flex-1 rounded-xl font-bold text-muted-foreground hover:bg-muted hover:text-foreground md:flex-none"
                onClick={() => setIsVisible(false)}
              >
                RIFIUTA
              </Button>
              <Button 
                className="flex-1 rounded-xl bg-primary px-8 font-bold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 md:flex-none"
                onClick={acceptCookies}
              >
                ACCETTA TUTTO
              </Button>
            </div>

            <button 
              onClick={() => setIsVisible(false)}
              className="absolute right-4 top-4 text-muted-foreground/40 hover:text-foreground md:hidden"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
