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
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const advantages = [
    {
      icon: 'Zap',
      title: 'Высокая точность',
      description: 'Прецизионная лазерная технология обеспечивает идеальную детализацию до 0.01 мм'
    },
    {
      icon: 'Award',
      title: 'Премиальное качество',
      description: 'Работаем с любыми материалами: металл, дерево, кожа, стекло, камень'
    },
    {
      icon: 'Clock',
      title: 'Быстрое выполнение',
      description: 'Срочные заказы от 1 часа. Стандартный срок изготовления — 1-3 дня'
    },
    {
      icon: 'Sparkles',
      title: 'Индивидуальный подход',
      description: 'Реализуем любые дизайнерские решения и создаём эксклюзивные изделия'
    }
  ];

  const gallery = [
    {
      url: 'https://cdn.poehali.dev/projects/3c98074b-484e-43ae-9f51-e4d66e6cbb48/files/8c152243-a33d-4852-a0aa-281218645435.jpg',
      title: 'Ювелирная гравировка'
    },
    {
      url: 'https://cdn.poehali.dev/projects/3c98074b-484e-43ae-9f51-e4d66e6cbb48/files/c889e995-a6e3-4202-b67d-597c8e787922.jpg',
      title: 'Промышленная маркировка'
    },
    {
      url: 'https://cdn.poehali.dev/projects/3c98074b-484e-43ae-9f51-e4d66e6cbb48/files/e6032e46-9fb2-4fde-98b6-0eedaaa9c01b.jpg',
      title: 'Премиальные изделия'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(26, 31, 44, 0.7), rgba(26, 31, 44, 0.7)), url('https://cdn.poehali.dev/projects/3c98074b-484e-43ae-9f51-e4d66e6cbb48/files/8c152243-a33d-4852-a0aa-281218645435.jpg')`
          }}
        />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in">
          <h1 className="font-heading text-6xl md:text-8xl font-bold mb-6 text-primary">
            Лазерная Гравировка
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Превращаем ваши идеи в произведения искусства с помощью передовых лазерных технологий
          </p>
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-6 text-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Заказать консультацию
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-primary" />
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-center mb-4 text-primary">
            Преимущества
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Почему выбирают нас
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={advantage.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold mb-3 text-foreground">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-center mb-4 text-primary">
            Наши работы
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Галерея выполненных проектов
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gallery.map((item, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <img 
                  src={item.url} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="font-heading text-2xl font-semibold p-6 text-primary">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-secondary">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-center mb-4 text-primary">
            Связаться с нами
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Оставьте заявку и мы свяжемся с вами в течение часа
          </p>
          
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Ваше имя
                  </label>
                  <Input 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Иван Иванов"
                    required
                    className="bg-input border-border text-foreground"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Телефон
                  </label>
                  <Input 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+7 (999) 123-45-67"
                    required
                    className="bg-input border-border text-foreground"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Сообщение
                  </label>
                  <Textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Расскажите о вашем проекте..."
                    rows={4}
                    className="bg-input border-border text-foreground"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                >
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p className="text-sm">
            © 2024 Лазерная Гравировка. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
