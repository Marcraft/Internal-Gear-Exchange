"use client";

import { useMemo, useState } from "react";
import { ItemCard } from "@/components/item-card";
import { mockItems } from "@/lib/mock-data";
import { categories, statuses } from "@/lib/types";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [sort, setSort] = useState("newest");

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return mockItems
      .filter((item) =>
        [item.title, item.brand, item.model, item.description].some((field) => field.toLowerCase().includes(q))
      )
      .filter((item) => (category === "All" ? true : item.category === category))
      .filter((item) => (status === "All" ? true : item.status === status))
      .sort((a, b) => {
        if (sort === "price-asc") return a.price - b.price;
        if (sort === "price-desc") return b.price - a.price;
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
  }, [query, category, status, sort]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Internal Gear Exchange</h1>
        <p className="text-slate-600">Buy and sell unused electronics with coworkers and friends.</p>
      </div>

      <section className="grid gap-3 rounded-xl border border-slate-200 bg-white p-4 md:grid-cols-4">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search title, brand, model, description" className="rounded-lg border border-slate-300 px-3 py-2 md:col-span-2" />
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-lg border border-slate-300 px-3 py-2">
          <option>All</option>
          {categories.map((c) => <option key={c}>{c}</option>)}
        </select>
        <select value={status} onChange={(e) => setStatus(e.target.value)} className="rounded-lg border border-slate-300 px-3 py-2">
          <option>All</option>
          {statuses.map((s) => <option key={s}>{s}</option>)}
        </select>
        <select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded-lg border border-slate-300 px-3 py-2">
          <option value="newest">Sort: Newest</option>
          <option value="price-asc">Sort: Price Low to High</option>
          <option value="price-desc">Sort: Price High to Low</option>
        </select>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => <ItemCard key={item.id} item={item} />)}
      </section>
    </div>
  );
}
