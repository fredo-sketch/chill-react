import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import Navbar from "../../components/Navbar";
import logoChill from "../../assets/images/Logo.svg";
import highlightImg from "../../assets/images/highlight.png";
import m1 from "../../assets/images/m-1.png";
import m2 from "../../assets/images/m-2.png";
import m3 from "../../assets/images/m-3.png";
import m4 from "../../assets/images/m-4.png";
import r1 from "../../assets/images/r-1.png";
import r2 from "../../assets/images/r-2.png";
import r3 from "../../assets/images/r-3.png";
import r4 from "../../assets/images/r-4.png";
import r5 from "../../assets/images/r-5.png";
import t1 from "../../assets/images/t-1.png";
import t2 from "../../assets/images/t-2.png";
import t3 from "../../assets/images/t-3.png";
import t4 from "../../assets/images/t-4.png";
import t5 from "../../assets/images/t-5.png";
import rb2 from "../../assets/images/rb-2.png";
import rb5 from "../../assets/images/rb-5.png";

const HIGHLIGHT = {
  title: "Duty After School",
  desc: "Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai recruit lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.",
  bg: highlightImg,
  age: "18+",
};

const SECTIONS = [
  {
    id: "melanjutkan",
    title: "Melanjutkan Menonton",
    scrollable: true,
    items: [
      { id: 1, src: m1, alt: "Movie 1" },
      { id: 2, src: m2, alt: "Movie 2" },
      { id: 3, src: m3, alt: "Movie 3" },
      { id: 4, src: m4, alt: "Movie 4" },
    ],
  },
  {
    id: "top-rating",
    title: "Top Rating Film dan Series Hari ini",
    scrollable: true,
    items: [
      { id: 1, src: r1, alt: "Rating 1" },
      { id: 2, src: r2, alt: "Rating 2" },
      { id: 3, src: r3, alt: "Rating 3" },
      { id: 4, src: r4, alt: "Rating 4" },
      { id: 5, src: r5, alt: "Rating 5" },
    ],
  },
  {
    id: "trending",
    title: "Film Trending",
    scrollable: true,
    items: [
      { id: 1, src: t1, alt: "Trending 1" },
      { id: 2, src: t2, alt: "Trending 2" },
      { id: 3, src: t3, alt: "Trending 3" },
      { id: 4, src: t4, alt: "Trending 4" },
      { id: 5, src: t5, alt: "Trending 5" },
    ],
  },
  {
    id: "rilis",
    title: "Rilis Baru",
    scrollable: true,
    items: [
      { id: 1, src: t5, alt: "Rilis 1" },
      { id: 2, src: rb2, alt: "Rilis 2" },
      { id: 3, src: r5, alt: "Rilis 3" },
      { id: 4, src: r4, alt: "Rilis 4" },
      { id: 5, src: rb5, alt: "Rilis 5" },
    ],
  },
];

const FOOTER_GENRES = [
  ["Aksi", "Anak-anak", "Anime", "Britania"],
  ["Drama", "Fantasi Ilmiah & Fantasi", "Kejahatan", "KDrama"],
  ["Komedi", "Petualangan", "Perang", "Romantis"],
  ["Sains & Alam", "Thriller"],
];

const FOOTER_BANTUAN = ["FAQ", "Kontak Kami", "Privasi", "Syarat & Ketentuan"];

const MovieCard = ({ src, alt, onDelete, onUpdate }) => (
  <div className="relative group/card shrink-0">
    <img
      src={src}
      alt={alt}
      className="rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 object-cover shadow-md"
      style={{ height: "160px", width: "110px" }}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src =
          "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='110' height='160' viewBox='0 0 110 160'><rect width='110' height='160' fill='%2327272a'/><text x='50%27 y='50%27 font-size='10' fill='%2371717a' font-family='sans-serif' text-anchor='middle' alignment-baseline='middle'>Image Missing</text></svg>";
      }}
    />
    <div className="absolute top-1 right-1 hidden group-hover/card:flex gap-1">
      <button onClick={onUpdate} className="bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded">
        ✎
      </button>
      <button onClick={onDelete} className="bg-red-600 text-white text-xs px-1.5 py-0.5 rounded">
        ✕
      </button>
    </div>
  </div>
);

const MovieSection = ({ title, items, scrollable, sectionId, onDelete, onUpdate }) => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 300, behavior: "smooth" });
    }
  };

  return (
    <section className="mb-12">
      <h2 className="font-bold text-xl md:text-2xl mb-4 text-zinc-100">{title}</h2>

      <div className="relative group">
        {scrollable && (
          <button
            onClick={() => scroll(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-black/90 text-white w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity -translate-x-3 cursor-pointer shadow-lg"
          >
            ‹
          </button>
        )}

        <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-3 scrollbar-none" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {items.map((item) => (
            <MovieCard key={item.id} src={item.src} alt={item.alt} onDelete={() => onDelete(sectionId, item.id)} onUpdate={() => onUpdate(sectionId, item.id, { alt: "Judul Baru" })} />
          ))}
        </div>

        {scrollable && (
          <button
            onClick={() => scroll(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-black/90 text-white w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-x-3 cursor-pointer shadow-lg"
          >
            ›
          </button>
        )}
      </div>
    </section>
  );
};

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [muted, setMuted] = useState(true);
  const [sections, setSections] = useState(SECTIONS);

  //Add
  const handleAddMovie = (sectionId, newMovie) => {
    const copySections = [...sections];
    const targetSection = copySections.find((sec) => sec.id === sectionId);
    if (targetSection) {
      const filmBaruLengkap = {
        id: Date.now(),
        src: newMovie.src,
        alt: newMovie.alt,
      };
      targetSection.items.push(filmBaruLengkap);
    }
    setSections(copySections);
  };

  //Delete
  const handleDeleteMovie = (sectionId, movieId) => {
    const copySections = [...sections];
    const targetSection = copySections.find((sec) => sec.id === sectionId);
    if (targetSection) {
      const filmSisa = targetSection.items.filter((item) => item.id !== movieId);
      targetSection.items = filmSisa;
    }
    setSections(copySections);
  };

  //Update
  const handleUpdateMovie = (sectionId, movieId, updatedData) => {
    const copySections = [...sections];
    const targetSection = copySections.find((rak) => rak.id === sectionId);
    if (targetSection) {
      const targetMovie = targetSection.items.find((film) => film.id === movieId);
      if (targetMovie) {
        Object.assign(targetMovie, updatedData);
      }
    }
    setSections(copySections);
  };

  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(status === "true");
  }, []);

  return (
    <div className="bg-[#181a1c] min-h-screen text-white font-sans overflow-x-hidden">
      <Navbar isLoggedIn={isLoggedIn} />

      {isLoggedIn ? (
        <>
          <header className="relative w-full overflow-hidden" style={{ height: "clamp(400px, 65vh, 650px)" }}>
            <img
              src={HIGHLIGHT.bg}
              alt={HIGHLIGHT.title}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                e.target.style.background = "linear-gradient(135deg, #1f2937, #111827)";
              }}
            />

            <div
              className="absolute bottom-0 left-0 w-full"
              style={{
                height: "50%",
                background: "linear-gradient(to bottom, transparent 0%, #181a1c 100%)",
                zIndex: 1,
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to right, rgba(24,26,28,0.9) 20%, transparent 80%)",
                zIndex: 1,
              }}
            />

            <div className="absolute bottom-12 left-6 md:left-16 z-10 max-w-xl animate-fadeIn">
              <h1 className="text-3xl md:text-5xl font-bold mb-3 drop-shadow-md">{HIGHLIGHT.title}</h1>
              <p className="text-xs md:text-sm text-zinc-300 leading-relaxed mb-6 line-clamp-3 md:line-clamp-none">{HIGHLIGHT.desc}</p>

              <div className="flex items-center gap-3 flex-wrap">
                <button className="bg-[#3254ff] hover:bg-[#4a6cff] text-white px-6 py-2 rounded-full font-semibold text-xs md:text-sm transition-all shadow-md cursor-pointer">Mulai</button>
                <button className="bg-white/20 hover:bg-white/30 text-white px-5 py-2 rounded-full font-semibold text-xs md:text-sm transition-all flex items-center gap-2 backdrop-blur-sm cursor-pointer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                  </svg>
                  Selengkapnya
                </button>
                <span className="bg-zinc-800/80 border border-zinc-700 text-zinc-300 px-3 py-1 rounded-md text-xs font-bold">{HIGHLIGHT.age}</span>

                <button onClick={() => setMuted(!muted)} className="border border-white/40 hover:border-white text-white w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer ml-2 bg-black/20">
                  {muted ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </header>

          <main className="px-6 md:px-16 pt-4 pb-12 relative z-20">
            <div className="mb-6 p-4 bg-zinc-900 rounded-lg max-w-sm border border-zinc-800">
              <h3 className="text-sm font-semibold mb-2">Tambah Film Cepat (Melanjutkan Menonton)</h3>
              <div className="flex gap-2">
                <input type="text" id="quick-add-input" placeholder="Ketik judul film..." className="bg-zinc-800 text-sm px-3 py-1.5 rounded text-white flex-1 outline-none border border-zinc-700" />
                <button
                  onClick={() => {
                    const input = document.getElementById("quick-add-input");
                    if (input && input.value.trim()) {
                      handleAddMovie("melanjutkan", { alt: input.value });
                      input.value = ""; // Reset kolom input
                    }
                  }}
                  className="bg-[#3254ff] text-xs px-4 py-1.5 rounded font-semibold"
                >
                  Tambah
                </button>
              </div>
            </div>
            {sections.map((section) => (
              <MovieSection key={section.id} title={section.title} items={section.items} scrollable={section.scrollable} sectionId={section.id} onDelete={handleDeleteMovie} onUpdate={handleUpdateMovie} />
            ))}
          </main>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center max-w-3xl mx-auto animate-fadeIn">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">Tonton Film, Series, & Anime Sepuasnya Tanpa Batas.</h1>
          <p className="text-zinc-400 text-base md:text-lg mb-8 max-w-xl">Mulai dari Rp30.000/bulan. Bisa dibatalkan kapan saja. Siap menonton? Masuk ke akunmu sekarang.</p>
          <Link to="/login" className="bg-zinc-700 hover:bg-zinc-600 text-white font-bold px-8 py-3.5 rounded-full text-base transition-all shadow-xl inline-block cursor-pointer tracking-wide">
            Mulai Menonton Sekarang
          </Link>
        </div>
      )}

      <footer className="bg-[#121415] border-t border-zinc-900 mt-auto">
        <div className="px-6 md:px-16 py-12 flex flex-col md:flex-row justify-between gap-10 max-w-7xl mx-auto">
          <div>
            <img src={logoChill} alt="Logo Chill" className="h-7 w-auto mb-4" />
            <p className="text-zinc-500 text-xs">© 2026 Chill. All Rights Reserved.</p>
          </div>

          <div className="flex gap-12 flex-wrap">
            <div>
              <h3 className="text-sm font-semibold mb-4 text-zinc-300">Genre</h3>
              <div className="flex gap-8">
                {FOOTER_GENRES.map((col, ci) => (
                  <ul key={ci} className="space-y-2">
                    {col.map((genre) => (
                      <li key={genre}>
                        <a href="#" className="text-zinc-500 hover:text-zinc-300 text-xs transition-colors">
                          {genre}
                        </a>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-4 text-zinc-300">Bantuan</h3>
              <ul className="space-y-2">
                {FOOTER_BANTUAN.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-zinc-500 hover:text-zinc-300 text-xs transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
