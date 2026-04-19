/**
 * Configurazione di Sicurezza per ALXSTORE
 */
export const SECURITY_CONFIG = {
  // Se impostato su true, il sito mostrerà una pagina di manutenzione e bloccherà l'accesso
  maintenanceMode: false,
  
  // Limite di azioni (es. click, navigazione) per finestra di tempo
  rateLimit: {
    maxRequests: 50,      // Numero massimo di azioni consentite
    windowMs: 60 * 1000,  // In un minuto (60.000 ms)
  },

  // Messaggio da mostrare in caso di blocco
  messages: {
    maintenance: "Il sito è temporaneamente in manutenzione per aggiornamenti. Torniamo presto!",
    rateLimited: "Stai effettuando troppe richieste. Per favore, rallenta e riprova tra un minuto.",
  }
};
