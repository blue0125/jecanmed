import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function MySwiper({swiper}) {
  const swiperItems = swiper.map((item: any) => 
    <SwiperSlide key={item.title}>
      <img className="hidden sm:block" src={item.img} alt={item.title} />
      <img className="block sm:hidden" src={item.mobileImg} alt={item.title} />
    </SwiperSlide>
  );
  return (
    <Swiper className='shadow-xl'>
      { swiperItems }
    </Swiper>
  );
}
