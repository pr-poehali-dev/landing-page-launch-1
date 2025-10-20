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
      title: "Заявка принята! 🎉",
      description: "Скоро с вами свяжемся",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const advantages = [
    {
      icon: 'Zap',
      title: 'Ультра точность',
      description: 'Лазерная технология нового поколения с точностью до 0.01 мм',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'Sparkles',
      title: 'Любые материалы',
      description: 'Металл, дерево, кожа, стекло, пластик — работаем со всем',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'Rocket',
      title: 'Быстро',
      description: 'Срочные заказы от 1 часа. Стандарт — 24 часа',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: 'Heart',
      title: 'Ваш дизайн',
      description: 'Воплощаем любые идеи — от логотипов до сложных рисунков',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <div className="fixed inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 pointer-events-none" />
      
      <header className="border-b border-border/50 backdrop-blur-xl bg-background/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg shadow-primary/50">
              <Icon name="Zap" size={24} className="text-white" />
            </div>
            <span className="font-heading text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              LaserArt
            </span>
          </div>
          <Button 
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold rounded-full px-6 shadow-lg shadow-primary/30"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Связаться
          </Button>
        </div>
      </header>

      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full border border-primary/30">
                <Icon name="Sparkles" size={16} className="text-primary" />
                <span className="text-sm font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  ПРЕМИУМ ГРАВИРОВКА
                </span>
              </div>
              
              <h1 className="font-heading text-6xl md:text-7xl font-extrabold leading-tight">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                  Лазерная
                </span>
                <br />
                <span className="text-foreground">гравировка</span>
                <br />
                <span className="text-muted-foreground text-4xl">нового уровня</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Превращаем ваши идеи в реальность с помощью лазерных технологий будущего. 
                Уникальный дизайн, максимальная точность, невероятная скорость.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-bold text-lg rounded-full px-8 py-6 shadow-2xl shadow-primary/40 transition-all hover:scale-105"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Заказать сейчас
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-primary/30 hover:bg-primary/10 text-foreground font-semibold rounded-full px-8 py-6"
                >
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть видео
                </Button>
              </div>
              
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="font-heading text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    1000+
                  </div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <div>
                  <div className="font-heading text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    24ч
                  </div>
                  <div className="text-sm text-muted-foreground">Средний срок</div>
                </div>
                <div>
                  <div className="font-heading text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    5★
                  </div>
                  <div className="text-sm text-muted-foreground">Рейтинг</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-border/50 shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/3c98074b-484e-43ae-9f51-e4d66e6cbb48/files/8c152243-a33d-4852-a0aa-281218645435.jpg"
                  alt="Лазерная гравировка"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-heading text-5xl md:text-6xl font-bold">
              Почему <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">мы?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Современные технологии для ваших уникальных проектов
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all hover:scale-105 group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 relative">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${advantage.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
                  
                  <div className={`w-14 h-14 mb-4 rounded-2xl bg-gradient-to-br ${advantage.gradient} flex items-center justify-center shadow-lg`}>
                    <Icon name={advantage.icon as any} size={28} className="text-white" />
                  </div>
                  
                  <h3 className="font-heading text-xl font-bold mb-2 text-foreground">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-heading text-5xl md:text-6xl font-bold">
              Наши <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">работы</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Примеры реализованных проектов
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { url: 'https://cdn.poehali.dev/projects/3c98074b-484e-43ae-9f51-e4d66e6cbb48/files/8c152243-a33d-4852-a0aa-281218645435.jpg', title: 'Эксклюзивная гравировка' },
              { url: 'https://cdn.poehali.dev/projects/3c98074b-484e-43ae-9f51-e4d66e6cbb48/files/c889e995-a6e3-4202-b67d-597c8e787922.jpg', title: 'Промышленная маркировка' },
              { url: 'https://cdn.poehali.dev/projects/3c98074b-484e-43ae-9f51-e4d66e6cbb48/files/e6032e46-9fb2-4fde-98b6-0eedaaa9c01b.jpg', title: 'Брендирование' }
            ].map((item, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-3xl aspect-square cursor-pointer"
              >
                <img 
                  src={item.url} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="font-heading text-2xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-semibold">Подробнее</span>
                    <Icon name="ArrowRight" size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-heading text-5xl md:text-6xl font-bold">
              Начнём <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">сотрудничество?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Оставьте заявку и получите консультацию в течение 10 минут
            </p>
          </div>
          
          <Card className="bg-card/50 backdrop-blur border-border/50 shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">
                      Ваше имя
                    </label>
                    <Input 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Александр"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary rounded-2xl h-12"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">
                      Телефон
                    </label>
                    <Input 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+7 (999) 123-45-67"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary rounded-2xl h-12"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">
                    Расскажите о проекте
                  </label>
                  <Textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Что хотите выгравировать? На каком материале?"
                    rows={4}
                    className="bg-background/50 border-border/50 focus:border-primary rounded-2xl resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-bold text-lg rounded-full py-6 shadow-lg shadow-primary/30 transition-all hover:scale-105"
                >
                  Отправить заявку
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border/50 backdrop-blur">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg shadow-primary/50">
                <Icon name="Zap" size={24} className="text-white" />
              </div>
              <span className="font-heading text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                LaserArt
              </span>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Youtube" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Send" size={24} />
              </a>
            </div>
            
            <p className="text-sm text-muted-foreground">
              © 2024 LaserArt. Создано с любовью
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
