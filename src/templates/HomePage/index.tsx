// ----------------------------------------------------------------------

import {Hero, Process, Team, Steps, Pricing, Promise, Testimonials, CallToAction, Objectives, Features} from './components';
import SingleTestimonial from "@/templates/HomePage/components/Testimonials/SingleTestimonial";

export default function HomePage({testimonials}) {
    return (
        <main>
            <Hero/>
            <Objectives/>
            <div className="sm:mt-12 md:mt-0">
                <Process/>
            </div>
            <CallToAction/>
            <Features/>
            <SingleTestimonial/>
            <Promise/>
            <Steps/>
            <Pricing/>
            {testimonials.length > 0 && <Testimonials testimonials={testimonials}/>}
            <Team/>
        </main>
    );
}
