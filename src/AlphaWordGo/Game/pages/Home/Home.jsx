import { Outlet } from "react-router-dom";

const HomeFromGamePage = () => {
  return (
    <div>
      <div className="grid grid-cols-12 grid-rows-[60px_auto] h-screen">
        {/* Top Navbar */}
        <nav className="col-span-12 bg-gray-900 text-white flex items-center justify-between p-4 shadow-md">
          <h1 className="text-xl font-bold">Omniverse Hub</h1>
          <button className="bg-blue-500 px-4 py-2 rounded-md">Profile</button>
        </nav>

        {/* Sidebars & Content */}
        <div className="col-span-2 bg-gray-800 text-white p-4 hidden md:block">
          <ul>
            <li className="mb-2">Dashboard</li>
            <li className="mb-2">Settings</li>
            <li className="mb-2">Analytics</li>
          </ul>
        </div>
{/* center of the board */}
        <main className="col-span-8 bg-gray-100 p-6 overflow-auto">
          <h2 className="text-2xl font-semibold">
            Welcome, Supreme Conqueror!
          </h2>
          <p>Your omniversal content goes here...</p>
          <div>
          <Outlet></Outlet>
          </div>
        </main>

        <div className="col-span-2 bg-gray-800 text-white p-4 hidden md:block">
          <h3 className="font-semibold">Widgets</h3>
          <p>Additional tools & info</p>
        </div>
      </div>
      
    </div>
  );
};

export default HomeFromGamePage;
