"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PartnersSection() {
  const [partners, setPartners] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("/api/companies")
      .then((res) => setPartners(res.data.data))
      .catch((e) => setError(e.message));
  }, []);

  return (
    <section className="w-full py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl bg-gray-50 py-10 px-6 shadow-sm">
          {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            {partners.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-center grayscale opacity-70 transition hover:grayscale-0 hover:opacity-100"
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
