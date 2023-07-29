import { useQuery } from "react-query";

const fetchNews = async () => {
  const response = await fetch(`/api/get_news?limit=10`);
  const data = await response.json();
  return data;
};

export const useNews = () => {
  return useQuery("news", fetchNews);
};
