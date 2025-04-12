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
    <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left text-gray-800 mb-6">
             Mijozlar fikri</h1>
    </div>
    <div className="container min-h-[680px] h-full p-3 pb-20 py-8 grid grid-cols-1 md:grid-cols-2 gap-8 containerPaddings_media_md testimon_margin items-center md:px-10">
      <div>
        <Carousel
          opts={{ align: "start" }}
          orientation="vertical"
          className="w-full"
        >
          <CarouselContent className="-mt-1 h-[150px] md:h-[450px] lg:h-[420px]">
            {testimonials.map((item, index) => (
              <CarouselItem key={index} className="pt-2 md:basis-1/3">
                <div className="group my-2 border border-[#F3F3F3] rounded-xl bg-[#FAFAFA] shadow-md px-4 py-3 m-[5px] hover:bg-[#212121f0] transition-colors duration-300 space-y-2">
                  <div className="text-xl font-semibold group-hover:text-white">
                    {item.name}
                  </div>
                  <div className="text-sm text-[#5d5d5d] group-hover:text-white">
                    {item.message}
                  </div>
                  <div className="text-base text-[#2c2c2c] group-hover:text-white">
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

      <div className="flex justify-center w-full h-full testimon_margin">
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
