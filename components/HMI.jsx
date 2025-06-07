
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertTriangle, Bell } from "lucide-react";
import Image from "next/image";

export default function HMI() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e4f1dc] to-[#c9e5cb] text-[#004c27] font-sans p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Image
            src="/e13404c6-4612-4329-b92c-d36675f178cc.png"
            alt="Азбука Вкуса"
            width={160}
            height={50}
          />
          <h1 className="text-2xl font-bold ml-4">Инженерная панель управления</h1>
        </div>
        <div className="flex items-center gap-4">
          <Bell className="w-6 h-6 text-red-600 animate-pulse" title="Есть аварии" />
        </div>
      </div>

      <Tabs defaultValue="refrigeration">
        <TabsList className="bg-white shadow rounded-lg p-2 mb-4">
          <TabsTrigger value="refrigeration">Холод</TabsTrigger>
          <TabsTrigger value="ventilation">Вентиляция</TabsTrigger>
          <TabsTrigger value="hvac">Климат</TabsTrigger>
          <TabsTrigger value="alarms">Аварии</TabsTrigger>
          <TabsTrigger value="events">Журнал</TabsTrigger>
        </TabsList>

        <TabsContent value="refrigeration">
          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-white/70 backdrop-blur rounded-xl">
              <CardContent className="space-y-2">
                <h2 className="text-lg font-semibold">Холодильное оборудование</h2>
                <p className="text-sm">Температура морозильной камеры: <strong className="text-lg">-18.4°C</strong></p>
                <p className="text-sm">Температура холодильной камеры: <strong className="text-lg">+4.2°C</strong></p>
                <p>Компрессор: <Badge>Активен</Badge></p>
                <p>Цикл оттайки: <strong>Ожидание</strong></p>
                <p>Вентилятор испарителя: <Badge>Включен</Badge></p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur rounded-xl">
              <CardContent className="space-y-2">
                <h2 className="text-lg font-semibold">Температура по зонам</h2>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <p>Кассы: <strong>22.1°C</strong></p>
                  <p>ФРОВ: <strong>6.8°C</strong></p>
                  <p>Кафе: <strong>24.0°C</strong></p>
                  <p>Каб. директора: <strong>23.3°C</strong></p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="ventilation">
          <Card className="bg-white/70 backdrop-blur rounded-xl">
            <CardContent>
              <h2 className="text-lg font-semibold mb-2">Вентиляция</h2>
              <p>Приток: <strong>320 м³/ч</strong> | Вытяжка: <strong>310 м³/ч</strong></p>
              <p>Фильтр F7: <Badge variant="outline">OK</Badge></p>
              <p>Температура приточного воздуха: <strong>21.0°C</strong></p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hvac">
          <Card className="bg-white/70 backdrop-blur rounded-xl">
            <CardContent>
              <h2 className="text-lg font-semibold mb-2">Кондиционирование</h2>
              <p>Уставка: <strong>23°C</strong> | Текущая: <strong>22.5°C</strong></p>
              <p>Вентилятор: <Badge>Auto</Badge> | Режим: <Badge>Охлаждение</Badge></p>
              <p>Тепловая завеса: <Badge variant="outline">Активна</Badge></p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alarms">
          <ScrollArea className="h-48">
            <Card className="bg-white/90 backdrop-blur rounded-xl">
              <CardContent>
                <div className="flex items-center gap-2 text-red-600">
                  <AlertTriangle className="w-5 h-5" />
                  <span>Авария компрессора №2 (морозильная камера)</span>
                  <Button className="ml-auto" variant="destructive" size="sm">Квитировать</Button>
                </div>
              </CardContent>
            </Card>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="events">
          <ScrollArea className="h-48">
            <Card className="bg-white/90 backdrop-blur rounded-xl">
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>10:22 — Изменена уставка HVAC: 24 → 23°C</li>
                  <li>10:18 — Температура в морозильной камере -18.4°C</li>
                  <li>10:00 — Включение вентиляции</li>
                  <li>09:42 — Перезапуск компрессора №1</li>
                </ul>
              </CardContent>
            </Card>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
}
