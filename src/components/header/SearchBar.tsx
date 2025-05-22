import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  className?: string;
}

const SearchBar = ({
  searchQuery,
  onSearchChange,
  className = "",
}: SearchBarProps) => {
  return (
    <div className={`hidden sm:block relative ${className}`}>
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
  );
};

export default SearchBar;
