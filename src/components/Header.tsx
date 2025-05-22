import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Логотип */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">KRX</span>
              </div>
              <span className="text-xl font-bold">Community</span>
            </div>

            {/* Навигация */}
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Главная
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Популярное
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Новое
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Категории
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Конкурсы
              </a>
            </nav>
          </div>

          {/* Поиск и профиль */}
          <div className="flex items-center space-x-4">
            {/* Поиск */}
            <div className="hidden sm:block relative">
              <Icon
                name="Search"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={16}
              />
              <Input
                placeholder="Поиск работ, художников..."
                className="pl-10 w-64 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
            </div>

            {/* Кнопки действий */}
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-white"
            >
              <Icon name="Upload" size={20} />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-white"
            >
              <Icon name="Bell" size={20} />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-white"
            >
              <Icon name="MessageSquare" size={20} />
            </Button>

            {/* Профиль */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="p-0">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face" />
                    <AvatarFallback>КР</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-56 bg-gray-800 border-gray-700"
              >
                <DropdownMenuItem className="text-white hover:bg-gray-700">
                  <Icon name="User" className="mr-2" size={16} />
                  Мой профиль
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-gray-700">
                  <Icon name="Settings" className="mr-2" size={16} />
                  Настройки
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-gray-700">
                  <Icon name="Upload" className="mr-2" size={16} />
                  Загрузить работу
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-gray-700" />
                <DropdownMenuItem className="text-white hover:bg-gray-700">
                  <Icon name="LogOut" className="mr-2" size={16} />
                  Выйти
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Мобильное меню */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>

        {/* Мобильная навигация */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a
              href="#"
              className="block py-2 hover:text-blue-400 transition-colors"
            >
              Главная
            </a>
            <a
              href="#"
              className="block py-2 hover:text-blue-400 transition-colors"
            >
              Популярное
            </a>
            <a
              href="#"
              className="block py-2 hover:text-blue-400 transition-colors"
            >
              Новое
            </a>
            <a
              href="#"
              className="block py-2 hover:text-blue-400 transition-colors"
            >
              Категории
            </a>
            <a
              href="#"
              className="block py-2 hover:text-blue-400 transition-colors"
            >
              Конкурсы
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
