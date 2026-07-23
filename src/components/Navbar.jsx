import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

const logoChill = "/images/Logo.svg";
const profile = "/images/profile.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    if (loggedInStatus === "true") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="bg-[#18181b] text-white px-4 md:px-12 py-4 flex items-center justify-between border-b border-zinc-800 sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      <div className="flex items-center gap-8">
        <Link to="/">
          <img src={logoChill} alt="Logo Chill" className="h-8 w-auto cursor-pointer" />
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link to="/series" className="hover:text-white transition-colors">
            Series
          </Link>
          <Link to="/movies" className="hover:text-white transition-colors">
            Film
          </Link>
          <Link to="/my-list" className="hover:text-white transition-colors">
            Daftar Saya
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {isLoggedIn ? (
          /* JIKA SUDAH LOGIN: Tampilkan Foto Profil & Tombol Logout */
          <div className="flex items-center gap-4">
            <img src={profile} alt="User Avatar" className="w-9 h-9 rounded-full border border-zinc-700 object-cover cursor-pointer hover:scale-105 transition-transform" />
            <button onClick={handleLogout} className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer">
              Keluar
            </button>
          </div>
        ) : (
          /* JIKA BELUM LOGIN: Tampilkan Tombol Masuk/Daftar */
          <div className="flex items-center gap-3">
            <Link to="/login" className="bg-zinc-700 hover:bg-zinc-600 text-white px-5 py-2 rounded-full text-xs font-semibold transition-all shadow-md">
              Masuk
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
