import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [botActive, setBotActive] = useState(true);
  const [paymentsEnabled, setPaymentsEnabled] = useState(true);

  const stats = [
    { label: 'Активных пользователей', value: '2,847', change: '+12.5%', icon: 'Users', color: 'text-blue-500' },
    { label: 'Сообщений сегодня', value: '1,234', change: '+8.3%', icon: 'MessageSquare', color: 'text-green-500' },
    { label: 'Доход за месяц', value: '₽124,500', change: '+23.1%', icon: 'TrendingUp', color: 'text-emerald-500' },
    { label: 'Конверсия', value: '18.4%', change: '+2.7%', icon: 'Target', color: 'text-purple-500' },
  ];

  const transactions = [
    { id: '1', user: 'Иван П.', amount: 1500, status: 'success', time: '10:45' },
    { id: '2', user: 'Мария С.', amount: 2300, status: 'success', time: '10:32' },
    { id: '3', user: 'Алексей К.', amount: 890, status: 'pending', time: '10:18' },
    { id: '4', user: 'Елена В.', amount: 4200, status: 'success', time: '09:55' },
  ];

  const messages = [
    { type: 'user', text: '/start', time: '10:45' },
    { type: 'bot', text: '👋 Добро пожаловать в наш бот!\n\nВыберите действие из меню ниже:', time: '10:45' },
    { type: 'menu', buttons: [['📦 Каталог', '💳 Оплата'], ['⚙️ Настройки', 'ℹ️ Помощь']] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <Icon name="Bot" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900 dark:text-slate-50">TeleBot Manager</h1>
                <p className="text-sm text-slate-600 dark:text-slate-400">Панель управления</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-600 dark:text-slate-400">Статус бота</span>
                <Switch checked={botActive} onCheckedChange={setBotActive} />
                <Badge variant={botActive ? 'default' : 'secondary'}>
                  {botActive ? 'Активен' : 'Остановлен'}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 max-w-3xl mx-auto">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <Icon name="LayoutDashboard" size={16} />
              Дашборд
            </TabsTrigger>
            <TabsTrigger value="commands" className="flex items-center gap-2">
              <Icon name="Terminal" size={16} />
              Команды
            </TabsTrigger>
            <TabsTrigger value="payments" className="flex items-center gap-2">
              <Icon name="CreditCard" size={16} />
              Платежи
            </TabsTrigger>
            <TabsTrigger value="preview" className="flex items-center gap-2">
              <Icon name="Smartphone" size={16} />
              Превью
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in border-slate-200 dark:border-slate-700">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold text-slate-900 dark:text-slate-50">{stat.value}</p>
                      <p className="text-sm text-green-600 dark:text-green-400 mt-1">{stat.change}</p>
                    </div>
                    <div className={`${stat.color} bg-slate-100 dark:bg-slate-800 p-3 rounded-lg`}>
                      <Icon name={stat.icon as any} size={24} />
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6 border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">Последние транзакции</h3>
                  <Icon name="ArrowUpRight" size={20} className="text-slate-400" />
                </div>
                <div className="space-y-3">
                  {transactions.map((tx) => (
                    <div key={tx.id} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-750 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                          {tx.user.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium text-slate-900 dark:text-slate-50">{tx.user}</p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">{tx.time}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-slate-900 dark:text-slate-50">₽{tx.amount}</p>
                        <Badge variant={tx.status === 'success' ? 'default' : 'secondary'} className="text-xs">
                          {tx.status === 'success' ? 'Успешно' : 'В обработке'}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">Активность по часам</h3>
                  <Icon name="BarChart3" size={20} className="text-slate-400" />
                </div>
                <div className="space-y-4">
                  {[
                    { hour: '08:00', value: 45 },
                    { hour: '10:00', value: 78 },
                    { hour: '12:00', value: 92 },
                    { hour: '14:00', value: 65 },
                    { hour: '16:00', value: 88 },
                    { hour: '18:00', value: 54 },
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">{item.hour}</span>
                        <span className="font-medium text-slate-900 dark:text-slate-50">{item.value} сообщений</span>
                      </div>
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="commands" className="space-y-6 animate-fade-in">
            <Card className="p-6 border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-slate-50">Настройка команд</h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="start">Команда /start</Label>
                  <Textarea 
                    id="start"
                    placeholder="Текст приветствия"
                    className="min-h-[100px]"
                    defaultValue="👋 Добро пожаловать в наш бот!\n\nЯ помогу вам с покупками и оплатой."
                  />
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label htmlFor="help">Команда /help</Label>
                  <Textarea 
                    id="help"
                    placeholder="Текст помощи"
                    className="min-h-[100px]"
                    defaultValue="ℹ️ Доступные команды:\n\n/start - Начать работу\n/help - Показать помощь\n/settings - Настройки"
                  />
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label htmlFor="settings">Команда /settings</Label>
                  <Textarea 
                    id="settings"
                    placeholder="Текст настроек"
                    className="min-h-[100px]"
                    defaultValue="⚙️ Настройки профиля\n\nИспользуйте кнопки ниже для управления."
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button className="flex-1">
                    <Icon name="Save" size={16} className="mr-2" />
                    Сохранить изменения
                  </Button>
                  <Button variant="outline">
                    <Icon name="RotateCcw" size={16} className="mr-2" />
                    Сбросить
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-slate-50">Обработка файлов</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="FileImage" size={24} className="text-blue-500" />
                    <div>
                      <p className="font-medium text-slate-900 dark:text-slate-50">Изображения</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">JPG, PNG, GIF до 10MB</p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="FileText" size={24} className="text-green-500" />
                    <div>
                      <p className="font-medium text-slate-900 dark:text-slate-50">Документы</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">PDF, DOC, DOCX до 20MB</p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="Music" size={24} className="text-purple-500" />
                    <div>
                      <p className="font-medium text-slate-900 dark:text-slate-50">Аудио и видео</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">MP3, MP4, AVI до 50MB</p>
                    </div>
                  </div>
                  <Switch />
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="payments" className="space-y-6 animate-fade-in">
            <Card className="p-6 border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">Настройка платежей</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Прием платежей</span>
                  <Switch checked={paymentsEnabled} onCheckedChange={setPaymentsEnabled} />
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="provider">Платежный провайдер</Label>
                    <Input id="provider" placeholder="YooKassa, Stripe, PayPal" defaultValue="YooKassa" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="token">API Token</Label>
                    <Input id="token" type="password" placeholder="••••••••••••" />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium text-slate-900 dark:text-slate-50">Комиссия и лимиты</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="commission">Комиссия (%)</Label>
                      <Input id="commission" type="number" placeholder="2.5" defaultValue="2.5" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="minAmount">Минимальная сумма (₽)</Label>
                      <Input id="minAmount" type="number" placeholder="100" defaultValue="100" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="maxAmount">Максимальная сумма (₽)</Label>
                      <Input id="maxAmount" type="number" placeholder="50000" defaultValue="50000" />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium text-slate-900 dark:text-slate-50">Способы оплаты</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { name: 'Банковские карты', icon: 'CreditCard', enabled: true },
                      { name: 'СБП', icon: 'Smartphone', enabled: true },
                      { name: 'Электронные кошельки', icon: 'Wallet', enabled: true },
                      { name: 'Криптовалюта', icon: 'Bitcoin', enabled: false },
                    ].map((method, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Icon name={method.icon as any} size={20} className="text-primary" />
                          <span className="font-medium text-slate-900 dark:text-slate-50">{method.name}</span>
                        </div>
                        <Switch defaultChecked={method.enabled} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button className="flex-1">
                    <Icon name="Save" size={16} className="mr-2" />
                    Сохранить настройки
                  </Button>
                  <Button variant="outline">
                    <Icon name="TestTube" size={16} className="mr-2" />
                    Тестовый платеж
                  </Button>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <Card className="p-6 border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="TrendingUp" size={24} className="text-green-500" />
                  <h4 className="font-semibold text-slate-900 dark:text-slate-50">Успешных</h4>
                </div>
                <p className="text-3xl font-bold text-slate-900 dark:text-slate-50">847</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">За последние 30 дней</p>
              </Card>

              <Card className="p-6 border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="Clock" size={24} className="text-yellow-500" />
                  <h4 className="font-semibold text-slate-900 dark:text-slate-50">В обработке</h4>
                </div>
                <p className="text-3xl font-bold text-slate-900 dark:text-slate-50">12</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Ожидают подтверждения</p>
              </Card>

              <Card className="p-6 border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="XCircle" size={24} className="text-red-500" />
                  <h4 className="font-semibold text-slate-900 dark:text-slate-50">Отклоненных</h4>
                </div>
                <p className="text-3xl font-bold text-slate-900 dark:text-slate-50">23</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">За последние 30 дней</p>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="preview" className="animate-fade-in">
            <div className="max-w-2xl mx-auto">
              <Card className="p-6 border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200 dark:border-slate-700">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                    TB
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-50">TeleBot</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">онлайн</p>
                  </div>
                </div>

                <div className="space-y-4 min-h-[500px] max-h-[600px] overflow-y-auto p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  {messages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      {msg.type === 'menu' ? (
                        <div className="space-y-2 w-full max-w-xs">
                          {msg.buttons.map((row, rowIndex) => (
                            <div key={rowIndex} className="grid grid-cols-2 gap-2">
                              {row.map((btn, btnIndex) => (
                                <Button
                                  key={btnIndex}
                                  variant="outline"
                                  className="w-full bg-white dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600"
                                >
                                  {btn}
                                </Button>
                              ))}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className={`max-w-xs ${msg.type === 'user' ? 'bg-primary text-white' : 'bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-50'} rounded-2xl px-4 py-3 shadow-sm`}>
                          <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                          <p className={`text-xs mt-1 ${msg.type === 'user' ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'}`}>
                            {msg.time}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex gap-2">
                  <Input placeholder="Введите сообщение..." className="flex-1" />
                  <Button size="icon">
                    <Icon name="Send" size={20} />
                  </Button>
                </div>
              </Card>

              <Card className="p-6 mt-6 border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold mb-4 text-slate-900 dark:text-slate-50">Быстрые команды</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="justify-start">
                    <Icon name="Play" size={16} className="mr-2" />
                    /start
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Icon name="HelpCircle" size={16} className="mr-2" />
                    /help
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Icon name="Settings" size={16} className="mr-2" />
                    /settings
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Icon name="Upload" size={16} className="mr-2" />
                    Загрузить файл
                  </Button>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
