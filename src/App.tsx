/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  MessageCircle, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Heart, 
  Cpu, 
  X, 
  ChevronRight,
  Stethoscope,
  Smile,
  AlertCircle
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5586999732364?text=Olá%20doutora,%20vi%20sua%20página%20e%20queria%20entender%20melhor%20meu%20caso.";

const results = [
  "https://imgur.com/xIyFeYP",
  "https://imgur.com/6kM1DAT",
  "https://imgur.com/p4tLCsU",
  "https://imgur.com/d3fx5nU",
  "https://imgur.com/IZsvmWI",
  "https://imgur.com/byl8yoH",
  "https://imgur.com/KVUYbhd",
  "https://imgur.com/9NFw8Vo",
  "https://imgur.com/8ZuSxXo"
];

const painPoints = [
  { icon: <Smile className="w-6 h-6 text-zinc-400" />, text: "Vergonha de sorrir em público" },
  { icon: <AlertCircle className="w-6 h-6 text-zinc-400" />, text: "Falta de dentes que afeta a autoestima" },
  { icon: <ShieldCheck className="w-6 h-6 text-zinc-400" />, text: "Medo de procedimentos odontológicos" },
  { icon: <X className="w-6 h-6 text-zinc-400" />, text: "Já tentou tratamentos que não resolveram" }
];

const trustCards = [
  { icon: <CheckCircle2 />, title: "Avaliação honesta", desc: "Sem promessas falsas, apenas o que você realmente precisa." },
  { icon: <MessageCircle />, title: "Atendimento direto", desc: "Fale diretamente comigo, sem intermediários." },
  { icon: <ShieldCheck />, title: "Foco no resultado real", desc: "Tratamentos planejados para durar e devolver sua função." },
  { icon: <Sparkles />, title: "Sem enrolação", desc: "Explicações claras e objetivas sobre cada etapa." },
  { icon: <Cpu />, title: "Tecnologia atual", desc: "Equipamentos modernos para maior precisão e conforto." },
  { icon: <Heart />, title: "Cuidado humano", desc: "Um atendimento acolhedor para quem tem medo de dentista." }
];

const steps = [
  { number: "01", title: "Você chama no WhatsApp", desc: "Um primeiro contato simples e direto para entender sua necessidade." },
  { number: "02", title: "Explico seu caso", desc: "Analiso suas queixas e explico as possibilidades de tratamento." },
  { number: "03", title: "Definimos o tratamento", desc: "Planejamos juntos o caminho para o seu novo sorriso." }
];

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white selection:bg-emerald-100 selection:text-emerald-900">
      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage} 
              alt="Resultado" 
              className="max-w-full max-h-[80vh] rounded-lg shadow-2xl object-contain"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HERO */}
      <header className="relative overflow-hidden pt-12 pb-20 px-6">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-widest uppercase bg-zinc-100 text-zinc-600 rounded-full">
              Dra. Shisraira Lago
            </span>
            <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
              Eu ajudo você a <span className="italic">voltar a sorrir</span> com segurança, mesmo que ache que não tem mais solução.
            </h1>
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              Clareza, segurança e um atendimento humano focado em devolver sua autoestima através de implantes e reabilitação oral.
            </p>
            
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center w-full py-4 px-8 bg-emerald-600 text-white font-semibold rounded-2xl shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-all duration-300 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar no WhatsApp
              <ChevronRight className="w-4 h-4 ml-1 opacity-50 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-center mt-4 text-sm text-zinc-400">
              Resposta rápida • Atendimento direto
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-12 relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-zinc-100">
              <img 
                src="https://imgur.com/TVsRZ03" 
                alt="Dra. Shisraira Lago" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white rounded-full p-4 shadow-xl flex items-center justify-center text-center leading-tight">
              <span className="text-xs font-serif italic text-zinc-500">
                Foco em Implantes & Reabilitação
              </span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* 2. IDENTIFICAÇÃO */}
      <section className="py-20 bg-zinc-50 px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-serif mb-12 text-center">Você se identifica com algum desses pontos?</h2>
          <div className="grid gap-4">
            {painPoints.map((point, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center p-5 bg-white rounded-2xl border border-zinc-100 shadow-sm"
              >
                <div className="mr-4">{point.icon}</div>
                <p className="text-zinc-700 font-medium">{point.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. QUEM SOU EU */}
      <section className="py-24 px-6">
        <div className="max-w-xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 aspect-square rounded-full overflow-hidden border-8 border-zinc-50 shadow-inner">
              <img 
                src="https://imgur.com/soxBRGA" 
                alt="Dra. Shisraira Lago" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-serif mb-6">Quem sou eu</h2>
              <p className="text-zinc-600 mb-8 leading-relaxed">
                "Sou dentista e meu foco é devolver seu sorriso com segurança, sem promessas falsas. Acredito que a odontologia vai muito além de dentes; é sobre devolver a vontade de viver e se expressar."
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-zinc-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                  <span>Atendimento humanizado</span>
                </li>
                <li className="flex items-center text-zinc-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                  <span>Uso de tecnologia moderna</span>
                </li>
                <li className="flex items-center text-zinc-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                  <span>Explicação clara do tratamento</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RESULTADOS REAIS */}
      <section className="py-24 bg-zinc-900 text-white px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif mb-4">Resultados Reais</h2>
            <p className="text-zinc-400">Transformações que devolvem a confiança.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {results.map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="aspect-square rounded-xl overflow-hidden cursor-pointer bg-zinc-800"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img} 
                  alt={`Resultado ${i + 1}`} 
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
          <p className="text-center mt-8 text-xs text-zinc-500 italic">
            *Resultados podem variar de paciente para paciente.
          </p>
        </div>
      </section>

      {/* 5. POR QUE CONFIAR */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-serif mb-16 text-center">Por que confiar em mim</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trustCards.map((card, i) => (
              <div key={i} className="flex flex-col items-start p-6 rounded-3xl bg-zinc-50 border border-zinc-100">
                <div className="p-3 bg-white rounded-2xl shadow-sm text-emerald-600 mb-4">
                  {card.icon}
                </div>
                <h3 className="text-lg font-serif mb-2">{card.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA INTERMEDIÁRIO */}
      <section className="py-20 px-6">
        <div className="max-w-xl mx-auto bg-emerald-50 rounded-[2.5rem] p-10 text-center border border-emerald-100">
          <h2 className="text-2xl font-serif mb-4 text-emerald-900">Cada caso é único.</h2>
          <p className="text-emerald-700 mb-8">Fale comigo e entenda o que é melhor pra você.</p>
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center py-4 px-10 bg-emerald-600 text-white font-semibold rounded-2xl shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-all active:scale-95"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Chamar no WhatsApp
          </a>
        </div>
      </section>

      {/* 7. COMO FUNCIONA */}
      <section className="py-24 px-6 bg-zinc-50">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-serif mb-16 text-center">Como funciona</h2>
          <div className="space-y-12">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6">
                <span className="text-4xl font-serif italic text-zinc-200 shrink-0">{step.number}</span>
                <div>
                  <h3 className="text-xl font-serif mb-2">{step.title}</h3>
                  <p className="text-zinc-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. HUMANIZAÇÃO */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-xl mx-auto">
          <div className="grid grid-cols-2 gap-4 mb-12">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-zinc-100">
              <img 
                src="https://imgur.com/soxBRGA" 
                alt="Atendimento" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="aspect-square rounded-3xl overflow-hidden bg-zinc-100">
                <img 
                  src="https://imgur.com/TVsRZ03" 
                  alt="Dra. Shisraira" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 bg-zinc-900 rounded-3xl p-6 flex items-center justify-center text-center">
                <p className="text-white font-serif italic text-sm">"Cada sorriso é único"</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-5 py-2 bg-zinc-100 text-zinc-600 rounded-full text-sm font-medium">Atendimento com calma</span>
            <span className="px-5 py-2 bg-zinc-100 text-zinc-600 rounded-full text-sm font-medium">Cuidado de verdade</span>
          </div>
        </div>
      </section>

      {/* 9. CTA FINAL */}
      <section className="py-32 px-6 bg-zinc-900 text-white relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent" />
        </div>
        <div className="max-w-xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-serif mb-8 leading-tight">
            Seu sorriso pode mudar — você só precisa dar o <span className="italic">primeiro passo</span>.
          </h2>
          <p className="text-zinc-400 mb-12 text-lg">
            Não deixe para depois a saúde e a beleza que você merece hoje.
          </p>
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full py-5 px-10 bg-emerald-600 text-white text-lg font-bold rounded-2xl shadow-2xl shadow-emerald-900/50 hover:bg-emerald-700 transition-all active:scale-95"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Falar com a dentista no WhatsApp
          </a>
        </div>
      </section>

      {/* 10. RODAPÉ */}
      <footer className="py-12 px-6 border-t border-zinc-100 text-center">
        <div className="max-w-xl mx-auto">
          <h3 className="text-xl font-serif mb-1">Shisraira Lago</h3>
          <p className="text-sm text-zinc-400 mb-4 uppercase tracking-widest">Cirurgiã-Dentista</p>
          <div className="flex items-center justify-center text-zinc-500 text-sm gap-2">
            <Stethoscope className="w-4 h-4" />
            <span>Boa Esperança / Parnaíba – PI</span>
          </div>
          <div className="mt-12 pt-8 border-t border-zinc-50">
            <p className="text-[10px] text-zinc-300 uppercase tracking-tighter">
              © {new Date().getFullYear()} • Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
