import { NewsType } from "@/helpers/types";
import React from "react";

type PopularNewsProps = {
  popularData: NewsType[];
};

function PopularNews({ popularData }: PopularNewsProps) {
  return (
    <>
      <div className="popular__title">
        <h2 className="tracking-[2px]">POPULAR</h2>
      </div>
      <div className="flex flex-col">
        {popularData.map((news: NewsType, index: any) => {
          return (
            <div className="relative flex flex-row py-5 border-b-[1px] items-center justify-evenly border-sky-50 border-solid">
              <b className="h-full w-2/12 text-29xl inline-block text-sky-50 text-center">
                {index + 1}
              </b>
              <div className="flex flex-col w-9/12 items-start justify-start gap-[8px]">
                <div className="relative leading-[24px] inline-block">
                  {news.title}
                </div>
                <b className="relative text-xs tracking-[1px] leading-[16px] uppercase ">
                  {news.author}
                </b>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default PopularNews;
