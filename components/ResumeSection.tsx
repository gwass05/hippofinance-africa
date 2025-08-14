'use client'

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

export default function ResumeSection() {
  const achievements = [
    {
      year: "2023",
      title: "Expansion to 15 Countries",
      description: "Successfully expanded operations across 15 African countries, serving over 10,000 clients."
    },
    {
      year: "2022",
      title: "Starlink Partnership",
      description: "Launched exclusive device financing program with Starlink, enabling rural connectivity."
    },
    {
      year: "2021",
      title: "Digital Platform Launch",
      description: "Introduced comprehensive digital banking platform with AI-powered credit scoring."
    },
    {
      year: "2020",
      title: "Company Registration",
      description: "Officially registered as a microfinance institution with regulatory compliance."
    }
  ]

  return (
    <section id="resume" className="py-16 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Company Profile & Achievements</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our journey, milestones, and commitment to financial inclusion in Africa
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Achievements</h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-bold">{achievement.year}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{achievement.title}</h4>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Download Our Profile</h3>
            <div className="card p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="text-primary-600" size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Company Profile</h4>
                <p className="text-gray-600 mb-6">
                  Download our comprehensive company profile including services, achievements, and case studies.
                </p>
                <button className="btn-primary">
                  <Download className="mr-2" size={20} />
                  Download PDF
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

