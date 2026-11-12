
const experiences = [
    {
        period: "2026", // Replace with your actual internship dates
        role: "Research Intern – Deep Learning & Computer Vision",
        company: "AMIR Lab, AIUB",
        description:
            "Worked on deep learning and computer vision research, contributing to medical image analysis and model evaluation. Participated in dataset preparation, experimental analysis, and research activities for an OCT image classification study.",
        technologies: [
            "Python",
            "Deep Learning",
            "Computer Vision",
            "YOLO",
            "Jupyter Notebook"
        ],
        current: true,
    },
    {
        period: "2026",
        role: "Undergraduate Researcher",
        company: "American International University–Bangladesh",
        description:
            "Conducted research on congenital anomaly detection in medical images using a YOLOv8-based deep learning model. Contributed to model development, training, evaluation, and research manuscript preparation as part of a three-member research team.",
        technologies: [
            "Python",
            "YOLOv8",
            "Deep Learning",
            "Medical Image Analysis",
            "Jupyter Notebook"
        ],
        current: false,
    }

];


export const Experience = () => {
    return (
        <section
          id="experience"
          className="pt-20 pb-12 relative overflow-hidden"
        >
        {/*bg glows*/}
        <div 
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 
          rounded-full blur-3xl -translate-y-1/2"
        /> 

        <div className="container mx-auto px-6 relative z-10">
            {/* section header*/}
            <div className="max-w-3xl mb-16">
                <span
                    className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in"
                >
                    Career Journey
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in 
                    animation-delay-100 text-secondary-foreground"
                >
                    Experience that {" "} 
                    <span className="font-serif italic font-normal text-white">
                        {" "}
                        shapes my journey.
                    </span>
                </h2>

                <p className="text-muted-foreground animate-fade-in animation-delay-200">
                    My journey combines academic learning, research, and hands-on
                    experience in technology. Through research and practical projects,
                    I have been developing my skills in data science, machine learning,
                    and computer vision while continuously exploring new opportunities
                    to learn and grow.

                </p>

                
            </div>


            {/* Timeline */}
            <div className="relative">

                {/* Center timeline line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

                {/* Experience items */}
                <div className="space-y-12">

                    {experiences.map((exp, idx) => (
                        <div
                            key={idx}
                            className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                            style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                        >

                            {/* Timeline dot */}
                            <div className="absolute left-0 md:left-1/2 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background shadow-[0_0_12px_rgba(32,178,166,0.8)] z-10" >
                                {exp.current && (
                                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"/>
                                )}
                            </div>

                            {/* Experience content */}
                            <div
                                className={`pl-8 md:pl-0 ${
                                    idx % 2 === 0
                                        ? "md:pr-16 md:text-right"
                                        : "md:col-start-2 md:pl-16"
                                }`}
                            >

                                <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">

                                    <span className="text-sm text-primary font-medium">
                                        {exp.period}
                                    </span>

                                    <h3 className="text-xl font-semibold mt-2">
                                        {exp.role}
                                    </h3>

                                    <p className="text-muted-foreground">
                                        {exp.company}
                                    </p>

                                    <p className="text-sm text-muted-foreground mt-4">
                                        {exp.description}
                                    </p>

                                    {/* Technologies */}
                                    <div
                                        className={`flex flex-wrap gap-2 mt-4 ${
                                            idx % 2 === 0
                                                ? "md:justify-end"
                                                : "md:justify-start"
                                        }`}
                                    >
                                        {exp.technologies.map((tech, techIdx) => (
                                            <span
                                                key={techIdx}
                                                className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                </div>
                            </div>

                        </div>
                    ))}

                </div>
            </div>


        </div>   
       </section>
    );
};

