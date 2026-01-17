'use client'

import { useEffect, useState } from 'react'
import { Users, UserCheck, MapPin, Calendar } from 'lucide-react'

export default function Statistics() {
  const [counts, setCounts] = useState({
    totalMembers: 0,
    permanentResidents: 0,
    temporaryResidents: 0,
    activities: 0
  })

  useEffect(() => {
    // Simulate counting animation
    const timer = setTimeout(() => {
      setCounts({
        totalMembers: 523,
        permanentResidents: 312,
        temporaryResidents: 211,
        activities: 47
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const stats = [
    {
      icon: Users,
      label: 'Total Anggota',
      value: counts.totalMembers,
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: UserCheck,
      label: 'Tinggal Permanen',
      value: counts.permanentResidents,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: MapPin,
      label: 'KTP Sumbawa',
      value: counts.temporaryResidents,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Calendar,
      label: 'Kegiatan 2024',
      value: counts.activities,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Statistik Anggota</h2>
          <p className="text-xl text-gray-600">
            Data terkini mengenai keanggotaan IKASUM BATAM
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} p-8 rounded-2xl text-center hover:scale-105 transition-transform duration-300 shadow-lg`}
            >
              <div className={`${stat.color} mb-4 flex justify-center`}>
                <stat.icon size={48} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value.toLocaleString()}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Distribusi Anggota Berdasarkan Status
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Tinggal Permanen di Batam</span>
                <span className="font-bold text-green-600">312 orang (59.7%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-green-600 h-3 rounded-full" style={{ width: '59.7%' }}></div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Masih KTP Sumbawa</span>
                <span className="font-bold text-yellow-600">211 orang (40.3%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-yellow-600 h-3 rounded-full" style={{ width: '40.3%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
