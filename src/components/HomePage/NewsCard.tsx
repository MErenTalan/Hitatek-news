// src/components/NewsCard.tsx
import React from "react";
import { NewsType } from "@/helpers/types";

type NewsCardProps = NewsType & {
  imageHeight?: string;
  imagePosition: "left" | "top";
};

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  description: summary,
  urlToImage: imageUrl,
  url,
  imageHeight = "h-40",
  imagePosition,
}) => {
  const imageClasses =
    imagePosition === "left"
      ? "w-full md:w-[45%] h-full object-cover rounded-lg float-left mr-4 mb-2"
      : `w-full object-cover mb-2 rounded-t-lg ${imageHeight}`;
  return (
    <div
      key={url}
      className={`bg-white rounded-lg shadow-md p-4 mb-4 ${
        imagePosition === "left" && "h-fit lg:h-40"
      }`}
    >
      {/* Görseller API'dan external olarak geliyor ve Next Image external görsel kullanımında host configuration gerektirdiği için demo projesinde normal HTML img etiketinin kullanımını yeterli buldum. */}
      <img src={imageUrl} alt={title} className={imageClasses} />
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-600">{summary}</p>
    </div>
  );
};

export default NewsCard;
