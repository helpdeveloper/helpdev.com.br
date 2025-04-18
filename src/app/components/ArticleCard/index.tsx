'use client';

import Link from 'next/link';
import Image from 'next/image';

interface ArticleCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export const ArticleCard = ({ title, description, imageUrl, link }: ArticleCardProps) => {
  const getPublisher = (url: string) => {
    if (url.includes('luizalabs')) {
      return { name: 'Luiza Labs', color: 'bg-blue-100 text-blue-600' };
    } else if (url.includes('picpay')) {
      return { name: 'PicPay', color: 'bg-green-100 text-green-600' };
    }
    return { name: 'Medium', color: 'bg-gray-100 text-gray-600' };
  };

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
}; 