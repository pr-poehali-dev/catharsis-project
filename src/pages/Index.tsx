import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [letterText, setLetterText] = useState('');
  const [isDissolving, setIsDissolving] = useState(false);

  const handleDissolveLetter = () => {
    if (!letterText.trim()) return;
    setIsDissolving(true);
    setTimeout(() => {
      setLetterText('');
      setIsDissolving(false);
    }, 3000);
  };

  const partners = [
    {
      name: 'Это важно',
      founder: 'Елена Мицкевич',
      description: 'Практикующий психолог и автор одноименного психологического подкаста. Все специалисты проходят очень строгий отбор и постоянно повышают квалификацию.',
      icon: 'Heart'
    },
    {
      name: 'Фокус',
      founder: 'Психологический центр',
      description: 'В центр входят психологи, некоторые из них входят в топ-10 психологов Москвы и имеют множество наград.',
      icon: 'Focus'
    },
    {
      name: 'Synaps',
      founder: 'Мария Максимова',
      description: 'Главный психолог - профессиональный психолог, лектор Московского института психоанализа, кандидат медицинских наук, член Российского общества психиатров.',
      icon: 'Brain'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-card/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Письма в прошлое</h1>
            <div className="flex gap-6">
              <button
                onClick={() => setActiveSection('home')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'home' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => setActiveSection('letter')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'letter' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Написать письмо
              </button>
              <button
                onClick={() => setActiveSection('partners')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'partners' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Партнёры
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {activeSection === 'home' && (
          <div className="animate-fade-in">
            <section className="py-24 px-6">
              <div className="container mx-auto max-w-4xl text-center">
                <h2 className="text-6xl font-bold text-foreground mb-6">
                  Отпустите прошлое
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Напишите письмо в прошлое — человеку, ситуации или самому себе. 
                  Символически выплесните боль на бумагу и отпустите её, 
                  наблюдая, как она буквально растворяется.
                </p>
                <Button
                  size="lg"
                  onClick={() => setActiveSection('letter')}
                  className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  Написать письмо
                  <Icon name="PenLine" className="ml-2" size={20} />
                </Button>
              </div>
            </section>

            <section className="py-20 px-6 bg-secondary/30">
              <div className="container mx-auto max-w-5xl">
                <h3 className="text-4xl font-bold text-center mb-16">Как это работает</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="pt-8 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="Edit3" size={32} className="text-primary" />
                      </div>
                      <h4 className="text-xl font-semibold mb-3">Напишите</h4>
                      <p className="text-muted-foreground">
                        Выразите свои чувства и мысли в письме. Будьте честны с собой.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="pt-8 text-center">
                      <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="Wind" size={32} className="text-accent" />
                      </div>
                      <h4 className="text-xl font-semibold mb-3">Отпустите</h4>
                      <p className="text-muted-foreground">
                        Нажмите кнопку и наблюдайте, как письмо растворяется.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="pt-8 text-center">
                      <div className="w-16 h-16 bg-muted/40 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="Sparkles" size={32} className="text-muted-foreground" />
                      </div>
                      <h4 className="text-xl font-semibold mb-3">Исцелитесь</h4>
                      <p className="text-muted-foreground">
                        Почувствуйте облегчение, зная, что никто никогда не прочитает это.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            <section className="py-20 px-6">
              <div className="container mx-auto max-w-3xl text-center">
                <Icon name="Shield" size={48} className="text-primary mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-4">Полная конфиденциальность</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ваши письма не сохраняются и не отправляются. Они существуют только 
                  в вашем браузере и исчезают навсегда после растворения. 
                  Это абсолютная гарантия безопасности и свободы самовыражения.
                </p>
              </div>
            </section>
          </div>
        )}

        {activeSection === 'letter' && (
          <div className="animate-fade-in py-16 px-6">
            <div className="container mx-auto max-w-3xl">
              <h2 className="text-5xl font-bold text-center mb-4">Напишите письмо</h2>
              <p className="text-center text-muted-foreground mb-12 text-lg">
                Выразите свои чувства. Будьте честны. Никто никогда не прочитает это.
              </p>

              <Card className="border-2 shadow-xl">
                <CardContent className="pt-8">
                  <Textarea
                    placeholder="Дорогой/ая..."
                    value={letterText}
                    onChange={(e) => setLetterText(e.target.value)}
                    className={`min-h-[400px] text-lg leading-relaxed resize-none border-none focus-visible:ring-0 ${
                      isDissolving ? 'animate-dissolve' : ''
                    }`}
                    disabled={isDissolving}
                  />
                  
                  <div className="mt-8 flex justify-between items-center">
                    <p className="text-sm text-muted-foreground">
                      {letterText.length > 0 ? `${letterText.length} символов` : 'Начните писать...'}
                    </p>
                    <Button
                      size="lg"
                      onClick={handleDissolveLetter}
                      disabled={!letterText.trim() || isDissolving}
                      className="rounded-full px-8"
                    >
                      {isDissolving ? 'Растворяется...' : 'Отпустить'}
                      <Icon name="Sparkles" className="ml-2" size={18} />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {isDissolving && (
                <p className="text-center text-muted-foreground mt-8 animate-fade-in">
                  Ваши слова улетают в небытие... Вы свободны.
                </p>
              )}
            </div>
          </div>
        )}

        {activeSection === 'partners' && (
          <div className="animate-fade-in py-16 px-6">
            <div className="container mx-auto max-w-5xl">
              <h2 className="text-5xl font-bold text-center mb-6">Наши партнёры</h2>
              <p className="text-center text-muted-foreground mb-16 text-lg max-w-3xl mx-auto">
                Для нас было принципиально важно качественно отобрать центры, 
                с которыми мы хотели бы сотрудничать, чтобы вы могли получить 
                наилучшую психологическую помощь.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {partners.map((partner, index) => (
                  <Card
                    key={index}
                    className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    <CardContent className="pt-8">
                      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Icon name={partner.icon} size={40} className="text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-center mb-2">{partner.name}</h3>
                      <p className="text-center text-sm text-muted-foreground mb-4 font-medium">
                        {partner.founder}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {partner.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-16 text-center">
                <Card className="bg-secondary/30 border-none">
                  <CardContent className="py-12">
                    <Icon name="UserPlus" size={48} className="text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Нужна профессиональная помощь?</h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                      Если вы чувствуете, что самостоятельно справиться сложно, 
                      обратитесь к одному из наших партнёров — квалифицированным психологам.
                    </p>
                    <Button size="lg" className="rounded-full">
                      Связаться с психологом
                      <Icon name="ArrowRight" className="ml-2" size={18} />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-card border-t border-border py-12 px-6 mt-20">
        <div className="container mx-auto max-w-5xl text-center">
          <p className="text-muted-foreground">
            © 2024 Письма в прошлое. Пространство для исцеления.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
