import { Phone, MapPin, Mail, Users, Award, Target } from "lucide-react"
import Image from "next/image"

export default function BoardMembers() {
  const boardMembers = [
    {
      name: "H. Ahmad Fauzi, S.E.",
      position: "Ketua Umum",
      address: "Jl. Raya Batam Center No. 123, Batam",
      phone: "+62 812-3456-7890",
      email: "ketua@ikasum-batam.org",
      image: "/placeholder.svg?height=200&width=200&text=Ahmad+Fauzi",
      color: "from-red-500 to-red-600",
    },
    {
      name: "Hj. Siti Aminah, S.Pd.",
      position: "Wakil Ketua",
      address: "Jl. Hang Tuah No. 45, Batam",
      phone: "+62 813-4567-8901",
      email: "wakilketua@ikasum-batam.org",
      image: "/placeholder.svg?height=200&width=200&text=Siti+Aminah",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Muhammad Rizki, S.H.",
      position: "Sekretaris Umum",
      address: "Jl. Ahmad Yani No. 67, Batam",
      phone: "+62 814-5678-9012",
      email: "sekretaris@ikasum-batam.org",
      image: "/placeholder.svg?height=200&width=200&text=M.+Rizki",
      color: "from-green-500 to-green-600",
    },
    {
      name: "Fatimah Zahra, S.E.",
      position: "Bendahara Umum",
      address: "Jl. Sudirman No. 89, Batam",
      phone: "+62 815-6789-0123",
      email: "bendahara@ikasum-batam.org",
      image: "/placeholder.svg?height=200&width=200&text=Fatimah+Zahra",
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Dr. Abdul Rahman",
      position: "Ketua Bidang Sosial",
      address: "Jl. Diponegoro No. 12, Batam",
      phone: "+62 816-7890-1234",
      email: "sosial@ikasum-batam.org",
      image: "/placeholder.svg?height=200&width=200&text=Abdul+Rahman",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "Nurul Hidayah, M.Pd.",
      position: "Ketua Bidang Pendidikan",
      address: "Jl. Kartini No. 34, Batam",
      phone: "+62 817-8901-2345",
      email: "pendidikan@ikasum-batam.org",
      image: "/placeholder.svg?height=200&width=200&text=Nurul+Hidayah",
      color: "from-teal-500 to-teal-600",
    },
  ]

  const organizationStructure = [
    {
      level: "Dewan Pembina",
      description: "Memberikan arahan strategis dan kebijakan organisasi",
      icon: Award,
      color: "from-yellow-400 to-yellow-500",
      bgColor: "bg-yellow-50",
      members: ["H. Abdullah Saleh", "Hj. Mariam Sari", "Dr. Hamzah Ali"],
    },
    {
      level: "Pengurus Harian",
      description: "Menjalankan operasional dan program kerja sehari-hari",
      icon: Users,
      color: "from-blue-400 to-blue-500",
      bgColor: "bg-blue-50",
      members: ["Ketua Umum", "Wakil Ketua", "Sekretaris", "Bendahara"],
    },
    {
      level: "Bidang-Bidang",
      description: "Melaksanakan program spesifik sesuai bidang masing-masing",
      icon: Target,
      color: "from-green-400 to-green-500",
      bgColor: "bg-green-50",
      members: ["Bidang Sosial", "Bidang Pendidikan", "Bidang Ekonomi", "Bidang Budaya"],
    },
  ]

  return (
    <section id="board" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Daftar Pengurus</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pengurus IKASUM BATAM periode 2023-2026 yang siap melayani dan memajukan organisasi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {boardMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-center mb-6">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div className={`absolute inset-0 bg-gradient-to-r ${member.color} rounded-full opacity-20`}></div>
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <div
                  className={`inline-block px-4 py-2 bg-gradient-to-r ${member.color} text-white rounded-full text-sm font-semibold`}
                >
                  {member.position}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-gray-400 mt-1 flex-shrink-0" size={16} />
                  <p className="text-gray-600 text-sm">{member.address}</p>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="text-gray-400 flex-shrink-0" size={16} />
                  <a
                    href={`tel:${member.phone}`}
                    className="text-gray-600 text-sm hover:text-red-600 transition-colors"
                  >
                    {member.phone}
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="text-gray-400 flex-shrink-0" size={16} />
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-600 text-sm hover:text-red-600 transition-colors"
                  >
                    {member.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Organization Structure */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Struktur Organisasi</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {organizationStructure.map((structure, index) => (
              <div
                key={index}
                className={`${structure.bgColor} rounded-2xl p-6 border-2 border-opacity-20 hover:shadow-lg transition-all duration-300`}
              >
                <div className="text-center mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${structure.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <structure.icon className="text-white" size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{structure.level}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{structure.description}</p>
                </div>

                <div className="space-y-2">
                  <h5 className="font-semibold text-gray-800 text-sm mb-3">Anggota:</h5>
                  <ul className="space-y-2">
                    {structure.members.map((member, memberIndex) => (
                      <li key={memberIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 flex-shrink-0"></div>
                        <span>{member}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Organizational Flow */}
          <div className="mt-12 text-center">
            <h4 className="text-lg font-bold text-gray-900 mb-6">Alur Koordinasi</h4>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                Dewan Pembina
              </div>
              <div className="hidden md:block text-gray-400">→</div>
              <div className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                Pengurus Harian
              </div>
              <div className="hidden md:block text-gray-400">→</div>
              <div className="bg-gradient-to-r from-green-400 to-green-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                Bidang-Bidang
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
