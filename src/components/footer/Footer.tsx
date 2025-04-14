import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-white container mt-12">
      <div className="container p-3 containerPaddings_media_md py-10 grid gap-10 md:grid-cols-3 text-sm">
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold">ESHIK DERAZA</h2>
          <p className="text-base md:text-lg">Qo‘llab quvvatlash</p>
          <p className="font-semibold text-lg md:text-xl">+998888152077</p>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt />
            <span className="text-base md:text-lg">Olmazor, Toshkent</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <span className="text-base md:text-lg">Eshikrom@gmail.com</span>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-lg md:text-xl">Ma’lumotlar</h3>
          <ul className="space-y-1">
            <li className="text-base md:text-lg">Biz haqimizda</li>
            <li className="text-base md:text-lg">To‘lov va yetkazib berish</li>
            <li className="text-base md:text-lg">Blog</li>
            <li className="text-base md:text-lg">To‘lovni qaytarish va tovarlarni almashtirish</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-lg md:text-xl invisible md:visible">⠀</h3>
          <ul className="space-y-1">
            <li className="text-base md:text-lg">Eco-friendly</li>
            <li className="text-base md:text-lg">Bonus va aksiyalar</li>
            <li className="text-base md:text-lg">Servis markazlari</li>
            <li className="text-base md:text-lg">Ommaviy oferta</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 py-4">
        <div className="container containerPaddings flex flex-col md:flex-row justify-between items-center gap-3 text-xs md:text-sm text-gray-600">
          <p>© 2024. OOO "Eshikrom store"</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-black text-xs md:text-sm">Ommaviy oferta</a>
            <a href="#" className="hover:text-black text-xs md:text-sm">Maxfiylik siyosati</a>
          </div>
          <div className="flex gap-3 text-lg text-gray-500">
            <FiSend className="cursor-pointer hover:text-black" />
            <FaFacebookF className="cursor-pointer hover:text-black" />
            <FaInstagram className="cursor-pointer hover:text-black" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
