import React, { useState } from 'react';
import { useI18n } from '@/context/i18n';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { AnimatedSection, AnimatedDiv } from '@/hooks/useScrollAnimation';

const Contact = () => {

  // new
  const contact_apikey = import.meta.env.VITE_CONTACT_APIKEY
  const sales_apikey = import.meta.env.VITE_SALES_APIKEY
  const facturation_apikey = import.meta.env.VITE_FACTURATION_APIKEY
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'cnsDemande de conseil',
    message: '',
  });


 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form_data = new FormData()
    form_data.append("name" , formData.name)
    form_data.append("email" , formData.email)
    form_data.append("phone" , formData.phone)
    form_data.append("company" , formData.company)
    form_data.append("subject" , formData.subject.slice(3))
    form_data.append("message" , formData.message)


    if (formData.subject.slice(0,3) == "ach") {
      form_data.append("access_key", sales_apikey);
    }if (formData.subject.slice(0,3) == "cns") {
      form_data.append("access_key", contact_apikey);
    }if (formData.subject.slice(0,3) == "fac"){
      form_data.append("access_key", facturation_apikey);
    }
   
    
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form_data
    });

    const data  = await response.json()
    if (data?.success ) {
        toast({
      title: t.contact.form.success
    });
    }else{
      alert("Something went wrong !")
    }
    
    
    // setFormData({
    //   name: '',
    //   email: '',
    //   phone: '',
    //   company: '',
    //   subject: '',
    //   message: '',
    // });
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
      value: t.contact.info.bureau.value.replace(/^0/, '+212'),
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

  // additional direct phone lines section
  const phoneContacts = [
    { label: t.contact.info.bureau.label, value: t.contact.info.bureau.value.replace(/^0/, '+212') },
    { label: t.contact.info.salesB2B.label, value: t.contact.info.salesB2B.value.replace(/^0/, '+212') },
    { label: t.contact.info.salesTraditional.label, value: t.contact.info.salesTraditional.value.replace(/^0/, '+212') },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <AnimatedSection className="relative pt-32 pb- lg:pt-40 l1 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <AnimatedDiv animation="fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-semibold text-primary-foreground">
              {t.contact.hero.title}
            </h1>
          </AnimatedDiv>
          <AnimatedDiv animation="fade-up" delay={100}>
            <p className="mt-6 text-lg md:text-xl font-poppins font-light text-primary-foreground/80 max-w-3xl mx-auto">
              {t.contact.hero.subtitle}
            </p>
          </AnimatedDiv>
        </div>
      </AnimatedSection>

      {/* Phone Numbers Section */}
      <AnimatedSection className="py-16 lg:py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* <h2 className="text-2xl md:text-3xl font-poppins font-semibold text-primary-foreground mb-12 text-center">
              {t.contact.info.phoneNumbersTitle}
            </h2> */}
            <div className="flex flex-row flex-wrap justify-center gap-6">
              {phoneContacts.map((info, index) => (
                <AnimatedDiv animation="fade-up" delay={index * 100} key={'phone-'+index}>
                  <Card variant="outlined" className="flex flex-col items-center text-center p-6 bg-background/10 border-primary-foreground/20">
                    {/* <div className="w-16 h-16 bg-primary-foreground/20 flex items-center justify-center mb-4">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div> */}
                    <h4 className="font-poppins font-semibold text-primary-foreground mb-2">
                      {info.label}
                    </h4>
                    <a 
                      href={`tel:${info.value}`} 
                      className="font-poppins font-light text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                    >
                      {info.value}
                    </a>
                  </Card>
                </AnimatedDiv>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Form Section - Full Width with Primary BG */}
      <AnimatedSection className="py-24 lg:py-32 bg-primary">
        <div className="container mx-aut px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Form Container - White BG */}
            <AnimatedDiv animation="fade-up">
              <div className="bg-background p-8 md:p-12">
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
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={(e)=>{
                          setFormData({...formData , subject : e.target.value })
                      }}
                      required
                      className="w-full px-4 py-3 bg-background border border-border font-poppins font-light text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                    >

                        <option    value={"achDemande d'achat"}>{t.contact.form.subject_select.sale}</option>
                        <option  value={"cnsDemande de conseil"}>{t.contact.form.subject_select.advice}</option>
                        <option  value={"facFacturation"}>{t.contact.form.subject_select.facture}</option>
                    

                    </select>
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
            </AnimatedDiv>
          </div>
        </div>
      </AnimatedSection>

      {/* Map + Contact Info Section */}
      <AnimatedSection className="py-24  lg:py-32 bg-">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2   gap-8">
            {/* Map */}
            <AnimatedDiv animation="fade-up" className="h-full">
              <div className="w-full h-full bg-muted relative">

              <div className="w-full h-full">
              <iframe
          title="Google Map Location"
          src="https://www.google.com/maps?q=33.571327,-7.650570&z=16&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
              
              </div>
            </AnimatedDiv>

            {/* Contact Info */}
            <AnimatedDiv animation="fade-up" delay={100}>
              <div>
                <h2 className="text-2xl md:text-3xl font-poppins font-semibold text-foreground mb-8">
                  {t.contact.info.title}
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} variant="outlined" className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-poppins font-semibold text-foreground mb-1">
                          {info.label}
                        </h4>
                        <p className="font-poppins  font-light text-muted-foreground whitespace-pre-line">
                          {info.icon === Phone ? (
                            <a 
                              href={`tel:${info.value.replace(/\s+/g, '')}`} 
                              className="hover:text-foreground transition-colors duration-200"
                            >
                              {info.value}
                            </a>
                          ) : (
                            info.value
                          )}
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </AnimatedDiv>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default Contact;