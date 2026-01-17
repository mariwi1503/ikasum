"use client"

import type React from "react"

import { useState } from "react"
import { Plus, Search, Edit, Trash2, Calendar, Camera, MapPin } from "lucide-react"
import AddPhotoModal from "./modals/AddPhotoModal"
import EditPhotoModal from "./modals/EditPhotoModal"

interface Photo {
  id: number
  title: string
  description: string
  image: string
  photographer: string
  date: string
  location: string
  category: string
  tags: string[]
}

export default function GalleryManagement() {
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDetailModal, setShowDetailModal] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  const [photos, setPhotos] = useState<Photo[]>([
    {
      id: 1,
      title: "Halal Bihalal IKASUM 2024",
      description: "Momen kebersamaan dalam acara halal bihalal tahunan IKASUM BATAM",
      image: "/halal-bihalal-gathering.png",
      photographer: "Ahmad Fauzi",
      date: "2024-04-15",
      location: "Gedung Serbaguna Batam",
      category: "Kegiatan",
      tags: ["halal bihalal", "kebersamaan", "silaturahmi"],
    },
    {
      id: 2,
      title: "Bakti Sosial Ramadan",
      description: "Kegiatan pembagian sembako kepada masyarakat kurang mampu",
      image: "/charity-social-service.png",
      photographer: "Siti Aminah",
      date: "2024-04-20",
      location: "Kampung Tua Batam",
      category: "Sosial",
      tags: ["bakti sosial", "ramadan", "sembako"],
    },
    {
      id: 3,
      title: "Festival Budaya Sumbawa",
      description: "Pertunjukan budaya tradisional Sumbawa di Batam",
      image: "/cultural-festival-traditional.png",
      photographer: "Budi Santoso",
      date: "2024-03-10",
      location: "Taman Budaya Batam",
      category: "Budaya",
      tags: ["budaya", "tradisional", "sumbawa", "festival"],
    },
    {
      id: 4,
      title: "Seminar Kewirausahaan",
      description: "Seminar pengembangan usaha untuk anggota IKASUM",
      image: "/business-seminar-entrepreneurship.png",
      photographer: "Dewi Sartika",
      date: "2024-05-05",
      location: "Hotel Grand Batam",
      category: "Edukasi",
      tags: ["seminar", "kewirausahaan", "bisnis"],
    },
  ])

  const filteredPhotos = photos.filter(
    (photo) =>
      photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      photo.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      photo.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  const handleAddPhoto = (photoData: Omit<Photo, "id">) => {
    const newPhoto = {
      ...photoData,
      id: Math.max(...photos.map((p) => p.id)) + 1,
    }
    setPhotos([...photos, newPhoto])
    setShowAddModal(false)
  }

  const handleEditPhoto = (photoData: Photo) => {
    setPhotos(photos.map((p) => (p.id === photoData.id ? photoData : p)))
    setShowEditModal(false)
    setSelectedPhoto(null)
  }

  const handleDeletePhoto = (id: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus foto ini?")) {
      setPhotos(photos.filter((p) => p.id !== id))
    }
  }

  const handleRowClick = (photo: Photo) => {
    setSelectedPhoto(photo)
    setShowDetailModal(true)
  }

  const handleEditClick = (e: React.MouseEvent, photo: Photo) => {
    e.stopPropagation()
    setSelectedPhoto(photo)
    setShowEditModal(true)
  }

  const handleDeleteClick = (e: React.MouseEvent, id: number) => {
    e.stopPropagation()
    handleDeletePhoto(id)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Kelola Galeri</h1>
          <p className="text-gray-600">Kelola foto dan gambar galeri IKASUM BATAM</p>
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
              placeholder="Cari foto..."
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Foto</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Judul
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Kategori
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fotografer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tanggal
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPhotos.map((photo) => (
                <tr
                  key={photo.id}
                  onClick={() => handleRowClick(photo)}
                  className="hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={photo.image || "/placeholder.svg"}
                      alt={photo.title}
                      className="w-16 h-16 object-cover rounded-lg border border-gray-200"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{photo.title}</div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <MapPin size={12} className="mr-1" />
                      {photo.location}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      {photo.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 flex items-center">
                      <Camera size={14} className="mr-1" />
                      {photo.photographer}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {new Date(photo.date).toLocaleDateString("id-ID")}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={(e) => handleEditClick(e, photo)}
                        className="text-blue-600 hover:text-blue-900 p-1"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={(e) => handleDeleteClick(e, photo.id)}
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

      {/* Photo Detail Modal */}
      {showDetailModal && selectedPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Detail Foto</h3>
                <button onClick={() => setShowDetailModal(false)} className="text-gray-400 hover:text-gray-600">
                  ×
                </button>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <img
                    src={selectedPhoto.image || "/placeholder.svg"}
                    alt={selectedPhoto.title}
                    className="w-full h-80 object-cover rounded-lg border border-gray-200"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Judul Foto</label>
                    <p className="text-lg font-semibold text-gray-900">{selectedPhoto.title}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
                    <p className="text-sm text-gray-900 bg-gray-50 p-3 rounded">{selectedPhoto.description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
                      <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{selectedPhoto.category}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Fotografer</label>
                      <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{selectedPhoto.photographer}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal</label>
                      <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">
                        {new Date(selectedPhoto.date).toLocaleDateString("id-ID")}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Lokasi</label>
                      <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{selectedPhoto.location}</p>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
                    <div className="flex flex-wrap gap-2">
                      {selectedPhoto.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
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

      <AddPhotoModal isOpen={showAddModal} onClose={() => setShowAddModal(false)} onAdd={handleAddPhoto} />

      {selectedPhoto && (
        <EditPhotoModal
          isOpen={showEditModal}
          onClose={() => {
            setShowEditModal(false)
            setSelectedPhoto(null)
          }}
          photo={selectedPhoto}
          onEdit={handleEditPhoto}
        />
      )}
    </div>
  )
}
