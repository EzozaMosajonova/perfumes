import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import i18n from "../../i18";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setMenuOpen(false); // Til o'zgartirilganda menyu yopiladi
  };

  return (
    <header>
      <div id='home' className="max-w-[1240px] container mx-auto py-4 relative">
        <div className="flex items-center justify-between">
          {/* Logo (Chap tomonda) */}
          <a href="#" className="flex items-center">
            <h1 className="text-black text-2xl font-bold">{t("header.logo")}</h1>
          </a>

          {/* Menyu tugmasi (mobil uchun) */}
          <div className="md:hidden pr-5 flex items-center">
            {/* Menyu ochish tugmasi */}
            <button onClick={toggleMenu} className="text-black text-2xl">
              {menuOpen ? 'X' : '☰'}
            </button>
          </div>

          {/* Katta ekranda tilni tanlash (select) */}
          <div className="hidden md:flex">
            <select
              value={i18n.language}
              onChange={(e) => changeLanguage(e.target.value)}
              className="border p-2 rounded w-[150px] focus:outline-none"
            >
              <option value="uz">O'zbekcha</option>
              <option value="ru">Русский</option>
              <option value="eng">English</option>
            </select>
          </div>

          {/* Katta ekranda menyu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-black text-lg font-bold">{t("header.home")}</a>
            <a href="#about" className="text-black text-lg font-bold">{t("header.about")}</a>
            <a href="#brands" className="text-black text-lg font-bold">{t("header.brand")}</a>
            <a href="#contact" className="text-black text-lg font-bold">{t("header.contact")}</a>
          </div>
        </div>

        {/* Mobil menyu */}
        <div
          className={`fixed top-0 right-0 w-[250px] h-full bg-white shadow-lg transition-transform transform ${menuOpen ? 'translate-x-0 z-50' : 'translate-x-full z-10'}`}
          style={{ transition: 'transform 0.3s ease-in-out' }}
        >
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-black text-2xl">
              X
            </button>
          </div>

          {/* Mobil menyu ichidagi tilni tanlash (select) */}
          {menuOpen && (
            <div className="flex justify-center mt-4">
              <select
                value={i18n.language}
                onChange={(e) => changeLanguage(e.target.value)}
                className="border p-2 rounded w-[150px] focus:outline-none"
              >
                <option value="uz">O'zbekcha</option>
                <option value="ru">Русский</option>
                <option value="eng">English</option>
              </select>
            </div>
          )}

          <div className="flex flex-col items-center space-y-4 mt-10">
            <a href="#home" onClick={() => setMenuOpen(false)} className="text-black text-lg font-bold">{t("header.home")}</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="text-black text-lg font-bold">{t("header.about")}</a>
            <a href="#brands" onClick={() => setMenuOpen(false)} className="text-black text-lg font-bold">{t("header.brand")}</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="text-black text-lg font-bold">{t("header.contact")}</a>
          </div>
        </div>

        {/* Orqa fon */}
        {menuOpen && (
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-20"
          ></div>
        )}
      </div>
    </header>
  );
};

export default Header;
