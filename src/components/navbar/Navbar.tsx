import { useState, useEffect } from 'react';
import sorchIcon from '../../assets/images/icons/sorch.svg';
import massageIcon from '../../assets/images/icons/massage.svg';
import profilImg from '../../assets/images/pictures-png/profilImage.jpg';
import sifatIcon from '../../assets/images/icons/sifat.svg';
import Input from './../../ui/Input';
import { FaSearch } from "react-icons/fa";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSearchSubmit = () => {
    console.log("Search Query:", searchQuery);
    toggleModal(); 
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="navbar container flex-col p-3 containerPaddings_media_md">
      <div className="flex items-center justify-between py-4 gap-6">
        <div className="navbar-title cursor-pointer">
          <h1 className="text-black font-bold uppercase text-base md:text-lg lg:text-xl">
            Eshik Derazalar
          </h1>
        </div>

        <div className="navbar-sorch hidden lg:flex items-center justify-between gap-2 border border-gray-300 w-full max-w-[500px] rounded-[10px] px-3">
          <Input
            type="text"
            placeholder="Nomi va turi bo’yicha qidiruv..."
            className="text-sm md:text-base placeholder:text-gray-500 w-full"
          />
          <img src={sorchIcon} alt="sorch icon" className="w-5 h-5" />
        </div>

        <div className="navbar-profils flex items-center justify-center gap-6 cursor-pointer">
          <FaSearch 
            className='w-6 h-6 text lg:hidden text-[#3D3D3D]' 
            onClick={toggleModal} 
          />
          <nav className="relative">
            <img src={massageIcon} alt="massage icon" className="w-6 h-6" />
            <p className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-1.5 rounded-full flex items-center justify-center">
              2
            </p>
          </nav>

          <img src={sifatIcon} alt="sifat icon" className="w-6 h-6" />
          <img src={profilImg} alt="profil" className="w-10 h-10 rounded-full object-cover" />
        </div>
      </div>

      <div className="border-navbar containerPaddings"></div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={toggleModal} 
        >
          <div
            className="bg-white rounded-lg p-6 w-11/12 max-w-md"
            onClick={(e) => e.stopPropagation()} 
          >
            <h2 className="text-lg font-bold mb-4">Qidiruv</h2>
            <Input
              type="text"
              placeholder="Nomi va turi bo’yicha qidiruv..."
              className="text-sm md:text-base placeholder:text-gray-500 w-full border border-gray-300 rounded mb-4"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="flex justify-end">
              <button 
                className="bg-blue-500 text-white px-4 py-2 rounded" 
                onClick={handleSearchSubmit}
              >
                Izlash
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
