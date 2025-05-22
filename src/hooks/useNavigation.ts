import { useState } from "react";

export type NavigationTab =
  | "главная"
  | "популярное"
  | "новое"
  | "категории"
  | "конкурсы"
  | "в тренде"
  | "новые"
  | "подписки";

export const useNavigation = () => {
  const [activeTab, setActiveTab] = useState<NavigationTab>("главная");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все категории");
  const [selectedTimeFilter, setSelectedTimeFilter] = useState("За все время");

  return {
    activeTab,
    setActiveTab,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedTimeFilter,
    setSelectedTimeFilter,
  };
};
