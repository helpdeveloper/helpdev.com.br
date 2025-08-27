'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getPublisher } from '@/utils/publishers';

interface ArticleCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export const ArticleCard = React.memo(({ title, description, imageUrl, link }: ArticleCardProps) => {
  const publisherInfo = getPublisher(link);

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
              target.src = 'https://miro.medium.com/v2/resize:fit:1200/1*m-R_BkNf1Qjr1YbyOIJY2w.png';
            }}
          />
        </div>
        <div className="p-4 bg-white">
          <div className="flex items-center justify-between mb-2">
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${publisherInfo.color}`}>
              {publisherInfo.name}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
});

ArticleCard.displayName = 'ArticleCard';
