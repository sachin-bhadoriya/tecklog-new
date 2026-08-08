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


const projects = [
  { img: 'https://res.cloudinary.com/dm0rfcoxl/image/upload/v1785994446/Gemini_Generated_Image_b3o437b3o437b3o4_yncp4s.png', title: 'Project 1' },
  { img: 'https://res.cloudinary.com/dm0rfcoxl/image/upload/v1785994451/Gemini_Generated_Image_bdnvsubdnvsubdnv_cbth2m.png', title: 'Project 2' },
  { img: 'https://res.cloudinary.com/dm0rfcoxl/image/upload/v1785994452/Gemini_Generated_Image_i8ofnji8ofnji8of_maksug.png', title: 'Project 3' },
  { img: 'https://res.cloudinary.com/dm0rfcoxl/image/upload/v1785994455/Gemini_Generated_Image_b3o437b3o437b3o4_1_wonb2l.png', title: 'Project 4' },
  { img: 'https://res.cloudinary.com/dm0rfcoxl/image/upload/v1785994455/Gemini_Generated_Image_b3o437b3o437b3o4_1_wonb2l.png', title: 'Project 5' },
  { img: 'https://res.cloudinary.com/dm0rfcoxl/image/upload/v1785994455/Gemini_Generated_Image_3pddp33pddp33pdd_i9x4ci.png', title: 'Project 6' },
  { img: 'https://res.cloudinary.com/dm0rfcoxl/image/upload/v1785994461/Gemini_Generated_Image_oqlllnoqlllnoqll_2_l9aqag.png', title: 'Project 7' },
  { img: 'https://res.cloudinary.com/dm0rfcoxl/image/upload/v1785994471/Gemini_Generated_Image_ihewk5ihewk5ihew_isjxde.png', title: 'Project 8' },
  { img: 'https://res.cloudinary.com/dm0rfcoxl/image/upload/v1785994484/Gemini_Generated_Image_n29fp0n29fp0n29f_k5hisz.png', title: 'Project 9' },
  { img: 'https://res.cloudinary.com/dm0rfcoxl/image/upload/v1785994480/Gemini_Generated_Image_nay5d3nay5d3nay5_it5bzz.png', title: 'Project 10' },
  { img: 'https://res.cloudinary.com/dm0rfcoxl/image/upload/v1785994479/Gemini_Generated_Image_oqlllnoqlllnoqll_kg9srl.png', title: 'Project 11' },
]

const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section>
      <div className="common-padding-small">
        <div className='contact-section-big-image'>
          <img src="https://res.cloudinary.com/dm0rfcoxl/image/upload/v1786170328/contact_pklthn.png" alt="Tecklog - Hero Section Image" />
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-section">
        <div className="container">
          <div className="common-padding">
            <div className="grid grid-cols-12 gap-6 items-start">
              <div className="col-span-12 md:col-span-6 md:sticky md:top-20">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56034.92128557346!2d77.25771683407946!3d28.62428952104633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce48907b9ef0f%3A0x8d0cf5c34a0963e1!2sNew%20Ashok%20Nagar!5e0!3m2!1sen!2sin!4v1786167946376!5m2!1sen!2sin"
                style={{width: '100%', minHeight: '300px'}} className='boxshadow round10' allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
              </div>
              <div className="col-span-12 md:col-span-6">
                <h2 className="font18 fw600 mb-2">/ Get in Touch ?</h2>
                <p className="font16 fw400 text-gray-600 leading-tight mb-4">Have a project in mind or want to discuss your ideas? Fill out the form below, and our team will get back to you promptly.</p>
                <form action="" method="POST" className='contact-form'>
                  <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-12 md:col-span-6">
                      <input type="text" name="name" placeholder="Your Name*" required className='w-full py-2.5 px-3 border border-gray-300 hover:border-blue-500 rounded-lg' />
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <input type="number" name="number" placeholder="Your Phone Number*" required className='w-full py-2.5 px-3 border border-gray-300 hover:border-blue-500 rounded-lg' />
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <input type="number" name="number" placeholder="Your Budget" required className='w-full py-2.5 px-3 border border-gray-300 hover:border-blue-500 rounded-lg' />
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <select name="service" id="service" className='w-full py-2.5 px-3 border border-gray-300 hover:border-blue-500 rounded-lg'>
                        <option value="">Select Service*</option>
                        <option value="web-development">Web Development</option>
                        <option value="app-development">App Development</option>
                        <option value="ai-solutions">AI Solutions</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="col-span-12">
                      <textarea name="message" rows="4" placeholder="Your Message" required className='w-full py-2.5 px-3 border border-gray-300 hover:border-blue-500 rounded-lg'></textarea>
                    </div>
                    <div className="col-span-12">
                      <button type='submit' class="nav-cta-btn rounded-full text-nowrap bg-blue-500 px-5 py-2.5 text-sm cursor-pointer font-semibold text-white transition-all hover:shadow-lg hover:bg-slate-700">Get In Touch</button>
                    </div>
                  </div>
                </form>
              </div>
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

export default Contact