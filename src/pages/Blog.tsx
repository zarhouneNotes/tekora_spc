import React from 'react';
import { useI18n } from '@/context/i18n';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

const Blog = () => {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="fade-up text-4xl md:text-5xl lg:text-6xl font-poppins font-semibold text-primary-foreground">
            {t.blog.hero.title}
          </h1>
          <p className="fade-up-delay-1 mt-6 text-lg md:text-xl font-poppins font-light text-primary-foreground/80 max-w-3xl mx-auto">
            {t.blog.hero.subtitle}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Featured Article */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="fade-up inline-block text-secondary font-poppins font-medium text-sm uppercase tracking-wider mb-4">
              {t.blog.featured.title}
            </span>
          </div>
          <div className="fade-up-delay-1 grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[16/10] bg-muted" />
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="flex items-center gap-2 text-secondary font-poppins text-sm">
                  <Tag className="w-4 h-4" />
                  {t.blog.articles[0].category}
                </span>
                <span className="flex items-center gap-2 text-muted-foreground font-poppins text-sm">
                  <Calendar className="w-4 h-4" />
                  {t.blog.articles[0].date}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-poppins font-semibold text-foreground mb-4">
                {t.blog.articles[0].title}
              </h2>
              <p className="font-poppins font-light text-muted-foreground text-lg mb-6">
                {t.blog.articles[0].excerpt}
              </p>
              <Button variant="outline" className="group">
                {t.blog.cta.readMore}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 lg:py-32 bg-neutralBg">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.blog.articles.slice(1).map((article, index) => (
              <Card
                key={index}
                variant="elevated"
                className={`fade-up-delay-${index + 1} group cursor-pointer hover:-translate-y-2 p-0 overflow-hidden`}
              >
                <div className="aspect-[16/10] bg-muted" />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-secondary font-poppins text-xs uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="text-muted-foreground font-poppins text-xs">
                      {article.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-poppins font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors duration-200">
                    {article.title}
                  </h3>
                  <p className="font-poppins font-light text-muted-foreground text-sm line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
