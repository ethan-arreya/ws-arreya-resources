'use client'

import { PlusCircle, FileText, BarChart2, Users, Settings, Edit, Trash2, Download, Eye } from "lucide-react"
import Link from "next/link"

export function AdminDashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white border-r">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
          <nav>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="flex items-center p-2 rounded hover:bg-gray-100">
                  <PlusCircle className="w-5 h-5 mr-3 text-gray-500" />
                  Add New Resource
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center p-2 rounded hover:bg-gray-100">
                  <FileText className="w-5 h-5 mr-3 text-gray-500" />
                  Manage Resources
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center p-2 rounded hover:bg-gray-100">
                  <BarChart2 className="w-5 h-5 mr-3 text-gray-500" />
                  View Analytics
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b">
          <div className="flex items-center justify-between px-6 py-4">
            <h1 className="text-2xl font-semibold">Resource Management</h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link href="#" className="flex items-center text-gray-600 hover:text-gray-900">
                    <Users className="w-5 h-5 mr-1" />
                    User Management
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center text-gray-600 hover:text-gray-900">
                    <Settings className="w-5 h-5 mr-1" />
                    Settings
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <div className="mb-8">
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center">
                <PlusCircle className="w-5 h-5 mr-2" />
                Add Resource
              </button>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resource</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Downloads</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <tr key={item}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src={`/placeholder.svg?height=40&width=40`} alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Resource {item}</div>
                            <div className="text-sm text-gray-500">resource-{item}.pdf</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          PDF
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{1000 + item * 100}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                          <Edit className="w-5 h-5" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Resource Statistics</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500">Total Resources</p>
                    <p className="text-2xl font-bold">1,234</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Added This Month</p>
                    <p className="text-2xl font-bold">56</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Most Popular Resources</h3>
                <ul className="space-y-2">
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Top Resource {item}</span>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Download className="w-4 h-4 mr-1" />
                          {5000 - item * 1000}
                        </span>
                        <span className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {10000 - item * 2000}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}