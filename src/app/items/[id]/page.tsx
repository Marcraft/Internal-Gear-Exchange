import { notFound } from "next/navigation";
import { ItemDetailClient } from "@/components/item-detail-client";
import { mockItems } from "@/lib/mock-data";

interface ItemDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ItemDetailPage({ params }: ItemDetailPageProps) {
  const { id } = await params;
  const item = mockItems.find((entry) => entry.id === id);

  if (!item) {
    notFound();
  }

  return <ItemDetailClient item={item} />;
}