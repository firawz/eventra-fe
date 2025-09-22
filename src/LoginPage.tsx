import React from 'react'
import Button from './components/Button'

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-purple-100 flex flex-col">
      {/* Header */}
      <header className="bg-purple-700 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/src/logo.svg"
            alt="EventTech Eventra Logo"
            className="h-8 w-8 mr-2"
          />
          <span className="text-xl font-bold">EventTech Eventra</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:underline">
                Event
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Kategori
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Tentang Kami
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-8">
        <div className="bg-white rounded-lg shadow-lg flex max-w-4xl w-full">
          {/* Left Section */}
          <div className="w-1/2 p-8 bg-purple-50 rounded-l-lg flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Selamat Datang Kembali di EventraTech Eventra
            </h2>
            <p className="text-gray-600 mb-6">
              Masuk ke akun Anda untuk mengelola event, pembelian tiket, dan
              pengalaman personal lainnya.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Kelola tiket dan pembelian Anda
              </li>
              <li className="flex items-center text-gray-700">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Notifikasi untuk event favorit
              </li>
              <li className="flex items-center text-gray-700">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Pembayaran yang aman dan cepat
              </li>
            </ul>
          </div>

          {/* Right Section (Login Form) */}
          <div className="w-1/2 p-8 bg-purple-200 rounded-r-lg">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              Masuk ke Akun
            </h2>
            <p className="text-gray-600 mb-6">
              Isi detail login Anda untuk mengakses akun EventTech Eventra
            </p>

            <form>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email atau Username
                </label>
                <input
                  type="text"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Masukkan email atau username"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Masukkan password"
                />
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center">
                    <input type="checkbox" id="remember" className="mr-2" />
                    <label htmlFor="remember" className="text-gray-700">
                      ingat saya
                    </label>
                  </div>
                  <a href="#" className="text-purple-600 hover:underline">
                    Lupa Password?
                  </a>
                </div>
              </div>
              <Button type="submit" variant="primary" className="w-full mb-4">
                Masuk
              </Button>
            </form>
            <div className="text-center text-gray-600 mb-4">
              Belum punya akun?
            </div>
            <Button type="button" variant="outline" className="w-full">
              Daftar Sekarang
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default LoginPage
