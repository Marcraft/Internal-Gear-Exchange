"use client";

import { FormEvent, useState } from "react";
import { categories, conditions } from "@/lib/types";

export default function NewListingPage() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <div className="mx-auto max-w-2xl space-y-4">
      <h1 className="text-2xl font-bold">Create New Listing</h1>
      {submitted && <p className="rounded-lg bg-emerald-100 p-3 text-emerald-800">Listing submitted successfully (mock only).</p>}
      <form onSubmit={onSubmit} className="grid gap-3 rounded-xl border border-slate-200 bg-white p-5">
        <input required name="title" placeholder="Title" className="rounded border px-3 py-2" />
        <select name="category" className="rounded border px-3 py-2">{categories.map((c) => <option key={c}>{c}</option>)}</select>
        <input required name="brand" placeholder="Brand" className="rounded border px-3 py-2" />
        <input required name="model" placeholder="Model" className="rounded border px-3 py-2" />
        <input required name="price" placeholder="Price" type="number" min="0" className="rounded border px-3 py-2" />
        <select name="condition" className="rounded border px-3 py-2">{conditions.map((c) => <option key={c}>{c}</option>)}</select>
        <textarea required name="description" placeholder="Description" className="rounded border px-3 py-2" />
        <textarea name="knownIssues" placeholder="Known issues" className="rounded border px-3 py-2" />
        <input required name="contactMethod" placeholder="Contact method (email or Slack handle)" className="rounded border px-3 py-2" />
        <input required name="pickupMethod" placeholder="Pickup method" className="rounded border px-3 py-2" />
        <input required name="imageUrl" placeholder="Image URL" className="rounded border px-3 py-2" />
        <button className="rounded-lg bg-slate-900 px-4 py-2 text-white">Submit Listing</button>
      </form>
    </div>
  );
}
