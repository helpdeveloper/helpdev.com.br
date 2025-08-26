'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getLanguageColor } from '@/utils/publishers';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  languages: readonly string[];
}

export const ProjectCard = React.memo(({ title, description, imageUrl, link, languages }: ProjectCardProps) => {

  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <div className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="aspect-[16/9] relative">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/800x450?text=Projeto';
            }}
          />
        </div>
        <div className="p-4 bg-white">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <div className="flex flex-wrap gap-2 mb-3">
            {languages && languages.map((lang, index) => (
              <span
                key={index}
                className={`px-2 py-1 rounded-full text-xs font-medium ${getLanguageColor(lang)}`}
              >
                {lang}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-600 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
});

ProjectCard.displayName = 'ProjectCard';
