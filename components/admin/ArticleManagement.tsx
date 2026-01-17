"use client"

import type React from "react"

import { useState } from "react"
import { Plus, Search, Edit, Trash2, Eye, Calendar, User, Tag } from "lucide-react"
import ArticlePreviewModal from "./modals/ArticlePreviewModal"
import EditArticleModal from "./modals/EditArticleModal"

interface Article {
  id: number
  title: string
  content: string
  excerpt: string
  author: string
  publishDate: string
  status: "published" | "draft" | "archived"
  tags: string[]
  views: number
  likes: number
  image: string
}

export default function ArticleManagement() {
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDetailModal, setShowDetailModal] = useState(false)
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  const [articles, setArticles] = useState<Article[]>([
    {
      id: 1,
      title: "Kebersamaan dalam Halal Bihalal IKASUM BATAM 2024",
      content:
        "Acara halal bihalal IKASUM BATAM tahun 2024 telah berlangsung dengan meriah dan penuh kebersamaan. Acara yang dihadiri oleh lebih dari 200 anggota ini menjadi momen yang sangat berharga untuk mempererat tali silaturahmi antar sesama anggota IKASUM BATAM...",
      excerpt: "Acara halal bihalal IKASUM BATAM 2024 berlangsung meriah dengan kehadiran lebih dari 200 anggota.",
      author: "Ahmad Fauzi",
      publishDate: "2024-04-16",
      status: "published",
      tags: ["halal bihalal", "kebersamaan", "silaturahmi"],
      views: 245,
      likes: 32,
      image: "/halal-bihalal-gathering.png",
    },
    {
      id: 2,
      title: "Bakti Sosial Ramadan: Berbagi Kebahagiaan dengan Sesama",
      content:
        "Dalam rangka menyambut bulan suci Ramadan, IKASUM BATAM mengadakan kegiatan bakti sosial berupa pembagian sembako kepada masyarakat kurang mampu di wilayah Kampung Tua Batam. Kegiatan ini merupakan wujud kepedulian sosial anggota IKASUM BATAM...",
      excerpt: "IKASUM BATAM mengadakan bakti sosial pembagian sembako untuk masyarakat kurang mampu.",
      author: "Siti Aminah",
      publishDate: "2024-04-21",
      status: "published",
      tags: ["bakti sosial", "ramadan", "kepedulian"],
      views: 189,
      likes: 28,
      image: "/charity-social-service.png",
    },
    {
      id: 3,
      title: "Seminar Kewirausahaan: Membangun Usaha di Era Digital",
      content:
        'IKASUM BATAM menyelenggarakan seminar kewirausahaan dengan tema "Membangun Usaha di Era Digital". Seminar ini menghadirkan narasumber yang berpengalaman dalam bidang kewirausahaan dan teknologi...',
      excerpt: "Seminar kewirausahaan IKASUM BATAM membahas strategi membangun usaha di era digital.",
      author: "Budi Santoso",
      publishDate: "2024-05-06",
      status: "draft",
      tags: ["seminar", "kewirausahaan", "digital"],
      views: 0,
      likes: 0,
      image: "/business-seminar-entrepreneurship.png",
    },
  ])

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  const handleAddArticle = (articleData: Omit<Article, "id" | "views" | "likes">) => {
    const newArticle = {
      ...articleData,
      id: Math.max(...articles.map((a) => a.id)) + 1,
      views: 0,
      likes: 0,
    }
    setArticles([...articles, newArticle])
    setShowAddModal(false)
  }

  const handleEditArticle = (articleData: Article) => {
    setArticles(articles.map((a) => (a.id === articleData.id ? articleData : a)))
    setShowEditModal(false)
    setSelectedArticle(null)
  }

  const handleDeleteArticle = (id: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus artikel ini?")) {
      setArticles(articles.filter((a) => a.id !== id))
    }
  }

  const handleRowClick = (article: Article) => {
    setSelectedArticle(article)
    setShowDetailModal(true)
  }

  const handleEditClick = (e: React.MouseEvent, article: Article) => {
    e.stopPropagation()
    setSelectedArticle(article)
    setShowEditModal(true)
  }

  const handleDeleteClick = (e: React.MouseEvent, id: number) => {
    e.stopPropagation()
    handleDeleteArticle(id)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-800"
      case "draft":
        return "bg-yellow-100 text-yellow-800"
      case "archived":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "published":
        return "Dipublikasi"
      case "draft":
        return "Draft"
      case "archived":
        return "Diarsipkan"
      default:
        return status
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Kelola Artikel</h1>
          <p className="text-gray-600">Kelola artikel dan berita IKASUM BATAM</p>
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
              placeholder="Cari artikel..."
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
                  Artikel
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Penulis
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tanggal
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Statistik
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredArticles.map((article) => (
                <tr
                  key={article.id}
                  onClick={() => handleRowClick(article)}
                  className="hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-12 h-12 object-cover rounded-lg border border-gray-200 mr-3"
                      />
                      <div>
                        <div className="text-sm font-medium text-gray-900 max-w-xs truncate">{article.title}</div>
                        <div className="text-sm text-gray-500 max-w-xs truncate">{article.excerpt}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 flex items-center">
                      <User size={14} className="mr-1" />
                      {article.author}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {new Date(article.publishDate).toLocaleDateString("id-ID")}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(article.status)}`}
                    >
                      {getStatusText(article.status)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      <div className="flex items-center space-x-3">
                        <span className="flex items-center">
                          <Eye size={14} className="mr-1" />
                          {article.views}
                        </span>
                        <span className="flex items-center">❤️ {article.likes}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={(e) => handleEditClick(e, article)}
                        className="text-blue-600 hover:text-blue-900 p-1"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={(e) => handleDeleteClick(e, article.id)}
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

      {/* Article Detail Modal */}
      {showDetailModal && selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Detail Artikel</h3>
                <button onClick={() => setShowDetailModal(false)} className="text-gray-400 hover:text-gray-600">
                  ×
                </button>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <div>
                  <img
                    src={selectedArticle.image || "/placeholder.svg"}
                    alt={selectedArticle.title}
                    className="w-full h-64 object-cover rounded-lg border border-gray-200"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedArticle.title}</h2>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center">
                      <User size={14} className="mr-1" />
                      {selectedArticle.author}
                    </span>
                    <span className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {new Date(selectedArticle.publishDate).toLocaleDateString("id-ID")}
                    </span>
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(selectedArticle.status)}`}
                    >
                      {getStatusText(selectedArticle.status)}
                    </span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ringkasan</label>
                  <p className="text-sm text-gray-900 bg-gray-50 p-3 rounded">{selectedArticle.excerpt}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Konten Artikel</label>
                  <div className="text-sm text-gray-900 bg-gray-50 p-4 rounded max-h-60 overflow-y-auto">
                    {selectedArticle.content}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                    <div className="flex flex-wrap gap-2">
                      {selectedArticle.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800"
                        >
                          <Tag size={12} className="mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Statistik</label>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between bg-gray-50 p-2 rounded">
                        <span className="text-sm text-gray-600 flex items-center">
                          <Eye size={14} className="mr-1" />
                          Views
                        </span>
                        <span className="text-sm font-medium text-gray-900">{selectedArticle.views}</span>
                      </div>
                      <div className="flex items-center justify-between bg-gray-50 p-2 rounded">
                        <span className="text-sm text-gray-600">❤️ Likes</span>
                        <span className="text-sm font-medium text-gray-900">{selectedArticle.likes}</span>
                      </div>
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

      <ArticlePreviewModal isOpen={showAddModal} onClose={() => setShowAddModal(false)} onAdd={handleAddArticle} />

      {selectedArticle && (
        <EditArticleModal
          isOpen={showEditModal}
          onClose={() => {
            setShowEditModal(false)
            setSelectedArticle(null)
          }}
          article={selectedArticle}
          onEdit={handleEditArticle}
        />
      )}
    </div>
  )
}
