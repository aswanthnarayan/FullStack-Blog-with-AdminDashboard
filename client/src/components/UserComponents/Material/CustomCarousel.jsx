import { Carousel, Button } from "@material-tailwind/react";
import Carousel1 from '../../../assets/UserAssets/Carousel1.avif'
import Carousel2 from '../../../assets/UserAssets/Carousel2.avif'
import Carousel3 from '../../../assets/UserAssets/Carousel3.avif'

const CarouselData = [
  {
    src: Carousel1,
    slogan: "The pen is mightier than the sword, use it to shape your world",
  },
  {
    src: Carousel2,
    slogan: "Write from the heart, inspire from the soul",
  },
  {
    src: Carousel3,
    slogan: "Stories waiting to be told, voices yearning to be heard",
  },
];

export function CustomCarousel() {
  return (
    <Carousel
      transition={{ duration: 1 }}
      className="h-72 overflow-hidden z-10"
    >
      {CarouselData.map((el,i) => (
        <div key={i} className="relative h-72">
          <img
            src={el.src}
            alt="image 1"
            className="w-full h-full object-cover shadow-2xl"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white">
            <p className="text-white text-center p-4 font-bold text-xl max-w-[320px]">{el.slogan}</p>
            <Button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
              Write your Blog
            </Button>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
