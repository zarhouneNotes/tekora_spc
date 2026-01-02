import React, { useState } from 'react';
import { useI18n } from '@/context/i18n';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

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
      value: "+2127-765-316-31",
    },
    {
      icon: Mail,
      label: t.contact.info.email.label,
      value: "contact@tekrafloor.com",
    },
    {
      icon: Clock,
      label: t.contact.info.hours.label,
      value: t.contact.info.hours.value + "9h00-18h00",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb- lg:pt-40 l1 bg-primary">
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
        <div className="container mx-aut px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
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
          </div>
        </div>
      </section>

      {/* Map + Contact Info Section */}
      <section className="py-24  lg:py-32 bg-">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2   gap-8">
            {/* Map */}
            <div className="fade-up  lg:aspect-auto lg:h-full bg-muted relative min-h-[300px]">

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

            {/* Contact Info */}
            <div className="fade-up-delay-1">
              <h2 className="text-2xl md:text-3xl font-poppins font-semibold text-foreground mb-8">
                {t.contact.info.title}
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} variant="outlined" className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondar0 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-foreground mb-1">
                        {info.label}
                      </h4>
                      <p className="font-poppins  font-light text-muted-foreground whitespace-pre-line">
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