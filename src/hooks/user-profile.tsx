import { Home, BookOpen, FileText, HelpCircle, User, Edit, LogOut, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function Component() {
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
          <h2 className="font-semibold mb-4">Navigation</h2>
          <ul className="space-y-2">
            {["Dashboard", "Tutorials", "Templates", "Support", "Settings"].map((item) => (
              <li key={item}>
                <Link href="#" className="flex items-center hover:text-blue-600">
                  {item} <ChevronRight className="w-4 h-4 ml-auto" />
                </Link>
              </li>
            ))}
          </ul>
        </aside>
        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <img
                  src="/placeholder.svg?height=100&width=100"
                  alt="User profile"
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h1 className="text-2xl font-bold">John Doe</h1>
                  <p className="text-gray-600">john.doe@example.com</p>
                </div>
              </div>
              <div className="space-x-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors flex items-center">
                  <Edit className="w-4 h-4 mr-2" /> Edit Profile
                </button>
                <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors flex items-center">
                  <LogOut className="w-4 h-4 mr-2" /> Log Out
                </button>
              </div>
            </div>
            <section>
              <h2 className="text-xl font-semibold mb-4">Saved Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="border rounded-lg overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=150&width=250`}
                      alt="Resource thumbnail"
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold">Saved Resource {i}</h3>
                      <p className="text-sm text-gray-600 mt-1">Short description of the saved resource...</p>
                      <Link href="#" className="text-blue-500 hover:text-blue-600 flex items-center mt-2">
                        View Resource <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
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