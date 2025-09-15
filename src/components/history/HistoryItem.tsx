import { HistoryData } from '@/types/history';

export default function HistoryItem({ history }: { history: HistoryData }) {
    return (
        <article className="relative mt-20 pl-12 md:pl-16 text-white/80">
            <div className="absolute left-6 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-stone-300 md:left-8"></div>
            <h2 className="font-serif text-5xl font-bold text-[var(--color-main)]">
                {history.year}
            </h2>

            <div className="mt-6 grid gap-8 md:grid-cols-2">
                {history.sections.map((section, index) => (
                    <section key={index} className="space-y-3">
                        <h3 className="font-semibold">
                            {section.title}({section.items.length ?? 0}개)
                        </h3>
                        <ul className="list-disc pl-5 space-y-2">
                            {section.items.map((item) => (
                                <li key={item.id}>
                                    <strong>{item.label}</strong> {item.company}
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>
        </article>
    );
}
