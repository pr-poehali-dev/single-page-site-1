import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Form validation
  const validateForm = () => {
    const errors: any = {};
    if (!formData.name.trim()) errors.name = 'Укажите ваше имя';
    if (!formData.phone.trim()) errors.phone = 'Укажите номер телефона';
    else if (!/^\+?[1-9]\d{1,14}$/.test(formData.phone.replace(/\s/g, ''))) errors.phone = 'Некорректный номер телефона';
    if (!formData.message.trim()) errors.message = 'Опишите вашу ситуацию';
    return errors;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setIsFormSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsFormSubmitting(false);
      setFormData({ name: '', phone: '', message: '' });
      setFormErrors({});
      alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    }, 1000);
  };

  // Handle input changes
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  const services = [
    {
      icon: "Scale",
      title: "Корпоративное право",
      description: "Юридическое сопровождение бизнеса, регистрация компаний, договорная работа"
    },
    {
      icon: "FileText", 
      title: "Гражданские споры",
      description: "Представительство в судах, досудебное урегулирование споров"
    },
    {
      icon: "Home",
      title: "Недвижимость",
      description: "Сделки с недвижимостью, оформление прав собственности"
    },
    {
      icon: "Users",
      title: "Семейное право", 
      description: "Развод, раздел имущества, алименты, опека и попечительство"
    }
  ];

  const advantages = [
    {
      icon: "Award",
      title: "15+ лет опыта",
      description: "Многолетняя практика в различных областях права"
    },
    {
      icon: "Clock",
      title: "Быстрое решение",
      description: "Оперативное рассмотрение вашего дела"
    },
    {
      icon: "Shield", 
      title: "Гарантия результата",
      description: "Индивидуальный подход к каждому клиенту"
    }
  ];

  const cases = [
    {
      title: "Взыскание задолженности",
      description: "Успешно взыскали 15 млн рублей для крупной компании",
      result: "100% возврат средств",
      image: "/img/53d4556d-f697-4806-8c4e-67c647405663.jpg"
    },
    {
      title: "Корпоративный спор", 
      description: "Защитили интересы акционеров в сложном споре",
      result: "Сохранили контроль",
      image: "/img/9c876c34-e82b-495a-a50b-baa266b2d4c8.jpg"
    }
  ];

  const testimonials = [
    {
      name: "Александр Петров",
      company: "ООО \"Технологии\"",
      text: "Профессиональная команда. Решили сложный корпоративный спор быстро и эффективно.",
      rating: 5
    },
    {
      name: "Мария Сидорова", 
      company: "ИП Сидорова",
      text: "Отличное юридическое сопровождение сделки с недвижимостью. Рекомендую!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/95 backdrop-blur-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Icon name="Scale" className="h-8 w-8 text-primary mr-3" />
              <span className="text-xl font-heading font-bold text-gray-900">ЮрПомощь</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('advantages')} className="text-gray-700 hover:text-primary transition-colors">Преимущества</button>
              <button onClick={() => scrollToSection('cases')} className="text-gray-700 hover:text-primary transition-colors">Кейсы</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-primary transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary transition-colors">Контакты</button>
            </nav>
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} className="h-6 w-6 text-gray-700" />
            </button>
            <Button className="hidden md:block bg-primary hover:bg-blue-600" onClick={() => scrollToSection('contact')}>
              Получить консультацию
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 animate-slide-in-right">
            <div className="px-4 py-2 space-y-2">
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Услуги</button>
              <button onClick={() => scrollToSection('advantages')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Преимущества</button>
              <button onClick={() => scrollToSection('cases')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Кейсы</button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Отзывы</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Контакты</button>
              <div className="px-4 py-2">
                <Button className="w-full bg-primary hover:bg-blue-600" onClick={() => scrollToSection('contact')}>
                  Получить консультацию
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 mb-6 animate-fade-in">
              Профессиональная
              <br />
              <span className="text-primary">правовая помощь</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
              Защитим ваши интересы в любой правовой ситуации. 
              Опыт 15+ лет, более 500 выигранных дел.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button size="lg" className="bg-primary hover:bg-blue-600 px-8 py-3" onClick={() => scrollToSection('contact')}>
                <Icon name="Phone" className="mr-2 h-5 w-5" />
                Консультация
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                <Icon name="Download" className="mr-2 h-5 w-5" />
                Скачать презентацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Предоставляем полный спектр юридических услуг для физических и юридических лиц
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-on-scroll">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name={advantage.icon} className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Кейсы и результаты
            </h2>
            <p className="text-lg text-gray-600">
              Примеры успешно решенных дел
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cases.map((caseItem, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={caseItem.image} 
                  alt={caseItem.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="font-heading">{caseItem.title}</CardTitle>
                  <CardDescription>{caseItem.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                    {caseItem.result}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Отзывы клиентов
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Свяжитесь с нами
              </h2>
              <p className="text-gray-300 mb-8">
                Получите бесплатную консультацию по вашему вопросу
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Phone" className="h-6 w-6 text-primary mr-3" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" className="h-6 w-6 text-primary mr-3" />
                  <span>info@urpomosh.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" className="h-6 w-6 text-primary mr-3" />
                  <span>г. Москва, ул. Юридическая, д. 1</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" className="h-6 w-6 text-primary mr-3" />
                  <span>Пн-Пт: 9:00-18:00</span>
                </div>
              </div>
            </div>
            <div>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Запросить консультацию</CardTitle>
                  <CardDescription className="text-gray-300">
                    Оставьте заявку и мы свяжемся с вами в течение часа
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={`w-full px-4 py-2 bg-gray-700 border rounded-md text-white placeholder-gray-400 focus:outline-none transition-colors ${
                          formErrors.name ? 'border-red-500' : 'border-gray-600 focus:border-primary'
                        }`}
                      />
                      {formErrors.name && <p className="text-red-400 text-sm mt-1">{formErrors.name}</p>}
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Телефон"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={`w-full px-4 py-2 bg-gray-700 border rounded-md text-white placeholder-gray-400 focus:outline-none transition-colors ${
                          formErrors.phone ? 'border-red-500' : 'border-gray-600 focus:border-primary'
                        }`}
                      />
                      {formErrors.phone && <p className="text-red-400 text-sm mt-1">{formErrors.phone}</p>}
                    </div>
                    <div>
                      <textarea
                        placeholder="Опишите вашу ситуацию"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className={`w-full px-4 py-2 bg-gray-700 border rounded-md text-white placeholder-gray-400 focus:outline-none resize-none transition-colors ${
                          formErrors.message ? 'border-red-500' : 'border-gray-600 focus:border-primary'
                        }`}
                      />
                      {formErrors.message && <p className="text-red-400 text-sm mt-1">{formErrors.message}</p>}
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-blue-600 disabled:opacity-50"
                      disabled={isFormSubmitting}
                    >
                      {isFormSubmitting ? (
                        <>
                          <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
                          Отправляем...
                        </>
                      ) : (
                        'Отправить заявку'
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Icon name="Scale" className="h-6 w-6 text-primary mr-2" />
              <span className="text-white font-heading font-semibold">ЮрПомощь</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 ЮрПомощь. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;