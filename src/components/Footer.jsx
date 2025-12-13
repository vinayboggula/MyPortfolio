import { ArrowUp } from "lucide-react"

const Footer = () => {
    return <footer className="py-2 px-4 bg-card relative botder-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center ">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Vinay's Portfolio. All rights reserved</p>

        <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
            <ArrowUp />
        </a>
    </footer>
}

export default Footer
