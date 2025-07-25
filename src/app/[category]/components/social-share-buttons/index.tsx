'use client';

import React from 'react';
import { FaTwitter, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

type SocialShareButtonsProps = {
  readonly url: string;
  readonly title: string;
};

export function SocialShareButtons({ url, title }: SocialShareButtonsProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex space-x-4 items-center text-xl">
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Compartilhar no Twitter"
        className="text-blue-500 hover:text-blue-700 transition"
        title="Compartilhar no Twitter"
      >
        <FaTwitter />
      </a>

      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Compartilhar no Facebook"
        className="text-blue-600 hover:text-blue-800 transition"
        title="Compartilhar no Facebook"
      >
        <FaFacebookF />
      </a>

      <a
        href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Compartilhar no WhatsApp"
        className="text-green-500 hover:text-green-700 transition"
        title="Compartilhar no WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}