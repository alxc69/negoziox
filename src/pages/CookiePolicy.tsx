import { motion } from 'motion/react';
import { Cookie, Shield, Info, Settings, Mail } from 'lucide-react';

export function CookiePolicy() {
  return (
    <main className="relative min-h-screen py-24 lg:py-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-12 text-5xl font-black tracking-tighter sm:text-7xl text-foreground">
            COOKIE <span className="text-primary">POLICY</span>
          </h1>

          <div className="mb-12 glass rounded-3xl border-border bg-muted/50 p-8">
            <p className="text-lg text-foreground/80 leading-relaxed">
              In questa pagina spieghiamo come ALXSTORE utilizza i cookie e tecnologie simili per fornirti un'esperienza migliore sul nostro sito web.
            </p>
          </div>

          <div className="grid gap-8">
            <section className="glass rounded-3xl border-border bg-muted/50 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Cookie className="h-6 w-6" />
              </div>
              <h2 className="mb-4 text-xl font-bold uppercase tracking-tight text-foreground">Cosa sono i Cookie?</h2>
              <p className="text-muted-foreground leading-relaxed">
                I cookie sono piccoli file di testo che vengono salvati sul tuo dispositivo quando visiti un sito web. Ci aiutano a far funzionare il sito correttamente e a ricordare le tue preferenze (come gli articoli nel carrello).
              </p>
            </section>

            <section className="glass rounded-3xl border-border bg-muted/50 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Shield className="h-6 w-6" />
              </div>
              <h2 className="mb-4 text-xl font-bold uppercase tracking-tight text-foreground">Cookie Tecnici (Necessari)</h2>
              <p className="text-muted-foreground leading-relaxed">
                Questi cookie sono essenziali per il funzionamento del sito. Includono, ad esempio, i cookie che ti permettono di aggiungere prodotti al carrello e di navigare in modo sicuro. Senza questi cookie, il sito non funzionerebbe correttamente.
              </p>
            </section>

            <section className="glass rounded-3xl border-border bg-muted/50 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Settings className="h-6 w-6" />
              </div>
              <h2 className="mb-4 text-xl font-bold uppercase tracking-tight text-foreground">Cookie di Terze Parti</h2>
              <p className="text-muted-foreground leading-relaxed">
                Attualmente ALXSTORE non utilizza cookie di profilazione o di terze parti per scopi pubblicitari. Se dovessimo implementarli in futuro, aggiorneremo questa policy e richiederemo il tuo consenso esplicito.
              </p>
            </section>

            <section className="glass rounded-3xl border-border bg-muted/50 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Info className="h-6 w-6" />
              </div>
              <h2 className="mb-4 text-xl font-bold uppercase tracking-tight text-foreground">Gestione dei Cookie</h2>
              <p className="text-muted-foreground leading-relaxed">
                Puoi gestire o disabilitare i cookie direttamente dalle impostazioni del tuo browser. Tieni presente che disabilitando i cookie tecnici, alcune funzionalità del sito (come il carrello) potrebbero non essere disponibili.
              </p>
            </section>

            <section className="glass rounded-3xl border-border bg-muted/50 p-8">
              <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                <div>
                  <h2 className="mb-2 text-xl font-bold uppercase tracking-tight text-foreground">Domande?</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Per qualsiasi chiarimento sulla nostra Cookie Policy, non esitare a contattarci.
                  </p>
                </div>
                <a 
                  href="mailto:alexanderchxn@icloud.com"
                  className="flex items-center gap-3 rounded-2xl bg-muted px-6 py-4 font-bold transition-all hover:bg-muted/80 hover:text-primary text-foreground"
                >
                  <Mail className="h-5 w-5" />
                  alexanderchxn@icloud.com
                </a>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
