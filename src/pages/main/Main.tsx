import bg from '../../assets/bg.jpg'



import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './main.css'

import { Pagination, Navigation, Autoplay } from 'swiper/modules'


export function Main(){
    
    return(
        <main className='container-main'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={bg} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bg} alt='' />
                </SwiperSlide>
            </Swiper>
        </main>
        
    )
}