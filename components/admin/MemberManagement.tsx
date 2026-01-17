"use client"

import type React from "react"

import { useState } from "react"
import { Plus, Search, Edit, Trash2 } from "lucide-react"
import AddMemberModal from "./modals/AddMemberModal"
import EditMemberModal from "./modals/EditMemberModal"

interface Member {
  id: number
  name: string
  email: string
  phone: string
  address: string
  joinDate: string
  status: "active" | "inactive"
  profession: string
  birthDate: string
}

export default function MemberManagement() {
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDetailModal, setShowDetailModal] = useState(false)
  const [selectedMember, setSelectedMember] = useState<Member | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  const [members, setMembers] = useState<Member[]>([
    {
      id: 1,
      name: "Ahmad Fauzi",
      email: "ahmad.fauzi@email.com",
      phone: "081234567890",
      address: "Jl. Sudirman No. 123, Batam",
      joinDate: "2023-01-15",
      status: "active",
      profession: "Pengusaha",
      birthDate: "1985-05-20",
    },
    {
      id: 2,
      name: "Siti Aminah",
      email: "siti.aminah@email.com",
      phone: "081234567891",
      address: "Jl. Ahmad Yani No. 456, Batam",
      joinDate: "2023-02-20",
      status: "active",
      profession: "Guru",
      birthDate: "1990-08-15",
    },
    {
      id: 3,
      name: "Budi Santoso",
      email: "budi.santoso@email.com",
      phone: "081234567892",
      address: "Jl. Gatot Subroto No. 789, Batam",
      joinDate: "2023-03-10",
      status: "inactive",
      profession: "Dokter",
      birthDate: "1988-12-03",
    },
  ])

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleAddMember = (memberData: Omit<Member, "id">) => {
    const newMember = {
      ...memberData,
      id: Math.max(...members.map((m) => m.id)) + 1,
    }
    setMembers([...members, newMember])
    setShowAddModal(false)
  }

  const handleEditMember = (memberData: Member) => {
    setMembers(members.map((m) => (m.id === memberData.id ? memberData : m)))
    setShowEditModal(false)
    setSelectedMember(null)
  }

  const handleDeleteMember = (id: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus anggota ini?")) {
      setMembers(members.filter((m) => m.id !== id))
    }
  }

  const handleRowClick = (member: Member) => {
    setSelectedMember(member)
    setShowDetailModal(true)
  }

  const handleEditClick = (e: React.MouseEvent, member: Member) => {
    e.stopPropagation()
    setSelectedMember(member)
    setShowEditModal(true)
  }

  const handleDeleteClick = (e: React.MouseEvent, id: number) => {
    e.stopPropagation()
    handleDeleteMember(id)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Kelola Anggota</h1>
          <p className="text-gray-600">Kelola data anggota IKASUM BATAM</p>
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
              placeholder="Cari anggota..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Telepon
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tanggal Bergabung
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredMembers.map((member) => (
                <tr
                  key={member.id}
                  onClick={() => handleRowClick(member)}
                  className="hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{member.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{member.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{member.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        member.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {member.status === "active" ? "Aktif" : "Tidak Aktif"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(member.joinDate).toLocaleDateString("id-ID")}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={(e) => handleEditClick(e, member)}
                        className="text-blue-600 hover:text-blue-900 p-1"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={(e) => handleDeleteClick(e, member.id)}
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

      {/* Member Detail Modal */}
      {showDetailModal && selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Detail Anggota</h3>
                <button onClick={() => setShowDetailModal(false)} className="text-gray-400 hover:text-gray-600">
                  ×
                </button>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                  <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{selectedMember.name}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{selectedMember.email}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Telepon</label>
                  <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{selectedMember.phone}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Profesi</label>
                  <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{selectedMember.profession}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Lahir</label>
                  <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">
                    {new Date(selectedMember.birthDate).toLocaleDateString("id-ID")}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">
                    {selectedMember.status === "active" ? "Aktif" : "Tidak Aktif"}
                  </p>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Alamat</label>
                  <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{selectedMember.address}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Bergabung</label>
                  <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">
                    {new Date(selectedMember.joinDate).toLocaleDateString("id-ID")}
                  </p>
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

      <AddMemberModal isOpen={showAddModal} onClose={() => setShowAddModal(false)} onAdd={handleAddMember} />

      {selectedMember && (
        <EditMemberModal
          isOpen={showEditModal}
          onClose={() => {
            setShowEditModal(false)
            setSelectedMember(null)
          }}
          member={selectedMember}
          onEdit={handleEditMember}
        />
      )}
    </div>
  )
}
