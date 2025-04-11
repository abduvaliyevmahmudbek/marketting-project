import sorchIcon from '../../assets/images/icons/sorch.svg'
import massageIcon from '../../assets/images/icons/massage.svg'
import profilImg from '../../assets/images/pictures-png/profilImage.jpg'
import sifatIcon from '../../assets/images/icons/sifat.svg'
import Input from './../../ui/Input';

function Navbar() {
  return (
    <div className="navbar container flex-column p-3 containerPaddings_media_md">
      <div className="flex-between py-4 gap-10">
      <div className="navbar-title cursor-pointer">
        <h1 className='text-black font-bold uppercase text-sm'>Eshik Derazalar</h1>
      </div>
      <div className="navbar-sorch flex-between gap-2 border border-gray-300 max-w-[600px] w-full rounded-[10px] px-2">
        <Input
          type="text"
          placeholder="Nomi va turi bo’yicha qidiruv..."
          className="border-gray-300"
        />
        <img src={sorchIcon} alt="sorch icon" />
      </div>
      <div className="navbar-profils hidden lg:flex items-center justify-center gap-8 cursor-pointer">
        <nav className='flex-center gap-2'>
          <img src={massageIcon} alt="" />
          <p className='bg-green-500 text-white text-sm w-6 h-6 rounded-full flex items-center justify-center'>2</p>
        </nav>
        <img src={sifatIcon} alt="" />
        <img className='profilImg' src={profilImg} alt="" />
      </div>
    </div>
    <div className="border-navbar containerPaddings"></div>
    </div>
  )
}

export default Navbar