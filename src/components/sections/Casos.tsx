import { motion } from "framer-motion";
import { CASOS, LOGOS } from "@/data/content";
import { Section, SectionHeader } from "./_atoms";

export const Casos = () => (
  <Section alt id="casos">
    <SectionHeader
      n="06"
      eyebrow="Casos y pruebas"
      title={
        <>
          Lo que dice la <span className="text-accent">gente que ya está creciendo.</span>
        </>
      }
      lead="Resultados reales de PyMEs colombianas, en 60–90 días. Logos y nombres bajo NDA en algunos casos."
    />
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 mb-12 md:mb-15">
      {CASOS.map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="p-6 sm:p-8 border border-line rounded-sm bg-white/[0.04] flex flex-col gap-5"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm border border-accent text-accent font-mono font-semibold text-sm flex items-center justify-center" style={{ background: "rgba(0,212,255,0.12)" }}>
              {c.logo}
            </div>
            <div className="font-mono text-[11px] text-ink-3 tracking-[0.12em]">{c.sector.toUpperCase()}</div>
          </div>
          <div>
            <div className="font-mono text-[44px] sm:text-[56px] font-semibold text-accent tracking-[-0.04em] leading-none">{c.metrica}</div>
            <div className="text-[13px] text-ink-3 mt-1">{c.label}</div>
          </div>
          <p className="text-[15px] leading-snug text-ink italic">"{c.quote}"</p>
          {/* TODO: reemplazar por testimonio real una vez aprobado por el cliente */}
          <div className="mt-auto pt-4 border-t border-line text-xs text-ink-3 font-mono">{c.autor}</div>
        </motion.div>
      ))}
    </div>
    <div className="border-t border-b border-line py-6 sm:py-8 flex items-center justify-center md:justify-between gap-x-6 gap-y-4 flex-wrap">
      <div className="font-mono text-[11px] text-ink-3 tracking-[0.15em] whitespace-nowrap">CLIENTES /</div>
      {LOGOS.map((l) => (
        <div key={l.m} className="flex items-center gap-3 opacity-55">
          <div className="w-8 h-8 rounded-[2px] border border-line-2 text-ink-2 font-mono font-semibold text-xs flex items-center justify-center">
            {l.m}
          </div>
          <div className="text-[13px] text-ink-2 font-medium">{l.n}</div>
        </div>
      ))}
      {/* TODO: reemplazar por logos reales (SVGs en /public/logos/) */}
    </div>
  </Section>
);
