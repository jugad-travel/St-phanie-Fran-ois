import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { generateMetadata as genMeta } from "@/lib/seo";
import { generateLocalBusinessSchema } from "@/lib/schema";
import { PRACTICE_INFO } from "@/lib/constants";
import Link from "next/link";
import { Calendar, Users, Clock, Heart } from "lucide-react";

export const metadata = genMeta({
  title: "Comprendre l'ostéopathie",
  description:
    "Découvrez l'approche ostéopathique de Stéphanie François : une méthode manuelle douce pour améliorer la mobilité et réduire les tensions. Consultations adaptées à tous les âges.",
  path: "/osteopathie",
});

export default function OsteopathiePage() {
  const schema = generateLocalBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Section
        title="Comprendre l'ostéopathie"
        bg="white"
        className="pt-16 lg:pt-24"
      >
        <div className="max-w-4xl space-y-12">
          {/* Approche globale */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-brand-900 mb-4">
              Voir le corps autrement
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                L'ostéopathie part d'une idée simple : quand une zone du corps bouge moins bien, c'est tout l'équilibre qui finit par se dérégler.
              </p>
              <p>
                En travaillant uniquement avec ses mains, l'ostéopathe recherche ces zones qui « tirent », compensent ou s'adaptent trop — et les aide à retrouver leur mobilité naturelle.
              </p>
              <p>
                Cette approche douce accompagne aussi bien les douleurs récentes que les tensions installées depuis longtemps.
              </p>
            </div>
          </div>

          {/* Déroulé d'une séance */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-brand-900 mb-6">
              Une séance, comment ça se passe ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card
                title="Un temps pour comprendre"
                icon={<Heart size={24} className="text-brand-700" />}
              >
                On commence par discuter de votre douleur, de votre rythme de vie, de vos habitudes et de ce qui peut influencer votre corps au quotidien.
              </Card>
              <Card
                title="Un bilan précis du corps"
                icon={<Users size={24} className="text-brand-700" />}
              >
                Tests de mobilité, observation, palpation : cela permet d'identifier ce qui bloque, ce qui compense et ce qui manque de mouvement.
              </Card>
              <Card
                title="Le traitement"
                icon={<Heart size={24} className="text-brand-700" />}
              >
                Selon ce que votre corps présente : techniques douces, travail tissulaire, mobilisations ciblées… L'objectif est de relâcher les tensions et de redonner de la fluidité.
              </Card>
              <Card
                title="Des conseils utiles"
                icon={<Heart size={24} className="text-brand-700" />}
              >
                Quelques ajustements simples (posture, étirements, gestes du quotidien) pour prolonger les effets de la séance.
              </Card>
            </div>
          </div>

          {/* Durée et tenue */}
          <div className="bg-brand-100 rounded-2xl p-6 lg:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Clock size={24} className="text-brand-700" />
                  <h3 className="text-xl font-serif font-semibold text-brand-900">
                    Durée : 45–60 min
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-brand-900 mb-3">
                  Tenue : vêtements souples ; vous restez habillé(e).
                </h3>
              </div>
            </div>
          </div>

          {/* Publics */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-brand-900 mb-6">
              Pour qui ?
            </h2>
            <div className="space-y-6">
              <div id="nourrissons">
                <h3 className="text-xl font-serif font-semibold text-brand-900 mb-3">
                  Nourrissons
                </h3>
                <p className="text-muted leading-relaxed">
                  Inconfort digestif, tête plate, torticolis, sommeil perturbé ou tensions liées à un accouchement difficile.
                </p>
              </div>
              <div id="enfants">
                <h3 className="text-xl font-serif font-semibold text-brand-900 mb-3">
                  Enfants
                </h3>
                <p className="text-muted leading-relaxed">
                  Croissance, posture, sport, fatigue, manque de concentration.
                </p>
              </div>
              <div id="femmes-enceintes">
                <h3 className="text-xl font-serif font-semibold text-brand-900 mb-3">
                  Femmes enceintes
                </h3>
                <p className="text-muted leading-relaxed">
                  Lombalgies, tiraillements, essoufflement, reflux, préparation à l'accouchement et récupération post-partum.
                </p>
              </div>
              <div id="sportifs">
                <h3 className="text-xl font-serif font-semibold text-brand-900 mb-3">
                  Sportifs
                </h3>
                <p className="text-muted leading-relaxed">
                  Blessures, tensions récurrentes, mobilité limitée, optimisation du geste et récupération.
                </p>
              </div>
              <div id="adultes-seniors">
                <h3 className="text-xl font-serif font-semibold text-brand-900 mb-3">
                  Adultes & Seniors
                </h3>
                <p className="text-muted leading-relaxed">
                  Douleurs articulaires, stress, migraines, troubles digestifs, raideurs, inconforts chroniques.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-brand-100 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-serif font-semibold text-brand-900 mb-4">
              Prêt à prendre rendez-vous ?
            </h3>
            <p className="text-muted mb-6">
              Réservez votre séance d'ostéopathie en ligne
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
        </div>
      </Section>
    </>
  );
}

