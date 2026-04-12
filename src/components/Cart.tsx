import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { CartItem } from '@/types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

export function Cart({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemove,
}: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="glass flex w-full flex-col border-border text-foreground sm:max-w-md">
        <SheetHeader className="px-1">
          <SheetTitle className="flex items-center gap-2 text-2xl font-black tracking-tighter text-foreground">
            <ShoppingBag className="h-6 w-6 text-primary" />
            IL TUO CARRELLO
          </SheetTitle>
        </SheetHeader>
        <Separator className="my-6 bg-border" />
        <div className="flex-1 overflow-hidden">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 text-muted-foreground/20">
              <ShoppingBag className="h-20 w-20 opacity-10" />
              <p className="text-lg font-bold uppercase tracking-widest">Il carrello è vuoto</p>
              <Button variant="link" className="text-primary hover:text-primary/80" onClick={onClose}>
                Torna allo shop
              </Button>
            </div>
          ) : (
            <ScrollArea className="h-full pr-4">
              <div className="flex flex-col gap-8">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-muted">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1613771404721-1f92d799e49f?q=80&w=1000&auto=format&fit=crop';
                        }}
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between py-1">
                      <div className="flex justify-between gap-2">
                        <div>
                          <h4 className="text-sm font-bold leading-tight text-foreground">{item.name}</h4>
                          <p className="mt-1 text-xs font-medium text-primary">
                            {item.price.toFixed(2)}€
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:bg-muted hover:text-destructive"
                          onClick={() => onRemove(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center rounded-lg bg-muted p-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 hover:bg-background"
                            onClick={() => onUpdateQuantity(item.id, -1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-xs font-bold">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 hover:bg-background"
                            onClick={() => onUpdateQuantity(item.id, 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          )}
        </div>
        {items.length > 0 && (
          <div className="pt-6">
            <Separator className="mb-6 bg-border" />
            <div className="flex items-center justify-between text-2xl font-black tracking-tighter">
              <span className="text-muted-foreground">TOTALE</span>
              <span className="text-foreground">{total.toFixed(2)}€</span>
            </div>
            <p className="mt-2 text-xs font-medium text-muted-foreground">
              Spedizione e tasse calcolate al checkout.
            </p>
            <Button className="mt-8 w-full rounded-2xl bg-primary py-8 text-lg font-black tracking-widest shadow-xl shadow-primary/20 hover:bg-primary/90 text-primary-foreground">
              CHECKOUT
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
