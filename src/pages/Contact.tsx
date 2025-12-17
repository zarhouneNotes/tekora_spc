import React, { useState } from 'react';
import { useI18n } from '@/context/i18n';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t.contact.form.success,
      description: t.home.about.cta === 'En savoir plus' 
        ? 'Nous vous répondrons dans les plus brefs délais.' 
        : 'We will get back to you as soon as possible.',
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: t.contact.info.address.label,
      value: t.contact.info.address.value,
    },
    {
      icon: Phone,
      label: t.contact.info.phone.label,
      value: t.contact.info.phone.value,
    },
    {
      icon: Mail,
      label: t.contact.info.email.label,
      value: t.contact.info.email.value,
    },
    {
      icon: Clock,
      label: t.contact.info.hours.label,
      value: t.contact.info.hours.value,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="fade-up text-4xl md:text-5xl lg:text-6xl font-poppins font-semibold text-primary-foreground">
            {t.contact.hero.title}
          </h1>
          <p className="fade-up-delay-1 mt-6 text-lg md:text-xl font-poppins font-light text-primary-foreground/80 max-w-3xl mx-auto">
            {t.contact.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Form Section - Full Width with Primary BG */}
      <section className="py-24 lg:py-32 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Form Container - White BG */}
            <div className="fade-up bg-background p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-poppins font-semibold text-foreground mb-8 text-center">
                {t.contact.form.title}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-poppins font-medium text-foreground text-sm mb-2">
                      {t.contact.form.name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border font-poppins font-light text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block font-poppins font-medium text-foreground text-sm mb-2">
                      {t.contact.form.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border font-poppins font-light text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-poppins font-medium text-foreground text-sm mb-2">
                      {t.contact.form.phone}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border font-poppins font-light text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block font-poppins font-medium text-foreground text-sm mb-2">
                      {t.contact.form.company}
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border font-poppins font-light text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-poppins font-medium text-foreground text-sm mb-2">
                    {t.contact.form.subject}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border font-poppins font-light text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block font-poppins font-medium text-foreground text-sm mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-border font-poppins font-light text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200 resize-none"
                  />
                </div>
                <Button type="submit" variant="solid" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  {t.contact.form.submit}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map + Contact Info Section */}
      <section className="py-24  lg:py-32 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2   gap-8">
            {/* Map */}
            <div className="fade-up  lg:aspect-auto lg:h-full bg-muted relative min-h-[300px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPin className="w-12 h-12 text-muted-foreground/50" />
              </div>
            </div>

            {/* Contact Info */}
            <div className="fade-up-delay-1">
              <h2 className="text-2xl md:text-3xl font-poppins font-semibold text-foreground mb-8">
                {t.contact.info.title}
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} variant="outlined" className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-foreground mb-1">
                        {info.label}
                      </h4>
                      <p className="font-poppins font-light text-muted-foreground whitespace-pre-line">
                        {info.value}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;