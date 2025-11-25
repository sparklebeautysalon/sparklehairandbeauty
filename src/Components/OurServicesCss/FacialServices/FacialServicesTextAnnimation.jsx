
import React, { useEffect, useState } from "react";

export default function FacialServicesTextAnnimation({
  words = [],
  prefix = "",
  speed = 90,
  delSpeed = 45,
  delay = 1500,
}) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const full = words[i].text;
    let timer;

    if (!del) {
      timer = setTimeout(() => {
        setText(full.slice(0, text.length + 1));
        if (text.length + 1 === full.length) {
          setTimeout(() => setDel(true), delay);
        }
      }, speed);
    } else {
      timer = setTimeout(() => {
        setText(full.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDel(false);
          setI((p) => (p + 1) % words.length);
        }
      }, delSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, del, i, words, speed, delSpeed, delay]);

  return (
    <span style={{ display: "flex", alignItems: "center" }}>
      <span className={words[i].className} style={{ fontWeight: 800 }}>
        {prefix}
        {text}
      </span>
      <span
        className={words[i].className}
        style={{
          fontWeight: 800,
          marginLeft: 6,
          animation: "blink 0.7s infinite"
        }}
      >
        |
      </span>

      <style>{`
        @keyframes blink {
          0%,100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}
