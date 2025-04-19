'use client';

import Image from 'next/image';

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  link: string;
  imageUrl: string;
  tags: string[];
}

export const BlogCard = ({ title, description, date, link, imageUrl, tags }: BlogCardProps) => {

  const getTagColor = (tag: string) => {
    const colors: { [key: string]: string } = {
      'java': 'bg-red-100 text-red-800',
      'python': 'bg-blue-100 text-blue-800',
      'c++': 'bg-purple-100 text-purple-800',
      'javascript': 'bg-yellow-100 text-yellow-800',
      'typescript': 'bg-blue-100 text-blue-800',
      'kotlin': 'bg-purple-100 text-purple-800',
      'c': 'bg-gray-100 text-gray-800',
      'html': 'bg-orange-100 text-orange-800',
      'css': 'bg-pink-100 text-pink-800',
      'shell': 'bg-green-100 text-green-800',
      'ruby': 'bg-red-100 text-red-800',
      'swift': 'bg-orange-100 text-orange-800',
      'go': 'bg-cyan-100 text-cyan-800',
      'rust': 'bg-orange-100 text-orange-800',
      'arduino': 'bg-teal-100 text-teal-800',
      'android': 'bg-green-100 text-green-800',
      'aws': 'bg-blue-100 text-blue-800',
      'sns': 'bg-green-100 text-green-800',
      'sqs': 'bg-yellow-100 text-yellow-800',
      's3': 'bg-orange-100 text-orange-800',
      'lambda': 'bg-purple-100 text-purple-800',
      'architecture': 'bg-gray-100 text-gray-800',
      'clean': 'bg-teal-100 text-teal-800',
      'design': 'bg-pink-100 text-pink-800',
      'adr': 'bg-red-100 text-red-800'      
    };

    return colors[tag] || 'bg-gray-100 text-gray-800';
  }
  
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
}; 