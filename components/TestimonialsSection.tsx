'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Africa",
      content: "HippoFinance's SME lending program helped us scale our operations from 5 to 50 employees. Their digital platform made the entire process seamless.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Rural Internet Provider",
      content: "The Starlink financing program enabled us to bring high-speed internet to remote villages. HippoFinance understood our unique needs perfectly.",
      rating: 5
    },
    {
      name: "Aisha Mohammed",
      role: "Agricultural Entrepreneur",
      content: "As a small-scale farmer, accessing credit was always a challenge. HippoFinance's agricultural finance program changed everything for our community.",
      rating: 5
    },
    {
      name: "David Okechukwu",
      role: "Mobile Money Operator",
      content: "The integration with HippoFinance's digital banking platform has increased our transaction volume by 300%. Their technology is truly innovative.",
      rating: 5
    },
    {
      name: "Grace Mwangi",
      role: "Micro-Enterprise Owner",
      content: "I was able to expand my small business thanks to HippoFinance's microfinance solutions. The application process was simple and approval was quick.",
      rating: 5
    },
    {
      name: "Robert Kimani",
      role: "Rural Development Officer",
      content: "HippoFinance's commitment to financial inclusion has transformed our rural communities. Their impact goes beyond just lending - they're building futures.",
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="py-16 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from businesses and individuals who have transformed their financial capabilities with our services
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
              <div>
                <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

