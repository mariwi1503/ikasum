'use client'

import { X, Users, Target, Heart, Award, Calendar, MapPin } from 'lucide-react'

interface LearnMoreModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LearnMoreModal({ isOpen, onClose }: LearnMoreModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Tentang IKASUM BATAM</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Introduction */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Ikatan Keluarga Sumbawa Kota Batam</h3>
            <p className="text-gray-600 leading-relaxed">
              IKASUM BATAM adalah organisasi yang menghimpun masyarakat Sumbawa yang berdomisili di Kota Batam. 
              Didirikan pada tahun 2008, organisasi ini menjadi wadah untuk mempererat tali silaturahmi dan 
              saling membantu sesama perantau Sumbawa di tanah rantau.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={32} />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Visi</h4>
              <p className="text-gray-600">
                Menjadi organisasi yang solid dan bermanfaat bagi masyarakat Sumbawa di Batam 
                serta berkontribusi positif bagi pembangunan daerah
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl">
              <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={32} />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Misi</h4>
              <p className="text-gray-600">
                Mempererat tali silaturahmi, memberikan bantuan sosial, melestarikan budaya, 
                dan mengembangkan potensi anggota
              </p>
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
            <h4 className="text-lg font-bold text-gray-900 mb-6 text-center">Statistik Organisasi</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">523</div>
                <div className="text-sm text-gray-600">Total Anggota</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                <div className="text-sm text-gray-600">Tahun Berdiri</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Kegiatan/Tahun</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">10+</div>
                <div className="text-sm text-gray-600">Program Aktif</div>
              </div>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6 text-center">Program Unggulan</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                <Users className="text-green-600 mb-3" size={32} />
                <h5 className="font-semibold text-gray-900 mb-2">Keanggotaan</h5>
                <p className="text-sm text-gray-600">Pendaftaran dan pembinaan anggota baru dari masyarakat Sumbawa</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                <Calendar className="text-blue-600 mb-3" size={32} />
                <h5 className="font-semibold text-gray-900 mb-2">Kegiatan Rutin</h5>
                <p className="text-sm text-gray-600">Pengajian, gathering, dan acara sosial untuk mempererat silaturahmi</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
                <Award className="text-purple-600 mb-3" size={32} />
                <h5 className="font-semibold text-gray-900 mb-2">Beasiswa</h5>
                <p className="text-sm text-gray-600">Program beasiswa untuk putra-putri anggota yang berprestasi</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">Informasi Kontak</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <MapPin className="text-red-600" size={20} />
                <div>
                  <div className="font-medium text-gray-900">Alamat Sekretariat</div>
                  <div className="text-sm text-gray-600">Jl. Raya Batam Center No. 123, Batam</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="text-green-600" size={20} />
                <div>
                  <div className="font-medium text-gray-900">Kontak</div>
                  <div className="text-sm text-gray-600">+62 778 123 456</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={onClose}
              className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
