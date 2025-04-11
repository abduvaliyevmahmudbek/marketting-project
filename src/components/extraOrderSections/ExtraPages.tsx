

import Button from "../../ui/Button"

function ExtraPages() {
  return (
    <div className="container mt-8 containerPaddings">
      
      <div className="extraOrder relative rounded-[20px] overflow-hidden w-full h-[280px] md:h-[250px] lg:h-[300px] bg-center bg-[url('/src/assets/images/pictures-png/profilImage.jpg')] bg-cover bg-center h-screen">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-start px-6 md:px-20">
          <div className="text-white max-w-[800px] space-y-5">
            <h1 className="text-2xl md:text-4xl font-bold leading-snug">
              Uyingizga mos bo’lgan uslubni<br />
              biz bilan yarating
            </h1>
            <p className="text-sm">
              Uslubni yaratishda bizning maxsus xodimlarimiz sizga yordam berishadi
            </p>
            <Button text="Buyurtma qilish" variant="secondary" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExtraPages
