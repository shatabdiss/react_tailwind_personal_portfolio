import { Mail, Phone, MapPin, Send, ContactRound, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "shatabdisarker1357@gmail.com",
        href: "mailto:ss@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+1 (555) 123-4566",
        href: "tel:+15551234566",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "San Francisco, CA",
        href: "#",
    },

];

export const Contact = () => {

    const [formData, setFormData] =useState({
        name: "",
        email: "",
        message: ""
    });

    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        type: null, // success or error
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setSubmitStatus({ type: null, message: ""});

        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error(
                   "EmailJS configuration is missing. Please check your environment variables."
                );
            }

          await emailjs.send(serviceId, templateId, {
            name: formData.name ,
            email: formData.email,
            message: formData.message,
            time: new Date().toLocaleString(),
          }, publicKey
        );

        setSubmitStatus({
            type: "success",
            message: "Message sent successfully! I'll get back to you soon.",
        });
        } catch (error) {
            console.error("EmailJS error:", error);
            setSubmitStatus({
                type: "error",
                message: error.text || "Failed to send message. Please try again later.",
            });

        } finally {
            setIsLoading (false)

        }
    };
    return (
        <section id="contact" className="py-32 relative overflow-hidden" >  
           <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
           </div>

           <div className="container mx-auto px-6 relative z-10">
               {/*Section Header*/}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Get In Touch
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Let's connect{" "}
                        <span className="font-serif italic font-normal text-white"> 
                            and create something meaningful.
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        I'm always open to discussing new opportunities, collaborating on
                        interesting projects, and connecting with people who share an
                        interest in data science, analytics, and technology. Feel free
                        to reach out!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animartion-delay-300">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label 
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2"
                                    >
                                    Name
                                </label>
                                <input 
                                    id="name" 
                                    type="text" 
                                    required
                                    placeholder="Your name..."
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({...formData, name: e.target.value})
                                    }
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Email
                                </label>

                                <div className="relative">
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        autoComplete="email"
                                        required
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({...formData, email: e.target.value})
                                        }
                                        className="w-full px-4 py-3 pr-12 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    />

                                    <ContactRound
                                        size={18}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message"
                                    className="block text-sm font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows={5} 
                                    required
                                    placeholder="Your message..."
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({...formData, message: e.target.value})
                                    }
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                />
                            </div>  

                            <Button 
                                className="w-full" 
                                type="submit" 
                                size="lg" 
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>Sending...</>
                                ):(
                                  <> 
                                    Send Message 
                                    <Send className="w-5 h-5"/>
                                  </>
                                )}

                            </Button>

                            {/* Submission Status */}
                            {submitStatus.type && (
                                <div
                                    className={`flex items-center gap-3 p-4 rounded-xl ${
                                        submitStatus.type === "success"
                                            ? "bg-green-500/10 border border-green-500/20 text-green-400"
                                            : "bg-red-500/10 border border-red-500/20 text-red-400"
                                    }`}
                                >
                                    {submitStatus.type === "success" ? (
                                        <CheckCircle className="w-5 h-5 shrink-0" />
                                    ) : (
                                        <AlertCircle className="w-5 h-5 shrink-0" />
                                    )}

                                    <p className="text-sm">
                                        {submitStatus.message}
                                    </p>
                                </div>
                            )}  

                        </form>
                    </div>

                    
                    {/* Right Side - Contact Information */}
                    <div className="space-y-6 animate-fade-in animation-delay-400">

                        {/* Contact Information Card */}
                        <div className="glass p-8 rounded-3xl border border-primary/20">

                            <h3 className="text-xl font-semibold mb-8">
                                Contact Information
                            </h3>

                            <div className="space-y-7">

                                {contactInfo.map((info, index) => {
                                    const Icon = info.icon;

                                    return (
                                        <div
                                            key={index}
                                            className="flex items-center gap-4"
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                                <Icon className="w-5 h-5 text-primary" />
                                            </div>

                                            <div>
                                                <p className="text-sm text-muted-foreground">
                                                    {info.label}
                                                </p>

                                                {info.href ? (
                                                    <a
                                                        href={info.href}
                                                        className="text-sm font-medium hover:text-primary transition-colors"
                                                    >
                                                        {info.value}
                                                    </a>
                                                ) : (
                                                    <p className="text-sm font-medium">
                                                        {info.value}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}

                            </div>
                        </div>

                        {/* Availability Card */}
                        <div className="glass p-8 rounded-3xl border border-primary/20">

                            <div className="flex items-center gap-3 mb-3">

                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>

                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>

                                <h3 className="font-semibold text-base">
                                    Currently Available
                                </h3>

                            </div>

                            <p className="text-sm text-muted-foreground leading-relaxed">
                                I'm currently open to new opportunities and exciting
                                projects. Whether you need a data analyst, data scientist,
                                or someone to collaborate on interesting projects,
                                let's talk!
                            </p>

                        </div>

                    </div>
                 </div>
                </div>
            
        </section>

    );
};

