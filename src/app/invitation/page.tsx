'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import personalizedContent from '../../data/personalized-content.json';

// Separate client component for search params
function InvitationContent() {
  const searchParams = useSearchParams();
  const visitorName = searchParams.get('name') || 'Guest';

  // Find personalized content or use default
  const guestContent = personalizedContent.guests.find(
    guest => guest.name.toLowerCase() === visitorName.toLowerCase()
  ) || personalizedContent.default;

  return (
    <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 m-4 text-center">
      <h1 className="text-4xl font-bold mb-6 text-purple-600 dark:text-purple-400">
        Graduation Invitation
      </h1>
      <div className="relative w-full h-96 mb-8">
        <Image
          src="/graduation-image.jpg"
          alt="Graduation Celebration"
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-lg"
        />
      </div>
      
      <div className="mb-8">
        <p className="text-2xl text-gray-700 dark:text-gray-300 mb-4">
          Dear {visitorName},
        </p>
        <div className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          <p className="mb-4">{guestContent.message}</p>
          {guestContent.role !== 'Guest' && (
            <p className="text-purple-500 dark:text-purple-400 font-semibold">
              - {guestContent.role} -
            </p>
          )}
        </div>
        <div className="text-gray-700 dark:text-gray-300 space-y-2">
          <p>Date: December 07th, 2024</p>
          <p>Time: 10:00 AM - 12:00 AM</p>
          <p>Location: Ho Chi Minh University of Science - 227 Nguyễn Văn Cừ, Quận 5, TP. Hồ Chí Minh </p>
          <p>Parking information: </p>
          <ul>
            <li><a href="https://maps.app.goo.gl/6orMmLgmHb4Fb2mh7" className="text-blue-500 hover:underline">Trường THPT Chuyên Lê Hồng Phong</a></li>
            <li><a href="https://maps.app.goo.gl/mbn5kxVSA5B317QN9" className="text-blue-500 hover:underline">NOWZONE Fashion Mall</a></li>
            <li><a href="https://maps.app.goo.gl/tfNqTKYD7RiBofU59" className="text-blue-500 hover:underline">Trường Đại học Sài Gòn</a></li>
            <li><a href="https://maps.app.goo.gl/8So47Es8RyJbDmA68" className="text-blue-500 hover:underline">Trường Đại học Sư Phạm TPHCM</a></li>
          </ul>

          <p>Phone: 0708624730</p>
        </div>
      </div>

      {guestContent.specialNote && (
        <div className="mt-6 mb-8">
          {guestContent.specialImage && (
            <div>
              <p className="text-purple-500 dark:text-purple-400 font-semibold mb-4">
              - Some special memories we have together (keep in the photograph) -
              </p>
              {guestContent.specialImage.map((image, index) => (
                <div key={index} className="relative w-full h-96 mb-4">
                  <Image
                    src={image}
                    alt="Special memory"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
          )}
          <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
            <p className="text-gray-600 dark:text-gray-400 italic">
              {guestContent.specialNote}
            </p>
          </div>
        </div>
      )}

      <div className="mt-8 border-t pt-8">
        <p className="text-gray-600 dark:text-gray-400 italic">
          Good things take time.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
          - Quote
        </p>
      </div>

      <Link 
        href="/"
        className="mt-8 inline-block bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}

// Main page component
export default function Invitation() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900">
      <Suspense fallback={<div>Loading...</div>}>
        <InvitationContent />
      </Suspense>
    </div>
  );
}
