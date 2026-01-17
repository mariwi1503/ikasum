"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      src: "/ikasum-gathering.png",
      alt: "Acara Gathering IKASUM BATAM",
      title: "Gathering Tahunan 2024",
    },
    {
      src: "/sumbawa-cultural-performance.png",
      alt: "Pertunjukan Budaya Sumbawa",
      title: "Festival Budaya Sumbawa",
    },
    {
      src: "/charity-donation.png",
      alt: "Kegiatan Bakti Sosial",
      title: "Bakti Sosial Ramadan",
    },
    {
      src: "/family-outdoor-picnic.png",
      alt: "Family Gathering",
      title: "Family Gathering 2024",
    },
    {
      src: "/business-seminar.png",
      alt: "Seminar Bisnis",
      title: "Seminar Kewirausahaan",
    },
    {
      src: "/traditional-food-festival.png",
      alt: "Festival Kuliner",
      title: "Festival Kuliner Nusantara",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Kegiatan Pemuda",
      title: "Turnamen Olahraga",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Kegiatan Keagamaan",
      title: "Pengajian Rutin",
    },
  ]

  const viewAll = () => {
    alert("Navigasi ke halaman galeri lengkap")
  }

  const openModal = (index: number) => {
    setSelectedImage(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  // Show only 4 images on mobile, all on desktop
  const displayImages = galleryImages.slice(0, 4)

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Galeri Kegiatan</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dokumentasi berbagai kegiatan dan momen berharga IKASUM BATAM
          </p>
        </div>

        {/* Mobile: 2 columns, Desktop: 4 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {displayImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="aspect-square relative">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold text-xs sm:text-sm truncate">{image.title}</h3>
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
            Lihat Semua Galeri
          </button>
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button onClick={closeModal} className="absolute top-4 right-4 text-white hover:text-gray-300 z-10">
                <X size={32} />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronLeft size={32} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronRight size={32} />
              </button>

              <div className="relative">
                <Image
                  src={galleryImages[selectedImage].src || "/placeholder.svg"}
                  alt={galleryImages[selectedImage].alt}
                  width={800}
                  height={600}
                  className="rounded-lg max-w-full max-h-[80vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
                  <h3 className="text-white text-xl font-semibold">{galleryImages[selectedImage].title}</h3>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
