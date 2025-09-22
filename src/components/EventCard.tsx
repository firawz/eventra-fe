import React from 'react'

interface EventCardProps {
  imageSrc: string
  category: string
  date: string
  title: string
  price: string
  location: string
}

const EventCard: React.FC<EventCardProps> = ({
  imageSrc,
  category,
  date,
  title,
  price,
  location
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full">
          {category}
        </span>
        <h3 className="text-lg font-bold text-gray-800 mt-2">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{date}</p>
        <p className="text-gray-800 font-semibold mt-2">{price}</p>
        <p className="text-gray-500 text-sm flex items-center mt-1">
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
          </svg>
          {location}
        </p>
      </div>
    </div>
  )
}

export default EventCard
