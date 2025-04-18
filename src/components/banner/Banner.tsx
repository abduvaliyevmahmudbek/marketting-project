import bannerImg from '../../assets/images/pictures-png/Group 4.png';
import bannerImg_responsive from '../../assets/images/pictures-png/door-img-repon.png';

function Banner() {
  return (
    <div className="container px-4 md:px-6 py-4 containerPaddings_media_md">
      <div className="relative flex flex-col md:flex-row items-center justify-between bg-[#f4f4f6] rounded-2xl overflow-hidden p-6 md:p-0 w-full">

        <span className="absolute top-0 left-0 bg-red-600 text-white text-xs font-bold px-4 py-2 uppercase rounded-[24px_0]">
          chegirma
        </span>

        <div className="flex flex-col justify-center items-start gap-4 w-full md:w-1/2 px-2 md:px-20 py-4 md:py-10">
          <h1 className="text-[clamp(20px,5vw,36px)] font-extrabold text-gray-900 leading-tight">
            KATTA CHEGIRMA
          </h1>
          <p className="text-[clamp(12px,3.5vw,16px)] text-gray-600 max-w-md leading-relaxed">
            MDF eshiklarini 40% chegirma narxda sotib olishga ulgurib qoling
          </p>
          <button className="hidden md:block mt-2 bg-black text-white text-sm md:text-base font-medium py-2 px-5 rounded hover:bg-gray-800 transition">
            Sotib olish
          </button>
        </div>

        <div className="w-full md:w-1/2 flex-column items-start flex gap-5 py-4">
          <img src={bannerImg} alt="Chegirma eshik" className="hidden  w-full max-w-[550px] h-auto object-contain bg-white rounded-2xl" />
          <img src={bannerImg_responsive} alt="Chegirma eshik" className="w-full bg-white md:bg-[#f4f4f6] md:max-w-[300px] h-full object-fill rounded-2xl" />
          <button className="max-w-full sm:w-1/2 md:hidden w-full md:max-w-[300px] mt-2 bg-black text-white text-sm md:text-base font-medium py-2 px-5 rounded hover:bg-gray-800 transition">
            Sotib olish
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
