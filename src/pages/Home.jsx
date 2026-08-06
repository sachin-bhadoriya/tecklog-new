import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CallToAction from '../components/CallToAction';
import Testimonials from '../components/Testimonials';

const services = [
  {
    title: 'Custom Software Development',
    description:
      'Scalable software tailored specifically to your business processes.Build secure, high-performance business applications including ERP, CRM, HRMS, inventory management systems, dashboards, and enterprise portals with future-ready architecture.',
    slides: [
      { img: 'https://plus.unsplash.com/premium_photo-1682430990153-8f0ecc3b9b50', title: 'ERP & CRM Development', desc: 'Description of the service offered.' },
      { img: 'https://plus.unsplash.com/premium_photo-1682430990153-8f0ecc3b9b50', title: 'Business Automation', desc: 'Description of the service offered.' },
      { img: 'https://plus.unsplash.com/premium_photo-1682430990153-8f0ecc3b9b50', title: 'Enterprise Dashboards', desc: 'Description of the service offered.' },
      { img: 'https://plus.unsplash.com/premium_photo-1682430990153-8f0ecc3b9b50', title: 'API Integration', desc: 'Description of the service offered.' },
      { img: 'https://plus.unsplash.com/premium_photo-1682430990153-8f0ecc3b9b50', title: 'Cloud Applications', desc: 'Description of the service offered.' },
    ],
  },
  {
    title: 'Web Development',
    description:
      'Modern websites engineered for speed, SEO, and conversions.We create responsive corporate websites, SaaS platforms, landing pages, and eCommerce solutions using the latest technologies.',
    slides: [
      { img: 'https://plus.unsplash.com/premium_photo-1682430990153-8f0ecc3b9b50', title: 'Corporate Websites', desc: 'Description of the service offered.' },
      { img: 'https://plus.unsplash.com/premium_photo-1682430990153-8f0ecc3b9b50', title: 'SaaS Platforms', desc: 'Description of the service offered.' },
      { img: 'https://plus.unsplash.com/premium_photo-1682430990153-8f0ecc3b9b50', title: 'eCommerce', desc: 'Description of the service offered.' },
      { img: 'https://plus.unsplash.com/premium_photo-1682430990153-8f0ecc3b9b50', title: 'CMS Development', desc: 'Description of the service offered.' },
      { img: 'https://plus.unsplash.com/premium_photo-1682430990153-8f0ecc3b9b50', title: 'SEO Optimization', desc: 'Description of the service offered.' },
    ],
  },
  {
    title: 'Mobile App Development',
    description:
      'Native and cross-platform applications built for exceptional experiences.Launch Android and iOS applications that are fast, secure, scalable, and optimized for every screen size.',
    slides: [
      { img: 'https://plus.unsplash.com/premium_photo-1682430990153-8f0ecc3b9b50', title: 'Android Apps', desc: 'Description of the service offered.' },
      { img: 'https://plus.unsplash.com/premium_photo-1682430990153-8f0ecc3b9b50', title: 'iOS Apps', desc: 'Description of the service offered.' },
      { img: 'https://plus.unsplash.com/premium_photo-1682430990153-8f0ecc3b9b50', title: 'React Native', desc: 'Description of the service offered.' },
      { img: 'https://plus.unsplash.com/premium_photo-1682430990153-8f0ecc3b9b50', title: 'Flutter', desc: 'Description of the service offered.' },
      { img: 'https://plus.unsplash.com/premium_photo-1682430990153-8f0ecc3b9b50', title: 'App Maintenance', desc: 'Description of the service offered.' },
    ],
  },
  {
    title: 'UI / UX Design',
    description:
      'Beautiful interfaces designed around your users.We craft intuitive user journeys, wireframes, prototypes, and polished interfaces that increase engagement and conversions.',
    slides: [
      { img: 'https://plus.unsplash.com/premium_photo-1682430990153-8f0ecc3b9b50', title: 'User Research', desc: 'Description of the service offered.' },
      { img: 'https://plus.unsplash.com/premium_photo-1682430990153-8f0ecc3b9b50', title: 'Wireframes', desc: 'Description of the service offered.' },
      { img: 'https://plus.unsplash.com/premium_photo-1682430990153-8f0ecc3b9b50', title: 'Interactive Prototype', desc: 'Description of the service offered.' },
      { img: 'https://plus.unsplash.com/premium_photo-1682430990153-8f0ecc3b9b50', title: 'Design System', desc: 'Description of the service offered.' },
      { img: 'https://plus.unsplash.com/premium_photo-1682430990153-8f0ecc3b9b50', title: 'Figma Design', desc: 'Description of the service offered.' },
    ],
  },
  {
    title: 'AI Solutions',
    description:
      'Automate workflows and unlock business intelligence.Implement AI-powered chatbots, recommendation engines, predictive analytics, document processing, and intelligent automation.',
    slides: [
      { img: 'https://plus.unsplash.com/premium_photo-1682430990153-8f0ecc3b9b50', title: 'AI Chatbots', desc: 'Description of the service offered.' },
      { img: 'https://plus.unsplash.com/premium_photo-1682430990153-8f0ecc3b9b50', title: 'Machine Learning', desc: 'Description of the service offered.' },
      { img: 'https://plus.unsplash.com/premium_photo-1682430990153-8f0ecc3b9b50', title: 'Automation', desc: 'Description of the service offered.' },
      { img: 'https://plus.unsplash.com/premium_photo-1682430990153-8f0ecc3b9b50', title: 'OpenAI Integration', desc: 'Description of the service offered.' },
      { img: 'https://plus.unsplash.com/premium_photo-1682430990153-8f0ecc3b9b50', title: 'AI Agents', desc: 'Description of the service offered.' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    description:
      'Deploy, monitor, and scale with confidence.Cloud-native infrastructure and DevOps practices that ensure reliable deployments, high availability, and continuous delivery.',
    slides: [
      { img: 'https://plus.unsplash.com/premium_photo-1682430990153-8f0ecc3b9b50', title: 'AWS', desc: 'Description of the service offered.' },
      { img: 'https://plus.unsplash.com/premium_photo-1682430990153-8f0ecc3b9b50', title: 'Azure', desc: 'Description of the service offered.' },
      { img: 'https://plus.unsplash.com/premium_photo-1682430990153-8f0ecc3b9b50', title: 'Docker', desc: 'Description of the service offered.' },
      { img: 'https://plus.unsplash.com/premium_photo-1682430990153-8f0ecc3b9b50', title: 'Kubernetes', desc: 'Description of the service offered.' },
      { img: 'https://plus.unsplash.com/premium_photo-1682430990153-8f0ecc3b9b50', title: 'CI/CD Pipeline', desc: 'Description of the service offered.' },
    ],
  },
]

const brands = [
  { src: 'https://res.cloudinary.com/dm0rfcoxl/image/upload/v1785991583/html_jvhguv.png', alt: 'Brand 1' },
  { src: 'https://res.cloudinary.com/dm0rfcoxl/image/upload/v1785991583/css_gc3yso.png', alt: 'Brand 2' },
  { src: 'https://res.cloudinary.com/dm0rfcoxl/image/upload/v1785991582/bootstrap_klw3ub.png', alt: 'Brand 3' },
  { src: 'https://res.cloudinary.com/dm0rfcoxl/image/upload/v1785991953/icons8-tailwind-css-48_zgt38i.png', alt: 'Brand 4' },
  { src: 'https://res.cloudinary.com/dm0rfcoxl/image/upload/v1785991583/js_ajz0pk.png', alt: 'Brand 4' },
  { src: 'https://res.cloudinary.com/dm0rfcoxl/image/upload/v1785991582/physics_e9weeq.png', alt: 'Brand 4' },
  { src: 'https://res.cloudinary.com/dm0rfcoxl/image/upload/v1785991582/wordpress-icon_ulyaen.png', alt: 'Brand 4' },
  { src: 'https://res.cloudinary.com/dm0rfcoxl/image/upload/v1785991582/shopify_auwztm.png', alt: 'Brand 4' },
  { src: 'https://res.cloudinary.com/dm0rfcoxl/image/upload/v1785991582/react_vjerwh.png', alt: 'Brand 4' },
  { src: 'https://res.cloudinary.com/dm0rfcoxl/image/upload/v1785991582/nodejs_mpp6cf.png', alt: 'Brand 4' },
  { src: 'https://res.cloudinary.com/dm0rfcoxl/image/upload/v1785991953/icons8-express-js-50_dilhyv.png', alt: 'Brand 4' },
  { src: 'https://res.cloudinary.com/dm0rfcoxl/image/upload/v1785991953/icons8-python-48_esdrye.png', alt: 'Brand 4' },
]

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section>
      <div className="common-padding-small">
        <div className='hero-section-big-image'>
          <img src="https://res.cloudinary.com/dm0rfcoxl/image/upload/v1785992492/Gemini_Generated_Image_b9hixab9hixab9hi_gedh2p.png" alt="Tecklog - Hero Section Image" />
          <div className="hero-section-content">
            <h1 className="font50 text-white fw700">
              and future-ready digital solutions.
            </h1>
            <p className='font14 fw300 '>
              At Techlog, we build more than software—we create digital experiences that solve real business challenges. Our team combines strategy, design, engineering, and AI to develop scalable products that help businesses grow faster, operate smarter, and stay ahead of the competition.
            </p>
          </div>
        </div>

        {/* Marquee Section */}
        <div className="relative overflow-hidden py-8 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-16">
            {[...brands, ...brands, ...brands].map((brand, i) => (
              <img
                key={i}
                src={brand.src}
                alt={brand.alt}
                className="h-10 w-auto flex-shrink-0 grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              />
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="home-about-section">
        <div className="container">
          <div className="common-padding">
            <div className="grid grid-cols-12 gap-6 items-start">
              <div className="col-span-12 md:col-span-6 md:sticky md:top-20">
                <h2 className="font18 fw500 text-gray-600 mb-6">Technology That Drives Business Growth</h2>
                <img className='rounded-lg shadow-md' src="https://plus.unsplash.com/premium_photo-1682430990153-8f0ecc3b9b50" alt="About Techies" />
              </div>
              <div className="col-span-12 md:col-span-6">
                <p className="font30 fw500 leading-tight">
                  <span className="text-gray-700">Helping startups, SMEs, and enterprises build reliable, scalable, </span>and future-ready digital solutions.
                </p>
                <p className='font17 fw500 text-gray-600 mt-5 md:mt-10'>
                  At Techlog, we build more than software—we create digital experiences that solve real business challenges. Our team combines strategy, design, engineering, and AI to develop scalable products that help businesses grow faster, operate smarter, and stay ahead of the competition.
                </p>
                <div className="grid grid-cols-12 gap-4 mt-5 md:mt-10">
                  <div className="col-span-6 flex flex-col justify-between bg-white px-8 py-6 round20 boxshadow">
                    <h3 className="font13 fw400 text-gray-400 mb-12">/ Products Deliver</h3>
                    <p className='font32 fw700 colorprimary'>
                      500+
                    </p>
                  </div>
                  <div className="col-span-6 flex flex-col justify-between bg-white px-8 py-6 round20 boxshadow">
                    <h3 className="font13 fw400 text-gray-400 mb-12">/ Client Satisfaction</h3>
                    <p className='font32 fw700 colorprimary'>
                      500+
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Section */}
      <div className="common-padding-small">
        <div className='project-section-image mt-4 sticky top-4'>
          <img src="https://res.cloudinary.com/dm0rfcoxl/image/upload/v1785994446/Gemini_Generated_Image_b3o437b3o437b3o4_yncp4s.png" alt="Tecklog - Hero Section Image" />
        </div>
        <div className='project-section-image mt-4 sticky top-4'>
          <img src="https://res.cloudinary.com/dm0rfcoxl/image/upload/v1785994451/Gemini_Generated_Image_bdnvsubdnvsubdnv_cbth2m.png" alt="Tecklog - Hero Section Image" />
        </div>
        <div className='project-section-image mt-4 sticky top-4'>
          <img src="https://res.cloudinary.com/dm0rfcoxl/image/upload/v1785994452/Gemini_Generated_Image_i8ofnji8ofnji8of_maksug.png" alt="Tecklog - Hero Section Image" />
        </div>
        <div className='project-section-image mt-4 sticky top-4'>
          <img src="https://res.cloudinary.com/dm0rfcoxl/image/upload/v1785994455/Gemini_Generated_Image_b3o437b3o437b3o4_1_wonb2l.png" alt="Tecklog - Hero Section Image" />
        </div>
        <div className='project-section-image mt-4 sticky top-4'>
          <img src="https://res.cloudinary.com/dm0rfcoxl/image/upload/v1785994455/Gemini_Generated_Image_b3o437b3o437b3o4_1_wonb2l.png" alt="Tecklog - Hero Section Image" />
        </div>
        <div className='project-section-image mt-4 sticky top-4'>
          <img src="https://res.cloudinary.com/dm0rfcoxl/image/upload/v1785994455/Gemini_Generated_Image_3pddp33pddp33pdd_i9x4ci.png" alt="Tecklog - Hero Section Image" />
        </div>
        <div className='project-section-image mt-4 sticky top-4'>
          <img src="https://res.cloudinary.com/dm0rfcoxl/image/upload/v1785994461/Gemini_Generated_Image_oqlllnoqlllnoqll_2_l9aqag.png" alt="Tecklog - Hero Section Image" />
        </div>
        <div className='project-section-image mt-4 sticky top-4'>
          <img src="https://res.cloudinary.com/dm0rfcoxl/image/upload/v1785994471/Gemini_Generated_Image_ihewk5ihewk5ihew_isjxde.png" alt="Tecklog - Hero Section Image" />
        </div>
        <div className='project-section-image mt-4 sticky top-4'>
          <img src="https://res.cloudinary.com/dm0rfcoxl/image/upload/v1785994484/Gemini_Generated_Image_n29fp0n29fp0n29f_k5hisz.png" alt="Tecklog - Hero Section Image" />
        </div>
        <div className='project-section-image mt-4 sticky top-4'>
          <img src="https://res.cloudinary.com/dm0rfcoxl/image/upload/v1785994480/Gemini_Generated_Image_nay5d3nay5d3nay5_it5bzz.png" alt="Tecklog - Hero Section Image" />
        </div>
        <div className='project-section-image mt-4 sticky top-4'>
          <img src="https://res.cloudinary.com/dm0rfcoxl/image/upload/v1785994479/Gemini_Generated_Image_oqlllnoqlllnoqll_kg9srl.png" alt="Tecklog - Hero Section Image" className='hero-section-big-image mt-4 sticky top-4' />
        </div>
      </div>
      {/* Service Section */}
      <div className="home-about-section">
        <div className="container">
          <div className="common-padding">
            <div className="grid grid-cols-12 gap-3 md:gap-6 items-start">
              <div className="col-span-12 md:col-span-3 md:sticky md:top-20">
                <h2 className="font18 fw500 text-gray-600 mb-0 md:mb-6">What We Delivers</h2>
              </div>
              <div className="col-span-12 md:col-span-9">
                <p className="font50 fw600 leading-tight">
                  Web, AI & Growth <span className='fontsecondary font52 fw500'><i>Services</i></span> That Scale Your Business
                </p>
              </div>
            </div>

            {/* Service List Accordion */}
            <div className="service-accordion-container mt-10">
              {services.map((service, index) => {
                const isOpen = openIndex === index
                return (
                  <div className='service-accordion-items' key={index}>
                    <div className={` ${isOpen ? 'bg-white round10 boxshadow' : ''}  px-8 py-4  mt-5`}>
                      <div
                        className={`service-accordion-head flex gap-2 items-center justify-between cursor-pointer ${isOpen ? 'active' : ''}`}
                        onClick={() => toggleAccordion(index)}
                      >
                        <div className="font16 fw500 text-gray-400">/{String(index + 1).padStart(2, '0')}</div>
                        <h3 className="font24 fw500 text-center">{service.title}</h3>
                        <div className="accordion-icon">
                          <i className="fa-solid fa-chevron-down"></i>
                        </div>
                      </div>

                      <div className={`service-accordion-content text-gray-600 font16 fw400 ${isOpen ? 'active' : ''}`}>
                        <p className="mb-7">{service.description}</p>

                        <Swiper
                          className="ServiceAccordionSwiper"
                          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                          spaceBetween={10}
                          slidesPerView={2}
                          breakpoints={{
                            767: { slidesPerView: 3 }
                          }}
                          autoplay={{ delay: 5000 }}
                          pagination={{ clickable: true }}
                        >
                          {service.slides.map((slide, i) => (
                            <SwiperSlide key={i}>
                              <Link>
                                <img className="rounded-lg shadow-md" src={slide.img} alt={slide.title} />
                                <h4 className="mt-3 font16 text-gray-700 fw600">{slide.title}</h4>
                                <p className="font15">{slide.desc}</p>
                              </Link>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    </div>
                    <div className="hrStroke"></div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Cta Section */}
      <CallToAction />

    </section>
  )
}

export default Home