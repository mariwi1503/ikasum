"use client"

import { useState } from "react"
import Image from "next/image"
import { Calendar, User, Eye, ArrowRight } from "lucide-react"
import ArticleDetailModal from "./modals/ArticleDetailModal"

export default function Articles() {
  const [selectedArticle, setSelectedArticle] = useState<any>(null)

  const articles = [
    {
      id: 1,
      title: "Peran IKASUM BATAM dalam Membangun Ekonomi Kreatif",
      excerpt:
        "Bagaimana IKASUM BATAM berkontribusi dalam pengembangan ekonomi kreatif di Kota Batam melalui berbagai program inovatif...",
      content: `
        <p>IKASUM BATAM telah memainkan peran penting dalam pengembangan ekonomi kreatif di Kota Batam. Melalui berbagai program dan inisiatif, organisasi ini telah berhasil memberdayakan anggotanya untuk berkontribusi dalam sektor ekonomi kreatif.</p>
        
        <h3>Program Unggulan</h3>
        <p>Beberapa program unggulan yang telah dilaksanakan antara lain:</p>
        <ul>
          <li>Workshop kewirausahaan digital</li>
          <li>Pelatihan desain grafis dan multimedia</li>
          <li>Seminar bisnis online</li>
          <li>Mentoring untuk startup pemula</li>
        </ul>
        
        <h3>Dampak Positif</h3>
        <p>Program-program ini telah memberikan dampak positif yang signifikan, dengan lebih dari 200 anggota yang telah mengikuti berbagai pelatihan dan berhasil mengembangkan usaha kreatif mereka.</p>
      `,
      author: "Dr. Ahmad Fauzi",
      date: "2024-01-15",
      image: "/placeholder.svg?height=300&width=500&text=Ekonomi+Kreatif",
      views: 1250,
      category: "Ekonomi",
    },
    {
      id: 2,
      title: "Tradisi dan Budaya Sumbawa di Tanah Rantau",
      excerpt:
        "Melestarikan warisan budaya Sumbawa di tengah kehidupan modern di Kota Batam melalui berbagai kegiatan budaya...",
      content: `
        <p>Melestarikan budaya Sumbawa di tanah rantau merupakan tantangan tersendiri. IKASUM BATAM telah mengambil peran aktif dalam menjaga dan melestarikan tradisi budaya Sumbawa.</p>
        
        <h3>Kegiatan Pelestarian Budaya</h3>
        <p>Berbagai kegiatan yang telah dilaksanakan meliputi:</p>
        <ul>
          <li>Festival budaya Sumbawa tahunan</li>
          <li>Pertunjukan tari tradisional</li>
          <li>Pameran kerajinan tangan khas Sumbawa</li>
          <li>Lomba masak makanan tradisional</li>
        </ul>
        
        <h3>Generasi Muda</h3>
        <p>Melibatkan generasi muda dalam pelestarian budaya menjadi fokus utama, dengan mengadakan workshop dan pelatihan khusus untuk anak-anak dan remaja.</p>
      `,
      author: "Siti Aminah, S.Pd",
      date: "2024-01-10",
      image: "/placeholder.svg?height=300&width=500&text=Budaya+Sumbawa",
      views: 980,
      category: "Budaya",
    },
    {
      id: 3,
      title: "Program Beasiswa IKASUM untuk Putra-Putri Sumbawa",
      excerpt:
        "Komitmen IKASUM BATAM dalam mendukung pendidikan putra-putri Sumbawa melalui program beasiswa berkelanjutan...",
      content: `
        <p>Pendidikan merupakan kunci kemajuan bangsa. IKASUM BATAM memahami pentingnya investasi dalam bidang pendidikan, khususnya untuk putra-putri Sumbawa yang berdomisili di Batam.</p>
        
        <h3>Program Beasiswa</h3>
        <p>Program beasiswa yang tersedia meliputi:</p>
        <ul>
          <li>Beasiswa pendidikan tinggi</li>
          <li>Bantuan biaya sekolah menengah</li>
          <li>Program magang dan pelatihan</li>
          <li>Bantuan alat tulis dan seragam</li>
        </ul>
        
        <h3>Kriteria Penerima</h3>
        <p>Beasiswa diberikan berdasarkan prestasi akademik, kondisi ekonomi keluarga, dan komitmen untuk berkontribusi bagi masyarakat.</p>
      `,
      author: "H. Muhammad Yusuf",
      date: "2024-01-05",
      image: "/placeholder.svg?height=300&width=500&text=Program+Beasiswa",
      views: 1450,
      category: "Pendidikan",
    },
    {
      id: 4,
      title: "Gotong Royong Digital: Inovasi IKASUM di Era Modern",
      excerpt:
        "Mengadaptasi nilai-nilai gotong royong tradisional dengan teknologi digital untuk memperkuat solidaritas anggota...",
      content: `
        <p>Di era digital ini, IKASUM BATAM berinovasi dengan mengadaptasi nilai-nilai gotong royong tradisional menggunakan teknologi modern untuk memperkuat solidaritas antar anggota.</p>
        
        <h3>Platform Digital</h3>
        <p>Berbagai platform digital yang dikembangkan:</p>
        <ul>
          <li>Aplikasi mobile IKASUM Connect</li>
          <li>Grup WhatsApp koordinasi kegiatan</li>
          <li>Website resmi dengan fitur interaktif</li>
          <li>Media sosial untuk komunikasi publik</li>
        </ul>
        
        <h3>Manfaat Digitalisasi</h3>
        <p>Digitalisasi telah meningkatkan efektivitas komunikasi, koordinasi kegiatan, dan partisipasi anggota dalam berbagai program organisasi.</p>
      `,
      author: "Ir. Bayu Pratama",
      date: "2023-12-28",
      image: "/placeholder.svg?height=300&width=500&text=Gotong+Royong+Digital",
      views: 890,
      category: "Teknologi",
    },
  ]

  const viewAll = () => {
    alert("Navigasi ke halaman artikel lengkap")
  }

  const openArticle = (article: any) => {
    setSelectedArticle(article)
  }

  const closeArticle = () => {
    setSelectedArticle(null)
  }

  return (
    <section id="articles" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Artikel & Berita</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Informasi terkini dan artikel menarik seputar kegiatan dan perkembangan IKASUM BATAM
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <article
              key={article.id}
              /* SOLUSI: 
                 - Hapus baris 'displayArticles' di atas.
                 - Gunakan index untuk kontrol visibilitas:
                 - Artikel ke-3 dan ke-4 (index >= 2) disembunyikan di mobile (hidden)
                 - Dan ditampilkan kembali mulai dari ukuran tablet/desktop (md:block)
              */
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${
                index >= 2 ? "hidden md:block" : "block"
              }`}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User size={16} className="mr-1 text-blue-600" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1 text-blue-600" />
                      <span>{new Date(article.date).toLocaleDateString("id-ID")}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Eye size={16} className="mr-1 text-blue-600" />
                    <span>{article.views.toLocaleString()}</span>
                  </div>
                </div>

                <button
                  onClick={() => openArticle(article)}
                  className="flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors group"
                >
                  Baca Selengkapnya
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={viewAll}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg"
          >
            Lihat Semua Artikel
          </button>
        </div>

        {selectedArticle && <ArticleDetailModal article={selectedArticle} onClose={closeArticle} isOpen={false} />}
      </div>
    </section>
  )
}