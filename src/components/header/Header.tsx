import imageLacation from '../../assets/images/icons/Vector (5).svg'
import imgPhone from '../../assets/images/icons/Vector (6).svg'

function Header() {
  return (
    <div className="header container bg-primary p-3 containerPaddings_media_md">
      <div className="flex-between">
      <div className="header-title flex items-center gap-2 cursor-pointer">
        <img src={imageLacation} alt="iconka" />
        <h2>FerganaCity</h2>
      </div>
      <div className="header-right-boxs flex-center gap-10">
      <div className="header-languages">
        <select title="Til" className='select bg-primary'>
          <option value="uz">Uzb</option>
          <option value="eng">Eng</option>
          <option value="ru">Ru</option>
        </select>
      </div>
      <div className="header-fonNamber flex-center gap-2 cursor-pointer">
      <img src={imgPhone} alt="iconka" />
        <span className='hidden lg:block'>+998 815 20 77</span>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Header