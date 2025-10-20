import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена",
      description: "Наш менеджер свяжется с вами в ближайшее время",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const advantages = [
    {
      icon: 'Target',
      title: 'Точность до 0.01 мм',
      description: 'Высокоточное немецкое оборудование для промышленной маркировки любой сложности'
    },
    {
      icon: 'FileCheck',
      title: 'Сертификация',
      description: 'Соответствие ГОСТ, ISO 9001. Полный пакет документов для корпоративных клиентов'
    },
    {
      icon: 'Briefcase',
      title: 'Крупные объёмы',
      description: 'Работаем с заказами от 1 до 100 000+ единиц. Гибкая система скидок'
    },
    {
      icon: 'Users',
      title: 'Партнёрство',
      description: 'Индивидуальные условия для постоянных клиентов. Персональный менеджер'
    }
  ];

  const stats = [
    { value: '500+', label: 'Реализованных проектов' },
    { value: '12 лет', label: 'На рынке' },
    { value: '24/7', label: 'Техническая поддержка' },
    { value: '99.8%', label: 'Точность выполнения' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <header className="border-b border-border bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center">
              <Icon name="Zap" size={24} className="text-primary-foreground" />
            </div>
            <span className="font-heading text-xl font-bold text-foreground">LaserMark Pro</span>
          </div>
          <Button 
            variant="default"
            className="bg-primary text-primary-foreground"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Связаться с нами
          </Button>
        </div>
      </header>

      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-sm mb-6 font-medium text-sm">
                ПРОМЫШЛЕННЫЕ РЕШЕНИЯ
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                Лазерная маркировка и гравировка для бизнеса
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Профессиональное оборудование для серийного производства. Работаем с металлом, пластиком, керамикой. Полный цикл от проектирования до внедрения.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Получить коммерческое предложение
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-border hover:bg-secondary"
                >
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать каталог
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-sm overflow-hidden shadow-lg border border-border">
              <img 
                src="https://cdn.poehali.dev/projects/3c98074b-484e-43ae-9f51-e4d66e6cbb48/files/c889e995-a6e3-4202-b67d-597c8e787922.jpg"
                alt="Промышленное лазерное оборудование"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Преимущества работы с нами
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Комплексный подход к решению задач промышленной маркировки
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 mb-4 rounded-sm bg-primary/10 flex items-center justify-center">
                    <Icon name={advantage.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">
                    {advantage.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Примеры выполненных работ
            </h2>
            <p className="text-muted-foreground">
              Портфолио реализованных проектов
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-sm aspect-video border border-border bg-white">
              <img 
                src="https://cdn.poehali.dev/projects/3c98074b-484e-43ae-9f51-e4d66e6cbb48/files/8c152243-a33d-4852-a0aa-281218645435.jpg"
                alt="Маркировка металлических изделий"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 p-4 border-t border-border">
                <p className="font-heading font-semibold text-foreground">
                  Маркировка металлических изделий
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-sm aspect-video border border-border bg-white">
              <img 
                src="https://cdn.poehali.dev/projects/3c98074b-484e-43ae-9f51-e4d66e6cbb48/files/c889e995-a6e3-4202-b67d-597c8e787922.jpg"
                alt="Промышленная серийная маркировка"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 p-4 border-t border-border">
                <p className="font-heading font-semibold text-foreground">
                  Промышленная серийная маркировка
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-sm aspect-video border border-border bg-white">
              <img 
                src="https://cdn.poehali.dev/projects/3c98074b-484e-43ae-9f51-e4d66e6cbb48/files/e6032e46-9fb2-4fde-98b6-0eedaaa9c01b.jpg"
                alt="Брендирование продукции"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 p-4 border-t border-border">
                <p className="font-heading font-semibold text-foreground">
                  Брендирование продукции
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Оставить заявку
            </h2>
            <p className="text-muted-foreground">
              Заполните форму и наш специалист свяжется с вами в течение рабочего дня
            </p>
          </div>
          
          <Card className="bg-card border-border shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Имя *
                    </label>
                    <Input 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Иван Петров"
                      required
                      className="bg-input border-border"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Телефон *
                    </label>
                    <Input 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+7 (999) 123-45-67"
                      required
                      className="bg-input border-border"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Описание задачи
                  </label>
                  <Textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Опишите ваши требования к маркировке: тип материала, объём партии, сроки..."
                    rows={4}
                    className="bg-input border-border"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Отправить заявку
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                <Icon name="Zap" size={18} className="text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-foreground">LaserMark Pro</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 LaserMark Pro. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
