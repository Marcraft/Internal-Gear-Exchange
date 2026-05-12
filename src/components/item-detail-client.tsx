"use client";

import Image from "next/image";
import { useState } from "react";
import { GearItem } from "@/lib/types";

export function ItemDetailClient({ item }: { item: GearItem }) {
  const [activeImage, setActiveImage] = useState(0);

  const handleContact = async () => {
    if (item.contactMethod.includes("@")) {
      window.location.href = `mailto:${item.contactMethod}`;
      return;
    }
    await navigator.clipboard.writeText(item.contactMethod);
    alert("Contact copied to clipboard");
  };

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-3">
        <div className="relative h-80 overflow-hidden rounded-xl border border-slate-200 bg-white">
          <Image src={item.imageUrls[activeImage]} alt={item.title} fill className="object-cover" />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {item.imageUrls.map((url, idx) => (
            <button key={url} onClick={() => setActiveImage(idx)} className={`relative h-20 overflow-hidden rounded-md border ${idx === activeImage ? "border-slate-800" : "border-slate-200"}`}>
              <Image src={url} alt={`${item.title} ${idx + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-3 rounded-xl border border-slate-200 bg-white p-6">
        <h1 className="text-2xl font-bold">{item.title}</h1>
        <p className="text-xl font-semibold">${item.price}</p>
        <p><strong>Brand:</strong> {item.brand}</p>
        <p><strong>Model:</strong> {item.model}</p>
        <p><strong>Condition:</strong> {item.condition}</p>
        <p><strong>Status:</strong> {item.status}</p>
        <p><strong>Seller:</strong> {item.sellerName}</p>
        <p><strong>Contact:</strong> {item.contactMethod}</p>
        <p><strong>Description:</strong> {item.description}</p>
        <p><strong>Known issues:</strong> {item.knownIssues}</p>
        <p><strong>Pickup:</strong> {item.pickupMethod}</p>
        <p><strong>Created:</strong> {new Date(item.createdAt).toLocaleDateString()}</p>
        <button onClick={handleContact} className="rounded-lg bg-slate-900 px-4 py-2 text-white">Contact seller</button>
      </div>
    </div>
  );
}
