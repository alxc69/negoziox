import { motion } from 'motion/react';
import { Shield, Database, Eye, History, UserCheck, Lock, Mail } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <main className="container mx-auto px-4 py-24 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl"
      >
        <h1 className="mb-12 text-5xl font-black tracking-tighter sm:text-7xl">
          INFORMATIVA SULLA <span className="text-primary">PRIVACY</span>
        </h1>

        <div className="mb-12 glass rounded-3xl border-border bg-muted/50 p-8">
          <p className="text-lg text-foreground/80 leading-relaxed">
            ALXSTORE (P.IVA 04371930241) si impegna a proteggere i tuoi dati personali. Questa informativa spiega quali dati raccogliamo, come li utilizziamo e i tuoi diritti.
          </p>
        </div>

        <div className="grid gap-8">
          <section className="glass rounded-3xl border-border bg-muted/50 p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Database className="h-6 w-6" />
            </div>
            <h2 className="mb-4 text-xl font-bold uppercase tracking-tight text-foreground">Dati che Raccogliamo</h2>
            <p className="text-muted-foreground leading-relaxed">
              Quando ci contatti via email, raccogliamo il tuo nome, indirizzo email e qualsiasi informazione fornita nel messaggio. Non utilizziamo cookie o tecnologie di tracciamento su questo sito web.
            </p>
          </section>

          <section className="glass rounded-3xl border-border bg-muted/50 p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Eye className="h-6 w-6" />
            </div>
            <h2 className="mb-4 text-xl font-bold uppercase tracking-tight text-foreground">Come Utilizziamo i Tuoi Dati</h2>
            <p className="text-muted-foreground leading-relaxed">
              Utilizziamo le tue informazioni di contatto esclusivamente per elaborare il tuo ordine e comunicare con te. Non vendiamo, condividiamo o trasferiamo i tuoi dati personali a terzi.
            </p>
          </section>

          <section className="glass rounded-3xl border-border bg-muted/50 p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <History className="h-6 w-6" />
            </div>
            <h2 className="mb-4 text-xl font-bold uppercase tracking-tight text-foreground">Conservazione dei Dati</h2>
            <p className="text-muted-foreground leading-relaxed">
              Conserviamo i tuoi dati personali per il tempo necessario a evadere il tuo ordine e rispettare gli obblighi di legge (minimo 10 anni per i registri fiscali/contabili secondo la legge italiana).
            </p>
          </section>

          <section className="glass rounded-3xl border-border bg-muted/50 p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <UserCheck className="h-6 w-6" />
            </div>
            <h2 className="mb-4 text-xl font-bold uppercase tracking-tight text-foreground">I Tuoi Diritti (GDPR)</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ai sensi del GDPR, hai il diritto di accedere, correggere, cancellare o limitare il trattamento dei tuoi dati personali. Per esercitare questi diritti, contattaci all'indirizzo alexanderchxn@icloud.com.
            </p>
          </section>

          <section className="glass rounded-3xl border-border bg-muted/50 p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Lock className="h-6 w-6" />
            </div>
            <h2 className="mb-4 text-xl font-bold uppercase tracking-tight text-foreground">Titolare del Trattamento</h2>
            <p className="text-muted-foreground leading-relaxed">
              Il titolare del trattamento è ALXSTORE (P.IVA 04371930241). Per qualsiasi richiesta relativa alla privacy, contattaci all'indirizzo alexanderchxn@icloud.com.
            </p>
          </section>

          <section className="glass rounded-3xl border-border bg-muted/50 p-8">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div>
                <h2 className="mb-2 text-xl font-bold uppercase tracking-tight text-foreground">Modifiche a Questa Informativa</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Potremmo aggiornare questa informativa di tanto in tanto. Eventuali modifiche saranno pubblicate su questa pagina con la data di revisione aggiornata.
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
