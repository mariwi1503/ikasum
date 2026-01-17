"use client"

import { useState } from "react"
import { Save, Plus, Edit, Trash2, User, Building, Globe, Phone, Mail, MapPin } from "lucide-react"

export default function SettingsManagement() {
  const [activeTab, setActiveTab] = useState("general")
  const [showAddBoardModal, setShowAddBoardModal] = useState(false)
  const [showEditBoardModal, setShowEditBoardModal] = useState(false)
  const [selectedBoard, setSelectedBoard] = useState<any>(null)

  // General Settings
  const [generalSettings, setGeneralSettings] = useState({
    siteName: "IKASUM BATAM",
    tagline: "Ikatan Keluarga Sumbawa Batam",
    vision: "Menjadi organisasi yang solid, mandiri, dan bermanfaat bagi masyarakat Sumbawa di Batam",
    mission: "Mempererat tali silaturahmi, mengembangkan potensi anggota, dan berkontribusi positif bagi masyarakat",
    values: "Persaudaraan, Gotong Royong, Integritas, Profesionalisme",
    history:
      "IKASUM BATAM didirikan pada tahun 2008 sebagai wadah silaturahmi putra-putri Sumbawa yang berdomisili di Batam...",
  })

  // Board Members
  const [boardMembers, setBoardMembers] = useState([
    {
      id: 1,
      name: "H. Ahmad Fauzi, S.E., M.M.",
      position: "Ketua Umum",
      image: "/placeholder.svg?height=150&width=150",
      description: "Pengusaha sukses dengan pengalaman 20+ tahun",
    },
    {
      id: 2,
      name: "Hj. Siti Nurhaliza, S.Pd.",
      position: "Wakil Ketua",
      image: "/placeholder.svg?height=150&width=150",
      description: "Pendidik berpengalaman dan aktivis sosial",
    },
    {
      id: 3,
      name: "Muhammad Rizki, S.T.",
      position: "Sekretaris",
      image: "/placeholder.svg?height=150&width=150",
      description: "Profesional IT dengan dedikasi tinggi",
    },
    {
      id: 4,
      name: "Fatimah Zahra, S.E.",
      position: "Bendahara",
      image: "/placeholder.svg?height=150&width=150",
      description: "Ahli keuangan dengan integritas tinggi",
    },
  ])

  // Organization Structure
  const [orgStructure, setOrgStructure] = useState([
    { id: 1, name: "H. Ahmad Fauzi, S.E., M.M.", position: "Ketua Umum" },
    { id: 2, name: "Hj. Siti Nurhaliza, S.Pd.", position: "Wakil Ketua" },
    { id: 3, name: "Muhammad Rizki, S.T.", position: "Sekretaris" },
    { id: 4, name: "Fatimah Zahra, S.E.", position: "Bendahara" },
    { id: 5, name: "Dr. Abdullah Rahman", position: "Ketua Bidang Pendidikan" },
    { id: 6, name: "Ir. Sari Dewi", position: "Ketua Bidang Ekonomi" },
    { id: 7, name: "H. Yusuf Hakim", position: "Ketua Bidang Sosial" },
    { id: 8, name: "Dra. Aminah Sari", position: "Ketua Bidang Budaya" },
  ])

  // Contact Settings
  const [contactSettings, setContactSettings] = useState({
    phone: "+62 778 123456",
    email: "info@ikasumbatam.org",
    address: "Jl. Raya Batam Center No. 123, Batam 29432",
    website: "www.ikasumbatam.org",
    facebook: "IKASUM Batam Official",
    instagram: "@ikasumbatam",
    whatsapp: "+62 812 3456 7890",
  })

  const handleSaveGeneral = () => {
    alert("Pengaturan umum berhasil disimpan!")
  }

  const handleSaveContact = () => {
    alert("Informasi kontak berhasil disimpan!")
  }

  const handleAddBoardMember = (memberData: any) => {
    const newMember = {
      id: boardMembers.length + 1,
      ...memberData,
    }
    setBoardMembers([...boardMembers, newMember])
    setShowAddBoardModal(false)
  }

  const handleEditBoardMember = (memberData: any) => {
    setBoardMembers(
      boardMembers.map((member) => (member.id === selectedBoard.id ? { ...member, ...memberData } : member)),
    )
    setShowEditBoardModal(false)
    setSelectedBoard(null)
  }

  const handleDeleteBoardMember = (id: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus anggota pengurus ini?")) {
      setBoardMembers(boardMembers.filter((member) => member.id !== id))
    }
  }

  const handleAddOrgMember = () => {
    const name = prompt("Nama:")
    const position = prompt("Jabatan:")
    if (name && position) {
      const newMember = {
        id: orgStructure.length + 1,
        name,
        position,
      }
      setOrgStructure([...orgStructure, newMember])
    }
  }

  const handleDeleteOrgMember = (id: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus dari struktur organisasi?")) {
      setOrgStructure(orgStructure.filter((member) => member.id !== id))
    }
  }

  const tabs = [
    { id: "general", label: "Umum", icon: Globe },
    { id: "board", label: "Pengurus", icon: User },
    { id: "structure", label: "Struktur Organisasi", icon: Building },
    { id: "contact", label: "Kontak", icon: Phone },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Pengaturan Website</h2>
        <p className="text-gray-600">Kelola informasi dan pengaturan website IKASUM BATAM</p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                activeTab === tab.id
                  ? "border-red-500 text-red-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <tab.icon size={16} />
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* General Settings */}
      {activeTab === "general" && (
        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
          <h3 className="text-lg font-semibold text-gray-900">Pengaturan Umum</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nama Situs</label>
              <input
                type="text"
                value={generalSettings.siteName}
                onChange={(e) => setGeneralSettings({ ...generalSettings, siteName: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tagline</label>
              <input
                type="text"
                value={generalSettings.tagline}
                onChange={(e) => setGeneralSettings({ ...generalSettings, tagline: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Visi</label>
            <textarea
              value={generalSettings.vision}
              onChange={(e) => setGeneralSettings({ ...generalSettings, vision: e.target.value })}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Misi</label>
            <textarea
              value={generalSettings.mission}
              onChange={(e) => setGeneralSettings({ ...generalSettings, mission: e.target.value })}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nilai-nilai</label>
            <input
              type="text"
              value={generalSettings.values}
              onChange={(e) => setGeneralSettings({ ...generalSettings, values: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sejarah</label>
            <textarea
              value={generalSettings.history}
              onChange={(e) => setGeneralSettings({ ...generalSettings, history: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none"
            />
          </div>

          <button
            onClick={handleSaveGeneral}
            className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 flex items-center space-x-2"
          >
            <Save size={20} />
            <span>Simpan Pengaturan</span>
          </button>
        </div>
      )}

      {/* Board Members */}
      {activeTab === "board" && (
        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-900">Pengurus Organisasi</h3>
            <button
              onClick={() => setShowAddBoardModal(true)}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center space-x-2"
            >
              <Plus size={16} />
              <span>Tambah Pengurus</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardMembers.map((member) => (
              <div
                key={member.id}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 text-center relative group"
              >
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex space-x-2">
                  <button
                    onClick={() => {
                      setSelectedBoard(member)
                      setShowEditBoardModal(true)
                    }}
                    className="bg-white/80 text-blue-600 p-2 rounded-full hover:bg-white transition-colors"
                  >
                    <Edit size={14} />
                  </button>
                  <button
                    onClick={() => handleDeleteBoardMember(member.id)}
                    className="bg-white/80 text-red-600 p-2 rounded-full hover:bg-white transition-colors"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>

                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-bold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-red-600 font-semibold mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Organization Structure */}
      {activeTab === "structure" && (
        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-900">Struktur Organisasi</h3>
            <button
              onClick={handleAddOrgMember}
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 flex items-center space-x-2"
            >
              <Plus size={16} />
              <span>Tambah Anggota</span>
            </button>
          </div>

          <div className="space-y-3">
            {orgStructure.map((member) => (
              <div
                key={member.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div>
                  <h4 className="font-semibold text-gray-900">{member.name}</h4>
                  <p className="text-gray-600">{member.position}</p>
                </div>
                <button
                  onClick={() => handleDeleteOrgMember(member.id)}
                  className="text-red-600 hover:text-red-800 transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contact Settings */}
      {activeTab === "contact" && (
        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
          <h3 className="text-lg font-semibold text-gray-900">Informasi Kontak</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2">
                <Phone size={16} />
                <span>Telepon</span>
              </label>
              <input
                type="text"
                value={contactSettings.phone}
                onChange={(e) => setContactSettings({ ...contactSettings, phone: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2">
                <Mail size={16} />
                <span>Email</span>
              </label>
              <input
                type="email"
                value={contactSettings.email}
                onChange={(e) => setContactSettings({ ...contactSettings, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2">
              <MapPin size={16} />
              <span>Alamat</span>
            </label>
            <textarea
              value={contactSettings.address}
              onChange={(e) => setContactSettings({ ...contactSettings, address: e.target.value })}
              rows={2}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
              <input
                type="text"
                value={contactSettings.website}
                onChange={(e) => setContactSettings({ ...contactSettings, website: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp</label>
              <input
                type="text"
                value={contactSettings.whatsapp}
                onChange={(e) => setContactSettings({ ...contactSettings, whatsapp: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Facebook</label>
              <input
                type="text"
                value={contactSettings.facebook}
                onChange={(e) => setContactSettings({ ...contactSettings, facebook: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Instagram</label>
              <input
                type="text"
                value={contactSettings.instagram}
                onChange={(e) => setContactSettings({ ...contactSettings, instagram: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>
          </div>

          <button
            onClick={handleSaveContact}
            className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 flex items-center space-x-2"
          >
            <Save size={20} />
            <span>Simpan Kontak</span>
          </button>
        </div>
      )}
    </div>
  )
}
