import { Heart, Target, Eye, Award } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tentang IKASUM BATAM</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Organisasi yang menghimpun masyarakat Sumbawa di Kota Batam untuk mempererat 
            tali persaudaraan dan saling membantu dalam berbagai aspek kehidupan
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Sejarah Singkat</h3>
            <p className="text-gray-600 leading-relaxed">
              IKASUM BATAM didirikan pada tahun 2008 sebagai wadah bagi masyarakat Sumbawa 
              yang berdomisili di Kota Batam. Organisasi ini lahir dari kebutuhan untuk 
              mempererat tali silaturahmi dan saling membantu sesama perantau Sumbawa.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Selama lebih dari 15 tahun, IKASUM BATAM telah menjadi rumah kedua bagi 
              ratusan keluarga Sumbawa di Batam, menyelenggarakan berbagai kegiatan 
              sosial, budaya, dan keagamaan.
            </p>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-yellow-50 p-8 rounded-2xl">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">500+</div>
                <div className="text-sm text-gray-600">Anggota</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">15+</div>
                <div className="text-sm text-gray-600">Tahun</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">50+</div>
                <div className="text-sm text-gray-600">Kegiatan</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-gray-600">Program</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl">
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Visi</h3>
            <p className="text-gray-600">
              Menjadi organisasi yang solid dan bermanfaat bagi masyarakat Sumbawa di Batam 
              serta berkontribusi positif bagi pembangunan daerah
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl">
            <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Misi</h3>
            <p className="text-gray-600">
              Mempererat tali silaturahmi, memberikan bantuan sosial, melestarikan budaya, 
              dan mengembangkan potensi anggota
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Nilai</h3>
            <p className="text-gray-600">
              Kekeluargaan, gotong royong, toleransi, dan komitmen untuk kemajuan bersama 
              dalam semangat persaudaraan
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
