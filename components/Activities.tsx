"use client"
import Image from "next/image"
import { Calendar, MapPin, Users, Clock } from "lucide-react"

export default function Activities() {
  const activities = [
    {
      id: 1,
      title: "Halal Bihalal 2024",
      description: "Acara silaturahmi dan halal bihalal bersama seluruh anggota IKASUM BATAM",
      date: "2024-05-15",
      time: "19:00 WIB",
      location: "Hotel Grand Batam",
      participants: 150,
      image: "/halal-bihalal-gathering.png",
      category: "Keagamaan",
    },
    {
      id: 2,
      title: "Bakti Sosial Ramadan",
      description: "Kegiatan berbagi takjil dan santunan kepada masyarakat kurang mampu",
      date: "2024-04-10",
      time: "16:00 WIB",
      location: "Masjid Al-Ikhlas Batam",
      participants: 80,
      image: "/charity-social-service.png",
      category: "Sosial",
    },
    {
      id: 3,
      title: "Festival Budaya Sumbawa",
      description: "Pertunjukan seni dan budaya tradisional Sumbawa di Batam",
      date: "2024-08-17",
      time: "15:00 WIB",
      location: "Taman Budaya Batam",
      participants: 200,
      image: "/cultural-festival-traditional.png",
      category: "Budaya",
    },
    {
      id: 4,
      title: "Seminar Kewirausahaan",
      description: "Workshop dan seminar tentang peluang bisnis dan kewirausahaan",
      date: "2024-09-20",
      time: "09:00 WIB",
      location: "Universitas Batam",
      participants: 120,
      image: "/business-seminar-entrepreneurship.png",
      category: "Edukasi",
    },
  ]

  const viewAll = () => {
    alert("Navigasi ke halaman kegiatan lengkap")
  }

  return (
    <section id="activities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Kegiatan Terbaru</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Berbagai kegiatan dan program yang telah dan akan dilaksanakan oleh IKASUM BATAM
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              /* SOLUSI: index >= 2 akan disembunyikan di mobile (hidden) 
                 tapi ditampilkan kembali di desktop (md:block)
              */
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${
                index >= 2 ? "hidden md:block" : "block"
              }`}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {activity.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {activity.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{activity.description}</p>

                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2 text-red-600" />
                    <span>
                      {new Date(activity.date).toLocaleDateString("id-ID", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2 text-red-600" />
                    <span>{activity.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2 text-red-600" />
                    <span>{activity.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={16} className="mr-2 text-red-600" />
                    <span>{activity.participants} peserta</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={viewAll}
            className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-full font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg"
          >
            Lihat Semua Kegiatan
          </button>
        </div>
      </div>
    </section>
  )
}