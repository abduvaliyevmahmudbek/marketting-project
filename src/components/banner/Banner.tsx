import Button from '../../ui/Button';
import bannerImg from '../../assets/images/pictures-png/Group 4.png';

function Banner() {
  return (
    <div className="container containerPaddings">
      <div className="banner flex justify-between items-center gap-5 rounded-[30px] bg-primary mt-8">
        <div className="banner-text-box max-w-[470px] w-1/2 h-[349px] flex gap-5 flex-col justify-center items-start pl-20 mr-12">
          <span className="banner-span bg-red-600 text-white py-2 px-2 rounded-[20px_0_20px_0]">
            Chegirma
          </span>
          <h1 className="text-4xl font-bold text-gray-900">
            Katta chegirma
          </h1>
          <p className="text-gray-600 max-w-md">
            MDF eshiklarini 40% chegirma narxda sotib olishga ulgurib qoling
          </p>
          <Button text="Sotib olish" variant="secondary" />
        </div>

        <div className="flex-1 flex justify-center">
          <img src={bannerImg} alt="Chegirma eshik" className="max-w-full h-auto object-contain" />
        </div>

      </div>
    </div>
  );
}

export default Banner;
