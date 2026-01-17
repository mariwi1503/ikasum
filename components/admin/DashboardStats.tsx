"use client"

import { Calendar, TrendingUp, Users, FileText, ImageIcon, Activity } from "lucide-react"

export default function DashboardStats() {
  const upcomingActivities = [
    {
      id: 1,
      title: "Halal Bihalal 2024",
      date: "2024-04-15",
      time: "19:00",
      location: "Gedung Serbaguna Batam",
    },
    {
      id: 2,
      title: "Bakti Sosial Ramadan",
      date: "2024-04-20",
      time: "08:00",
      location: "Kampung Tua Batam",
    },
    {
      id: 3,
      title: "Seminar Kewirausahaan",
      date: "2024-05-05",
      time: "14:00",
      location: "Hotel Grand Batam",
    },
  ]

  const stats = [
    {
      title: "Total Anggota",
      value: "524",
      change: "+12",
      changeType: "increase",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      title: "Kegiatan Bulan Ini",
      value: "8",
      change: "+3",
      changeType: "increase",
      icon: Calendar,
      color: "bg-green-500",
    },
    {
      title: "Artikel Terbaru",
      value: "15",
      change: "+5",
      changeType: "increase",
      icon: FileText,
      color: "bg-purple-500",
    },
    {
      title: "Foto Galeri",
      value: "156",
      change: "+23",
      changeType: "increase",
      icon: ImageIcon,
      color: "bg-orange-500",
    },
  ]

  const recentActivities = [
    {
      id: 1,
      action: "Anggota baru bergabung",
      user: "Ahmad Fauzi",
      time: "2 jam yang lalu",
      type: "member",
    },
    {
      id: 2,
      action: "Artikel baru dipublikasi",
      user: "Admin",
      time: "5 jam yang lalu",
      type: "article",
    },
    {
      id: 3,
      action: "Kegiatan baru ditambahkan",
      user: "Siti Aminah",
      time: "1 hari yang lalu",
      type: "activity",
    },
    {
      id: 4,
      action: "Foto galeri diupdate",
      user: "Budi Santoso",
      time: "2 hari yang lalu",
      type: "gallery",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Upcoming Activities - Moved to Top */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <Calendar className="mr-2 text-blue-600" size={20} />
            Kegiatan Mendatang
          </h3>
        </div>
        <div className="space-y-3">
          {upcomingActivities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-100"
            >
              <div>
                <h4 className="font-medium text-gray-900">{activity.title}</h4>
                <p className="text-sm text-gray-600">{activity.location}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-blue-600">{activity.date}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="text-green-500 mr-1" size={16} />
                  <span className="text-sm text-green-600 font-medium">{stat.change}</span>
                  <span className="text-sm text-gray-500 ml-1">dari bulan lalu</span>
                </div>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="text-white" size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Aksi Cepat</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
            <Users className="text-blue-600 mb-2" size={24} />
            <span className="text-sm font-medium text-gray-700">Tambah Anggota</span>
          </button>
          <button className="flex flex-col items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
            <Calendar className="text-green-600 mb-2" size={24} />
            <span className="text-sm font-medium text-gray-700">Buat Kegiatan</span>
          </button>
          <button className="flex flex-col items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
            <FileText className="text-purple-600 mb-2" size={24} />
            <span className="text-sm font-medium text-gray-700">Tulis Artikel</span>
          </button>
          <button className="flex flex-col items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
            <ImageIcon className="text-orange-600 mb-2" size={24} />
            <span className="text-sm font-medium text-gray-700">Upload Foto</span>
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <Activity className="mr-2 text-gray-600" size={20} />
            Aktivitas Terbaru
          </h3>
        </div>
        <div className="space-y-3">
          {recentActivities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="flex items-center">
                <div
                  className={`w-2 h-2 rounded-full mr-3 ${
                    activity.type === "member"
                      ? "bg-blue-500"
                      : activity.type === "article"
                        ? "bg-purple-500"
                        : activity.type === "activity"
                          ? "bg-green-500"
                          : "bg-orange-500"
                  }`}
                ></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">oleh {activity.user}</p>
                </div>
              </div>
              <span className="text-xs text-gray-400">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
