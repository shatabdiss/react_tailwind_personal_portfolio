import { ArrowUpRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";


const projects = [
  {
    title: "Customer Shopping Behavior Analysis",
    description:
      "Analyzed customer shopping behavior using Python and SQL, performed exploratory data analysis, and developed a Power BI dashboard to visualize purchasing patterns and business insights.",
    image: "/projects/dashboard.png",
    tags: ["Python", "Pandas", "PostgreSQL", "SQL", "Power BI"],
    link: "#",
    github: "#",
  },
  {
    title: "Solar Panel Segmentation and Classification",
    description:
      "Worked on a deep learning-based approach for solar panel segmentation and classification using a dataset of 4,616 images.",
    image: "/projects/projects.png",
    tags: ["Python", "Deep Learning", "Image Segmentation"],
    link: "#",
    github: "#",
  },
  {
    title: "Bone Fracture Classification",
    description:
      "Explored deep learning approaches for classifying 17 types of bone fractures using medical images, with YOLO11 among the evaluated models.",
    image: "/projects/projects1.png",
    tags: ["Python", "YOLO11", "Deep Learning", "Medical Imaging"],
    link: "#",
    github: "#",
  },
];


export const Projects = () => {
    return (
        <section id="projects" className="pt-20 pb-12 relative overflow-hidden">  
            {/*bg glows*/}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/> 
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/> 
            <div className="container mx-auto px-6 relative z-10">
                {/*Section Header*/}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Featured Work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Projects that
                        <span className="font-serif italic font-normal text-white"> 
                            {" "}
                            make an impact.
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        Here are some of the projects I've worked on throughout
                        my academic and learning journey. Each project reflects
                        my curiosity, problem-solving approach, and passion for
                        exploring data and intelligent technologies.
                    </p>
                </div>

                {/* projects grid*/}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => {
                        return (
                        <div
                            key={idx}
                            className="group glass rounded-2xl overflow-hidden animate-fade-in"
                            style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden aspect-video">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />

                            {/* Overlay links */}
                            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                >
                                <ArrowUpRight className="w-5 h-5" />
                                </a>

                                <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                >
                                <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
                                </a>
                            </div>
                            </div>

                            {/* Project details */}
                            <div className="p-6 space-y-4"> 
                                <div className="flex items-start justify-between"> 
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <ArrowUpRight 
                                        className="w-5 h-5 text-muted-foreground group-hover:text-primary
                                        group-hover:translate-x-1 group-hover:-translate-y-1 transition-all " 
                                    />
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIdx) => (
                                    <span 
                                        key={tagIdx}
                                        className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                                    >
                                        {tag}
                                    </span>
                                ))}</div>
                            </div>
                        </div>
                        );
                    })}
                    </div>
                    
                    {/*view all CTA*/}

                    <div className="text-center mt-12 animate-fade-in animation-delay-500">
                        <AnimatedBorderButton>
                            View All Projects
                            <ArrowUpRight className="w-5 h-5"/>

                        </AnimatedBorderButton>
                    </div>

                </div>

             
        </section>
    );
};

