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
              className="group relative h-[260px] overflow-hidden rounded-3xl"
            >
              {/* BG image */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                priority={card.id === 1}
                className="object-cover transition duration-300 group-hover:scale-[1.03]"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/35" />

              {/* Bottom texts */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-end gap-6 text-white">
                  <span className="text-xl font-medium">{card.title}</span>

                  {card.subtitle ? (
                    <>
                      <span className="h-6 w-px bg-white/60" />
                      <span className="text-xl font-medium">
                        {card.subtitle}
                      </span>
                    </>
                  ) : null}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
