"use client"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import { Button } from '../../src/components/ui/button';
import { TextEffect } from '@/components/ui/text-effect';

import { AnimatedGroup } from '@/components/ui/animated-group';
import { Badge } from "@/components/ui/badge";

import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: "Customer Analytics Dashboard",
    description: "Real-time analytics platform for tracking customer engagement and behavior patterns.",
    image: "https://plus.unsplash.com/premium_photo-1682689622899-dfd85f6cc807?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=1000&width=600",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    link: "#project-1",
  },
  {
    id: 2,
    title: "AI-Powered Content Generator",
    description: "Content creation tool that leverages AI to generate marketing copy and social media posts.",
    image: "https://plus.unsplash.com/premium_photo-1683288706548-e8b6bb72fe86?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=600&width=800",
    technologies: ["Next.js", "OpenAI", "Framer Motion", "Vercel"],
    link: "#project-2",
  },
  {
    id: 3,
    title: "E-commerce Mobile App",
    description: "Cross-platform mobile application for a premium fashion retailer with AR try-on features.",
    image: "https://plus.unsplash.com/premium_photo-1688678097425-00bba1629e32?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=600&width=800",
    technologies: ["React Native", "Redux", "Firebase", "Stripe"],
    link: "#project-3",
  },
  {
    id: 4,
    title: "Enterprise Resource Planning System",
    description: "Comprehensive ERP solution for manufacturing businesses with inventory management.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Vue.js", "Node.js", "PostgreSQL", "Docker"],
    link: "#project-4",
  },
]

export default function ProjectSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <TextEffect preset="fade-in-blur" speedSegment={0.3} as="h2" className="text-4xl md:text-5xl font-bold mb-4">
            Our Latest Projects
          </TextEffect>
          <TextEffect
            per="line"
            preset="fade-in-blur"
            speedSegment={0.3}
            delay={0.3}
            as="p"
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Explore our portfolio of innovative solutions designed to transform businesses and enhance customer
            experiences.
          </TextEffect>
        </div>

        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.4,
                },
              },
            },
            item: {
              hidden: {
                opacity: 0,
                y: 20,
                scale: 0.95,
              },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  bounce: 0.3,
                  duration: 0.8,
                },
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-background border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <Link href={project.link} className="text-foreground/70 hover:text-foreground transition-colors">
                    <ArrowUpRight className="h-5 w-5" />
                  </Link>
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto">
                  <Button asChild variant="outline" size="sm" className="group/btn text-black">
                    <Link href={project.link}>
                      <span>View Project</span>
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/20 to-transparent transform rotate-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </AnimatedGroup>

        <div className="mt-16 text-center">
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    delayChildren: 0.8,
                  },
                },
              },
              item: {
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.3,
                    duration: 0.6,
                  },
                },
              },
            }}
          >
            <Button asChild size="lg" className="px-8">
              <Link href="#view-all-projects">
                <span>View All Projects</span>
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  )
}

