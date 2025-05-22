import { useState } from "react";
import { NavigationTab, useNavigation } from "@/hooks/useNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Icon from "@/components/ui/icon";
import AuthModals from "@/components/AuthModals";

interface HeaderProps {
  onTabChange: (tab: NavigationTab) => void;
  activeTab: NavigationTab;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const Header = ({
  onTabChange,
  activeTab,
  searchQuery,
  onSearchChange,
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigationItems: { label: string; tab: NavigationTab }[] = [
    { label: "Главная", tab: "главная" },
    { label: "Популярное", tab: "популярное" },
    { label: "Новое", tab: "новое" },
    { label: "Категории", tab: "категории" },
    { label: "Конкурсы", tab: "конкурсы" },
  ];

  const handleSwitchToRegister = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };

  const handleSwitchToLogin = () => {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  };

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Логотип */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">KRX</span>
            </div>
            <span className="text-xl font-bold">Community</span>
          </div>

          {/* Поиск и действия */}
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
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
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

            {/* Профиль или авторизация */}
            {isAuthenticated ? (
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
                  <DropdownMenuSeparator className="bg-gray-700" />
                  <DropdownMenuItem
                    className="text-white hover:bg-gray-700"
                    onClick={() => setIsAuthenticated(false)}
                  >
                    <Icon name="LogOut" className="mr-2" size={16} />
                    Выйти
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex space-x-2">
                <Button
                  variant="ghost"
                  onClick={() => setIsLoginOpen(true)}
                  className="text-gray-300 hover:text-white"
                >
                  Войти
                </Button>
                <Button
                  onClick={() => setIsRegisterOpen(true)}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Регистрация
                </Button>
              </div>
            )}

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

        {/* Основная навигация */}
        <div className="hidden md:flex space-x-8 mt-4">
          {navigationItems.map((item) => (
            <button
              key={item.tab}
              onClick={() => onTabChange(item.tab)}
              className={`py-2 px-1 border-b-2 transition-colors ${
                activeTab === item.tab
                  ? "border-blue-500 text-blue-400"
                  : "border-transparent text-gray-300 hover:text-white hover:border-gray-300"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Мобильная навигация */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navigationItems.map((item) => (
              <button
                key={item.tab}
                onClick={() => {
                  onTabChange(item.tab);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left py-2 transition-colors ${
                  activeTab === item.tab
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-blue-400"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <AuthModals
        isLoginOpen={isLoginOpen}
        isRegisterOpen={isRegisterOpen}
        onLoginClose={() => setIsLoginOpen(false)}
        onRegisterClose={() => setIsRegisterOpen(false)}
        onSwitchToRegister={handleSwitchToRegister}
        onSwitchToLogin={handleSwitchToLogin}
      />
    </header>
  );
};

export default Header;
