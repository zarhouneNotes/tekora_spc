import React from 'react';
import { useI18n } from '@/context/i18n';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/Card';
import { Target, Eye, Users } from 'lucide-react';

const Entreprise = () => {
  const { t } = useI18n();

  const milestones = [
    { year: '2003', label: t.company.story.milestone1 },
    { year: '2010', label: t.company.story.milestone2 },
    { year: '2015', label: t.company.story.milestone3 },
    { year: '2020', label: t.company.story.milestone4 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="fade-up text-4xl md:text-5xl lg:text-6xl font-poppins font-semibold text-primary-foreground">
            {t.company.hero.title}
          </h1>
          <p className="fade-up-delay-1 mt-6 text-lg md:text-xl font-poppins font-light text-primary-foreground/80 max-w-3xl mx-auto">
            {t.company.hero.subtitle}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Story Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-up">
              <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-foreground mb-6">
                {t.company.story.title}
              </h2>
              <p className="font-poppins font-light text-muted-foreground text-lg leading-relaxed">
                {t.company.story.content}
              </p>
            </div>
            <div className="fade-up-delay-1">
              <div className="grid grid-cols-2 gap-6">
                {milestones.map((milestone, index) => (
                  <Card key={index} variant="outlined" className="text-center">
                    <p className="text-3xl font-poppins font-semibold text-secondary">
                      {milestone.year}
                    </p>
                    <p className="mt-2 font-poppins font-light text-muted-foreground text-sm">
                      {milestone.label}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 lg:py-32 bg-neutralBg">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card variant="elevated" className="fade-up">
              <div className="w-16 h-16 bg-secondary/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                {t.company.mission.title}
              </h3>
              <p className="font-poppins font-light text-muted-foreground leading-relaxed">
                {t.company.mission.content}
              </p>
            </Card>
            <Card variant="elevated" className="fade-up-delay-1">
              <div className="w-16 h-16 bg-secondary/10 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                {t.company.vision.title}
              </h3>
              <p className="font-poppins font-light text-muted-foreground leading-relaxed">
                {t.company.vision.content}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="fade-up w-20 h-20 mx-auto bg-secondary/10 flex items-center justify-center mb-8">
              <Users className="w-10 h-10 text-secondary" />
            </div>
            <h2 className="fade-up text-3xl md:text-4xl font-poppins font-semibold text-foreground mb-4">
              {t.company.team.title}
            </h2>
            <p className="fade-up-delay-1 font-poppins font-light text-muted-foreground text-lg max-w-2xl mx-auto">
              {t.company.team.description}
            </p>
          </div>
          <div className="fade-up-delay-2 grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="text-center">
                <div className="aspect-square bg-muted mb-6" />
                <h4 className="font-poppins font-semibold text-foreground text-lg">
                  {t.home.about.cta === 'En savoir plus' ? `Directeur ${index + 1}` : `Director ${index + 1}`}
                </h4>
                <p className="font-poppins font-light text-muted-foreground text-sm mt-1">
                  {t.home.about.cta === 'En savoir plus' ? 'Département Exécutif' : 'Executive Department'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Entreprise;
