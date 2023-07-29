import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get("limit");
  if (!limit) return new Response("limit is required", { status: 422 });
  const response = await fetch(
    "https://newsapi.org/v2/everything?q=keyword&apiKey=06bd6ddeac03407784d937d4431363bf",
    {
      method: "GET",
    }
  );
  const newsApiResponseJson = (await response.json()).articles;
  const newsData = newsApiResponseJson
    .filter((news: any) => news.urlToImage !== null)
    .slice(10, +limit + 10);
  // API'da ilk 10 data'nın görselleri sorunluydu. O sebeple 10.datadan başlayıp limite 10 ekledim.
  return NextResponse.json(newsData);
}
