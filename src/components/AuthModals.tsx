import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

interface AuthModalsProps {
  isLoginOpen: boolean;
  isRegisterOpen: boolean;
  onLoginClose: () => void;
  onRegisterClose: () => void;
  onSwitchToRegister: () => void;
  onSwitchToLogin: () => void;
}

const AuthModals = ({
  isLoginOpen,
  isRegisterOpen,
  onLoginClose,
  onRegisterClose,
  onSwitchToRegister,
  onSwitchToLogin,
}: AuthModalsProps) => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <>
      {/* Модалка входа */}
      <Dialog open={isLoginOpen} onOpenChange={onLoginClose}>
        <DialogContent className="bg-gray-800 border-gray-700 text-white">
          <DialogHeader>
            <DialogTitle>Вход в аккаунт</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="login-email">Email</Label>
              <Input
                id="login-email"
                type="email"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
                className="bg-gray-700 border-gray-600 text-white"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <Label htmlFor="login-password">Пароль</Label>
              <Input
                id="login-password"
                type="password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                className="bg-gray-700 border-gray-600 text-white"
                placeholder="••••••••"
              />
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Войти
            </Button>
            <p className="text-center text-gray-400">
              Нет аккаунта?{" "}
              <button
                onClick={onSwitchToRegister}
                className="text-blue-400 hover:text-blue-300"
              >
                Зарегистрироваться
              </button>
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Модалка регистрации */}
      <Dialog open={isRegisterOpen} onOpenChange={onRegisterClose}>
        <DialogContent className="bg-gray-800 border-gray-700 text-white">
          <DialogHeader>
            <DialogTitle>Регистрация</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="register-name">Имя</Label>
              <Input
                id="register-name"
                value={registerData.name}
                onChange={(e) =>
                  setRegisterData({ ...registerData, name: e.target.value })
                }
                className="bg-gray-700 border-gray-600 text-white"
                placeholder="Ваше имя"
              />
            </div>
            <div>
              <Label htmlFor="register-email">Email</Label>
              <Input
                id="register-email"
                type="email"
                value={registerData.email}
                onChange={(e) =>
                  setRegisterData({ ...registerData, email: e.target.value })
                }
                className="bg-gray-700 border-gray-600 text-white"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <Label htmlFor="register-password">Пароль</Label>
              <Input
                id="register-password"
                type="password"
                value={registerData.password}
                onChange={(e) =>
                  setRegisterData({ ...registerData, password: e.target.value })
                }
                className="bg-gray-700 border-gray-600 text-white"
                placeholder="••••••••"
              />
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Зарегистрироваться
            </Button>
            <p className="text-center text-gray-400">
              Уже есть аккаунт?{" "}
              <button
                onClick={onSwitchToLogin}
                className="text-blue-400 hover:text-blue-300"
              >
                Войти
              </button>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AuthModals;
