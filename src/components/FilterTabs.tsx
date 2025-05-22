import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Icon from "@/components/ui/icon";

interface FilterTabsProps {
  selectedCategory: string;
  selectedTimeFilter: string;
  onCategoryChange: (category: string) => void;
  onTimeFilterChange: (filter: string) => void;
  activeSubTab: string;
  onSubTabChange: (tab: string) => void;
}

const FilterTabs = ({
  selectedCategory,
  selectedTimeFilter,
  onCategoryChange,
  onTimeFilterChange,
  activeSubTab,
  onSubTabChange,
}: FilterTabsProps) => {
  const subTabs = ["В тренде", "Новые", "Подписки"];

  const categories = [
    "Все категории",
    "Концепт-арт",
    "Иллюстрация",
    "3D",
    "2D анимация",
    "Окружение",
    "Персонажи",
  ];

  const timeFilters = ["За все время", "За неделю", "За месяц", "За год"];

  return (
    <div className="mb-6">
      {/* Подвкладки */}
      <div className="flex space-x-1 mb-4 bg-gray-800 p-1 rounded-lg w-fit">
        {subTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onSubTabChange(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeSubTab === tab
                ? "bg-blue-600 text-white"
                : "text-gray-400 hover:text-white hover:bg-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Дополнительные фильтры */}
      <div className="flex items-center space-x-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700"
            >
              {selectedCategory}
              <Icon name="ChevronDown" className="ml-2" size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-800 border-gray-700">
            {categories.map((category) => (
              <DropdownMenuItem
                key={category}
                onClick={() => onCategoryChange(category)}
                className="text-gray-300 hover:bg-gray-700"
              >
                {category}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700"
            >
              {selectedTimeFilter}
              <Icon name="ChevronDown" className="ml-2" size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-800 border-gray-700">
            {timeFilters.map((filter) => (
              <DropdownMenuItem
                key={filter}
                onClick={() => onTimeFilterChange(filter)}
                className="text-gray-300 hover:bg-gray-700"
              >
                {filter}
              </DropdownMenuItem>
            ))}
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
