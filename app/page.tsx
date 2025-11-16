"use client";

import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";
import { ContactBlock } from "@/components/ContactBlock";
import { Testimonial } from "@/components/Testimonial";
import { MOTIFS_CONSULTATION, PRACTICE_INFO } from "@/lib/constants";
import { generateLocalBusinessSchema, generatePersonSchema } from "@/lib/schema";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  Brain,
  Heart,
  Activity,
  Zap,
  Baby,
  Bone,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Brain,
  Heart,
  Activity,
  Zap,
  Baby,
  Bone,
};

export default function HomePage() {
  const businessSchema = generateLocalBusinessSchema();
  const personSchema = generatePersonSchema();

  useEffect(() => {
    // Injecter les schémas JSON-LD côté client
    const businessScript = document.createElement("script");
    businessScript.type = "application/ld+json";
    businessScript.text = JSON.stringify(businessSchema);
    document.head.appendChild(businessScript);

    const personScript = document.createElement("script");
    personScript.type = "application/ld+json";
    personScript.text = JSON.stringify(personSchema);
    document.head.appendChild(personScript);

    return () => {
      if (document.head.contains(businessScript)) {
        document.head.removeChild(businessScript);
      }
      if (document.head.contains(personScript)) {
        document.head.removeChild(personScript);
      }
    };
  }, []);

  return (
    <>
      <Hero
        title="Retrouver le confort et la liberté de mouvement."
        subtitle="Ostéopathe à Lille — soins adaptés à chaque étape de la vie : adultes, grossesse, nourrissons, sportifs, seniors."
        secondaryCTA={{
          label: "Découvrir le cabinet",
          href: "/cabinet-acces",
        }}
      />

      {/* Avis Google */}
      <section className="py-6 sm:py-8" style={{ backgroundColor: '#7e5865' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-white">
              Ils témoignent
            </h2>
          </div>
          <div className="max-w-6xl mx-auto">
            {/* En-tête avec note et nombre d'avis */}
            <div className="text-center mb-6 sm:mb-8">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-xl sm:text-2xl font-serif font-bold text-white">5,0</span>
              </div>
              <p className="text-white text-base sm:text-lg">18 avis Google</p>
            </div>
            
            {/* Grille de témoignages */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6">
              <Testimonial
                name="Lucas"
                month="mai"
                text="Excellente ostéopathe, à l'écoute et très professionnelle. Elle a su soulager mes douleurs dès la première séance, avec des manipulations douces et efficaces. On se sent tout de suite en confiance. Je la recommande sans hésiter à tous ceux qui cherchent une prise en charge sérieuse et bienveillante. Un grand merci pour votre aide précieuse !"
              />
              <Testimonial
                name="Adeline"
                month="septembre"
                text="Cela fait quelques années maintenant que je consulte dans ce cabinet. Stéphanie est très professionnelle, très douce dans la manipulation et d'une gentillesse comme je n'ai jamais vu chez un professionnel de santé. Elle explique ce qu'elle fait et donne pas mal de conseils. On repart vraiment détendu. C'est devenu un plaisir de venir la consulter ! Je la recommande à 1000% !"
              />
              <Testimonial
                name="Gg"
                month="novembre"
                text="Au top !!! Merci énormément à Stéphanie qui est très professionnelle. Toujours à l'écoute et prends soin de vous et avec passion. Je n'y manquerai pas d'y retourner avec plaisir 😊."
              />
            </div>
            <div className="text-center">
              <a
                href="https://www.google.com/search?client=safari&sa=X&sca_esv=7e03d9ee9bc2dbda&rls=en&hl=fr-FR&biw=1366&bih=903&tbm=lcl&sxsrf=AE3TifOgiIQyqCl81nSoRF_Ly4N-IT2m5Q:1763320593400&q=François+Stéphanie+Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2MzI3MjI1MTa1NDEwMDUxMzMz3sDI-IpR0q0oMe_w8vzMYoXgksMrCzIS8zJTFRzLMosXseKWAwB2kmu4UgAAAA&rldimm=6272254359400546663&ved=2ahUKEwiJ3eCMsfeQAxWINvsDHVGBH04Q9fQKegQIUhAF#lkt=LocalPoiReviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-brand-100 text-brand-700 border-2 border-brand-300 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-medium transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-700 focus:ring-offset-2"
              >
                Voir plus d'avis
                <ArrowRight size={18} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Problème */}
      <Section title="Une séance adaptée à chaque besoin" bg="white">
        <div className="max-w-4xl space-y-6 text-muted leading-relaxed">
          <p>
            Parce que chaque corps réagit à sa manière, chaque séance est construite selon ce que vous vivez aujourd'hui : une douleur qui s'installe, une tension qui revient, un manque d'énergie ou simplement l'envie de retrouver du confort. L'objectif est toujours le même : vous aider à aller mieux, sans forcer, avec ce dont votre corps a besoin.
          </p>
        </div>
      </Section>

      {/* Motifs de consultation */}
      <Section title="Pourquoi consulter ?" bg="brand-100">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
          {/* Douleurs ostéo-articulaires */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm"
          >
            <h3 className="text-xl sm:text-2xl font-serif font-semibold text-brand-900 mb-4">
              Douleurs ostéo-articulaires
            </h3>
            <p className="text-muted leading-relaxed">
              Lombalgies, cervicalgies, sciatiques, articulations douloureuses, tendinites, entorses, raideurs ou perte de mobilité.
            </p>
          </motion.div>

          {/* Troubles digestifs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm"
          >
            <h3 className="text-xl sm:text-2xl font-serif font-semibold text-brand-900 mb-4">
              Troubles digestifs
            </h3>
            <p className="text-muted leading-relaxed">
              Reflux, ballonnements, digestion lente, constipation, diarrhée ou inconfort abdominal.
            </p>
          </motion.div>

          {/* Sphère crânienne */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm"
          >
            <h3 className="text-xl sm:text-2xl font-serif font-semibold text-brand-900 mb-4">
              Sphère crânienne
            </h3>
            <p className="text-muted leading-relaxed">
              Migraines, tensions de la mâchoire, acouphènes, troubles du sommeil, fatigue ou sinusites chroniques.
            </p>
          </motion.div>

          {/* Sphère gynécologique */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm"
          >
            <h3 className="text-xl sm:text-2xl font-serif font-semibold text-brand-900 mb-4">
              Sphère gynécologique
            </h3>
            <p className="text-muted leading-relaxed">
              Cycles douloureux, douleurs pelviennes, accompagnement du cycle, grossesse et post-partum.
            </p>
          </motion.div>

          {/* Femme enceinte */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm"
          >
            <h3 className="text-xl sm:text-2xl font-serif font-semibold text-brand-900 mb-4">
              Femme enceinte
            </h3>
            <p className="text-muted leading-relaxed">
              Lombalgies, tiraillements, reflux, fatigue, difficultés posturales liées à l'évolution de la grossesse.
            </p>
          </motion.div>

          {/* Nourrissons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm"
          >
            <h3 className="text-xl sm:text-2xl font-serif font-semibold text-brand-900 mb-4">
              Nourrissons
            </h3>
            <p className="text-muted leading-relaxed">
              Torticolis, plagiocéphalie, reflux, coliques, sommeil difficile, tensions après un accouchement instrumentalisé.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Retrouvez mouvement, équilibre et sérénité */}
      <Section title="Améliorer vos mouvements et apaiser les tensions au quotidien." bg="white">
        <div className="max-w-4xl space-y-6 text-muted leading-relaxed">
          <p>
            Les douleurs apparaissent souvent quand une zone perd de sa mobilité ou qu'un équilibre se rompt. L'ostéopathie aide à relâcher ces tensions, à améliorer vos mouvements et à retrouver un confort durable, tout en prévenant l'apparition de nouvelles gênes.
          </p>
        </div>
      </Section>

      {/* Profil et valeurs */}
      <section className="bg-brand-100 py-8 sm:py-12 lg:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-brand-900 sm:bg-gradient-to-r sm:from-brand-900 sm:via-brand-700 sm:to-brand-900 sm:bg-clip-text sm:text-transparent">
              <strong>Profil et valeurs</strong>
            </h2>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
            <div className="space-y-4 sm:space-y-6 text-muted leading-relaxed text-sm sm:text-base">
              <p>
                Je suis diplômée de l'École Supérieure d'Ostéopathie de Lille depuis 2011 et je vous accueille avenue de Bretagne, entre les arrêts Canteleu et Bois-Blancs.
              </p>
              <p>
                J'accompagne tous types de patients, avec une pratique douce et précise. Chaque séance s'adapte à votre histoire, votre rythme et votre façon de ressentir la douleur.
              </p>
              <p>
                Je travaille en tenant compte de l'ensemble du corps et de ce qui peut influencer vos tensions : habitudes de vie, contexte émotionnel, fatigue, stress…
              </p>
              <p>
                Formée également en Médecine Traditionnelle Chinoise – Acupuncture, j'intègre cette approche lorsque cela a du sens dans votre parcours.
              </p>
            </div>
          </div>
        </div>
        {/* Image positionnée absolument pour toucher les bords sup, inf et droit - Desktop */}
        <div className="hidden lg:block absolute top-0 bottom-0 right-0 w-1/2 group overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/portrait sephanie.png"
            alt="Stéphanie François, Ostéopathe"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ objectPosition: 'center center' }}
          />
          {/* Dégradé uniquement de droite à gauche pour fondre dans le fond */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-brand-100" />
        </div>
        {/* Image en arrière-plan sur mobile - opacité réduite */}
        <div className="lg:hidden absolute top-0 bottom-0 right-0 w-full overflow-hidden opacity-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/portrait sephanie.png"
            alt="Stéphanie François, Ostéopathe"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center center' }}
          />
          {/* Dégradé pour fondre dans le fond sur mobile */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-brand-100" />
        </div>
      </section>

      {/* Accès rapide */}
      <Section title="Accès rapide" bg="brand-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-semibold text-brand-900">
              Adresse
            </h3>
            <p className="text-muted">{PRACTICE_INFO.address}</p>
            <div className="space-y-2 text-muted">
              <p>{PRACTICE_INFO.access.metro}</p>
              <p>{PRACTICE_INFO.access.bus}</p>
              <p>{PRACTICE_INFO.access.parking}</p>
              <p>{PRACTICE_INFO.access.floor}</p>
              <p>{PRACTICE_INFO.access.accessibility}</p>
            </div>
          </div>
          <div className="bg-brand-100 rounded-2xl p-4">
            <iframe
              src="https://www.google.com/maps?q=89+Avenue+de+Bretagne,+59000+Lille&output=embed&z=15"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
              title="Carte du cabinet"
            />
          </div>
        </div>
      </Section>

      {/* Horaires synthétiques */}
      <Section title="Horaires" bg="white">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-200/50 shadow-md">
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 pb-3 border-b border-brand-100">
                <span className="font-semibold text-brand-900 text-base sm:text-lg">
                  Lundi–Vendredi
                </span>
                <span className="text-muted text-sm sm:text-base">{PRACTICE_INFO.hours.weekdays}</span>
              </div>
              {PRACTICE_INFO.hours.saturday && (
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <span className="font-semibold text-brand-900 text-base sm:text-lg">Samedi</span>
                  <span className="text-muted text-sm sm:text-base">{PRACTICE_INFO.hours.saturday}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* Galerie du cabinet */}
      <Section title="Le cabinet" bg="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { src: "/images/cabinet stephanie 1.png", alt: "Cabinet d'ostéopathie - Intérieur" },
            { src: "/images/cabinet stephanie 2.png", alt: "Cabinet d'ostéopathie - Intérieur" },
            { src: "/images/cabinet stephanie 3.png", alt: "Cabinet d'ostéopathie - Intérieur" },
            { src: "/images/exterieur cabinet stephanie .png", alt: "Cabinet d'ostéopathie - Extérieur" },
          ].map((img, index) => {
            return (
              <div
                key={index}
                className="relative w-full h-[400px] bg-brand-100 rounded-2xl overflow-hidden group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading={index < 2 ? "eager" : "lazy"}
                />
              </div>
            );
          })}
        </div>
      </Section>

      {/* CTA final */}
      <Section bg="brand-100">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-brand-900 mb-4">
            Prêt à prendre rendez-vous ?
          </h2>
          <p className="text-muted mb-8">
            Réservez votre séance d'ostéopathie en ligne via Doctolib
          </p>
          <a
            href={PRACTICE_INFO.doctolibUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-700 hover:bg-brand-900 text-white px-8 py-4 rounded-2xl font-medium shadow-md transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-700 focus:ring-offset-2"
          >
            <Calendar size={24} />
            Prendre RDV
          </a>
        </div>
      </Section>
    </>
  );
}
