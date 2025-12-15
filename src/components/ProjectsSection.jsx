import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "ARMA - Automated Request Management Application",
    description: "A web-based system that automates request creation, tracking, and resolution to streamline workflows and reduce manual effort.",
    image: "/projects/project1.png",
    tags: ["React.js", "Express.js", "Node.js", "MongoDB", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "AI-Powered Code Review Platform",
    description: "An AI-powered application that reviews source code, detects issues, and suggests improvements to enhance code quality.",
    image: "/projects/project2.png",
    tags: ["React.js", "Express.js", "Node.js", "TailwindCSS"],
    demoUrl: "https://busy-in-bugs.vercel.app",
    githubUrl: "https://github.com/vinayboggula/BusyInBugs"
  },
  {
    id: 3,
    title: "PassOP-Secure Password Management System",
    description: "A secure password management app with encryption and authentication for safely storing and managing credentials.",
    image: "/projects/project3.png",
    tags: ["Next.js", "React.js", "Express.js", "Node.js", "MongoDB", "TailwindCSS"],
    demoUrl: "https://pass-op-umber.vercel.app/",
    githubUrl: "https://github.com/vinayboggula/passOp"
  }
  // {
  //   id: 4,
  //   title: "BitLinks-URL Shortener Application",
  //   description: "A lightweight URL shortener that converts long URLs into short, shareable links with redirection support. Built to simplify link sharing and improve usability with fast performance.",
  //   image: "/projects/project4.png",
  //   tags: ["Next.js", "React.js", "Express.js", "Node.js", "TailwindCSS"],
  //   demoUrl: "#",
  //   githubUrl: "#"
  // }
]

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Featured <span className="text-primary"> Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-6 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className=" h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-3">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-mediam rounded-full bg-primary/20 text-secondary-foreground">{tag}</span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><ExternalLink /></a>
                    <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><Github /></a>
                  </div>
                </div>
              </div>

            </div>
          ))
          }
        </div>
        <div className="text-center mt-12">
          <a target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/vinayboggula">Check my Github <ArrowRight size={16} /></a>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
