import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Icon from "@/components/ui/icon";

const FilterTabs = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      {/* Основные фильтры */}
      <Tabs defaultValue="trending" className="w-auto">
        <TabsList className="bg-gray-800 border-gray-700">
          <TabsTrigger
            value="trending"
            className="text-gray-300 data-[state=active]:text-white"
          >
            В тренде
          </TabsTrigger>
          <TabsTrigger
            value="latest"
            className="text-gray-300 data-[state=active]:text-white"
          >
            Новые
          </TabsTrigger>
          <TabsTrigger
            value="popular"
            className="text-gray-300 data-[state=active]:text-white"
          >
            Популярные
          </TabsTrigger>
          <TabsTrigger
            value="following"
            className="text-gray-300 data-[state=active]:text-white"
          >
            Подписки
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Дополнительные фильтры */}
      <div className="flex items-center space-x-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700"
            >
              Категория
              <Icon name="ChevronDown" className="ml-2" size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-800 border-gray-700">
            <DropdownMenuItem className="text-gray-300 hover:bg-gray-700">
              Все категории
            </DropdownMenuItem>
            <DropdownMenuItem className="text-gray-300 hover:bg-gray-700">
              Концепт-арт
            </DropdownMenuItem>
            <DropdownMenuItem className="text-gray-300 hover:bg-gray-700">
              Иллюстрация
            </DropdownMenuItem>
            <DropdownMenuItem className="text-gray-300 hover:bg-gray-700">
              3D
            </DropdownMenuItem>
            <DropdownMenuItem className="text-gray-300 hover:bg-gray-700">
              2D анимация
            </DropdownMenuItem>
            <DropdownMenuItem className="text-gray-300 hover:bg-gray-700">
              Окружение
            </DropdownMenuItem>
            <DropdownMenuItem className="text-gray-300 hover:bg-gray-700">
              Персонажи
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700"
            >
              Время
              <Icon name="ChevronDown" className="ml-2" size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-800 border-gray-700">
            <DropdownMenuItem className="text-gray-300 hover:bg-gray-700">
              За все время
            </DropdownMenuItem>
            <DropdownMenuItem className="text-gray-300 hover:bg-gray-700">
              За неделю
            </DropdownMenuItem>
            <DropdownMenuItem className="text-gray-300 hover:bg-gray-700">
              За месяц
            </DropdownMenuItem>
            <DropdownMenuItem className="text-gray-300 hover:bg-gray-700">
              За год
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button
          variant="outline"
          size="icon"
          className="bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700"
        >
          <Icon name="Grid" size={16} />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700"
        >
          <Icon name="List" size={16} />
        </Button>
      </div>
    </div>
  );
};

export default FilterTabs;
