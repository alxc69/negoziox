import { motion } from 'motion/react';
import { Mail, Clock, Truck, CreditCard, Package, ShieldAlert } from 'lucide-react';

export function ShippingPolicy() {
  return (
    <main className="container mx-auto px-4 py-24 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl"
      >
        <h1 className="mb-12 text-5xl font-black tracking-tighter sm:text-7xl">
          POLITICA DI <span className="text-primary">SPEDIZIONE</span>
        </h1>

        <div className="grid gap-12 md:grid-cols-2">
          <section className="glass rounded-3xl border-border bg-muted/50 p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Clock className="h-6 w-6" />
            </div>
            <h2 className="mb-4 text-xl font-bold uppercase tracking-tight text-foreground">Tempi di Elaborazione</h2>
            <p className="text-muted-foreground leading-relaxed">
              Gli ordini vengono elaborati entro 1–3 giorni lavorativi dalla conferma del pagamento. 
              Gli articoli in pre-ordine vengono spediti alla data di uscita ufficiale.
            </p>
          </section>

          <section className="glass rounded-3xl border-border bg-muted/50 p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Truck className="h-6 w-6" />
            </div>
            <h2 className="mb-4 text-xl font-bold uppercase tracking-tight text-foreground">Metodi e Tempi di Spedizione</h2>
            <p className="text-muted-foreground leading-relaxed">
              Spediamo tramite corrieri tracciati in tutta Europa. 
              La consegna standard richiede 3–7 giorni lavorativi a seconda del paese di destinazione.
            </p>
          </section>

          <section className="glass rounded-3xl border-border bg-muted/50 p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <CreditCard className="h-6 w-6" />
            </div>
            <h2 className="mb-4 text-xl font-bold uppercase tracking-tight text-foreground">Costi di Spedizione</h2>
            <p className="text-muted-foreground leading-relaxed">
              I costi di spedizione vengono calcolati al checkout in base al peso del pacco e alla destinazione. 
              Miriamo a offrire le tariffe più competitive disponibili.
            </p>
          </section>

          <section className="glass rounded-3xl border-border bg-muted/50 p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Package className="h-6 w-6" />
            </div>
            <h2 className="mb-4 text-xl font-bold uppercase tracking-tight text-foreground">Imballaggio</h2>
            <p className="text-muted-foreground leading-relaxed">
              Tutti i prodotti sono accuratamente imballati per garantire che arrivino in condizioni perfette. 
              I booster box sono inseriti in scatole doppie e imbottite per la massima protezione.
            </p>
          </section>

          <section className="glass rounded-3xl border-border bg-muted/50 p-8 md:col-span-2">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <ShieldAlert className="h-6 w-6" />
            </div>
            <h2 className="mb-4 text-xl font-bold uppercase tracking-tight text-foreground">Pacchi Smarriti o Danneggiati</h2>
            <p className="text-muted-foreground leading-relaxed">
              Se il tuo pacco arriva danneggiato o viene smarrito durante il transito, ti preghiamo di contattarci entro 7 giorni 
              dalla data di consegna prevista. Lavoreremo con te per risolvere il problema.
            </p>
          </section>

          <section className="glass rounded-3xl border-border bg-muted/50 p-8 md:col-span-2">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div>
                <h2 className="mb-2 text-xl font-bold uppercase tracking-tight text-foreground">Spedizioni Internazionali</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Attualmente spediamo in tutti i paesi dell'UE. Per spedizioni fuori dall'UE, contattaci per un preventivo personalizzato.
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
    </main>
  );
}
