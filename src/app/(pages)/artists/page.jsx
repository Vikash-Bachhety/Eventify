import Link from 'next/link';
import React from 'react';
import { FaWikipediaW } from "react-icons/fa";

// Mock data for artists
const artists = [
  {
    name: 'A. R. Rahman',
    description: 'A globally renowned composer, producer, and singer.',
    image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/AR_Rahman_remix_trend_1200x768.jpeg?VersionId=DvrIm.UYF54MxHY1T65j_GVBbSVYZJ9L&size=690:388',
  },
  {
    name: 'Sonu Nigam',
    description: 'One of India’s most versatile playback singers.',
    image: 'https://blackhattalent.com/wp-content/uploads/2023/07/sonu-nigam-ready-to-belt-out-new-ghazal-titled-yaad-01.jpg',
  },
  {
    name: 'Arijit Singh',
    description: 'Popular playback singer known for soulful melodies.',
    image: 'https://images.tv9hindi.com/wp-content/uploads/2024/04/arijit-singh-life-story.jpg',
  },
  {
    name: 'Shreya Ghoshal',
    description: 'Award-winning playback singer with a melodious voice.',
    image: 'https://static.india.com/wp-content/uploads/2023/03/Shreya-Ghoshal.jpg',
  },
  {
    name: 'Anoushka Shankar',
    description: 'Sitar player and composer carrying on her father Ravi Shankar’s legacy.',
    image: 'https://images.indianexpress.com/2015/12/anoushka-shankar-6.jpg?w=600',
  },
  {
    name: 'Mohit Chauhan',
    description: 'Singer known for his distinctive voice and soft rock melodies.',
    image: 'https://www.jagranimages.com/images/newimg/24122024/24_12_2024-mohit_23854925.jpg',
  },
  {
    name: 'Benny Dayal',
    description: 'Versatile playback singer known for upbeat songs.',
    image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202108/Benny_Dayal_Super_Singer_9_hat_1200x768.jpeg?size=1200:675',
  },
  {
    name: 'Armaan Malik',
    description: 'Young playback singer and pop artist.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcoEjTmU3x-wTwn9AweFUwaxDcDgOM56pPAg&s',
  },
  {
    name: 'Ankit Tiwari',
    description: 'Playback singer and music director with soulful compositions.',
    image: 'https://media.telanganatoday.com/wp-content/uploads/2022/09/Ankit-Tiwari.jpg',
  },
  {
    name: 'Neha Kakkar',
    description: 'Popular playback singer known for party anthems.',
    image: 'https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/02/01/Pictures/_1f3527b2-e856-11e6-a2d8-09470c086dd7.JPG',
  },
  {
    name: 'Badshah',
    description: 'Rapper and singer known for his chart-topping hits.',
    image: 'https://www.koimoi.com/wp-content/new-galleries/2024/09/take-a-look-at-badshahs-jaw-dropping-net-worth-01.jpg',
  },
  {
    name: 'Diljit Dosanjh',
    description: 'Punjabi singer, actor, and performer.',
    image: 'https://www.bollywoodhungama.com/wp-content/uploads/2024/06/Diljit-Dosanjh-embraces-Punjabi-attire-globally-amid-turban-controversy-1.jpg',
  },
  {
    name: 'Honey Singh',
    description: 'Rapper, music producer, and actor known for his Punjabi and Bollywood tracks.',
    image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202409/honey-singh-014205960-16x9_0.jpg?VersionId=jHiiaDxFEuhi5qucWEQ1Y_Y4Ohw1ZGQR&size=690:388',
  },
  {
    name: 'Sunidhi Chauhan',
    description: 'Energetic playback singer known for her powerful voice.',
    image: 'https://img.indiaforums.com/media/640x0/61/1921-sunidhi-chauhan.jpg',
  },
];

const ArtistsPage = () => {
  return (
    <div className="w-full py-10 pt-24 text-white px-14">
      <h1 className="text-4xl font-bold text-center mb-8">Artists</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {artists.map((artist, index) => {
          const artistSlug = artist.name.split(' ').join('_');
          return (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-md hover:border-white hover:shadow-white p-4 flex flex-col items-center transition-transform duration-300"
            >
              <img
                src={artist.image}
                alt={artist.name}
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{artist.name}</h3>
              <p className="text-sm text-gray-400 text-center mt-2">{artist.description}</p>
              <Link
                href={`https://en.wikipedia.org/wiki/${artistSlug}`}
                className="flex items-center gap-2 text-sm px-4 py-2 mt-5 rounded-md bg-rose-500 hover:bg-rose-600"
                target="_self" // Open in a new tab
                rel="noopener noreferrer"
              >
                <FaWikipediaW size={18} />
                Profile
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArtistsPage;
