'use client'

import { Home, BookOpen, FileText, HelpCircle, User, Book, FileCode, LifeBuoy, ChevronRight } from "lucide-react"
import Link from "next/link"

export function ResourceCategories() {
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
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-2">Resource Categories</h1>
            <p className="text-gray-600">Browse our collection of tutorials, templates, and support guides</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { title: "Tutorials", icon: Book, description: "Step-by-step guides to learn new skills" },
              { title: "Templates", icon: FileCode, description: "Ready-to-use templates for quick starts" },
              { title: "Support Documentation", icon: LifeBuoy, description: "Comprehensive guides and FAQs" }
            ].map((category) => (
              <div key={category.title} className="border rounded-lg p-6 text-center">
                <category.icon className="w-16 h-16 mx-auto mb-4 text-blue-500" />
                <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                  Browse
                </button>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Featured Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="border rounded-lg overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=150&width=250`}
                    alt="Resource thumbnail"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">Resource Title {i}</h3>
                    <p className="text-sm text-gray-600 mb-4">Brief description of the resource. This could be a tutorial, template, or support guide.</p>
                    <Link href="#" className="text-blue-500 hover:text-blue-600 flex items-center">
                      Learn More <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
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