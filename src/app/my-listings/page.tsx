"use client";

import { useState } from "react";
import { myMockItems } from "@/lib/mock-data";
import { statuses } from "@/lib/types";

export default function MyListingsPage() {
  const [items, setItems] = useState(myMockItems);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">My Listings</h1>
      <div className="space-y-3">
        {items.map((item) => (
          <article key={item.id} className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-sm text-slate-600">{item.category} · ${item.price}</p>
              </div>
              <select
                value={item.status}
                onChange={(e) =>
                  setItems((prev) => prev.map((entry) => (entry.id === item.id ? { ...entry, status: e.target.value as (typeof statuses)[number] } : entry)))
                }
                className="rounded-lg border border-slate-300 px-3 py-2"
              >
                {statuses.map((status) => <option key={status}>{status}</option>)}
              </select>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
