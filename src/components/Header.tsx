import React from 'react'
import Button from './Button' // Import Button component

const Header: React.FC = () => {
  return (
    <header className="bg-eventra-purple p-4 flex justify-between items-center text-white">
      <div className="flex items-center">
        {/* Placeholder for icon */}
        <div className="w-8 h-8 bg-white rounded-full mr-2 flex items-center justify-center">
          <span className="text-eventra-purple font-bold">E</span>
        </div>
        <div className="text-2xl font-bold leading-none">
          <div>EventTech</div>
          <div>Eventra</div>
        </div>
      </div>
      <nav>
        <ul className="flex space-x-8">
          {' '}
          {/* Increased space-x */}
          <li>
            <a href="/" className="hover:text-eventra-light-purple">
              Event
            </a>
          </li>
          <li>
            <a href="/kategori" className="hover:text-eventra-light-purple">
              Kategori
            </a>
          </li>
          <li>
            <a href="/tentang-kami" className="hover:text-eventra-light-purple">
              Tentang Kami
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex space-x-4">
        <Button className="bg-eventra-purple text-white hover:bg-eventra-dark-purple">
          Masuk
        </Button>
        <Button className="bg-white text-eventra-purple hover:bg-gray-100">
          Daftar
        </Button>
      </div>
    </header>
  )
}

export default Header
