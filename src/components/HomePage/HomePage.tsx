"use client";
import "@/styles/home.css";
import { FunctionComponent, useEffect, useMemo } from "react";
import Hero from "./Hero";
import { useNews } from "@/helpers/api";
import NewsCard from "./NewsCard";
import { NewsType } from "@/helpers/types";
import PopularNews from "./PopularNews";
import EditorsPick from "./EditorsPick";

const HomePage: FunctionComponent = () => {
  const { data, isLoading, isError } = useNews();

  // Grid yapısı tek mapping'e uygun olmadığı için datayı 4 parçaya bölüyoruz.
  const firstSectionData = useMemo(() => data?.slice(1, 4), [data]);
  // Hero section'da sıfırıncı datayı gösterdiğimiz için ilk datayı atlıyoruz.
  const secondSectionData = useMemo(() => data?.slice(4, 6), [data]);
  const thirdSectionData = useMemo(() => data?.slice(6, 7), [data]);
  const fourthSectionData = useMemo(() => data?.slice(7, 9), [data]);
  const popularData = useMemo(() => data?.slice(0, 5), [data]);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error occurred while fetching data.</div>;

  console.log(data);
  return (
    <div className="w-full h-full">
      <div className="hidden lg:block">
        <Hero
          title={data[0].title}
          author={data[0].author}
          image={data[0].urlToImage}
        />
      </div>
      <div className="mt-10 flex flex-row justify-evenly">
        <div className="news__container w-8/12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 my-8">
            {/* First Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <NewsCard
                url={firstSectionData[0].url}
                title={firstSectionData[0].title}
                description={firstSectionData[0].description}
                urlToImage={firstSectionData[0].urlToImage}
                imagePosition="top"
                imageHeight="h-auto"
              />
              <div className="grid grid-cols-1 gap-6">
                {firstSectionData.slice(1).map((article: NewsType) => (
                  <NewsCard
                    url={article.url}
                    title={article.title}
                    description={article.description}
                    urlToImage={article.urlToImage}
                    imagePosition="top"
                  />
                ))}
              </div>
            </div>
            <div className="lg:hidden">
              <PopularNews popularData={popularData} />
            </div>
            <div className="lg:hidden">
              <Hero
                title={data[0].title}
                author={data[0].author}
                image={data[0].urlToImage}
              />
            </div>
            {/* Second Section */}
            <div className="grid grid-cols-1 gap-6">
              {secondSectionData.map((article: NewsType) => (
                <NewsCard
                  url={article.url}
                  title={article.title}
                  description={article.description}
                  urlToImage={article.urlToImage}
                  imagePosition="left"
                />
              ))}
            </div>

            {/* Third Section */}
            <NewsCard
              url={thirdSectionData[0].url}
              title={thirdSectionData[0].title}
              description={thirdSectionData[0].description}
              urlToImage={thirdSectionData[0].urlToImage}
              imagePosition="top"
            />

            {/* Fourth Section */}
            <div className="grid grid-cols-1 gap-6">
              {fourthSectionData.map((article: NewsType) => (
                <NewsCard
                  url={article.url}
                  title={article.title}
                  description={article.description}
                  urlToImage={article.urlToImage}
                  imagePosition="left"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="popular_section w-3/12 border-l-[1px] border-sky-50 border-solid pl-8 hidden lg:block">
          <PopularNews popularData={popularData} />
          <EditorsPick news={data[Math.floor(Math.random() * 9)]} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
