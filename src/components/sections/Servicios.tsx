import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Bot, Check, Globe, Package, Search, Workflow } from "lucide-react";
import { SERVICIOS } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "./_atoms";

const ICONS = { search: Search, globe: Globe, bot: Bot, workflow: Workflow, package: Package } as const;

export const Servicios = () => (
  <Section alt id="servicios">
    <SectionHeader
      n="02"
      eyebrow="Lo que hacemos"
      title={
        <>
          Cinco capacidades. Una sola promesa: <span className="text-accent">resultados medibles.</span>
        </>
      }
      lead="Empieza con el diagnóstico gratuito. Si te sirve seguir, te decimos por dónde. Si no, también te lo decimos."
    />
    <div className="grid grid-cols-12 gap-4">
      {SERVICIOS.map((s, i) => {
        const Icon = ICONS[s.icon as keyof typeof ICONS];
        const isFirst = i === 0;
        const colSpan = isFirst ? "col-span-12" : i === 4 ? "col-span-12 md:col-span-6" : "col-span-12 sm:col-span-6 lg:col-span-3";

        if (isFirst) {
          return (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`${colSpan} p-6 sm:p-8 md:p-10 border border-accent rounded-sm relative flex flex-col md:flex-row gap-7 md:gap-10 min-h-[220px]`}
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,212,255,0.12), transparent 60%), rgba(255,255,255,0.04)",
              }}
            >
              <div className="flex-1 md:flex-[0_0_40%] flex flex-col">
                <div className="flex items-center gap-2.5 mb-4">
                  <Icon className="h-5 w-5 text-accent" />
                  <div className="font-mono text-[11px] text-ink-3 tracking-[0.15em]">SERVICIO / {s.n}</div>
                  <div className="ml-auto text-[10px] font-mono text-accent border border-accent px-2 py-0.5 tracking-wider">
                    LEAD MAGNET
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-[38px] font-semibold tracking-tight mb-3 text-ink text-balance">{s.nombre}</h3>
                <p className="text-base leading-relaxed text-ink-2 text-pretty">{s.desc}</p>
              </div>
              <div className="md:border-l md:border-line md:pl-10 flex flex-col justify-center flex-1">
                <ul className="flex flex-col gap-2.5 mb-5 sm:mb-6 list-none p-0">
                  {s.bullets.map((b) => (
                    <li key={b} className="text-[15px] text-ink flex gap-3 items-center">
                      <Check className="h-4 w-4 text-accent" /> {b}
                    </li>
                  ))}
                </ul>
                <div className="flex items-baseline gap-3 sm:gap-4 mb-5 flex-wrap">
                  <div className="font-mono text-[36px] sm:text-[44px] font-semibold text-accent tracking-tight">{s.precio}</div>
                  <div className="text-[13px] text-ink-3">{s.precioNota}</div>
                </div>
                <Button size="lg" className="self-start" asChild>
                  <a href="#score">
                    Hacer mi Score gratis <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          );
        }

        return (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className={`${colSpan} p-6 sm:p-7 border border-line rounded-sm bg-white/[0.04] flex flex-col min-h-[280px]`}
          >
            <div className="flex items-center gap-2.5 mb-4">
              <Icon className="h-5 w-5 text-accent" />
              <div className="font-mono text-[11px] text-ink-3 tracking-[0.15em]">SERVICIO / {s.n}</div>
            </div>
            <h3 className="text-[20px] sm:text-[22px] font-semibold tracking-tight mb-3 text-ink text-balance">{s.nombre}</h3>
            <p className="text-sm leading-relaxed text-ink-2 flex-1">{s.desc}</p>
            <ul className="list-none p-0 mt-5 flex flex-col gap-1.5">
              {s.bullets.map((b) => (
                <li key={b} className="text-[13px] text-ink-2 flex gap-2 items-center">
                  <span className="text-accent font-mono">+</span> {b}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-5 border-t border-line flex items-baseline justify-between">
              <div>
                <div className="font-mono text-[22px] font-semibold text-ink tracking-tight">{s.precio}</div>
                <div className="text-[11px] text-ink-3 font-mono">{s.precioNota}</div>
              </div>
              <ArrowUpRight className="h-[18px] w-[18px] text-ink-3" />
            </div>
          </motion.div>
        );
      })}
    </div>
  </Section>
);
