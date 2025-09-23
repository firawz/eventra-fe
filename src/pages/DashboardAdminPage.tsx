import React from 'react'
import Layout from '../components/Layout' // Assuming a Layout component exists for consistent header/footer
import { Link } from 'react-router-dom' // Assuming react-router-dom is used for navigation

const DashboardAdminPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500 mb-4">Home / Dashboard</div>

        {/* Dashboard Admin Title */}
        <h1 className="text-3xl font-bold mb-6">Dashboard Admin</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Card 1: Tiket Terjual */}
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              {/* Placeholder for icon */}
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold">1.0000</p>
              <p className="text-gray-500">Tiket Terjual</p>
            </div>
          </div>

          {/* Card 2: Total Pendapatan */}
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              {/* Placeholder for icon */}
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 12v-1m-9-6h.02M19 12h.02M4 12a8 8 0 1116 0 8 8 0 01-16 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold">Rp 1000</p>
              <p className="text-gray-500">Total Pendapatan</p>
            </div>
          </div>

          {/* Card 3: Pengguna Terdaftar */}
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              {/* Placeholder for icon */}
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.146-1.283-.423-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.146-1.283.423-1.857m0 0a2.502 2.502 0 01-2.5-2.5V9c0-.653.146-1.283.423-1.857m0 0a2.502 2.502 0 012.5-2.5h10a2.502 2.502 0 012.5 2.5v4.5c0 .653-.146 1.283-.423 1.857m0 0a2.502 2.502 0 01-2.5 2.5H7.423zM12 12h.01"
                />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold">10000</p>
              <p className="text-gray-500">Pengguna Terdaftar</p>
            </div>
          </div>

          {/* Card 4: Event Aktif */}
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              {/* Placeholder for icon */}
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold">10000</p>
              <p className="text-gray-500">Event Aktif</p>
            </div>
          </div>
        </div>

        {/* Event List Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-end mb-4">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg flex items-center space-x-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <span>Event</span>
            </button>
          </div>

          {/* Event Table Header */}
          <div className="grid grid-cols-5 gap-4 font-semibold text-gray-600 border-b pb-2 mb-4">
            <div className="col-span-1"></div> {/* Placeholder for image */}
            <div className="col-span-1">Judul Event</div>
            <div className="col-span-1">Tanggal Event</div>
            <div className="col-span-1">Sisa Tiket</div>
            <div className="col-span-1"></div>{' '}
            {/* Placeholder for Detail button */}
          </div>

          {/* Event Item 1 */}
          <div className="grid grid-cols-5 gap-4 items-center py-3 border-b">
            <div className="col-span-1">
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                {/* Placeholder for event image */}
                <svg
                  className="w-8 h-8 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <div className="col-span-1">Event 001</div>
            <div className="col-span-1">1 Oktober 2025</div>
            <div className="col-span-1">200</div>
            <div className="col-span-1 text-right">
              <Link
                to="/event/001"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg"
              >
                Detail
              </Link>
            </div>
          </div>

          {/* Event Item 2 */}
          <div className="grid grid-cols-5 gap-4 items-center py-3">
            <div className="col-span-1">
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                {/* Placeholder for event image */}
                <svg
                  className="w-8 h-8 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <div className="col-span-1">Event 002</div>
            <div className="col-span-1">5 Oktober 2025</div>
            <div className="col-span-1 text-red-500 font-bold">HABIS!</div>
            <div className="col-span-1 text-right">
              <Link
                to="/event/002"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg"
              >
                Detail
              </Link>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-6">
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                1
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                2
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                3
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                4
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                5
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardAdminPage
