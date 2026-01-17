import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/ikasum-logo.png"
                alt="Logo IKASUM BATAM"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold">IKASUM BATAM</h3>
                <p className="text-gray-400 text-sm">Ikatan Keluarga Sumbawa</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Organisasi yang menghimpun masyarakat Sumbawa di Kota Batam untuk mempererat 
              tali persaudaraan dan saling membantu dalam berbagai aspek kehidupan.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-blue-400 p-2 rounded-full hover:bg-blue-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-gray-400 hover:text-white transition-colors">Tentang Kami</Link></li>
              <li><Link href="#activities" className="text-gray-400 hover:text-white transition-colors">Kegiatan</Link></li>
              <li><Link href="#gallery" className="text-gray-400 hover:text-white transition-colors">Galeri</Link></li>
              <li><Link href="#articles" className="text-gray-400 hover:text-white transition-colors">Artikel</Link></li>
              <li><Link href="#board" className="text-gray-400 hover:text-white transition-colors">Pengurus</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-white transition-colors">Kontak</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-red-500 mt-1 flex-shrink-0" size={16} />
                <p className="text-gray-400 text-sm">
                  Jl. Raya Batam Center No. 123<br />
                  Batam Center, Kota Batam
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-green-500 flex-shrink-0" size={16} />
                <a href="tel:+62778123456" className="text-gray-400 hover:text-white transition-colors text-sm">
                  +62 778 123 456
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-500 flex-shrink-0" size={16} />
                <a href="mailto:info@ikasum-batam.org" className="text-gray-400 hover:text-white transition-colors text-sm">
                  info@ikasum-batam.org
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 IKASUM BATAM. Hak Cipta Dilindungi.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Kebijakan Privasi
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
