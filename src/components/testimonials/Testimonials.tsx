import testimonialHollPNG from '../../assets/images/pictures-png/testimon_holl-png.png'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
  {
    name: "Ali Valiyev",
    position: "Frontend Developer",
    message: "Shadcn UI juda ajoyib. Tailwind bilan ishlash juda qulay!",
  },
  {
    name: "Dilnoza Karimova",
    position: "Product Manager",
    message: "Komponentlar juda silliq ishlaydi, dizayn ham juda chiroyli.",
  },
  {
    name: "Jamshid Rustamov",
    position: "UI/UX Designer",
    message: "Responsivlik muammosi yo‘q, juda foydali vosita.",
  },
  {
    name: "Mukhammad Ali",
    position: "Fullstack Developer",
    message: "Tailwind asosida to‘liq UI tizimi yaratish imkonini beradi.",
  },
  {
    name: "Zarina Rakhmatova",
    position: "QA Engineer",
    message: "Kod bazasi toza va o‘zgartirish oson.",
  },
]

function Testimonials() {
  return (
    <>
      <div className='container containerPaddings_media_md p-3'>
        <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left text-gray-800 mb-6">
          Mijozlar fikri
        </h1>
      </div>
      <div className="container min-h-[240px] h-full p-3 py-8 grid grid-cols-1 md:grid-cols-2 gap-8 testimon_margin items-center containerPaddings_media_md">
        <div className=''>
          <Carousel
            opts={{ align: "start" }}
            orientation="vertical"
            className="w-full"
          >
            <CarouselContent className="h-[160px] sm:h-[150px] md:h-[520px] lg:h-[490px]">
              {testimonials.map((item, index) => (
                <CarouselItem key={index} className="pt-2 md:basis-1/3">
                  <div className="group my-2 border border-[#F3F3F3] rounded-xl bg-[#FAFAFA] shadow-md px-4 py-3 m-[5px] hover:bg-[#212121f0] transition-colors duration-300 space-y-2">
                    <div className="text-xl md:text-2xl font-semibold group-hover:text-white">
                      {item.name}
                    </div>
                    <div className="text-xm md:text-base text-[#5d5d5d] group-hover:text-white">
                      {item.message}
                    </div>
                    <div className="text-base md:text-lg text-[#2c2c2c] group-hover:text-white">
                      {item.position}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="hidden md:flex justify-center w-full h-full testimon_margin">
          <img
            src={testimonialHollPNG}
            alt="HOLL"
            className="w-[100%] h-full rounded-2xl shadow-lg object-cover my-10 md:my-0"
          />
        </div>
      </div>
    </>
  )
}

export default Testimonials
