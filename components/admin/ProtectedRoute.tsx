'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredRole?: string[]
}

export default function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const [hasAccess, setHasAccess] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const checkAccess = () => {
      try {
        const adminUser = localStorage.getItem('adminUser')
        if (!adminUser) {
          router.push('/admin/login')
          return
        }

        const userData = JSON.parse(adminUser)
        
        // Check role-based access if required
        if (requiredRole && !requiredRole.includes(userData.role)) {
          setHasAccess(false)
          setIsLoading(false)
          return
        }

        setHasAccess(true)
      } catch (error) {
        console.error('Access check error:', error)
        router.push('/admin/login')
      } finally {
        setIsLoading(false)
      }
    }

    checkAccess()
  }, [router, requiredRole])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
      </div>
    )
  }

  if (!hasAccess) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 m-6">
        <h3 className="text-red-800 font-semibold mb-2">Akses Ditolak</h3>
        <p className="text-red-700">Anda tidak memiliki izin untuk mengakses halaman ini.</p>
      </div>
    )
  }

  return <>{children}</>
}
