"use client"

import { useState } from "react"
import AdminSidebar from "./AdminSidebar"
import DashboardStats from "./DashboardStats"
import MemberManagement from "./MemberManagement"
import ActivityManagement from "./ActivityManagement"
import GalleryManagement from "./GalleryManagement"
import ArticleManagement from "./ArticleManagement"
import SettingsManagement from "./SettingsManagement"

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState("dashboard")

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <DashboardStats />
      case "members":
        return <MemberManagement />
      case "activities":
        return <ActivityManagement />
      case "gallery":
        return <GalleryManagement />
      case "articles":
        return <ArticleManagement />
      case "settings":
        return <SettingsManagement />
      default:
        return <DashboardStats />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar activeSection={activeSection} onSectionChange={setActiveSection} />

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        <div className="p-4 lg:p-8 pt-20 lg:pt-8">{renderContent()}</div>
      </div>
    </div>
  )
}
