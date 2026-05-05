import Image from "next/image";
import Link from "next/link";
import { GearItem } from "@/lib/types";

const statusColors: Record<string, string> = {
  Available: "bg-emerald-100 text-emerald-700",
  Reserved: "bg-amber-100 text-amber-700",
  Sold: "bg-slate-200 text-slate-700",
  Withdrawn: "bg-rose-100 text-rose-700"
};

export function ItemCard({ item }: { item: GearItem }) {
  return (
    <Link href={`/items/${item.id}`} className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative h-44 w-full bg-slate-100">
        <Image src={item.imageUrls[0]} alt={item.title} fill className="object-cover" />
      </div>
      <div className="space-y-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold text-slate-900 group-hover:text-slate-700">{item.title}</h3>
          <span className={`rounded-full px-2 py-1 text-xs font-medium ${statusColors[item.status]}`}>{item.status}</span>
        </div>
        <p className="text-sm text-slate-500">{item.category} · {item.condition}</p>
        <p className="text-lg font-bold">${item.price}</p>
        <p className="text-sm text-slate-600">Seller: {item.sellerName}</p>
        <p className="text-sm text-slate-600">Contact: {item.contactMethod}</p>
      </div>
    </Link>
  );
}
