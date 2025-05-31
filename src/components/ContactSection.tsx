
import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready for new projects and interesting opportunities. Write to me!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="p-3 rounded-full bg-white/10">
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Email</h3>
                <p className="text-gray-300">katanacyoff@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="p-3 rounded-full bg-white/10">
                <MapPin size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Location</h3>
                <p className="text-gray-300">Kiev, Ukraine</p>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Input 
                  placeholder="Your name" 
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40"
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40"
                />
              </div>
            </div>
            
            <div>
              <Input 
                placeholder="Message subject" 
                className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40"
              />
            </div>
            
            <div>
              <Textarea 
                placeholder="Your message..." 
                rows={6}
                className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 resize-none"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-white text-black hover:bg-gray-200 font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
