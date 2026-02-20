import Image from "next/image";
import Link from "next/link";
import cards from "@/data/heroCards.json";

export default function HeroCardsSection() {
  return (
    <section className="w-full py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {cards.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className="group relative h-[320px] overflow-hidden rounded-3xl"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-black/45">
                <div className="flex h-[64px] items-center justify-center gap-6 text-white">
                  <span className="text-lg">{card.title}</span>

                  {card.subtitle && (
                    <>
                      <span className="h-6 w-px bg-white/70" />
                      <span className="text-lg">{card.subtitle}</span>
                    </>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
