'use client'

import { motion } from 'framer-motion'

export default function ProjectsSection() {
  const projects = [
    {
      title: "Starlink Financing Program",
      description: "Launched a comprehensive device financing program for Starlink internet services, enabling rural communities to access high-speed internet.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
      stats: "500+ devices financed",
      category: "Device Financing"
    },
    {
      title: "SME Digital Lending Platform",
      description: "Developed a fully digital lending platform for small and medium enterprises, reducing approval times by 80%.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500",
      stats: "$10M+ disbursed",
      category: "SME Lending"
    },
    {
      title: "Mobile Credit Scoring System",
      description: "Implemented an AI-powered credit scoring system using mobile data, expanding financial inclusion to underserved populations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500",
      stats: "15K+ assessments",
      category: "Credit Solutions"
    },
    {
      title: "Agricultural Finance Initiative",
      description: "Specialized lending program for agricultural businesses, supporting food security and rural development across Africa.",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500",
      stats: "2K+ farmers supported",
      category: "Agricultural Finance"
    },
    {
      title: "Digital Banking App",
      description: "Built a comprehensive mobile banking application with integrated loan management and payment processing capabilities.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500",
      stats: "50K+ active users",
      category: "Digital Banking"
    },
    {
      title: "Microfinance Network Expansion",
      description: "Established partnerships with local financial institutions to expand our microfinance network across 15 African countries.",
      image: "/images/micro.png",
      stats: "15 countries",
      category: "Network Expansion"
    }
  ]

  return (
    <section id="projects" className="py-16 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects & Case Studies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses and individuals achieve their financial goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary-600 font-semibold">{project.stats}</span>
                  <button className="text-primary-600 hover:text-primary-700 font-medium">
                    View Details →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

