'use client';

import React from 'react';
import Image from 'next/image';
import { getTagColor } from '@/utils/publishers';

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  link: string;
  imageUrl: string;
  tags: readonly string[];
}

export const BlogCard = React.memo(({ title, description, date, link, imageUrl, tags }: BlogCardProps) => {
  
  return (
    <div className="bg-white rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 transform hover:-translate-y-1">
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.unsplash.com/photo-1542831371-29b0f74f9713';
            }}
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-500">{date}</span>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag: string) => (
                <span key={tag} className={`px-2 py-1 rounded-full text-xs font-medium ${getTagColor(tag)}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600">{description}</p>
          <div className="mt-4 flex items-center text-helpdev-primary">
            <span className="text-sm font-medium group-hover:underline">Ler mais</span>
            <svg 
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
});

BlogCard.displayName = 'BlogCard';
