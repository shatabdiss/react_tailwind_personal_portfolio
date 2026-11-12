import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown, Download} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const particles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  duration: `${15 + Math.random() * 20}s`,
  delay: `${Math.random() * 5}s`,
}));

const skills = [
    "Python",
    "SQL",
    "JavaScript",
    "Pandas",
    "NumPy",
    "PostgreSQL",
    "MySQL",
    "Power BI",
    "Matplotlib",
    "Scikit-learn",
    "Machine Learning",
    "Deep Learning",
    "Git",
    "GitHub",
];

export const Hero = () => {
    return (
       <section className="relative min-h-screen flex flex-col items-center overflow-hidden">  

        {/*background image*/}
        <div className="absolute inset-0">
          <img
            src="/images/hero1-background.png"
            alt="Hero image"
            className="w-full h-full object-cover opacity-40" 
          />
          <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"/>
        </div>

        {/* Green Dots*/}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle)  => (
               <div
                    key={particle.id}
                    className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                    style={{ 
                        backgroundColor: "#20B2A6",
                        left: particle.left,
                        top: particle.top,
                        animation: `slow-drift ${particle.duration} ease-in-out infinite`,
                        animationDelay: particle.delay,
                    }}
               />
            ))}
        </div>
        
        {/*content*/}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/*left column-text content*/}
                <div className="w-full rounded-3xl bg-[#171f23] p-5 md:p-6">
                    {/* Introduction card */}
                    <div className="w-full rounded-3xl bg-[#171f23] p-5 md:p-6">
                        {/* Professional identity badge */}
                        <div className="inline-flex items-center gap-2 rounded-full
                                        border border-primary/30 bg-primary/10
                                        px-4 py-2 mb-4">

                            <span className="h-2.5 w-2.5 rounded-full bg-primary"></span>

                            <span className="text-primary text-sm font-medium">
                            Data Science, Data Analytics & Machine Learning Enthusiast
                            </span>
                        </div>

                        {/* Main heading */}
                        <h1 className="text-3xl md:text-3xl font-bold text-foreground leading-tight animate-fade-in animation-delay-100">
                            Hi, I'm Shatabdi Sarker.
                        </h1>

                        {/* Subtitle */}
                        <h2 className="mt-4 text-xl md:text-2xl font-medium text-primary animate-fade-in animation-delay-300">
                            Turning Data into Insights.
                        </h2>

                        {/* Introduction */}
                        <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground animate-fade-in animation-delay-500">
                            I am a Computer Science graduate with a strong interest in
                            Data Science, Data Analytics, and Machine Learning. I enjoy
                            learning new technologies, exploring data, and developing my
                            technical skills through hands-on projects. I am eager to
                            apply my knowledge, gain practical experience, and grow as
                            a professional in the field of data.
                        </p>
                        </div>

                        {/* CTA buttons */}
                        <div className="flex flex-wrap gap-3 animate-fade-in animation-delay-300">
                            <Button size="lg">
                                Contact Me <ArrowRight className="w-5 h-5" />
                            </Button>
                            <AnimatedBorderButton>
                                <Download className="w-5 h-5"/>
                                Download CV
                            </AnimatedBorderButton>
                            
                        </div>


                        {/* Social links */}
                        <div className="flex items-center gap-4 mt-5 animate-fade-in animation-delay-400">

                            <span className="text-sm text-muted-foreground">
                                Follow me:
                            </span>

                            <a
                                href="https://github.com/shatabdiss"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                            >
                                <FaGithub className="w-5 h-5" />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/shatabdi-sarker-s/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                            >
                                <FaLinkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>    
                    
                {/*right column-profile image*/}
                <div className="relative animate-fade-in animation-delay-300">
                    {/*profile image*/}
                    <div className="relative max-w-sm mx-auto">
                        <div className="absolute inset-0 rounded-3xl bg-linear-to-br 
                        from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"
                        />
                        <div className="relative glass rounded-3xl p-2 glow-border">
                            <img 
                                src="/images/profile.png" 
                                alt="Shatabdi Sarker" 
                                className="w-full aspect-4/5 object-cover rounded-2xl"
                            />
                            {/*floating badge*/}
                            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                                    <span className="text-sm font-medium">
                                        Available for work
                                    </span>
                                </div>
                            </div>
                        
                            {/*stats badge*/}
                            <div className="absolute -top-4 -left-4 glasss rounded-xl px-4 py-3 animate-float animation-delay-500">
                                <div className="text-2xl font-bold text-primary">2026</div>
                                <div className="text-s text-muted-foreground">
                                    CSE Graduate
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            {/* Skills section */}
            <div className="mt-20 mb-10 animate-fade-in animation-delay-600">

            <p className="text-sm text-muted-foreground mb-6 text-center">
                Technologies I work with
            </p>

                <div className="w-full overflow-hidden">

                    {/* Moving track */}
                    <div className="flex w-max items-center gap-12 animate-marquee">

                    {[...skills, ...skills].map((skill, idx) => (
                        <div
                        key={`${skill}-${idx}`}
                        className="shrink-0"
                        >
                        <span className="text-lg font-semibold text-muted-foreground hover:text-primary transition-colors">
                            {skill}
                        </span>
                        </div>
                    ))}

                    </div>

                </div>
            </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">

        <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary"
        >
            <span className="text-xs uppercase tracking-wider">
            Scroll
            </span>

            <ChevronDown className="w-6 h-6 animate-bounce" />

        </a>

        </div>

       </section>
    );
};

