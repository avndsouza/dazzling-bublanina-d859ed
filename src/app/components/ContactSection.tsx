import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

export function ContactSection() {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!contactData.name || !contactData.email || !contactData.message) {
      toast.error('Por favor, rellena todos los campos obligatorios');
      return;
    }

    toast.success('¡Mensaje enviado correctamente! Te responderemos pronto.');

    console.log('Contact Form Data:', contactData);

    // Reset form
    setContactData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Contáctanos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            ¿Tienes preguntas? ¿Necesitas ayuda? Ponte en contacto con nosotros y te responderemos lo antes posible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Ponte en Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-black" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-sm md:text-base">Teléfono</h4>
                    <p className="text-gray-600 text-sm md:text-base">+1 (555) 123-4567</p>
                    <p className="text-xs md:text-sm text-gray-500">Disponible 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-black" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-sm md:text-base">Correo Electrónico</h4>
                    <p className="text-gray-600 text-sm md:text-base break-all">info@taxivannow.com</p>
                    <p className="text-xs md:text-sm text-gray-500">Responderemos en 24 horas</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-black" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-sm md:text-base">Ubicación</h4>
                    <p className="text-gray-600 text-sm md:text-base">Servicio en toda el Área Metropolitana</p>
                    <p className="text-xs md:text-sm text-gray-500">Todos los barrios cubiertos</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2 text-sm md:text-base">Horario de Atención</h4>
              <p className="text-gray-600 text-sm md:text-base">24 horas al día, 7 días a la semana</p>
              <p className="text-xs md:text-sm text-gray-500 mt-2">¡Siempre estamos aquí para ti!</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm">
            <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Envíanos un Mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="contact-name">Nombre *</Label>
                <Input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Tu nombre"
                  value={contactData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-email">Correo Electrónico *</Label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={contactData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-phone">Teléfono (opcional)</Label>
                <Input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={contactData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-message">Mensaje *</Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  placeholder="¿Cómo podemos ayudarte?"
                  value={contactData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                <Send className="w-4 h-4 mr-2" />
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}