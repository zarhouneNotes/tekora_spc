import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '@/context/i18n';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import fireproof from "@/images/Plancher.webp"
import clean from "@/images/clean.webp"
import cat from "@/images/catalog.png"
import { Check, ArrowRight, Star, Droplets, Flame, Sparkles, Shield } from 'lucide-react';
import { AnimatedDiv, AnimatedSection } from '@/hooks/useScrollAnimation';

const Produits = () => {
  const { t } = useI18n();

  const featureImages = {
    water: 'https://i.pinimg.com/1200x/e6/24/9f/e6249fa607223d9683722f2236c71f1b.jpg',
    fire: fireproof ,
    stain: clean,
    durability: 'https://i.pinimg.com/1200x/6f/da/7d/6fda7d8f5c7d1a8a83f084b073e16cbc.jpg'
  };

  const featureIcons = {
    water: Droplets,
    fire: Flame,
    stain: Sparkles,
    durability: Shield
  };

  const features = ['water', 'fire', 'stain', 'durability'] as const;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <AnimatedSection className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <AnimatedDiv animation="fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-semibold text-primary-foreground">
              {t.products.hero.title}
            </h1>
          </AnimatedDiv>
          <AnimatedDiv animation="fade-up" delay={100}>
            <p className="my-6 text-lg md:text-xl font-poppins font-light text-primary-foreground/80 max-w-3xl mx-auto">
              {t.products.hero.subtitle}
            </p>
          </AnimatedDiv>
           <img src={cat} alt="" width={"100%"} />
        </div>

      </AnimatedSection>

      {/* Features Title */}
      <AnimatedSection className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <AnimatedDiv animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-foreground">
              {t.products.features.title}
            </h2>
          </AnimatedDiv>
          <AnimatedDiv animation="fade-up" delay={100}>
            <p className="mt-4 text-lg font-poppins font-light text-muted-foreground max-w-2xl mx-auto">
              {t.products.features.subtitle}
            </p>
          </AnimatedDiv>
        </div>


      </AnimatedSection>

      {/* Individual Feature Sections */}
      {features.map((feature, index) => {
        const Icon = featureIcons[feature];
        return (
          <AnimatedSection 
            key={feature}
            className={`py-24 lg:py-32 ${index % 2 === 0 ? 'bg-neutralBg' : 'bg-background'}`}
          >
            <div className="container mx-auto px-4 lg:px-8">
              <div className={`grid lg:grid-cols-2 gap-16 items-center`}>
                <AnimatedDiv animation="fade-up" className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[4/3] relative overflow-hidden group">
                    <img 
                      src={featureImages[feature]}
                      alt={t.products.features[feature].title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading='lazy'

                    />
                  </div>
                </AnimatedDiv>
                <AnimatedDiv animation="fade-up" delay={100} className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="w-16 h-16 bg-secondary/10 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-foreground mb-4">
                    {t.products.features[feature].title}
                  </h2>
                  <p className="font-poppins font-medium text-foreground text-lg mb-4">
                    {t.products.features[feature].description}
                  </p>
                  <p className="font-poppins font-light text-muted-foreground text-lg leading-relaxed">
                    {t.products.features[feature].longDescription}
                  </p>
                </AnimatedDiv>
              </div>
            </div>
          </AnimatedSection>
        );
      })}

      {/* Technical Specifications */}
      <AnimatedSection className="py-24 lg:py-32 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedDiv animation="fade-up">
              <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-primary-foreground">
                {t.products.specs.title}
              </h2>
            </AnimatedDiv>
            <AnimatedDiv animation="fade-up" delay={100}>
              <p className="mt-4 text-lg font-poppins font-light text-primary-foreground/80 max-w-2xl mx-auto">
                {t.products.specs.subtitle}
              </p>
            </AnimatedDiv>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.products.specs.items.map((spec, index) => (
              <AnimatedDiv animation="fade-up" delay={index * 50} key={index}>
                <Card 
                  variant="elevated" 
                  className=""
                >
                  <p className="font-poppins font-medium text-secondary text-sm uppercase tracking-wider mb-2">
                    {spec.label}
                  </p>
                  <p className="font-poppins font-light text-foreground text-lg">
                    {spec.value}
                  </p>
                </Card>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* PietraNox Premium Section */}
      {/* <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-up order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <Star className="w-8 h-8 text-secondary" />
                <span className="text-secondary font-poppins font-medium text-sm uppercase tracking-wider">
                  {t.products.pietranox.subtitle}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-semibold text-foreground mb-6">
                {t.products.pietranox.title}
              </h2>
              <p className="font-poppins font-light text-muted-foreground text-lg leading-relaxed mb-8">
                {t.products.pietranox.description}
              </p>
              <ul className="space-y-4">
                {t.products.pietranox.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-secondary flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-secondary-foreground" />
                    </div>
                    <span className="font-poppins font-light text-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="fade-up-delay-1 order-1 lg:order-2">
              <div className="aspe relative overflow-hidden">
                <img 
                  src="https://i.pinimg.com/1200x/99/6f/37/996f37ae866c40f6d67b6d6b8e2a1d63.jpg"
                  alt="PietraNox Premium"
                  className="w object-cover"
                />
                <div className="absolute top-6 left-6 bg-secondary px-4 py-2">
                  <span className="font-poppins font-semibold text-secondary-foreground text-sm">
                    PIETRANOX
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <AnimatedSection className="py-24 lg:py-32 bg-neutralBg">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedDiv animation="fade-up">
            <Card variant="elevated" className="text-center py-16 px-8">
              <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-foreground mb-4">
                {t.products.cta.title}
              </h2>
              <p className="font-poppins font-light text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                {t.products.cta.description}
              </p>
              <Link to="/contact">
                <Button variant="solid" size="lg" className="group">
                  {t.products.cta.button}
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </Card>
          </AnimatedDiv>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default Produits;