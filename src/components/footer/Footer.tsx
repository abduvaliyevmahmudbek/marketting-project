import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-white mt-12 border-t border-gray-200 px-8">
      <div className="container containerPaddings py-10 grid gap-10 md:grid-cols-3 text-sm">
        <div className="space-y-4">
          <h2 className="text-lg font-bold">ESHIK DERAZA</h2>
          <p>Qo‘llab quvvatlash</p>
          <p className="font-semibold">+998999999999</p>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt />
            <span>Olmazor, Toshkent</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <span>Eshikrom@gmail.com</span>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold">Ma’lumotlar</h3>
          <ul className="space-y-1">
            <li>Biz haqimizda</li>
            <li>To‘lov va yetkazib berish</li>
            <li>Blog</li>
            <li>To‘lovni qaytarish va tovarlarni almashtirish</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold invisible md:visible">⠀</h3>
          <ul className="space-y-1">
            <li>Eco-friendly</li>
            <li>Bonus va aksiyalar</li>
            <li>Servis markazlari</li>
            <li>Ommaviy oferta</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 py-4">
        <div className="container containerPaddings flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-600">
          <p>© 2024. OOO "Eshikrom store"</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-black">Ommaviy oferta</a>
            <a href="#" className="hover:text-black">Maxfiylik siyosati</a>
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
