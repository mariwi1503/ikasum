"use client"

import { X, User, Calendar, Eye } from "lucide-react"

interface ArticlePreviewModalProps {
  article: any
  onClose: () => void
}

export default function ArticlePreviewModal({ article, onClose }: ArticlePreviewModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-900">Preview Artikel</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
              <X size={24} />
            </button>
          </div>

          <article className="prose prose-lg max-w-none">
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{article.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>{new Date(article.date).toLocaleDateString("id-ID")}</span>
                </div>
                <div className="flex items-center">
                  <Eye size={16} className="mr-2" />
                  <span>{article.views.toLocaleString()} views</span>
                </div>
                <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-800">
                  {article.category}
                </span>
              </div>
              <div className="text-lg text-gray-600 italic border-l-4 border-indigo-500 pl-4">{article.excerpt}</div>
            </header>

            <div className="text-gray-700 leading-relaxed">
              {article.content.split("\n").map((paragraph: string, index: number) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {article.tags && article.tags.length > 0 && (
              <footer className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Tags:</h4>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="inline-flex px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </footer>
            )}
          </article>

          <div className="flex justify-end mt-6 pt-6 border-t">
            <button
              onClick={onClose}
              className="bg-gray-300 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-400 transition-colors"
            >
              Tutup Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
