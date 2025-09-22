'use client';
import { useMemo, useState } from 'react';
import resources from '../_data/resources.json';
import ResourceCard from '@/components/ResourceCard';
import SearchBar from '@/components/SearchBar';
import { makeFuse } from '@/lib/fuseClient';


export default function ResourcesPage() {
const [q, setQ] = useState('');
const [category, setCategory] = useState<string | null>(null);
const [tags, setTags] = useState<string[]>([]);


const categories = useMemo(() => Array.from(new Set(resources.map(r => r.category))), []);
const allTags = useMemo(
() => Array.from(new Set(resources.flatMap(r => r.tags))).sort(),
[]
);


const fuse = useMemo(() => makeFuse(resources as any), []);
const results = useMemo(() => {
let list = q ? fuse.search(q).map(r => r.item) : resources;
if (category) list = list.filter(r => r.category === category);
if (tags.length) list = list.filter(r => tags.every(t => r.tags.includes(t)));
return list;
}, [q, category, tags, fuse]);


return (
<main className="grid grid-cols-1 gap-8 md:grid-cols-[220px_1fr]">
<aside className="space-y-6">
<div>
<h3 className="mb-2 text-sm font-semibold uppercase text-zinc-400">Category</h3>
<div className="flex flex-col gap-2">
<button onClick={() => setCategory(null)} className={`text-left ${category===null ? 'text-[#afff2c]' : ''}`}>All</button>
{categories.map(c => (
<button key={c} onClick={() => setCategory(c)} className={`text-left ${category===c ? 'text-[#afff2c]' : ''}`}>{c}</button>
))}
</div>
</div>
<div>
<h3 className="mb-2 text-sm font-semibold uppercase text-zinc-400">Tags</h3>
<div className="flex flex-wrap gap-2">
{allTags.map(t => {
const active = tags.includes(t);
return (
<button key={t} onClick={() => setTags(s => active ? s.filter(x => x!==t) : [...s, t])} className={`rounded-full border px-3 py-1 text-sm ${active ? 'border-[#afff2c] text-[#afff2c]' : 'border-white/15 text-zinc-300'}`}>
{t}
</button>
);
})}
</div>
</div>
</aside>


<section className="space-y-4">
<SearchBar value={q} onChange={setQ} />
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
{results.map(r => <ResourceCard key={r.id} resource={r} />)}
</div>
</section>
</main>
);
}
