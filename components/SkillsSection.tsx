'use client'

import { motion } from 'framer-motion'

export default function SkillsSection() {
  const skillCategories = [
    {
      category: "Financial Services",
      skills: ["Microfinance", "Credit Scoring", "Risk Management", "Loan Processing", "Payment Systems", "Compliance"]
    },
    {
      category: "Technology Stack",
      skills: ["React/Next.js", "Node.js", "Python", "AWS", "Blockchain", "Mobile Apps"]
    },
    {
      category: "Business Solutions",
      skills: ["SME Lending", "Device Financing", "Digital Banking", "API Integration", "Analytics", "Reporting"]
    },
    {
      category: "Industry Expertise",
      skills: ["African Markets", "Regulatory Compliance", "Financial Inclusion", "Rural Development", "Agricultural Finance", "Telecommunications"]
    }
  ]

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Capabilities & Technologies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leveraging cutting-edge technology and industry expertise to deliver exceptional financial services
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">{category.category}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-gray-600">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

