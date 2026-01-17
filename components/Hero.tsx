"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Users, MapPin, Calendar } from "lucide-react"
import JoinModal from "./modals/JoinModal"
import LearnMoreModal from "./modals/LearnMoreModal"

export default function Hero() {
  const [showJoinModal, setShowJoinModal] = useState(false)
  const [showLearnMoreModal, setShowLearnMoreModal] = useState(false)

  return (
    <>
      <section
        id="hero"
        className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-red-50 via-yellow-50 to-green-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Mobile Layout */}
          <div className="block lg:hidden">
            <div className="flex flex-col items-center text-center space-y-8">
              {/* Logo as main hero element on mobile */}
              <div className="relative">
                <div className="relative z-10">
                  <Image
                    src="/images/ikasum-logo.png"
                    alt="Logo IKASUM BATAM"
                    width={280}
                    height={280}
                    className="mx-auto drop-shadow-2xl"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-red-200 to-yellow-200 rounded-full blur-3xl opacity-30 scale-110"></div>
              </div>

              {/* Title and description */}
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Selamat Datang di{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-600">
                    IKASUM BATAM
                  </span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed px-4">
                  Ikatan Keluarga Sumbawa Kota Batam - Menghimpun dan mempererat tali persaudaraan masyarakat Sumbawa
                  yang berdomisili di Kota Batam
                </p>
              </div>

              {/* Buttons below logo */}
              <div className="flex flex-col w-full max-w-sm gap-4 px-4">
                <button
                  onClick={() => setShowJoinModal(true)}
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 flex items-center justify-center group shadow-lg w-full"
                >
                  Bergabung Dengan Kami
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <button
                  onClick={() => setShowLearnMoreModal(true)}
                  className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 w-full"
                >
                  Pelajari Lebih Lanjut
                </button>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-3 gap-4 pt-8 w-full max-w-sm">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Users className="text-red-600" size={28} />
                  </div>
                  <div className="text-xl font-bold text-gray-900">500+</div>
                  <div className="text-xs text-gray-600">Anggota Aktif</div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Calendar className="text-yellow-600" size={28} />
                  </div>
                  <div className="text-xl font-bold text-gray-900">50+</div>
                  <div className="text-xs text-gray-600">Kegiatan/Tahun</div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <MapPin className="text-green-600" size={28} />
                  </div>
                  <div className="text-xl font-bold text-gray-900">15+</div>
                  <div className="text-xs text-gray-600">Tahun Berdiri</div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Selamat Datang di{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-600">
                    IKASUM BATAM
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Ikatan Keluarga Sumbawa Kota Batam - Menghimpun dan mempererat tali persaudaraan masyarakat Sumbawa
                  yang berdomisili di Kota Batam
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowJoinModal(true)}
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 flex items-center justify-center group shadow-lg"
                >
                  Bergabung Dengan Kami
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <button
                  onClick={() => setShowLearnMoreModal(true)}
                  className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-red-600 hover:text-white transition-all duration-300"
                >
                  Pelajari Lebih Lanjut
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Users className="text-red-600" size={32} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Anggota Aktif</div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Calendar className="text-yellow-600" size={32} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Kegiatan/Tahun</div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <MapPin className="text-green-600" size={32} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-600">Tahun Berdiri</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/images/ikasum-logo.png"
                  alt="Logo IKASUM BATAM"
                  width={400}
                  height={400}
                  className="mx-auto drop-shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-200 to-yellow-200 rounded-full blur-3xl opacity-30 scale-110"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <JoinModal isOpen={showJoinModal} onClose={() => setShowJoinModal(false)} />
      <LearnMoreModal isOpen={showLearnMoreModal} onClose={() => setShowLearnMoreModal(false)} />
    </>
  )
}
