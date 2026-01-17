import { redirect } from 'next/navigation'
import AdminDashboard from '@/components/admin/AdminDashboard'
import AuthGuard from '@/components/admin/AuthGuard'

export default async function AdminPage() {
  return (
    <AuthGuard>
      <AdminDashboard />
    </AuthGuard>
  )
}
