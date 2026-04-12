import { Plus, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Product } from '@/types';
import { motion } from 'motion/react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProductCardProps {
  key?: string;
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const handleAction = () => {
    if (product.isPreorder) {
      // Preorder logic is handled by DialogTrigger
      return;
    }
    onAddToCart(product);
  };

  const buttonContent = (
    <>
      <Plus className="mr-2 h-4 w-4" />
      {product.isSoldOut ? 'NON DISPONIBILE' : product.isPreorder ? 'PREORDER' : 'ADD TO CART'}
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Card className="card-glow glass group relative overflow-hidden border-border transition-all duration-500 hover:bg-muted/50">
        <div className="relative aspect-[3/4] overflow-hidden flex items-center justify-center p-8">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1613771404721-1f92d799e49f?q=80&w=1000&auto=format&fit=crop';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />
          
          <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
            {product.isPreorder ? (
              <Dialog>
                <DialogTrigger
                  render={
                    <Button
                      className="w-full rounded-xl bg-primary font-bold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-primary/40"
                    >
                      {buttonContent}
                    </Button>
                  }
                />
                <DialogContent className="glass border-border sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-black tracking-tighter text-foreground">PREORDINE</DialogTitle>
                    <DialogDescription className="text-muted-foreground">
                      Stai per preordinare <strong>{product.name}</strong>.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col items-center justify-center gap-6 py-8 text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Mail className="h-10 w-10" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-lg font-medium text-foreground">
                        Per completare il preordine, contatta:
                      </p>
                      <a 
                        href="mailto:alexanderchxn@icloud.com" 
                        className="text-xl font-black text-primary hover:underline"
                      >
                        alexanderchxn@icloud.com
                      </a>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Ti risponderemo il prima possibile con i dettagli per il pagamento e la spedizione.
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            ) : (
              <Button
                className="w-full rounded-xl bg-primary font-bold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-primary/40 disabled:opacity-50 disabled:hover:shadow-none"
                onClick={handleAction}
                disabled={product.isSoldOut}
              >
                {buttonContent}
              </Button>
            )}
          </div>
        </div>
        <CardContent className="p-5">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
              {product.category}
            </span>
            <h3 className="text-lg font-bold leading-tight tracking-tight text-foreground">
              {product.name}
            </h3>
          </div>
        </CardContent>
        <CardFooter className="p-5 pt-0 flex items-center justify-between">
          <span className="text-xl font-black text-foreground">{product.price.toFixed(2)}€</span>
          {product.isSoldOut && (
            <span className="text-[10px] font-black uppercase tracking-widest text-destructive bg-destructive/10 px-2 py-1 rounded-md border border-destructive/20">
              Sold Out
            </span>
          )}
          {product.isPreorder && (
            <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded-md border border-primary/20">
              Preorder
            </span>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
