import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Menyu holatini boshqarish uchun state

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Menyu holatini o'zgartirish
  };

  return (
    <header>
      <div className="max-w-[1260px] container mx-auto py-4 relative">
        <div className='flex items-center justify-between'>
          <a href="/" className="flex items-center">
            <h1 className='text-black text-2xl font-bold'>Luxury Line Perfumes</h1>
          </a>

          {/* Menyu tugmasi */}
          <div className="md:hidden pr-5">
            <button onClick={toggleMenu} className="text-black text-2xl">
              {menuOpen ? 'X' : '☰'} {/* Menyu ochilgan yoki yopilganini ko'rsatish */}
            </button>
          </div>

          {/* Katta ekranda menyu */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-black text-lg font-bold">Home</a>
            <a href="#about" className="text-black text-lg font-bold">About Us</a>
            <a href="#brands" className="text-black text-lg font-bold">Our Brands</a>
            <a href="#contact" className="text-black text-lg font-bold">Contacts</a>
          </div>
        </div>

        {/* Mobil ekranda ochiladigan menyu - O'ng tomondan chiqadigan */}
        <div 
          className={`fixed top-0 right-0 w-[250px] h-full bg-white shadow-lg transition-transform transform ${menuOpen ? 'translate-x-0 z-50' : 'translate-x-full z-10'}`}
          style={{ transition: 'transform 0.3s ease-in-out' }}
        >
          {/* "X" tugmasi */}
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-black text-2xl">
              X
            </button>
          </div>

          <div className="flex flex-col items-center space-y-4 mt-10">
            <a href="/" className="text-black text-lg font-bold">Home</a>
            <a href="#about" className="text-black text-lg font-bold">About Us</a>
            <a href="#brands" className="text-black text-lg font-bold">Our Brands</a>
            <a href="#contact" className="text-black text-lg font-bold">Contacts</a>
          </div>
        </div>

        {/* Orqa fonni yopish uchun, menyu ochilganida orqa fonni qoraytirish */}
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
