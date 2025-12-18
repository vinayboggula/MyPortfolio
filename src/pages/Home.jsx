import AboutSection from "@/components/AboutSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import Navbar from "@/components/Navbar"
import ProjectsSection from "@/components/ProjectsSection"
import SkillsSection from "@/components/SkillsSection"
import StarBackground from "@/components/StarBackground"
import ThemeToggle from "@/components/ThemeToggle"
import { useEffect, useState } from "react"
import Snowfall from "react-snowfall"

const Home = () => {
    const [theme, setTheme] = useState("light")

    useEffect(() => {
        // Initial theme
        const currentTheme = document.documentElement.classList.contains("dark")
            ? "dark"
            : "light"

        setTheme(currentTheme)

        // Watch for theme changes
        const observer = new MutationObserver(() => {
            const updatedTheme = document.documentElement.classList.contains("dark")
                ? "dark"
                : "light"
            setTheme(updatedTheme)
        })

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        })

        return () => observer.disconnect()
    }, [])

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">

            <ThemeToggle />

            {/* Background Effects */}
            {theme === "light" && (
                <Snowfall
                    color="#82C3D9"
                    style={{ pointerEvents: "none" }}
                />
            )}

            {theme === "dark" && <StarBackground />}

            <Navbar />

            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>

            <Footer />
        </div>
    )
}

export default Home
