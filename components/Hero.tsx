"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { PRACTICE_INFO } from "@/lib/constants";
import { motion } from "framer-motion";

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCTA?: {
    label: string;
    href: string;
    external?: boolean;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  tertiaryCTA?: {
    label: string;
    href: string;
  };
}

export function Hero({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  tertiaryCTA,
}: HeroProps) {
  const defaultPrimaryCTA = {
    label: "Prendre RDV",
    href: PRACTICE_INFO.doctolibUrl,
    external: true,
  };

  const cta = primaryCTA || defaultPrimaryCTA;
  
  // Image hero pour Stéphanie
  const heroImageSrc = "/images/haut home page stephanie .png";

  return (
    <section className="relative w-full h-[85vh] min-h-[500px] md:min-h-[700px] max-h-[1000px] overflow-hidden flex flex-col md:flex-row" style={{ margin: 0, padding: 0 }}>
      {/* Partie gauche - Fond avec couleur exacte */}
      <div className="absolute inset-0 w-full md:w-1/2 z-0" style={{ backgroundColor: '#7e5865' }}>
        {/* Overlay subtil pour plus de profondeur */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-transparent" />
      </div>

      {/* Partie droite - Image hero */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 overflow-hidden z-10" style={{ backgroundColor: '#7e5865' }}>
        <div className="relative w-full h-full">
          <Image
            src={heroImageSrc}
            alt="Stéphanie François, Ostéopathe D.O"
            fill
            className="object-cover"
            style={{ objectPosition: "center center" }}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Overlay léger sur l'image */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent z-20 pointer-events-none" />
        </div>
      </div>

      {/* Contenu avec animations - Centré verticalement sur mobile, à gauche sur desktop */}
      <div className="absolute inset-0 z-30 w-full flex items-center justify-center md:justify-start px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-2xl text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg"
              >
                {title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base sm:text-lg lg:text-xl text-white/95 mb-6 sm:mb-8 leading-relaxed drop-shadow-md"
              >
                {subtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-2 sm:gap-3 flex-wrap"
              >
                {/* Masquer le bouton "Prendre RDV" sur mobile (CTASticky en bas) */}
                {cta.external ? (
                  <motion.a
                    href={cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="hidden sm:inline-flex items-center justify-center gap-2 bg-brand-700 hover:bg-brand-900 text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-3xl font-medium text-sm sm:text-base shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-700 focus:ring-offset-2 whitespace-nowrap"
                  >
                    <Calendar size={18} className="sm:w-5 sm:h-5" />
                    {cta.label}
                  </motion.a>
                ) : (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="hidden sm:block"
                  >
                    <Link
                      href={cta.href}
                      className="inline-flex items-center justify-center gap-2 bg-brand-700 hover:bg-brand-900 text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-3xl font-medium text-sm sm:text-base shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-700 focus:ring-offset-2 whitespace-nowrap"
                    >
                      <Calendar size={18} className="sm:w-5 sm:h-5" />
                      {cta.label}
                    </Link>
                  </motion.div>
                )}
                {secondaryCTA && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={secondaryCTA.href}
                      className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-white/95 hover:bg-white text-brand-700 border-2 border-white/50 px-4 sm:px-5 py-3 sm:py-3.5 rounded-3xl font-medium text-sm sm:text-base transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 whitespace-nowrap"
                    >
                      {secondaryCTA.label}
                      <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                    </Link>
                  </motion.div>
                )}
                {tertiaryCTA && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={tertiaryCTA.href}
                      className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-white/95 hover:bg-white text-brand-700 border-2 border-white/50 px-4 sm:px-5 py-3 sm:py-3.5 rounded-3xl font-medium text-sm sm:text-base transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 whitespace-nowrap"
                    >
                      {tertiaryCTA.label}
                      <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

