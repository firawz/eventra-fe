import React from 'react'
import Button from '../components/Button'
import EventCard from '../components/EventCard' // Import EventCard

const HomePage: React.FC = () => {
  const dummyEvents = [
    {
      imageSrc: 'https://via.placeholder.com/300x200', // Placeholder image
      category: 'Movies • Drive In',
      date: 'SEP 22',
      title: 'Drive In Senja: Back to the Future',
      price: 'Rp. 200.000 - 550.000',
      location: 'Parkiran Utama Mall @ Ala..'
    },
    {
      imageSrc: 'https://via.placeholder.com/300x200',
      category: 'Movies • Drive In',
      date: 'SEP 22',
      title: 'Drive In Senja: Back to the Future',
      price: 'Rp. 200.000 - 550.000',
      location: 'Parkiran Utama Mall @ Ala..'
    },
    {
      imageSrc: 'https://via.placeholder.com/300x200',
      category: 'Movies • Drive In',
      date: 'SEP 22',
      title: 'Drive In Senja: Back to the Future',
      price: 'Rp. 200.000 - 550.000',
      location: 'Parkiran Utama Mall @ Ala..'
    }
  ]

  return (
    <div className=" bg-eventra-purple text-white flex flex-col items-center justify-center p-4">
      {/* Hero Section */}
      <div className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4">
          Temukan Event Terbaik di EventTeh Eventra
        </h1>
        <p className="text-xl mb-8 max-w-2xl">
          Jelajahi berbagai event musik, olahraga, seni, dan banyak lagi.
          Dapatkan pengalaman tak terlupakan bersama kami.
        </p>
        <div className="relative w-full max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-3 pl-10 rounded-full text-gray-800 focus:outline-none"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
      </div>

      {/* Event Listing Section */}
      <div className="bg-white w-full py-16 px-4 rounded-t-3xl shadow-lg -mt-10">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Event Terbaru dan Terpopuler
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {dummyEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage
