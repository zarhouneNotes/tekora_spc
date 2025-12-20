import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '@/context/i18n';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/hooks/useScrollAnimation';
import logo from "@/images/plogo.jpg"

const Entreprise = () => {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <AnimatedSection className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="fade-up text-4xl md:text-5xl lg:text-6xl font-poppins font-semibold text-primary-foreground">
            {t.company.hero.title}
          </h1>
          <p className="fade-up-delay-1 mt-6 text-lg md:text-xl font-poppins font-light text-primary-foreground/80 max-w-3xl mx-auto">
            {t.company.hero.subtitle}
          </p>
        </div>
      </AnimatedSection>

      {/* Story Section with Image */}
      <AnimatedSection className="py-24 lg:py-32 bg-background">
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
                  src="https://i.pinimg.com/736x/ed/0f/cf/ed0fcf54c4d2b0646e81ee6f4ec4685e.jpg"
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
      </AnimatedSection>

      {/* Timeline Section - Horizontal Line with Islands */}
      <AnimatedSection className="py-24 lg:py-32 bg-neutralBg overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="fade-up text-3xl md:text-4xl font-poppins font-semibold text-foreground">
              {t.company.timeline.title}
            </h2>
            <p className="fade-up-delay-1 mt-4 text-lg font-poppins font-light text-muted-foreground max-w-2xl mx-auto">
              {t.company.timeline.subtitle}
            </p>
          </div>
          
          {/* Horizontal Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-secondary/30 transform -translate-y-1/2 hidden md:block" />
            
            <div className="flex flex-col md:flex-row md:justify-between items-center gap-8 md:gap-4 relative">
              {[
                { year: '2003', label: t.company.story.milestone1 },
                { year: '2010', label: t.company.story.milestone2 },
                { year: '2015', label: t.company.story.milestone3 },
                { year: '2020', label: t.company.story.milestone4 },
              ].map((milestone, index) => (
                <div 
                  key={index} 
                  className={`fade-up-delay-${index + 1} flex flex-col items-center relative z-10`}
                >
                  {/* Island Circle */}
                  <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center shadow-lg shadow-secondary/30 mb-4 group hover:scale-110 transition-transform duration-300">
                    <span className="text-xl font-poppins font-bold text-secondary-foreground">
                      {milestone.year}
                    </span>
                  </div>
                  {/* Label */}
                  <div className="bg-background px-4 py-3 rounded-lg shadow-md max-w-[180px] text-center">
                    <p className="font-poppins font-light text-muted-foreground text-sm">
                      {milestone.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA to break blank space */}
          <div className="mt-16 text-center fade-up">
            <Link to="/produits">
              <Button variant="outline" size="lg" className="group">
                {t.company.timeline.cta}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Mission & Vision Section - Redesigned */}
      <AnimatedSection className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="fade-up text-3xl md:text-4xl font-poppins font-semibold text-foreground">
              {t.company.missionVision.title}
            </h2>
            <p className="fade-up-delay-1 mt-4 text-lg font-poppins font-light text-muted-foreground max-w-2xl mx-auto">
              {t.company.missionVision.subtitle}
            </p>
          </div>
          
          {/* Staggered Layout: Image top-left, Mission center, Vision bottom-right */}
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Image - Top aligned */}
            <div className="fade-up lg:self-start">
              <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-2xl shadow-primary/10">
                <img 
                  src="https://i.pinimg.com/736x/99/af/e6/99afe6c109bad52833880ffeb591e350.jpg"
                  alt="Quality flooring"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            
            {/* Mission Card - Center aligned */}
            <Card variant="elevated" className="fade-up-delay-1 lg:self-center shadow-xl shadow-secondary/10 border-l-4 border-secondary">
              {/* <div className="w-16 h-16 rounded-lg overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                  alt="Mission"
                  className="w-full h-full object-cover"
                />
              </div> */}
              <h3 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                {t.company.mission.title}
              </h3>
              <p className="font-poppins font-light text-muted-foreground leading-relaxed">
                {t.company.mission.content}
              </p>
            </Card>
            
            {/* Vision Card - Bottom aligned */}
            <Card variant="elevated" className="fade-up-delay-2 lg:self-end shadow-xl shadow-secondary/10 border-l-4 border-primary">
              {/* <div className="w-16 h-16 rounded-lg overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=200&auto=format&fit=crop"
                  alt="Vision"
                  className="w-full h-full object-cover"
                />
              </div> */}
              <h3 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                {t.company.vision.title}
              </h3>
              <p className="font-poppins font-light text-muted-foreground leading-relaxed">
                {t.company.vision.content}
              </p>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Partners Section (formerly PietraNox) */}
      <AnimatedSection className="py-24 lg:py-32 bg-neutralBg">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="fade-up text-3xl md:text-4xl font-poppins font-semibold text-foreground">
              {t.company.partners.title}
            </h2>
            <p className="fade-up-delay-1 mt-4 text-lg font-poppins font-light text-muted-foreground max-w-2xl mx-auto">
              {t.company.partners.subtitle}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-up">
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-2xl relative">
                <img 
                  src="https://i.pinimg.com/736x/1d/18/88/1d1888cb65ea90dfec3f04a69a27dc90.jpg"
                  alt="PietraNox SPC flooring"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />


                <img src={logo} alt="" 

                style={{
                  position:"absolute" , 
                  bottom : 20 , 
                  left : 20 ,
                }}
                width={"150px"}
                />


              </div>
            </div>
            <div className="fade-up-delay-1">
              {/* <div className="w-16 h-16 rounded-lg overflow-hidden mb-6 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=200&auto=format&fit=crop"
                  alt="PietraNox logo"
                  className="w-full h-full object-cover"
                />
              </div> */}
              <h3 className="text-3xl md:text-4xl font-poppins font-semibold text-foreground mb-6">
                {t.company.pietranox.title}
              </h3>
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
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default Entreprise;