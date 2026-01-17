import LoginForm from '@/components/admin/LoginForm'

export const metadata = {
  title: 'Login Admin - IKASUM BATAM',
  description: 'Halaman login untuk admin IKASUM BATAM'
}

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-yellow-50 to-green-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <LoginForm />
      </div>
    </div>
  )
}
