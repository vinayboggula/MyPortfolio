import { Braces, Database, Globe, Layers, Wrench } from "lucide-react";

const SkillsSection = () => {
    return (
        <section id="skills" className="py-16">
            <div className="flex flex-col items-center gap-6 px-4">
                <h1 className="text-4xl font-bold">Skills</h1>

                {/* Grid Container */}
                <div className="grid grid-cols-1 gap-4 w-full max-w-3xl mx-auto">

                    {/* General */}
                    <div className="gradient-border py-4 px-6 card-hover rounded-full">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-primary/70/10 flex items-center justify-center">
                                <Globe className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex flex-col gap-2 text-left">
                                <h4 className="font-semibold text-lg">General</h4>
                                <ul className="flex items-center gap-2 flex-wrap">
                                    <li className="text-muted-foreground bg-primary/70 rounded-full px-4 py-1 hover:scale-105 hover:cursor-pointer">HTML</li>
                                    <li className="text-muted-foreground bg-primary/70 rounded-full px-4 py-1 hover:scale-105 hover:cursor-pointer">CSS</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Programming */}
                    <div className="gradient-border py-4 px-6 card-hover rounded-full">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-primary/70/10 flex items-center justify-center">
                                <Braces className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex flex-col gap-2 text-left">
                                <h4 className="font-semibold text-lg">Programming</h4>
                                <ul className="flex items-center gap-2 flex-wrap">
                                    <li className="text-muted-foreground bg-primary/70 rounded-full px-4 py-1 hover:scale-105 hover:cursor-pointer">C</li>
                                    <li className="text-muted-foreground bg-primary/70 rounded-full px-4 py-1 hover:scale-105 hover:cursor-pointer">Python</li>
                                    <li className="text-muted-foreground bg-primary/70 rounded-full px-4 py-1 hover:scale-105 hover:cursor-pointer">JavaScript</li>
                                    <li className="text-muted-foreground bg-primary/70 rounded-full px-4 py-1 hover:scale-105 hover:cursor-pointer">SQL</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Technologies */}
                    <div className="gradient-border py-4 px-6 card-hover rounded-full">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-primary/70/10 flex items-center justify-center">
                                <Layers className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex flex-col gap-2 text-left">
                                <h4 className="font-semibold text-lg">Technologies / Frameworks</h4>
                                <ul className="flex items-center gap-2 flex-wrap">
                                    <li className="text-muted-foreground bg-primary/70 rounded-full px-4 py-1 hover:scale-105 hover:cursor-pointer">React.js</li>
                                    <li className="text-muted-foreground bg-primary/70 rounded-full px-4 py-1 hover:scale-105 hover:cursor-pointer">Next.js</li>
                                    <li className="text-muted-foreground bg-primary/70 rounded-full px-4 py-1 hover:scale-105 hover:cursor-pointer">Node.js</li>
                                    <li className="text-muted-foreground bg-primary/70 rounded-full px-4 py-1 hover:scale-105 hover:cursor-pointer">Express.js</li>
                                    <li className="text-muted-foreground bg-primary/70 rounded-full px-4 py-1 hover:scale-105 hover:cursor-pointer">Tailwind CSS</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Databases */}
                    <div className="gradient-border py-4 px-6 card-hover rounded-full">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-primary/70/10 flex items-center justify-center">
                                <Database className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex flex-col gap-2 text-left">
                                <h4 className="font-semibold text-lg">Databases</h4>
                                <ul className="flex items-center gap-2 flex-wrap">
                                    <li className="text-muted-foreground bg-primary/70 rounded-full px-4 py-1 hover:scale-105 hover:cursor-pointer">MySQL</li>
                                    <li className="text-muted-foreground bg-primary/70 rounded-full px-4 py-1 hover:scale-105 hover:cursor-pointer">MongoDB</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Developer Tools */}
                    <div className="gradient-border py-4 px-6 card-hover rounded-full">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-primary/70/10 flex items-center justify-center">
                                <Wrench className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex flex-col gap-2 text-left">
                                <h4 className="font-semibold text-lg">Developer Tools</h4>
                                <ul className="flex items-center gap-2 flex-wrap">
                                    <li className="text-muted-foreground bg-primary/70 rounded-full px-4 py-1 hover:scale-105 hover:cursor-pointer">VS Code</li>
                                    <li className="text-muted-foreground bg-primary/70 rounded-full px-4 py-1 hover:scale-105 hover:cursor-pointer">Git</li>
                                    <li className="text-muted-foreground bg-primary/70 rounded-full px-4 py-1 hover:scale-105 hover:cursor-pointer">Postman</li>
                                    <li className="text-muted-foreground bg-primary/70 rounded-full px-4 py-1 hover:scale-105 hover:cursor-pointer">GitHub</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
