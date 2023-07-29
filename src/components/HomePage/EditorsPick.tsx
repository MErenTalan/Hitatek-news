import { NewsType } from "@/helpers/types";
import Image from "next/image";
import React from "react";

function EditorsPick({ news }: { news: NewsType }) {
  return (
    <div className="hidden lg:flex flex-col justify-start">
      <h1>EDITOR'S PICK</h1>
      {/* Görseller API'dan external olarak geliyor ve Next Image external görsel kullanımında host configuration gerektirdiği için demo projesinde normal HTML img etiketinin kullanımını yeterli buldum. */}
      <img src={news.urlToImage} alt="hero" className=" object-cover h-40 " />
      <h2>{news.title}</h2>
      <p>{news.description}</p>
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-white mr-4">
          <Image
            src={"/images/avatar.jpg"}
            alt="avatar"
            width={32}
            height={32}
          />
        </div>
        <p className="font-bold">{news.author}</p>
      </div>
    </div>
  );
}

export default EditorsPick;
