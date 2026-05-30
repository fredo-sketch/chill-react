import React, { useState } from "react";
import { Link, useOutletContext, useNavigate } from "react-router";
import logoChill from "../../assets/images/Logo.svg";
import bgLogin from "../../assets/images/bg-masuk.jpg";
import google from "../../assets/images/google.svg";
import eye from "../../assets/images/eye-off.svg";
import eyeOn from "../../assets/images/eye-open.svg";
import Register from "../Register/register";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const savedAccount = JSON.parse(localStorage.getItem("userAccount"));
    if (!savedAccount) {
      alert("Akun tidak ditemukan! Silakan daftar terlebih dahulu.");
      return;
    }
    if (username === savedAccount.username && password === savedAccount.password) {
      localStorage.setItem("isLoggedIn", "true");
      alert("Login berhasil! Selamat datang kembali.");
      navigate("/");
    } else {
      alert("Username atau password salah!");
    }
  };

  return (
    <main style={{ backgroundImage: `url(${bgLogin})` }} className="bg-[#18181b] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center p-4">
      {/* CARD LOGIN */}

      <div className="bg-[#18181b]/80 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-105 text-center border border-zinc-800">
        {/* LOGO AREA */}
        <div className="flex justify-center mb-6">
          <img src={logoChill} alt="Logo Chill" className="h-10 w-auto" />
        </div>

        {/* JUDUL */}
        <h2 className="text-white text-2xl font-bold mb-1">Masuk</h2>
        <p className="text-zinc-400 text-sm mb-6">Selamat Datang Kembali!</p>

        {/* FORM MASUK */}
        <form onSubmit={handleLogin} className="space-y-4 text-left">
          {/* INPUT USERNAME */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-zinc-300 mb-1.5">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Masukkan Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-[#111113] border border-zinc-700 rounded-full px-4 py-3 text-white text-sm placeholder:text-zinc-500! focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all"
              required
            />
          </div>

          {/* INPUT PASSWORD */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-zinc-300 mb-1.5">
              Password
            </label>
            <div className="relative flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Masukkan Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#111113] border border-zinc-700 rounded-full pl-4 pr-12 py-3 text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all"
                required
              />
              <img src={showPassword ? eyeOn : eye} alt="Toggle Password Visibility" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer w-5 h-5 text-zinc-400 z-10" />
            </div>
          </div>

          {/* BELUM PUNYA AKUN? */}
          <div className="flex items-center justify-between text-xs text-zinc-400 pt-1">
            <p>
              Belum punya akun?{" "}
              <Link to="/register" className="text-white font-semibold hover:underline">
                Daftar
              </Link>
            </p>
            <a href="#lupa-password" className="hover:underline text-zinc-400 hover:text-white">
              Lupa Kata Sandi?
            </a>
          </div>

          {/* TOMBOL MASUK */}
          <button type="submit" className="w-full bg-zinc-700 hover:bg-zinc-600 text-white font-semibold py-3 rounded-full text-sm mt-4 transition-all duration-200 cursor-pointer shadow-md">
            Masuk
          </button>

          {/* OR */}
          <div className="flex items-center my-4 text-zinc-500 text-xs gap-3">
            <div className="h-px bg-zinc-800 flex-1"></div>
            <span>Atau</span>
            <div className="h-px bg-zinc-800 flex-1"></div>
          </div>

          {/* TOMBOL GOOGLE */}
          <button type="button" className="w-full bg-transparent hover:bg-zinc-800 border border-zinc-700 text-white font-medium py-3 rounded-full text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer">
            <img src={google} alt="Google Icon" className="w-5 h-5" />
            Masuk dengan Google
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;
