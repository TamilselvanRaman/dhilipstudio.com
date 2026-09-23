import React from "react";
import { portfolioDetailsList } from "@/data/portfolioData";
import { PortfolioSingleClient } from "./PortfolioSingleClient";

export async function generateStaticParams() {
  const paramsList: { id: string }[] = [];
  portfolioDetailsList.forEach((item) => {
    paramsList.push({ id: String(item.id) });
    if (item.slug) {
      paramsList.push({ id: item.slug });
    }
  });
  return paramsList;
}

export default async function PortfolioSinglePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const paramId = resolvedParams.id;

  // Find item by ID or slug
  const itemIndex = portfolioDetailsList.findIndex(
    (p) => String(p.id) === paramId || p.slug === paramId
  );

  const item = itemIndex !== -1 ? portfolioDetailsList[itemIndex] : portfolioDetailsList[0];

  return <PortfolioSingleClient item={item} />;
}
