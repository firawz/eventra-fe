import React, { ReactElement, useState } from 'react'
import { Link } from 'react-router-dom'
import Input from './components/Input' // Import the new Input component

function RegisterPage(): ReactElement {
  const [nik, setNik] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [gender, setGender] = useState('')
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle registration logic here
    console.log({
      nik,
      name,
      email,
      phone,
      password,
      confirmPassword,
      gender,
      agreedToTerms
    })
  }

  const passwordRequirements = [
    { text: 'Minimal 8 Karakter', met: password.length >= 8 },
    { text: 'Mengandung huruf besar', met: /[A-Z]/.test(password) },
    { text: 'Mengandung angka', met: /[0-9]/.test(password) },
    {
      text: 'Mengandung karakter khusus',
      met: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    }
  ]

  return (
    <>
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-4xl">
        <div className="bg-purple-700 text-white p-6 rounded-t-lg -mx-8 -mt-8 mb-8">
          <h2 className="text-3xl font-bold text-center">Buat Akun Baru</h2>
          <p className="text-center text-purple-200 mt-2">
            Daftar sekarang untuk mengakses semua fitur EventTech Eventra
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6"
        >
          {/* NIK */}
          <Input
            label="NIK"
            id="nik"
            type="text"
            value={nik}
            onChange={(e) => setNik(e.target.value)}
            required
          />

          {/* Nama Sesuai NIK */}
          <Input
            label="Nama Sesuai NIK"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          {/* Jenis Kelamin */}
          <div className="md:col-span-2">
            <label className="block text-lg font-bold text-gray-800 mb-2">
              Jenis Kelamin
            </label>
            <div className="flex space-x-4">
              <button
                type="button"
                className={`px-6 py-3 rounded-lg border ${
                  gender === 'Laki-Laki'
                    ? 'bg-purple-600 text-white border-purple-600'
                    : 'bg-gray-100 text-gray-700 border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                onClick={() => setGender('Laki-Laki')}
              >
                Laki - Laki
              </button>
              <button
                type="button"
                className={`px-6 py-3 rounded-lg border ${
                  gender === 'Perempuan'
                    ? 'bg-purple-600 text-white border-purple-600'
                    : 'bg-gray-100 text-gray-700 border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                onClick={() => setGender('Perempuan')}
              >
                Perempuan
              </button>
            </div>
          </div>

          {/* Email */}
          <Input
            label="Email"
            id="email"
            type="email"
            placeholder="Masukkan alamat email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Nomor Telepon */}
          <Input
            label="Nomor Telepon"
            id="phone"
            type="tel"
            placeholder="Contoh : 08123781263"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            prefix="+62"
          />

          {/* Password */}
          <Input
            label="Password"
            id="password"
            type="password"
            placeholder="Masukkan alamat email"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Konfirmasi Password */}
          <div className="relative">
            <Input
              label="Konfirmasi Password"
              id="confirmPassword"
              type="password"
              placeholder="Contoh : 8123781263"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {password && (
              <div className="absolute right-0 top-0 mt-12 mr-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg shadow-lg">
                <p className="font-bold mb-2">Password harus memenuhi :</p>
                <ul className="list-disc list-inside">
                  {passwordRequirements.map((req, index) => (
                    <li
                      key={index}
                      className={req.met ? 'text-green-600' : 'text-red-700'}
                    >
                      {req.text}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Terms and Conditions */}
          <div className="md:col-span-2 flex items-center mt-4">
            <input
              type="checkbox"
              id="agreedToTerms"
              className="h-5 w-5 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              required
            />
            <label htmlFor="agreedToTerms" className="ml-3 text-gray-700">
              Saya menyetujui{' '}
              <Link to="/terms" className="text-purple-600 hover:underline">
                Syarat & Ketentuan
              </Link>{' '}
              dan{' '}
              <Link to="/privacy" className="text-purple-600 hover:underline">
                Kebijakan Privasi
              </Link>{' '}
              EvenTech Eventra
            </label>
          </div>

          {/* Daftar Sekarang Button */}
          <div className="md:col-span-2 mt-6">
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg text-xl font-semibold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Daftar Sekarang
            </button>
          </div>
        </form>

        {/* Sudah punya akun? Masuk ke Akun */}
        <div className="text-center mt-6">
          <p className="text-gray-600">Sudah punya akun?</p>
          <Link
            to="/login"
            className="inline-block mt-2 px-8 py-3 border border-purple-600 text-purple-600 rounded-lg text-lg font-semibold hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Masuk ke Akun
          </Link>
        </div>
      </div>
    </>
  )
}

export default RegisterPage
