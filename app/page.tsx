import resources from './_data/resources.json';
import Link from 'next/link';
import ResourceCard from '@/components/ResourceCard';
import SearchBar from '@/components/SearchBar';


export default function HomePage() {
const recent = resources.slice(0, 6);
const categories = Array.from(new Set(resources.map(r => r.category))).slice(0, 8);


return (
<main className="space-y-10">
<section className="text-center">
<h1 className="text-4xl font-bold">Video Editing and Production Resources</h1>
<p className="mt-2 text-zinc-300">Hand picked tools, fast tutorials, built for faceless YouTube workflows.</p>
<div className="mx-auto mt-6 max-w-2xl"><SearchBar /></div>
</section>


<section>
<h2 className="mb-4 text-xl font-semibold">Featured categories</h2>
<div className="flex flex-wrap gap-2">
{categories.map(c => (
<Link key={c} href={`/resources?category=${encodeURIComponent(c)}`} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm hover:border-[#afff2c]">
{c}
</Link>
))}
</div>
</section>


<section>
<h2 className="mb-4 text-xl font-semibold">Recently added</h2>
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
{recent.map(r => <ResourceCard key={r.id} resource={r} />)}
</div>
</section>
</main>
);
}
