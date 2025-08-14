'use client'

import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'

export default function BlogSection() {
  const blogPosts = [
    {
      title: "The Future of Digital Microfinance in Africa",
      excerpt: "Exploring how technology is transforming financial inclusion across the continent and what this means for rural communities.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500",
      date: "Dec 15, 2023",
      category: "Industry Insights"
    },
    {
      title: "Starlink Financing: Bridging the Digital Divide",
      excerpt: "How our partnership with Starlink is enabling rural communities to access high-speed internet and participate in the digital economy.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
      date: "Dec 10, 2023",
      category: "Partnerships"
    },
    {
      title: "SME Lending: Supporting Africa's Economic Growth",
      excerpt: "The critical role of small and medium enterprises in Africa's development and how innovative lending solutions are fueling their growth.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500",
      date: "Dec 5, 2023",
      category: "SME Finance"
    },
    {
      title: "AI-Powered Credit Scoring: Revolutionizing Financial Inclusion",
      excerpt: "How artificial intelligence is helping us assess creditworthiness for previously underserved populations in Africa.",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500",
      date: "Nov 28, 2023",
      category: "Technology"
    },
    {
      title: "Agricultural Finance: Feeding Africa's Future",
      excerpt: "Supporting agricultural businesses through specialized financing programs that promote food security and rural development.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500",
      date: "Nov 20, 2023",
      category: "Agricultural Finance"
    },
    {
      title: "Regulatory Compliance in African Microfinance",
      excerpt: "Navigating the complex regulatory landscape of microfinance across different African countries and ensuring compliance.",
      image: "https://images.unsplash.com/photo-1554224154-26032cdc0c0f?w=500",
      date: "Nov 15, 2023",
      category: "Compliance"
    }
  ]

  return (
    <section id="blog" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Latest Insights & News</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends in African microfinance and digital banking
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card overflow-hidden group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar size={16} className="mr-1" />
                  {post.date}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-primary-600 hover:text-primary-700 font-medium">
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

