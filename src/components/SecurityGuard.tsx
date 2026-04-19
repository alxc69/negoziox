import React, { useState, useEffect, useCallback } from 'react';
import { SECURITY_CONFIG } from '@/securityConfig';
import { ShieldAlert, Construction } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SecurityGuardProps {
  children: React.ReactNode;
}

export function SecurityGuard({ children }: SecurityGuardProps) {
  const [isBlocked, setIsBlocked] = useState(false);
  const [requestCount, setRequestCount] = useState(0);
  const [lastReset, setLastReset] = useState(Date.now());

  // Funzione per registrare un'attività e controllare il limite
  const trackActivity = useCallback(() => {
    const now = Date.now();
    
    // Se è passata la finestra di tempo, resetta il conteggio
    if (now - lastReset > SECURITY_CONFIG.rateLimit.windowMs) {
      setRequestCount(1);
      setLastReset(now);
      return;
    }

    // Incrementa il conteggio
    const newCount = requestCount + 1;
    setRequestCount(newCount);

    // Se supera il limite, blocca l'utente
    if (newCount > SECURITY_CONFIG.rateLimit.maxRequests) {
      setIsBlocked(true);
      console.warn("SecurityGuard: Rate limit exceeded. User blocked.");
    }
  }, [requestCount, lastReset]);

  // Aggiunge listener per tracciare i click e la navigazione
  useEffect(() => {
    if (SECURITY_CONFIG.maintenanceMode || isBlocked) return;

    const handleInteraction = () => trackActivity();
    
    window.addEventListener('click', handleInteraction);
    window.addEventListener('keydown', handleInteraction);

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };
  }, [trackActivity, isBlocked]);

  // Schermata di Manutenzione
  if (SECURITY_CONFIG.maintenanceMode) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background p-6 text-center">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Construction className="h-10 w-10" />
        </div>
        <h1 className="mb-4 text-4xl font-black tracking-tighter">MANUTENZIONE</h1>
        <p className="max-w-md text-lg text-muted-foreground">
          {SECURITY_CONFIG.messages.maintenance}
        </p>
      </div>
    );
  }

  // Schermata di Blocco (Rate Limit)
  if (isBlocked) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background p-6 text-center">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10 text-destructive">
          <ShieldAlert className="h-10 w-10" />
        </div>
        <h1 className="mb-4 text-4xl font-black tracking-tighter text-destructive">ACCESSO LIMITATO</h1>
        <p className="mb-8 max-w-md text-lg text-muted-foreground">
          {SECURITY_CONFIG.messages.rateLimited}
        </p>
        <Button 
          onClick={() => {
            setIsBlocked(false);
            setRequestCount(0);
            setLastReset(Date.now());
          }}
          variant="outline"
          className="rounded-xl font-bold"
        >
          RIPROVA ORA
        </Button>
      </div>
    );
  }

  return <>{children}</>;
}
