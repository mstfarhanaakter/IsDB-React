import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navbar */}
      <nav className="bg-[#f390a6] text-black px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Pharma</div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">About</a>
            <a href="#" className="hover:text-gray-300">Contact</a>
          </div>
        </div>
      </nav>

      {/* Content Area with Sidebar */}
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="bg-gray-100 w-full md:w-64 p-4 border-r">
          <ul className="space-y-2">
            <li><a href="#" className="block px-2 py-1 hover:bg-gray-200 rounded">Dashboard</a></li>
            <li><a href="#" className="block px-2 py-1 hover:bg-gray-200 rounded">Profile</a></li>
            <li><a href="#" className="block px-2 py-1 hover:bg-gray-200 rounded">Settings</a></li>
            <li><a href="#" className="block px-2 py-1 hover:bg-gray-200 rounded">Logout</a></li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-white">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <p className="text-gray-700">
            This is a static layout with a responsive navbar and sidebar using Tailwind CSS.
            Resize the screen to see how the layout adapts.
          </p>
        </main>
      </div>
    </div>
  );
}
