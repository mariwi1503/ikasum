import AuthGuard from '@/components/admin/AuthGuard'
import ProtectedRoute from '@/components/admin/ProtectedRoute'
import MemberManagement from '@/components/admin/MemberManagement'

export default function MembersPage() {
  return (
    <AuthGuard>
      <ProtectedRoute requiredRole={['Super Admin', 'Ketua Umum', 'Sekretaris']}>
        <div className="min-h-screen bg-gray-50">
          <div className="p-6">
            <MemberManagement />
          </div>
        </div>
      </ProtectedRoute>
    </AuthGuard>
  )
}
