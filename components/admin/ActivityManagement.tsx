"use client"

import type React from "react"

import { useState } from "react"
import { Plus, Search, Edit, Trash2, Calendar, MapPin, Users } from "lucide-react"
import AddActivityModal from "./modals/AddActivityModal"
import EditActivityModal from "./modals/EditActivityModal"

interface Activity {
  id: number
  title: string
  description: string
  date: string
  time: string
  location: string
  organizer: string
  budget: number
  participants: number
  status: "upcoming" | "ongoing" | "completed" | "cancelled"
  image: string
}

export default function ActivityManagement() {
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDetailModal, setShowDetailModal] = useState(false)
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  const [activities, setActivities] = useState<Activity[]>([
    {
      id: 1,
      title: "Halal Bihalal 2024",
      description: "Acara silaturahmi dan halal bihalal untuk mempererat tali persaudaraan antar anggota IKASUM BATAM.",
      date: "2024-04-15",
      time: "19:00",
      location: "Gedung Serbaguna Batam",
      organizer: "Panitia Halal Bihalal",
      budget: 15000000,
      participants: 200,
      status: "upcoming",
      image: "/halal-bihalal-gathering.png",
    },
    {
      id: 2,
      title: "Bakti Sosial Ramadan",
      description: "Kegiatan bakti sosial berupa pembagian sembako kepada masyarakat kurang mampu.",
      date: "2024-04-20",
      time: "08:00",
      location: "Kampung Tua Batam",
      organizer: "Divisi Sosial",
      budget: 8000000,
      participants: 50,
      status: "completed",
      image: "/charity-social-service.png",
    },
    {
      id: 3,
      title: "Seminar Kewirausahaan",
      description: "Seminar tentang kewirausahaan dan pengembangan usaha untuk anggota IKASUM.",
      date: "2024-05-05",
      time: "14:00",
      location: "Hotel Grand Batam",
      organizer: "Divisi Ekonomi",
      budget: 12000000,
      participants: 100,
      status: "upcoming",
      image: "/business-seminar-entrepreneurship.png",
    },
  ])

  const filteredActivities = activities.filter(
    (activity) =>
      activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.location.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleAddActivity = (activityData: Omit<Activity, "id">) => {
    const newActivity = {
      ...activityData,
      id: Math.max(...activities.map((a) => a.id)) + 1,
    }
    setActivities([...activities, newActivity])
    setShowAddModal(false)
  }

  const handleEditActivity = (activityData: Activity) => {
    setActivities(activities.map((a) => (a.id === activityData.id ? activityData : a)))
    setShowEditModal(false)
    setSelectedActivity(null)
  }

  const handleDeleteActivity = (id: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus kegiatan ini?")) {
      setActivities(activities.filter((a) => a.id !== id))
    }
  }

  const handleRowClick = (activity: Activity) => {
    setSelectedActivity(activity)
    setShowDetailModal(true)
  }

  const handleEditClick = (e: React.MouseEvent, activity: Activity) => {
    e.stopPropagation()
    setSelectedActivity(activity)
    setShowEditModal(true)
  }

  const handleDeleteClick = (e: React.MouseEvent, id: number) => {
    e.stopPropagation()
    handleDeleteActivity(id)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-100 text-blue-800"
      case "ongoing":
        return "bg-yellow-100 text-yellow-800"
      case "completed":
        return "bg-green-100 text-green-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "upcoming":
        return "Akan Datang"
      case "ongoing":
        return "Berlangsung"
      case "completed":
        return "Selesai"
      case "cancelled":
        return "Dibatalkan"
      default:
        return status
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Kelola Kegiatan</h1>
          <p className="text-gray-600">Kelola kegiatan dan acara IKASUM BATAM</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center text-sm"
        >
          <Plus size={16} className="mr-2" />
          Tambah Data
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Cari kegiatan..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Kegiatan
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tanggal & Waktu
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Lokasi
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Peserta
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredActivities.map((activity) => (
                <tr
                  key={activity.id}
                  onClick={() => handleRowClick(activity)}
                  className="hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{activity.title}</div>
                    <div className="text-sm text-gray-500">{activity.organizer}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {new Date(activity.date).toLocaleDateString("id-ID")}
                    </div>
                    <div className="text-sm text-gray-500">{activity.time}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 flex items-center">
                      <MapPin size={14} className="mr-1" />
                      {activity.location}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 flex items-center">
                      <Users size={14} className="mr-1" />
                      {activity.participants} orang
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(activity.status)}`}
                    >
                      {getStatusText(activity.status)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={(e) => handleEditClick(e, activity)}
                        className="text-blue-600 hover:text-blue-900 p-1"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={(e) => handleDeleteClick(e, activity.id)}
                        className="text-red-600 hover:text-red-900 p-1"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Activity Detail Modal */}
      {showDetailModal && selectedActivity && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Detail Kegiatan</h3>
                <button onClick={() => setShowDetailModal(false)} className="text-gray-400 hover:text-gray-600">
                  ×
                </button>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nama Kegiatan</label>
                    <p className="text-lg font-semibold text-gray-900">{selectedActivity.title}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
                    <p className="text-sm text-gray-900 bg-gray-50 p-3 rounded">{selectedActivity.description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal</label>
                      <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">
                        {new Date(selectedActivity.date).toLocaleDateString("id-ID")}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Waktu</label>
                      <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{selectedActivity.time}</p>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Lokasi</label>
                    <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{selectedActivity.location}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Penyelenggara</label>
                      <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{selectedActivity.organizer}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(selectedActivity.status)}`}
                      >
                        {getStatusText(selectedActivity.status)}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Anggaran</label>
                      <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">
                        Rp {selectedActivity.budget.toLocaleString("id-ID")}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Jumlah Peserta</label>
                      <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">
                        {selectedActivity.participants} orang
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Gambar Kegiatan</label>
                  <img
                    src={selectedActivity.image || "/placeholder.svg"}
                    alt={selectedActivity.title}
                    className="w-full h-64 object-cover rounded-lg border border-gray-200"
                  />
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
              <button
                onClick={() => setShowDetailModal(false)}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Tutup
              </button>
              <button
                onClick={() => {
                  setShowDetailModal(false)
                  setShowEditModal(true)
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      )}

      <AddActivityModal isOpen={showAddModal} onClose={() => setShowAddModal(false)} onAdd={handleAddActivity} />

      {selectedActivity && (
        <EditActivityModal
          isOpen={showEditModal}
          onClose={() => {
            setShowEditModal(false)
            setSelectedActivity(null)
          }}
          activity={selectedActivity}
          onEdit={handleEditActivity}
        />
      )}
    </div>
  )
}
