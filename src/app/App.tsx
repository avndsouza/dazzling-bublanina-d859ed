import svgPaths from "../imports/svg-ypx1wmr646";
import imgLuxuryBlackSedanParkedInFrontOfClassicalMadridArchitectureAtNight from "figma:asset/8db0e74bd0007e836b16c53afc4431d35f891256.png";
import imgInteriorOfALuxuryBlackCar from "figma:asset/e2037576d31b9f8a628df2dec8dd7b1e181bd6a7.png";
import imgExteriorOfAModernSleekElectricVehicle from "figma:asset/0b35690ffb49f8560e9eb0928d9740c85cdc2c48.png";
import imgLuxuryLargeCapacityVan from "figma:asset/415d81eb34d5b6aa21bbb15dac76d8ff7d7f06a2.png";
import imgChromeCarEmblemReflectingMadridNeon from "figma:asset/bd1bed4caa6af983753e55a87f642404740d8ff3.png";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0e0e0e]">
      {/* Top Nav Bar */}
      <div className="fixed backdrop-blur-[6px] bg-[rgba(14,14,14,0.9)] h-[80px] left-0 top-0 right-0 z-50 flex items-center justify-center px-8">
        <div className="flex items-center justify-between max-w-[1440px] w-full">
          <div className="font-['Manrope'] font-extrabold text-[#ffd308] text-[24px] tracking-[-1.2px] uppercase">
            VAN MADRILEÑO
          </div>

          <nav className="hidden md:flex gap-8 items-center">
            <a href="#ride" className="font-['Manrope'] font-bold text-[#ffd308] text-[16px] tracking-[-0.8px] border-b-2 border-[#ffd308] pb-1">
              Reservar
            </a>
            <a href="#fleet" className="font-['Inter'] font-medium text-[#a3a3a3] text-[16px] hover:text-[#ffd308] transition">
              Flota
            </a>
            <a href="#gallery" className="font-['Inter'] font-medium text-[#a3a3a3] text-[16px] hover:text-[#ffd308] transition">
              Galería
            </a>
            <a href="#contact" className="font-['Inter'] font-medium text-[#a3a3a3] text-[16px] hover:text-[#ffd308] transition">
              Contacto
            </a>
          </nav>

          <div className="hidden md:flex gap-4 items-center">
            <button className="font-['Inter'] font-medium text-[#a3a3a3] text-[16px] px-4">
              Iniciar Sesión
            </button>
            <button className="font-['Inter'] font-semibold text-[#5a4900] text-[16px] px-6 py-2 rounded-[4px] bg-gradient-to-br from-[#ffe48b] to-[#ffd308]">
              Reservar Ahora
            </button>
          </div>
        </div>
      </div>

      {/* Main Hero Section */}
      <div className="flex min-h-screen pt-[80px]">
        {/* Left Side - Content */}
        <div className="flex-1 flex flex-col justify-center px-16 py-12 bg-[#0e0e0e]">
          <h1 className="font-['Manrope'] font-extrabold text-[72px] leading-[72px] tracking-[-3.6px] text-white mb-6">
            EL PULSO <span className="text-[#ffd308]">URBANO</span>
            <br />
            <span className="text-[#ffd308]">DE</span> MADRID.
          </h1>

          <p className="font-['Inter'] text-[#adaaaa] text-[20px] leading-[28px] max-w-[512px] mb-10">
            Servicio de chófer de élite diseñado para el ritmo de la ciudad. Experimenta la precisión del dominio local y la comodidad de una flota premium.
          </p>

          {/* Booking Form */}
          <div className="backdrop-blur-[10px] bg-[rgba(44,44,44,0.6)] border border-[rgba(255,255,255,0.05)] rounded-[8px] p-8 max-w-[576px]">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="font-['Inter'] font-semibold text-[#ffe48b] text-[10px] tracking-[1px] uppercase block mb-1">
                  PUNTO DE RECOGIDA
                </label>
                <div className="bg-[#20201f] rounded-[4px] p-3 relative">
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-[9.333px] h-[11.667px]" fill="none" viewBox="0 0 9.33333 11.6667">
                    <path d={svgPaths.p3d8f00c0} fill="#FFE48B" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Calle de Alcalá, 1"
                    className="bg-transparent pl-7 text-[#6b7280] text-[14px] w-full focus:outline-none focus:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="font-['Inter'] font-semibold text-[#adaaaa] text-[10px] tracking-[1px] uppercase block mb-1">
                  DESTINO
                </label>
                <div className="bg-[#20201f] rounded-[4px] p-3 relative">
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-[8.75px] h-[9.917px]" fill="none" viewBox="0 0 8.75 9.91667">
                    <path d={svgPaths.p88e5080} fill="#ADAAAA" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Aeropuerto Adolfo Suárez"
                    className="bg-transparent pl-7 text-[#6b7280] text-[14px] w-full focus:outline-none focus:text-white"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="font-['Inter'] font-semibold text-[#adaaaa] text-[10px] tracking-[1px] uppercase block mb-1">
                  FECHA
                </label>
                <input
                  type="date"
                  className="bg-[#20201f] rounded-[4px] p-3 text-white text-[14px] w-full focus:outline-none"
                />
              </div>

              <div>
                <label className="font-['Inter'] font-semibold text-[#adaaaa] text-[10px] tracking-[1px] uppercase block mb-1">
                  HORA
                </label>
                <input
                  type="time"
                  className="bg-[#20201f] rounded-[4px] p-3 text-white text-[14px] w-full focus:outline-none"
                />
              </div>
            </div>

            <button className="w-full bg-gradient-to-br from-[#ffe48b] to-[#ffd308] rounded-[4px] py-4 font-['Inter'] font-semibold text-[#5a4900] text-[16px] tracking-[1.6px] uppercase">
              CONFIRMAR DETALLES DEL VIAJE
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 relative min-h-screen">
          <img
            src={imgLuxuryBlackSedanParkedInFrontOfClassicalMadridArchitectureAtNight}
            alt="Luxury sedan in Madrid"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0e] to-transparent" />

          {/* Live Tracker Overlay */}
          <div className="absolute bottom-12 right-12 backdrop-blur-[10px] bg-[rgba(44,44,44,0.6)] border border-[rgba(255,255,255,0.1)] rounded-[8px] p-6 w-[256px]">
            <div className="flex gap-4 items-center mb-4">
              <div className="bg-[#ffd308] rounded-[12px] w-[40px] h-[40px] flex items-center justify-center">
                <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 18 18">
                  <path d={svgPaths.p3609fe80} fill="#5A4900" />
                </svg>
              </div>
              <div>
                <div className="font-['Inter'] font-semibold text-[#adaaaa] text-[12px] tracking-[-0.6px] uppercase">
                  RASTREADOR EN VIVO
                </div>
                <div className="font-['Inter'] font-semibold text-white text-[14px]">
                  4 min de distancia
                </div>
              </div>
            </div>
            <div className="bg-[#1a1a1a] h-[4px] rounded-[12px] overflow-hidden">
              <div className="bg-gradient-to-r from-[#ffe48b] to-[#ffd308] h-full w-2/3" />
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div id="features" className="bg-[#131313] py-32 px-8">
        <div className="max-w-[1440px] mx-auto grid grid-cols-3 gap-12">
          <div className="flex flex-col gap-6">
            <svg className="w-full h-[30px]" fill="none" viewBox="0 0 373.333 30">
              <path d={svgPaths.p327b5f80} fill="#FFD308" />
            </svg>
            <h3 className="font-['Manrope'] font-bold text-white text-[24px] tracking-[-0.6px]">
              Velocidad Urbana
            </h3>
            <p className="font-['Inter'] text-[#adaaaa] text-[16px] leading-[26px]">
              Madrid nunca se detiene, y nosotros tampoco. El seguimiento de rutas optimizado asegura que evites la congestión de la Gran Vía con precisión quirúrgica.
            </p>
            <div className="bg-[#ffd308] h-[2px] w-[48px]" />
          </div>

          <div className="flex flex-col gap-6">
            <svg className="w-full h-[30px]" fill="none" viewBox="0 0 373.333 30">
              <path d={svgPaths.p209a7840} fill="#FFD308" />
            </svg>
            <h3 className="font-['Manrope'] font-bold text-white text-[24px] tracking-[-0.6px]">
              Seguridad de Élite
            </h3>
            <p className="font-['Inter'] text-[#adaaaa] text-[16px] leading-[26px]">
              Nuestros conductores son más que chóferes; son profesionales de seguridad certificados. El lujo no es nada sin total tranquilidad.
            </p>
            <div className="bg-[#ffd308] h-[2px] w-[48px]" />
          </div>

          <div className="flex flex-col gap-6">
            <svg className="w-full h-[28.5px]" fill="none" viewBox="0 0 373.333 28.5">
              <path d={svgPaths.p388a7810} fill="#FFD308" />
            </svg>
            <h3 className="font-['Manrope'] font-bold text-white text-[24px] tracking-[-0.6px]">
              Dominio Local
            </h3>
            <p className="font-['Inter'] text-[#adaaaa] text-[16px] leading-[26px]">
              Desde atajos ocultos en Malasaña hasta acceso VIP en el Santiago Bernabéu, nuestro conocimiento de la capital es inigualable.
            </p>
            <div className="bg-[#ffd308] h-[2px] w-[48px]" />
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div id="contact" className="bg-[#0e0e0e] py-32 px-8">
        <div className="max-w-[1440px] mx-auto flex gap-20">
          <div className="flex-1">
            <h2 className="font-['Manrope'] font-extrabold text-[60px] leading-[60px] tracking-[-3px] uppercase text-white mb-6">
              PONTE EN <span className="text-[#ffe48b]">CONTACTO</span>.
            </h2>
            <p className="font-['Inter'] text-[#adaaaa] text-[18px] leading-[29.25px] max-w-[448px] mb-8">
              Ya sea que tengas una solicitud específica para un evento corporativo o necesites un traslado de larga distancia, nuestro equipo está listo para coordinar tu viaje.
            </p>

            <div className="flex flex-col gap-6 pt-2">
              <div className="flex gap-4 items-center">
                <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 18 18">
                  <path d={svgPaths.p143e1930} fill="#FFE48B" />
                </svg>
                <span className="font-['Inter'] font-medium text-white text-[16px]">
                  +34 912 345 678
                </span>
              </div>

              <div className="flex gap-4 items-center">
                <svg className="w-[20px] h-[16px]" fill="none" viewBox="0 0 20 16">
                  <path d={svgPaths.p13e73800} fill="#FFE48B" />
                </svg>
                <span className="font-['Inter'] font-medium text-white text-[16px]">
                  concierge@madrileno.com
                </span>
              </div>

              <div className="flex gap-4 items-center">
                <svg className="w-[16px] h-[20px]" fill="none" viewBox="0 0 16 20">
                  <path d={svgPaths.p1869180} fill="#FFE48B" />
                </svg>
                <span className="font-['Inter'] font-medium text-white text-[16px]">
                  Paseo de la Castellana, 259, Madrid
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="backdrop-blur-[10px] bg-[rgba(44,44,44,0.6)] border border-[rgba(255,255,255,0.05)] rounded-[8px] p-10">
              <div className="mb-6">
                <label className="font-['Inter'] font-semibold text-[#adaaaa] text-[10px] tracking-[1px] uppercase block mb-1">
                  NOMBRE COMPLETO
                </label>
                <input
                  type="text"
                  placeholder="Juan Pérez"
                  className="bg-[#20201f] rounded-[4px] p-4 text-[#525252] text-[14px] w-full focus:outline-none focus:text-white"
                />
              </div>

              <div className="mb-6">
                <label className="font-['Inter'] font-semibold text-[#adaaaa] text-[10px] tracking-[1px] uppercase block mb-1">
                  DIRECCIÓN DE CORREO ELECTRÓNICO
                </label>
                <input
                  type="email"
                  placeholder="juan.perez@example.com"
                  className="bg-[#20201f] rounded-[4px] p-4 text-[#525252] text-[14px] w-full focus:outline-none focus:text-white"
                />
              </div>

              <div className="mb-6">
                <label className="font-['Inter'] font-semibold text-[#adaaaa] text-[10px] tracking-[1px] uppercase block mb-1">
                  MENSAJE
                </label>
                <textarea
                  placeholder="Cuéntanos sobre tus requisitos..."
                  rows={5}
                  className="bg-[#20201f] rounded-[4px] p-4 text-[#525252] text-[14px] w-full focus:outline-none focus:text-white resize-none"
                />
              </div>

              <button className="w-full bg-[#ffd308] rounded-[4px] py-4 font-['Inter'] font-semibold text-[#443700] text-[16px] tracking-[1.6px] uppercase shadow-[0px_10px_15px_-3px_rgba(255,228,139,0.1),0px_4px_6px_-4px_rgba(255,228,139,0.1)]">
                ENVIAR MENSAJE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fleet Showcase Section */}
      <div id="fleet" className="bg-[#0e0e0e] border-t border-[rgba(255,255,255,0.05)] py-32 px-8">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-16">
            <h2 className="font-['Manrope'] font-extrabold text-[36px] leading-[40px] tracking-[-1.8px] uppercase text-white mb-4">
              LA FLOTA
            </h2>
            <div className="flex gap-4 items-center">
              <div className="bg-[#ffe48b] h-px w-[96px]" />
              <span className="font-['Inter'] font-semibold text-[#adaaaa] text-[12px] tracking-[3.6px] uppercase">
                EXCELENCIA SELECCIONADA
              </span>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6 h-[800px]">
            {/* Large card - Business Suite */}
            <div className="col-span-8 row-span-1 relative rounded-[8px] overflow-hidden">
              <img
                src={imgInteriorOfALuxuryBlackCar}
                alt="Interior de coche de lujo"
                className="absolute inset-0 w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent flex flex-col justify-end p-12">
                <div className="backdrop-blur-[6px] bg-[rgba(235,235,235,0.1)] px-4 py-1 rounded-[12px] inline-block w-fit mb-4">
                  <span className="font-['Manrope'] font-bold text-[#ffd308] text-[14px] tracking-[1.4px] uppercase">
                    CLASE EJECUTIVA
                  </span>
                </div>
                <h3 className="font-['Manrope'] font-bold text-white text-[30px] leading-[36px]">
                  La Suite de Negocios de Madrid
                </h3>
              </div>
            </div>

            {/* Eco Velocity */}
            <div className="col-span-4 row-span-1 relative rounded-[8px] overflow-hidden">
              <img
                src={imgExteriorOfAModernSleekElectricVehicle}
                alt="Vehículo eléctrico"
                className="absolute inset-0 w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent flex flex-col justify-end p-8">
                <h3 className="font-['Manrope'] font-bold text-white text-[20px] leading-[28px] mb-1">
                  Eco Velocidad
                </h3>
                <p className="font-['Inter'] text-[#adaaaa] text-[14px] leading-[20px]">
                  Totalmente eléctrico, sin compromisos.
                </p>
              </div>
            </div>

            {/* Fleet Collective */}
            <div className="col-span-4 row-span-1 relative rounded-[8px] overflow-hidden">
              <img
                src={imgLuxuryLargeCapacityVan}
                alt="Furgoneta de lujo"
                className="absolute inset-0 w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent flex flex-col justify-end p-8">
                <h3 className="font-['Manrope'] font-bold text-white text-[20px] leading-[28px] mb-1">
                  Flota Colectiva
                </h3>
                <p className="font-['Inter'] text-[#adaaaa] text-[14px] leading-[20px]">
                  Para grupos y equipos de élite.
                </p>
              </div>
            </div>

            {/* The Night Pulse */}
            <div className="col-span-8 row-span-1 relative rounded-[8px] overflow-hidden">
              <img
                src={imgChromeCarEmblemReflectingMadridNeon}
                alt="Emblema de coche"
                className="absolute inset-0 w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent flex flex-col justify-end p-12">
                <h3 className="font-['Manrope'] font-bold text-white text-[30px] leading-[36px]">
                  El Pulso Nocturno
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#131313] py-20 px-8">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          <div>
            <div className="font-['Manrope'] font-bold text-[#ffd308] text-[20px] mb-4">
              Madrileño
            </div>
            <p className="font-['Inter'] text-[#737373] text-[12px] tracking-[1.2px] uppercase">
              © 2024 MADRILEÑO. MOVILIDAD DE PULSO URBANO. MADRID, ESPAÑA.
            </p>
          </div>

          <div className="flex gap-8 items-center">
            <a href="#about" className="font-['Inter'] text-[#737373] text-[12px] tracking-[1.2px] uppercase hover:text-[#ffd308]">
              ACERCA DE
            </a>
            <a href="#fleet" className="font-['Inter'] text-[#737373] text-[12px] tracking-[1.2px] uppercase hover:text-[#ffd308]">
              FLOTA
            </a>
            <a href="#safety" className="font-['Inter'] text-[#737373] text-[12px] tracking-[1.2px] uppercase hover:text-[#ffd308]">
              SEGURIDAD
            </a>
            <a href="#help" className="font-['Inter'] text-[#737373] text-[12px] tracking-[1.2px] uppercase hover:text-[#ffd308]">
              AYUDA
            </a>
            <a href="#terms" className="font-['Inter'] text-[#737373] text-[12px] tracking-[1.2px] uppercase hover:text-[#ffd308]">
              TÉRMINOS
            </a>
            <a href="#privacy" className="font-['Inter'] text-[#737373] text-[12px] tracking-[1.2px] uppercase hover:text-[#ffd308]">
              PRIVACIDAD
            </a>
          </div>

          <div className="flex gap-4">
            <button className="w-[40px] h-[40px] rounded-[12px] border border-[#404040] flex items-center justify-center hover:border-[#ffd308] transition">
              <svg className="w-[10.5px] h-[11.667px]" fill="none" viewBox="0 0 10.5 11.6667">
                <path d={svgPaths.p313c6040} fill="#737373" />
              </svg>
            </button>
            <button className="w-[40px] h-[40px] rounded-[12px] border border-[#404040] flex items-center justify-center hover:border-[#ffd308] transition">
              <svg className="w-[11.667px] h-[11.667px]" fill="none" viewBox="0 0 11.6667 11.6667">
                <path d={svgPaths.p3c4dd880} fill="#737373" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}