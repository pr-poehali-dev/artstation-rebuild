import { NavigationTab } from "@/hooks/useNavigation";

interface NavigationProps {
  activeTab: NavigationTab;
  onTabChange: (tab: NavigationTab) => void;
  isMobile?: boolean;
  onMobileMenuClose?: () => void;
}

const navigationItems: { label: string; tab: NavigationTab }[] = [
  { label: "Главная", tab: "главная" },
  { label: "Популярное", tab: "популярное" },
  { label: "Новое", tab: "новое" },
  { label: "Категории", tab: "категории" },
  { label: "Конкурсы", tab: "конкурсы" },
];

const Navigation = ({
  activeTab,
  onTabChange,
  isMobile = false,
  onMobileMenuClose,
}: NavigationProps) => {
  const handleTabClick = (tab: NavigationTab) => {
    onTabChange(tab);
    if (isMobile && onMobileMenuClose) {
      onMobileMenuClose();
    }
  };

  if (isMobile) {
    return (
      <div className="md:hidden pb-4 space-y-2">
        {navigationItems.map((item) => (
          <button
            key={item.tab}
            onClick={() => handleTabClick(item.tab)}
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
    );
  }

  return (
    <div className="hidden md:flex space-x-8 mt-4">
      {navigationItems.map((item) => (
        <button
          key={item.tab}
          onClick={() => handleTabClick(item.tab)}
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
  );
};

export default Navigation;
