import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Importando os estilos Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import bannerCarrousel1 from '../../assets/img/Descubra o que a natureza pode oferecer de melhor!.png';
import bannerCarrousel3 from '../../assets/img/1.png';
import bannerCarrousel2 from '../../assets/img/huge (1).gif';
// // Importando SEU CSS
import './Carousel.css';

function Carousel() {
  const items = [
    {
      img: bannerCarrousel1,
    },
    {
      img: bannerCarrousel2,
    },
    {
      img: bannerCarrousel3,
    },
  ];

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {items.map((item) => (
          <SwiperSlide>
            <img src={item.img} alt="Imagem" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
export default Carousel;
