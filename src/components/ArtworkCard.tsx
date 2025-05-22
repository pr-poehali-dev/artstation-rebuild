import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface ArtworkCardProps {
  id: string;
  title: string;
  artist: string;
  artistAvatar: string;
  image: string;
  likes: number;
  views: number;
  comments: number;
}

const ArtworkCard = ({
  title,
  artist,
  artistAvatar,
  image,
  likes,
  views,
  comments,
}: ArtworkCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  return (
    <Card className="group overflow-hidden bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
      {/* Изображение */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Оверлей с действиями */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
          <Button
            onClick={handleLike}
            variant="ghost"
            size="icon"
            className={`text-white hover:bg-white/20 ${isLiked ? "text-red-500" : ""}`}
          >
            <Icon name={isLiked ? "Heart" : "Heart"} size={20} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20"
          >
            <Icon name="MessageSquare" size={20} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20"
          >
            <Icon name="Share" size={20} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20"
          >
            <Icon name="Bookmark" size={20} />
          </Button>
        </div>
      </div>

      {/* Информация о работе */}
      <div className="p-4">
        <h3 className="text-white font-semibold text-lg mb-2 line-clamp-1">
          {title}
        </h3>

        {/* Автор */}
        <div className="flex items-center space-x-2 mb-3">
          <Avatar className="w-6 h-6">
            <AvatarImage src={artistAvatar} />
            <AvatarFallback className="text-xs">{artist[0]}</AvatarFallback>
          </Avatar>
          <span className="text-gray-400 text-sm hover:text-blue-400 cursor-pointer transition-colors">
            {artist}
          </span>
        </div>

        {/* Статистика */}
        <div className="flex items-center justify-between text-gray-500 text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Icon
                name="Heart"
                size={14}
                className={isLiked ? "text-red-500" : ""}
              />
              <span>{likeCount}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Eye" size={14} />
              <span>{views}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="MessageSquare" size={14} />
              <span>{comments}</span>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 text-gray-500 hover:text-blue-400"
          >
            <Icon name="MoreHorizontal" size={14} />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ArtworkCard;
