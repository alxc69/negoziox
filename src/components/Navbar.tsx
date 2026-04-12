import { ShoppingCart, Search, Menu, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useTheme } from '@/components/ThemeProvider';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onSearch: (query: string) => void;
}

export function Navbar({ cartCount, onOpenCart, onSearch }: NavbarProps) {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="glass sticky top-0 z-50 w-full border-b border-border/50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-black tracking-tighter text-foreground">ALXSTORE</span>
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            <Link to="/" className="transition-all hover:text-foreground hover:tracking-[0.2em]">One Piece</Link>
            <Link to="/" className="transition-all hover:text-foreground hover:tracking-[0.2em]">Riftbound</Link>
            <Link to="/shipping" className="transition-all hover:text-foreground hover:tracking-[0.2em]">Spedizioni</Link>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end gap-4">
          <div className="relative hidden w-full max-w-[240px] md:flex">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Cerca..."
              className="h-9 border-border/50 bg-muted/50 pl-10 text-foreground placeholder:text-muted-foreground focus:bg-muted"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-xl hover:bg-muted"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-foreground" />
            ) : (
              <Moon className="h-5 w-5 text-foreground" />
            )}
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden text-muted-foreground">
            <Menu className="h-5 w-5" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="relative h-10 w-10 text-muted-foreground hover:bg-muted hover:text-foreground"
            onClick={onOpenCart}
          >
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <Badge
                className="absolute -right-1 -top-1 h-5 w-5 justify-center rounded-full bg-primary p-0 text-[10px] font-bold text-primary-foreground"
                variant="default"
              >
                {cartCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
}
