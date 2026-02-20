"use client";

import { useRef, useState } from "react";
import { FileText, X } from "lucide-react";

export default function DocumentsSection({ title = "Dokümanlar", files = [] }) {
  const [list, setList] = useState(files);
  const inputRef = useRef(null);

  return (
    <section className="space-y-2">
      <h3 className="text-2xl font-medium text-blue">{title}</h3>

      <input
        ref={inputRef}
        type="file"
        hidden
        multiple
        onChange={(e) => {
          const names = [...e.target.files].map((f) => f.name);
          setList((prev) => [...prev, ...names]);
          e.target.value = "";
        }}
      />

      {list.map((file, i) => (
        <div key={i} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FileText className="text-gray" />
            <span className="text-gray">{file}</span>
          </div>

          <button onClick={() => setList(list.filter((_, idx) => idx !== i))}>
            <X className="text-gray" />
          </button>
        </div>
      ))}

      <button
        onClick={() => inputRef.current.click()}
        className="text-blue underline"
      >
        Başka bir doküman ekle
      </button>
    </section>
  );
}
