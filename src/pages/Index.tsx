import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
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
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
              <a href="#advantages" className="text-gray-700 hover:text-primary transition-colors">Преимущества</a>
              <a href="#cases" className="text-gray-700 hover:text-primary transition-colors">Кейсы</a>
              <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors">Отзывы</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-blue-600">
              Получить консультацию
            </Button>
          </div>
        </div>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="bg-primary hover:bg-blue-600 px-8 py-3">
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Предоставляем полный спектр юридических услуг для физических и юридических лиц
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <CardContent className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Телефон"
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Опишите вашу ситуацию"
                      rows={4}
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-primary resize-none"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-blue-600">
                    Отправить заявку
                  </Button>
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