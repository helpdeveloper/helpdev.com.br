"use client";

import React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">HelpDev</h2>
            <p className="text-gray-400 mt-2">Compartilhando conhecimento em desenvolvimento de software desde 2013</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Links</h3>
              <ul className="space-y-1">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">Sobre</Link></li>
                <li><Link href="/articles" className="text-gray-400 hover:text-white transition-colors">Artigos</Link></li>
                <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors">Projetos</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Social</h3>
              <ul className="space-y-1">
                <li><a href="https://github.com/gbzarelli" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://twitter.com/gbzarelli" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="https://www.linkedin.com/in/guilherme-biff-zarelli/" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} HelpDev. Todos os direitos reservados. Site online desde 2013.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

