import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#systemes", label: "Systèmes" },
    { href: "#climate", label: "Climat" },
    { href: "#protection", label: "Protection" },
    { href: "#quiz", label: "Quiz" }
  ];

  return (
    <nav className="bg-blue-900 text-white fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold">L'Océan Vivant</h1>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex space-x-6">
            {navLinks.map(link => (
              <a 
                key={link.href}
                href={link.href}
                className="hover:text-blue-200 transition py-2"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 hover:text-blue-200 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}