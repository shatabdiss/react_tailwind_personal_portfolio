
import {
    FileText,
    Microscope,
    GraduationCap,
    Award,
    BookOpen,
} from "lucide-react";

const highlights = [
    {
        icon: FileText,
        category: "Research Publication",
        title: "OCT Image Classification",
        description:
            "Contributed to research on an Attention-Enhanced Residual Network for OCT image classification, achieving 97.06% test accuracy.",
        status: "Under Peer Review",
        technologies: ["Deep Learning", "Python", "Computer Vision"],
    },
    {
        icon: Microscope,
        category: "Conference Research",
        title: "Solar Panel Segmentation & Classification",
        description:
            "Contributed to research on solar panel segmentation and classification using a dataset of 4,616 images.",
        status: "MECON 2025",
        technologies: ["Python", "Deep Learning", "Image Segmentation"],
    },
    {
        icon: BookOpen,
        category: "Research Publication",
        title: "Bone Fracture Classification",
        description:
            "Contributed to research on medical image-based classification of 17 types of bone fractures, evaluating deep learning approaches including YOLO11.",
        status: "IJAAS 2026",
        technologies: ["YOLO11", "Medical Imaging", "Deep Learning"],
    },
    {
        icon: GraduationCap,
        category: "Academic Achievement",
        title: "BSc in Computer Science & Engineering",
        description:
            "Graduated from American International University–Bangladesh (AIUB) in 2026 with a CGPA of 3.76 out of 4.00.",
        status: "Graduated · 2026",
        technologies: ["Computer Science", "Programming", "Problem Solving"],
    },
];

export const ResearchHighlights = () => {
    return (
        <section
            id="highlights"
            className="py-24 relative overflow-hidden"
        >
            {/* Background glow */}
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Section header */}
                <div className="max-w-3xl mb-16">

                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Research & Academic Highlights
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Learning, researching,
                        <span className="font-serif italic font-normal text-white">
                            {" "}and growing.
                        </span>
                    </h2>

                    <p className="text-muted-foreground leading-relaxed animate-fade-in animation-delay-200">
                        A showcase of my research contributions, academic
                        achievements, and exploration of innovative
                        technologies. These experiences reflect my
                        commitment to continuous learning and growth
                        in Data Science, Machine Learning, and
                        Computer Vision.
                    </p>

                </div>

                {/* Highlights grid */}
                <div className="grid sm:grid-cols-2 gap-6">

                    {highlights.map((item, idx) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={idx}
                                className="group glass p-6 md:p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 animate-fade-in"
                                style={{
                                    animationDelay: `${(idx + 1) * 150}ms`,
                                }}
                            >

                                {/* Icon and category */}
                                <div className="flex items-start justify-between mb-6">

                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>

                                    <span className="text-xs text-primary font-medium uppercase tracking-wider bg-primary/10 px-3 py-1.5 rounded-full">
                                        {item.category}
                                    </span>

                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                                    {item.description}
                                </p>

                                {/* Status */}
                                <div className="flex items-center gap-2 mb-5">
                                    <Award className="w-4 h-4 text-primary" />
                                    <span className="text-sm text-primary font-medium">
                                        {item.status}
                                    </span>
                                </div>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                                    {item.technologies.map((tech, techIdx) => (
                                        <span
                                            key={techIdx}
                                            className="px-3 py-1.5 rounded-full bg-surface text-xs font-medium text-muted-foreground border border-border/50 hover:border-primary/50 hover:text-primary transition-all"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
};
