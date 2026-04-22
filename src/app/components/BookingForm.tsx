import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Calendar, Clock, MapPin, Phone, User, Mail } from 'lucide-react';
import { toast } from 'sonner';

export function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pickupLocation: '',
    dropoffLocation: '',
    date: '',
    time: '',
    passengers: '1',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.phone || !formData.pickupLocation || !formData.dropoffLocation) {
      toast.error('Por favor, rellena todos los campos obligatorios');
      return;
    }

    // Create email content
    const emailSubject = `Solicitud de Reserva de Taxi - ${formData.name}`;
    const emailBody = `
Nueva Solicitud de Reserva de Taxi:

Nombre: ${formData.name}
Correo Electrónico: ${formData.email}
Teléfono: ${formData.phone}
Lugar de Recogida: ${formData.pickupLocation}
Lugar de Destino: ${formData.dropoffLocation}
Fecha: ${formData.date || 'Lo Antes Posible'}
Hora: ${formData.time || 'Lo Antes Posible'}
Pasajeros: ${formData.passengers}
Notas Adicionales: ${formData.notes}
    `.trim();

    // Show success message
    toast.success('¡Solicitud de reserva enviada! Ahora puedes enviar esta información por correo electrónico.');
    
    console.log('Booking Details:', formData);
    console.log('Email Subject:', emailSubject);
    console.log('Email Body:', emailBody);

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      pickupLocation: '',
      dropoffLocation: '',
      date: '',
      time: '',
      passengers: '1',
      notes: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name" className="flex items-center gap-2 text-sm md:text-base">
            <User className="w-4 h-4" />
            Nombre Completo *
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Juan Pérez"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone" className="flex items-center gap-2 text-sm md:text-base">
            <Phone className="w-4 h-4" />
            Número de Teléfono *
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+34 (0) 123-4567"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="flex items-center gap-2 text-sm md:text-base">
            <Mail className="w-4 h-4" />
            Correo Electrónico (opcional)
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="juan@ejemplo.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Passengers */}
        <div className="space-y-2">
          <Label htmlFor="passengers" className="flex items-center gap-2 text-sm md:text-base">
            <User className="w-4 h-4" />
            Número de Pasajeros
          </Label>
          <Input
            id="passengers"
            name="passengers"
            type="number"
            min="1"
            max="8"
            value={formData.passengers}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Pickup Location */}
      <div className="space-y-2">
        <Label htmlFor="pickupLocation" className="flex items-center gap-2 text-sm md:text-base">
          <MapPin className="w-4 h-4" />
          Lugar de Recogida *
        </Label>
        <Input
          id="pickupLocation"
          name="pickupLocation"
          type="text"
          placeholder="Plaza Mayor"
          value={formData.pickupLocation}
          onChange={handleChange}
          required
        />
      </div>

      {/* Dropoff Location */}
      <div className="space-y-2">
        <Label htmlFor="dropoffLocation" className="flex items-center gap-2 text-sm md:text-base">
          <MapPin className="w-4 h-4" />
          Lugar de Destino *
        </Label>
        <Input
          id="dropoffLocation"
          name="dropoffLocation"
          type="text"
          placeholder="Calle de Segovia, 1"
          value={formData.dropoffLocation}
          onChange={handleChange}
          required
        />
      </div>

      {/* Schedule in Advance */}
      <div className="space-y-3 md:space-y-4 p-3 md:p-4 bg-gray-50 rounded-lg">
        <h3 className="font-medium text-sm md:text-base">Programar con Antelación (opcional)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {/* Date */}
          <div className="space-y-2">
            <Label htmlFor="date" className="flex items-center gap-2 text-sm md:text-base">
              <Calendar className="w-4 h-4" />
              Fecha
            </Label>
            <Input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
            />
          </div>

          {/* Time */}
          <div className="space-y-2">
            <Label htmlFor="time" className="flex items-center gap-2 text-sm md:text-base">
              <Clock className="w-4 h-4" />
              Hora
            </Label>
            <Input
              id="time"
              name="time"
              type="time"
              value={formData.time}
              onChange={handleChange}
            />
          </div>
        </div>
        <p className="text-xs md:text-sm text-gray-600">Déjalo en blanco para recogida inmediata</p>
      </div>

      {/* Additional Notes */}
      <div className="space-y-2">
        <Label htmlFor="notes" className="text-sm md:text-base">Notas Adicionales</Label>
        <Textarea
          id="notes"
          name="notes"
          placeholder="Cualquier requisito o instrucción especial..."
          value={formData.notes}
          onChange={handleChange}
          rows={4}
        />
      </div>

      <Button type="submit" className="w-full" size="lg">
        Enviar Solicitud de Reserva
      </Button>
    </form>
  );
}