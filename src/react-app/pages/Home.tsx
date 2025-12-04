import { useEffect } from 'react';
import { 
  Printer, 
  Image, 
  Monitor, 
  ShirtIcon, 
  HardHat,
  Phone,
  MapPin,
  MessageCircle,
  Zap,
  Sparkles,
  Building2
} from 'lucide-react';

export default function Home() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const services = [
    {
      title: 'Serviços Rápidos',
      icon: Zap,
      items: ['Xerox', 'Impressões', 'Digitalizações'],
      color: 'from-blue-500 to-blue-600',
      glow: 'blue'
    },
    {
      title: 'Serviços Gráficos',
      icon: Image,
      items: ['Cartões de Visita', 'Folhetos', 'Banners', 'Lona e etc...'],
      color: 'from-purple-500 to-purple-600',
      glow: 'purple'
    },
    {
      title: 'Informática',
      icon: Monitor,
      items: ['Formatação de Computadores e Notebooks'],
      color: 'from-green-500 to-green-600',
      glow: 'green'
    },
    {
      title: 'Personalização',
      icon: ShirtIcon,
      items: ['Canecas', 'Camisetas', 'Uniformes'],
      color: 'from-orange-500 to-orange-600',
      glow: 'orange'
    },
    {
      title: 'Construção Civil',
      icon: HardHat,
      items: [
        'Profissionais altamente capacitados',
        'Reformas e Obras da Fundação ao Acabamento',
        'Engenheiro e Arquiteto Responsáveis',
        'Serviços com excelência garantida',
        'Emitimos Notas Fiscais para todas as obras',
        'Assessoria e Gerenciamento para Atendimento, Controle de Orçamentos e Notas Fiscais'
      ],
      color: 'from-red-500 to-red-600',
      glow: 'red'
    }
  ];

  const glowColors = {
    blue: 'shadow-blue-500/50',
    purple: 'shadow-purple-500/50',
    green: 'shadow-green-500/50',
    orange: 'shadow-orange-500/50',
    red: 'shadow-red-500/50'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 mb-8">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-yellow-200 text-sm font-medium">Centro de Serviços Completos</span>
            </div>
            
            <h1 className="text-6xl sm:text-8xl font-black mb-6 bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300 bg-clip-text text-transparent drop-shadow-2xl">
              PONTO IPIRANGA
            </h1>
            
            <p className="text-3xl sm:text-4xl font-bold text-blue-200 mb-12">
              Aqui tem "quase" Tudo!
            </p>
            
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Somos um centro de serviços completo em Carapicuíba, dedicados a atender você com excelência e profissionalismo em diversas áreas.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Nossos Serviços
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${service.color} p-[2px] rounded-2xl shadow-2xl hover:shadow-3xl ${glowColors[service.glow as keyof typeof glowColors]} hover:scale-105 transition-all duration-300`}
            >
              <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color} shadow-lg group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <span className="text-yellow-400 mt-1">•</span>
                      <span className="text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Entre em Contato
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Location */}
            <div className="bg-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Localização</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Av. Inocêncio Seráfico, 795<br />
                    Centro - Carapicuíba/SP<br />
                    CEP: 06320-290
                  </p>
                </div>
              </div>
            </div>
            
            {/* WhatsApp */}
            <div className="bg-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                  <a 
                    href="https://wa.me/5511953880830" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 text-lg font-semibold transition-colors flex items-center gap-2"
                  >
                    (11) 95388-0830
                    <Phone className="w-4 h-4" />
                  </a>
                  <p className="text-gray-300 mt-2 text-sm">
                    Chame no WhatsApp para atendimento rápido!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-950/80 backdrop-blur-xl border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Building2 className="w-6 h-6 text-yellow-400" />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
              PONTO IPIRANGA
            </h3>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 Ponto Ipiranga. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Atendendo Carapicuíba e região com qualidade e excelência.
          </p>
        </div>
      </footer>
    </div>
  );
}
