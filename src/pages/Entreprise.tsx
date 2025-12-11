import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '@/context/i18n';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Target, Eye, ArrowRight, Layers } from 'lucide-react';

const Entreprise = () => {
  const { t } = useI18n();

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
      </section>

      {/* Story Section with Image */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-up order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-foreground mb-6">
                {t.company.story.title}
              </h2>
              <div className="space-y-4 font-poppins font-light text-muted-foreground text-lg leading-relaxed">
                <p>{t.company.story.content}</p>
                <p>{t.company.story.content2}</p>
                <p>{t.company.story.content3}</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/produits">
                  <Button variant="solid" size="md" className="group">
                    {t.company.story.ctaProducts}
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="md" className="group">
                    {t.company.story.ctaContact}
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="fade-up-delay-1 order-1 lg:order-2">
              <div className="aspect-[4/5] relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                  alt="TEKORA headquarters"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-8">
                  <p className="font-poppins font-semibold text-primary-foreground text-3xl">2003</p>
                  <p className="font-poppins font-light text-primary-foreground/80 text-sm mt-1">
                    {t.company.story.milestone1}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 lg:py-32 bg-neutralBg">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="fade-up text-3xl md:text-4xl font-poppins font-semibold text-foreground">
              {t.company.timeline.title}
            </h2>
            <p className="fade-up-delay-1 mt-4 text-lg font-poppins font-light text-muted-foreground max-w-2xl mx-auto">
              {t.company.timeline.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { year: '2003', label: t.company.story.milestone1 },
              { year: '2010', label: t.company.story.milestone2 },
              { year: '2015', label: t.company.story.milestone3 },
              { year: '2020', label: t.company.story.milestone4 },
            ].map((milestone, index) => (
              <Card 
                key={index} 
                variant="elevated" 
                className={`fade-up-delay-${index + 1} text-center group hover:-translate-y-2`}
              >
                <p className="text-4xl font-poppins font-semibold text-secondary">
                  {milestone.year}
                </p>
                <p className="mt-3 font-poppins font-light text-muted-foreground text-sm">
                  {milestone.label}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 lg:py-32 bg-background">
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

      {/* PietraNox Section */}
      <section className="py-24 lg:py-32 bg-neutralBg">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-up">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
                  alt="PietraNox SPC flooring"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="fade-up-delay-1">
              <div className="w-16 h-16 bg-secondary/10 flex items-center justify-center mb-6">
                <Layers className="w-8 h-8 text-secondary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-foreground mb-6">
                {t.company.pietranox.title}
              </h2>
              <div className="space-y-4 font-poppins font-light text-muted-foreground text-lg leading-relaxed">
                <p>{t.company.pietranox.content}</p>
                <p>{t.company.pietranox.content2}</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/produits">
                  <Button variant="solid" size="md" className="group">
                    {t.company.pietranox.cta}
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Entreprise;