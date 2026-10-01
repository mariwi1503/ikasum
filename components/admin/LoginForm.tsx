'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Eye, EyeOff, Lock, User, AlertCircle } from 'lucide-react'

export default function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  // Demo credentials - dalam implementasi nyata, ini harus dari database
  const adminCredentials = [
    { username: 'admin', password: 'admin123', role: 'Super Admin', name: 'Administrator' },
    { username: 'ketua', password: 'ketua123', role: 'Ketua Umum', name: 'H. Ahmad Fauzi' },
    { username: 'sekretaris', password: 'sekretaris123', role: 'Sekretaris', name: 'Muhammad Rizki' },
    { username: 'bendahara', password: 'bendahara123', role: 'Bendahara', name: 'Fatimah Zahra' }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Simulasi delay login
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Validasi credentials
    const user = adminCredentials.find(
      cred => cred.username === formData.username && cred.password === formData.password
    )

    if (user) {
      // Simpan session (dalam implementasi nyata gunakan JWT atau session yang aman)
      localStorage.setItem('adminUser', JSON.stringify({
        username: user.username,
        role: user.role,
        name: user.name,
        loginTime: new Date().toISOString()
      }))
      
      // Redirect ke dashboard
      router.push('/admin')
    } else {
      setError('Username atau password salah!')
    }

    setIsLoading(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setError('') // Clear error saat user mengetik
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <Image
            src="/images/ikasum-logo.png"
            alt="Logo IKASUM BATAM"
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Login Admin</h1>
        <p className="text-gray-600">IKASUM BATAM Dashboard</p>
      </div>

      {/* Demo Credentials Info */}
      {/* <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <h3 className="font-semibold text-blue-900 mb-2">Demo Login Credentials:</h3>
        <div className="text-sm text-blue-800 space-y-1">
          <div><strong>Super Admin:</strong> admin / admin123</div>
          <div><strong>Ketua:</strong> ketua / ketua123</div>
          <div><strong>Sekretaris:</strong> sekretaris / sekretaris123</div>
          <div><strong>Bendahara:</strong> bendahara / bendahara123</div>
        </div>
      </div> */}

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center">
          <AlertCircle className="text-red-600 mr-2" size={20} />
          <span className="text-red-800">{error}</span>
        </div>
      )}

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
            Username
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              id="username"
              name="username"
              required
              value={formData.username}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
              placeholder="Masukkan username"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
              placeholder="Masukkan password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Memproses...
            </>
          ) : (
            'Masuk Dashboard'
          )}
        </button>
      </form>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600">
          Hanya untuk pengurus IKASUM BATAM yang berwenang
        </p>
        <button
          onClick={() => router.push('/')}
          className="text-red-600 hover:text-red-700 text-sm font-medium mt-2"
        >
          ← Kembali ke Beranda
        </button>
      </div>
    </div>
  )
}
