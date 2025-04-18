'use client';

import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  languages: string[];
}

export const ProjectCard = ({ title, description, imageUrl, link, languages }: ProjectCardProps) => {
  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      'Java': 'bg-red-100 text-red-800',
      'Python': 'bg-blue-100 text-blue-800',
      'C++': 'bg-purple-100 text-purple-800',
      'JavaScript': 'bg-yellow-100 text-yellow-800',
      'TypeScript': 'bg-blue-100 text-blue-800',
      'Kotlin': 'bg-purple-100 text-purple-800',
      'C': 'bg-gray-100 text-gray-800',
      'HTML': 'bg-orange-100 text-orange-800',
      'CSS': 'bg-pink-100 text-pink-800',
      'Shell': 'bg-green-100 text-green-800',
      'Ruby': 'bg-red-100 text-red-800',
      'Swift': 'bg-orange-100 text-orange-800',
      'Go': 'bg-cyan-100 text-cyan-800',
      'Rust': 'bg-orange-100 text-orange-800',
      'Arduino': 'bg-teal-100 text-teal-800',
      'Android': 'bg-green-100 text-green-800'
    };
    return colors[language] || 'bg-gray-100 text-gray-800';
  };

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
}; 