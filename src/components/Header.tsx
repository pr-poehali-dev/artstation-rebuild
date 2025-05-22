import { useState } from "react";
import { NavigationTab } from "@/hooks/useNavigation";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import AuthModals from "@/components/AuthModals";
import Logo from "@/components/header/Logo";
import SearchBar from "@/components/header/SearchBar";
import UserActions from "@/components/header/UserActions";
import Navigation from "@/components/header/Navigation";

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

  const handleSwitchToRegister = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };

  const handleSwitchToLogin = () => {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />

          <div className="flex items-center space-x-4">
            <SearchBar
              searchQuery={searchQuery}
              onSearchChange={onSearchChange}
            />

            <UserActions
              isAuthenticated={isAuthenticated}
              onLoginOpen={() => setIsLoginOpen(true)}
              onRegisterOpen={() => setIsRegisterOpen(true)}
              onLogout={handleLogout}
            />

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

        <Navigation activeTab={activeTab} onTabChange={onTabChange} />

        {isMenuOpen && (
          <Navigation
            activeTab={activeTab}
            onTabChange={onTabChange}
            isMobile={true}
            onMobileMenuClose={() => setIsMenuOpen(false)}
          />
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
