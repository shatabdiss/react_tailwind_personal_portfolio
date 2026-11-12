import {
  ChartNoAxesCombined,
  BrainCircuit,
  Search,
  BookOpen,
} from "lucide-react";


const highlights = [
  {
    icon: ChartNoAxesCombined,
    title: "Data-Driven Thinking",
    description:
      "Exploring datasets, identifying patterns, and transforming information into meaningful insights.",
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning",
    description:
      "Exploring machine learning and deep learning techniques to develop intelligent solutions.",
  },
  {
    icon: Search,
    title: "Research & Problem Solving",
    description:
      "Applying analytical thinking and experimentation to investigate problems and explore practical solutions.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Continuously developing technical knowledge and adapting to emerging technologies.",
  },
];


export const About = () => {
    return(
        <section id="about" className="pt-20 pb-12 relative overflow-hidden">  
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/*left column*/}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                           <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                              About Me
                           </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            Exploring data,
                            <span className="font-serif italic font-normal text-white">
                                {""}
                                discovering insights, and solving problems.
                            </span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                I am a Computer Science and Engineering graduate from
                                American International University-Bangladesh (AIUB),
                                with a strong interest in Data Science, Data Analytics,
                                and Machine Learning. My academic journey has helped me
                                develop a solid foundation in programming, analytical
                                thinking, and problem-solving.
                            </p>
                            <p>
                                I enjoy exploring data, uncovering meaningful patterns,
                                and transforming raw information into useful insights.
                                Through academic projects and research, I have gained
                                hands-on experience with Python, SQL, PostgreSQL,
                                Power BI, and deep learning technologies.
                            </p>
                            <p>
                                Beyond my academic background, I am continuously
                                learning and exploring new technologies to strengthen
                                my skills. My goal is to grow as a Data Scientist,
                                contribute to meaningful projects, and use data-driven
                                approaches to solve real-world problems.
                            </p>
                        </div> 

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                "I believe that every dataset tells a story waiting to be
                                discovered. My mission is to explore that story, uncover
                                valuable insights, and turn them into meaningful solutions.
                                Through continuous learning, experimentation, and
                                innovation, I aspire to contribute to a future where data
                                drives smarter decisions and positive change."
                            </p>
                        </div>   
                    </div>

                    {/* Right column - highlights */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div 
                               key={idx} 
                               className="glass p-6 rounded-2xl animate-fade-in"
                               style={{animationDelay: `${(idx + 1) * 100}ms`}}
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary"/>
                                </div>
                
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>    
                        ))}
                        
                    </div>

                </div>
            </div>
        </section>
    );
};

