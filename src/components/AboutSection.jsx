import { Activity, Code, User } from "lucide-react"


const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 ">
                        <h3 className="text-2xl font-bold">Web Developer & Creative Builder</h3>
                        <p className="text-muted-foreground">Hi, I’m Vinay — a budding Full Stack Developer who loves building things that work smoothly and look great. I’ve been learning and creating projects using MERN and Next.js, focusing on writing clean code and understanding how real applications come together from frontend to backend.</p>
                        <p className="text-muted-foreground">Beyond web development, I enjoy working with Python for automation and data-related tasks. This interest has also pulled me toward AI and machine learning, and I’ve started exploring how modern apps can integrate smart features using APIs and cloud platforms.As a fresher, I’m eager to gain industry experience, collaborate with teams, and constantly improve my craft. I believe every project—big or small—is a chance to become a better developer.</p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">Get In Touch</a>
                            <a
                                href="https://drive.google.com/file/d/1TLuteG1JcgIhtNKXT0pdjGSb4P7eTXaD/view?usp=drive_link"
                                target="_blank"
                                className="px-6 py-2 rounded-full border border-primary text-primary
  font-bold hover:bg-primary/10 transition-colors duration-300"
                            >
                                View Resume
                            </a>

                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Building user-friendly websites and exploring responsive design.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Leadership & Collaboration</h4>
                                    <p className="text-muted-foreground">
                                        I enjoy taking initiative, helping teammates, and contributing to a positive and productive work environment.
                                    </p>


                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Activity className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Passion for Sports</h4>
                                    <p className="text-muted-foreground">
                                        Active in sports, which helps me stay disciplined, focused, and motivated both on and off the field.
                                    </p>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default AboutSection
