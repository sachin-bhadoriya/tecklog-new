import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import { Pagination, Scrollbar, A11y, Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
    const prevRef = useRef(null)
    const nextRef = useRef(null)

    return (
        <section className='testimonial-section common-padding-small'>
            <div className="bgprimary text-white py-25 px-15 round40">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-3">
                        <h2 className="text-7xl fw600 fontsecondary">100+</h2>
                    </div>
                    <div className="col-span-12 md:col-span-9">
                        <h2 className="font18 fw500 mb-2">Testimonials</h2>
                        <p className="font50 fw700 leading-tight">
                            Driven by Innovation. <span className='fontsecondary font52 fw500'><i>Trusted</i></span> by Clients.
                        </p>
                    </div>
                </div>
                <Swiper
                    className="TestimonialsAccordionSwiper"
                    modules={[Pagination, Scrollbar, A11y, Autoplay, Navigation]}
                    spaceBetween={10}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 }
                    }}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onSwiper={(swiper) => {
                        // manually attach + init navigation now that refs exist
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.destroy();
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    // autoplay={{ delay: 5000, disableOnInteraction: false }}
                >
                    <SwiperSlide className='h-full'> <TestimonialCard /> </SwiperSlide>
                    <SwiperSlide className='h-full'> <TestimonialCard /> </SwiperSlide>
                    <SwiperSlide className='h-full'> <TestimonialCard /> </SwiperSlide>
                    <SwiperSlide className='h-full'> <TestimonialCard /> </SwiperSlide>
                    <SwiperSlide className='h-full'> <TestimonialCard /> </SwiperSlide>
                    <SwiperSlide className='h-full'> <TestimonialCard /> </SwiperSlide>
                </Swiper>

                <div className="testimonials-btn-container flex justify-end gap-2 mt-6">
                    <button
                        type="button"
                        ref={prevRef}
                        className='p-3 bgtertiary rounded-full w-10 h-10 flex justify-center items-center cursor-pointer'
                    >
                        <i className="fa-solid fa-angle-left"></i>
                    </button>
                    <button
                        type="button"
                        ref={nextRef}
                        className='p-3 bgtertiary rounded-full w-10 h-10 flex justify-center items-center cursor-pointer'
                    >
                        <i className="fa-solid fa-angle-right"></i>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Testimonials