import Header from "@/components/Header";
import FilterTabs from "@/components/FilterTabs";
import ArtworkCard from "@/components/ArtworkCard";
import { useNavigation } from "@/hooks/useNavigation";
import { useMemo, useState } from "react";

// Моковые данные для галереи
const artworks = [
  {
    id: "1",
    title: "Футуристический город",
    artist: "Александр Петров",
    artistAvatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
    likes: 1247,
    views: 8923,
    comments: 34,
  },
  {
    id: "2",
    title: "Портрет воина",
    artist: "Мария Иванова",
    artistAvatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
    likes: 892,
    views: 5642,
    comments: 28,
  },
  {
    id: "3",
    title: "Магический лес",
    artist: "Дмитрий Козлов",
    artistAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
    likes: 2156,
    views: 12456,
    comments: 67,
  },
  {
    id: "4",
    title: "Космическая станция",
    artist: "Елена Сидорова",
    artistAvatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    image:
      "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&h=400&fit=crop",
    likes: 1834,
    views: 9876,
    comments: 45,
  },
  {
    id: "5",
    title: "Дракон в горах",
    artist: "Игорь Васильев",
    artistAvatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
    likes: 3421,
    views: 18743,
    comments: 89,
  },
  {
    id: "6",
    title: "Неоновый киберпанк",
    artist: "Анна Федорова",
    artistAvatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
    likes: 2789,
    views: 15234,
    comments: 76,
  },
];

const Index = () => {
  const {
    activeTab,
    setActiveTab,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedTimeFilter,
    setSelectedTimeFilter,
  } = useNavigation();

  const [activeSubTab, setActiveSubTab] = useState("В тренде");

  const filteredArtworks = useMemo(() => {
    let filtered = artworks;

    // Фильтр по поиску
    if (searchQuery) {
      filtered = filtered.filter(
        (artwork) =>
          artwork.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          artwork.artist.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    // Сортировка по активной вкладке
    if (activeSubTab === "В тренде") {
      filtered = [...filtered].sort((a, b) => b.likes - a.likes);
    } else if (activeSubTab === "Новые") {
      filtered = [...filtered].reverse();
    }

    return filtered;
  }, [searchQuery, activeSubTab]);

  const getPageTitle = () => {
    switch (activeTab) {
      case "популярное":
        return "Популярные работы";
      case "новое":
        return "Новые работы";
      case "категории":
        return "Работы по категориям";
      case "конкурсы":
        return "Конкурсы и челленджи";
      default:
        return "Откройте для себя невероятные работы";
    }
  };

  return (
    <div className="min-h-screen bg-gray-950">
      <Header
        onTabChange={setActiveTab}
        activeTab={activeTab}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Заголовок страницы */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            {getPageTitle()}
          </h1>
          <p className="text-gray-400">
            {activeTab === "конкурсы"
              ? "Участвуйте в конкурсах и покажите свои навыки"
              : "Лучшие художники со всего мира делятся своими работами в KRX Community"}
          </p>
        </div>

        {/* Фильтры - показываем только для главной */}
        {activeTab === "главная" && (
          <FilterTabs
            selectedCategory={selectedCategory}
            selectedTimeFilter={selectedTimeFilter}
            onCategoryChange={setSelectedCategory}
            onTimeFilterChange={setSelectedTimeFilter}
            activeSubTab={activeSubTab}
            onSubTabChange={setActiveSubTab}
          />
        )}

        {/* Галерея работ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredArtworks.map((artwork) => (
            <ArtworkCard key={artwork.id} {...artwork} />
          ))}
        </div>

        {/* Загрузить больше */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Загрузить больше работ
          </button>
        </div>
      </main>
    </div>
  );
};

export default Index;
