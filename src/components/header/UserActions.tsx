import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Icon from "@/components/ui/icon";

interface UserActionsProps {
  isAuthenticated: boolean;
  onLoginOpen: () => void;
  onRegisterOpen: () => void;
  onLogout: () => void;
}

const UserActions = ({
  isAuthenticated,
  onLoginOpen,
  onRegisterOpen,
  onLogout,
}: UserActionsProps) => {
  return (
    <div className="flex items-center space-x-4">
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
              onClick={onLogout}
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
            onClick={onLoginOpen}
            className="text-gray-300 hover:text-white"
          >
            Войти
          </Button>
          <Button
            onClick={onRegisterOpen}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Регистрация
          </Button>
        </div>
      )}
    </div>
  );
};

export default UserActions;
