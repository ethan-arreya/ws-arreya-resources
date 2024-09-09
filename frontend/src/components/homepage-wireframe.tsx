'use client'

import { Search, Home, BookOpen, FileText, HelpCircle, User, ChevronRight } from "lucide-react"
import Link from "next/link"

export function HomepageWireframe() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">Logo</div>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="#" className="flex items-center"><Home className="w-4 h-4 mr-1" /> Home</Link></li>
              <li><Link href="#" className="flex items-center"><BookOpen className="w-4 h-4 mr-1" /> Tutorials</Link></li>
              <li><Link href="#" className="flex items-center"><FileText className="w-4 h-4 mr-1" /> Templates</Link></li>
              <li><Link href="#" className="flex items-center"><HelpCircle className="w-4 h-4 mr-1" /> Support</Link></li>
              <li><Link href="#" className="flex items-center"><User className="w-4 h-4 mr-1" /> Profile</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="w-64 border-r p-4">
          <h2 className="font-semibold mb-4">Popular Categories</h2>
          <ul className="space-y-2">
            {["Web Development", "Graphic Design", "Marketing", "Data Science", "Mobile Apps"].map((category) => (
              <li key={category}>
                <Link href="#" className="flex items-center hover:text-blue-600">
                  {category} <ChevronRight className="w-4 h-4 ml-auto" />
                </Link>
              </li>
            ))}
          </ul>
        </aside>
        <main className="flex-1 p-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search resources..."
                  className="w-full px-4 py-3 border rounded-lg pl-10"
                />
                <Search className="absolute left-3 top-3 text-gray-400" />
              </div>
            </div>
            <section>
              <h2 className="text-2xl font-bold mb-6">Recent Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="border rounded-lg overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=150&width=250`}
                      alt="Resource thumbnail"
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold">Resource Title {i}</h3>
                      <p className="text-sm text-gray-600 mt-1">Short description of the resource...</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
      <footer className="border-t">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="text-sm text-gray-600">© 2023 Resource Portal. All rights reserved.</div>
          <nav>
            <ul className="flex space-x-4 text-sm">
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Contact</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  )
}