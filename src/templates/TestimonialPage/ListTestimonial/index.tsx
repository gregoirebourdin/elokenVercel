import {Header} from "@/templates/Globals/components";
import TestimonialsGrid from "@/templates/TestimonialPage/ListTestimonial/components/TestimonialsGrid";
import {Container} from "@/templates/Globals/elements/Container";


export default function ListTestimonial({testimonials, pages, meta}) {
    return (
        <div>
            <Header
                title={meta.header}
                pages={pages}
                description={meta.introduction}
            />

            <Container
                color={undefined}
                className={'max-w-7xl py-12 sm:py-24 space-y-6'}
                id={undefined}
            >
            <TestimonialsGrid testimonials={testimonials}/>
            </Container>
        </div>

    )
};