import { useState } from "react";
import {ChevronLeft, ChevronRight, Quote} from "lucide-react";

const testimonials = [
    {
        quote:"Add genuine feedback from your research supervisor about your research contributions and technical skills.",
        author:"Supervisor's Name",
        role:"Research Supervisor, AMIR Lab",
        avatar:"/testimonials/avator.png",
    },
    {
        quote: "Add genuine feedback from your undergraduate thesis supervisor about your dedication and problem-solving abilities.",
        author: "Supervisor's Name",
        role: "Thesis Supervisor, AIUB",
        avatar: "/testimonials/avatar1.png",
    },
    {
        quote: "Add genuine feedback from a teammate about your collaboration and contributions to academic projects.",
        author: "Teammate's Name",
        role: "Project Teammate",
        avatar: "/testimonials/avatar3.png",
    },
];



export const Testimonials = () => {
    const [activeIdx, setActiveIdx] = useState(0);

    const next = () => {
        setActiveIdx((prev) => (prev + 1) % testimonials.length);

    }

    const previous = () => {
        setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
    return(
        <section 
            id="testimonials"
            className="py-32 relative overflow-hidden"
        >
            <div className="absolute top-1/2 left-1/2 w-200 h-200 bg-primary/5 
            rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 " 
            />
            <div className="container mx-auto px-6 relative z-10">
                {/*section header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary-foreground text-sm 
                    font-medium tracking-wider uppercase animate-fade-in">
                        What People Say

                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6
                    animate-fade-in animation-delay-100 text-secondary-foreground">
                        Kind words from{" "}
                        <span className="font-serif italic font-normal text-white">
                            people I've worked with.
                        </span> 
                    </h2>
                </div>

                {/*testimonials carousel */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/*main testimonial */}
                        <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
                            <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                                <Quote className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                                "{testimonials[activeIdx].quote}"
                            </blockquote>
                            <div className="flex items-center gap-4 ">
                                <img 
                                   src={testimonials[activeIdx].avatar} 
                                   alt={testimonials[activeIdx].author}
                                   className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20 "
                                />
                                <div>
                                    <div className="font-semibold">{testimonials[activeIdx].author}</div>
                                    <div className="text-sm text-muted-foreground">
                                        {testimonials[activeIdx].role}
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Testimonial navigation */}
                        <div className="flex items-center justify-center gap-4 mt-8">
                            {/* Previous button */}
                            <button
                                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                                onClick={previous}
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft />
                            </button>

                            {/* Navigation dots */}
                            <div className="flex gap-2">
                                {testimonials.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveIdx(idx)}
                                        aria-label={`Go to testimonial ${idx + 1}`}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                            idx === activeIdx
                                                ? "w-8 bg-primary"
                                                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                        }`}
                                    />
                                ))}
                            </div>

                            {/* Next button */}
                            <button
                                onClick={next}
                                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight />
                            </button>
                        </div>
                    </div>-
                </div>

            </div>

        </section>
    );
};

