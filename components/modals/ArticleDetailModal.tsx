"use client"

import { X, Calendar, User, Share2 } from "lucide-react"
import Image from "next/image"

interface ArticleDetailModalProps {
  isOpen: boolean
  onClose: () => void
  article: any
}

export default function ArticleDetailModal({ isOpen, onClose, article }: ArticleDetailModalProps) {
  if (!isOpen || !article) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full font-medium">
              {article.category}
            </span>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          {/* Article Header */}
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">{article.title}</h1>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  {article.author}
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  {article.date}
                </div>
              </div>

              <button className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                <Share2 size={16} className="mr-1" />
                Bagikan
              </button>
            </div>
          </div>

          {/* Article Image */}
          {article.image && (
            <div className="mb-6">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                width={800}
                height={400}
                className="w-full h-64 md:h-80 object-cover rounded-xl"
              />
            </div>
          )}

          {/* Article Content */}
          <div className="prose max-w-none">
            <div className="text-gray-700 leading-relaxed space-y-4">
              {article.content.split("\n").map(
                (paragraph: string, index: number) =>
                  paragraph.trim() && (
                    <p key={index} className="text-base leading-relaxed">
                      {paragraph}
                    </p>
                  ),
              )}
            </div>
          </div>

          {/* Article Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Artikel ini dipublikasikan oleh <span className="font-medium">{article.author}</span>
              </div>
              <div className="flex items-center space-x-4">
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Bagikan ke Facebook</button>
                <button className="text-blue-400 hover:text-blue-500 text-sm font-medium">Bagikan ke Twitter</button>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200 bg-gray-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  )
}
