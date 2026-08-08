import React from 'react'
import { Link } from 'react-router-dom'

const CallToAction = () => {
    return (
        <section className="container">
            <div className="common-padding">
                <div className="call-to-action-container flex flex-col gap-3 lg:flex-row justify-between items-center bgtertiary px-10 py-15 md:rounded-full rounded-4xl md:py-10">
                    <h2 className="font16 fw300 text-white text-nowrap">Build. Innovate. Elevate</h2>
                    <p className="font30 fw500 leading-tight text-center text-white py-2">
                        Empowering businesses with modern software, AI solutions, and exceptional digital experiences.
                    </p>

                    <Link to="/contact"><div className="nav-cta-btn rounded-full text-nowrap bg-slate-950 px-5 py-2.5 text-sm cursor-pointer font-semibold text-white transition-all hover:shadow-lg">Get In Touch</div></Link>
                </div>
            </div>
        </section>
    )
}

export default CallToAction