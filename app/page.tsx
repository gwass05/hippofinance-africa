'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  ChevronDown, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Twitter, 
  Download,
  ExternalLink,
  Star,
  Calendar,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  Building,
  CreditCard,
  Wifi
} from 'lucide-react'

import ProjectsSection from '../components/ProjectsSection'
import SkillsSection from '../components/SkillsSection'
import ResumeSection from '../components/ResumeSection'
import ContactSection from '../components/ContactSection'
import TestimonialsSection from '../components/TestimonialsSection'
import BlogSection from '../components/BlogSection'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'resume', 'contact', 'testimonials', 'blog']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gradient">HippoFinance.africa</h1>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'skills', 'resume', 'contact', 'testimonials', 'blog'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-medium transition-colors duration-200 ${
                    activeSection === section
                      ? 'text-primary-600'
                      : 'text-gray-600 hover:text-primary-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Digital Microfinance</span>
              <br />
              <span className="text-gray-800">Solutions for Africa</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Empowering businesses and individuals across Africa with innovative credit solutions, 
              device financing for Starlink, and comprehensive SME lending services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Explore Our Services
              </button>
              <button className="btn-outline">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About HippoFinance.africa</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A small-scale registered microfinance institution revolutionizing financial services across Africa
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Story</h3>
              <p className="text-gray-600 mb-6">
                At Hippo Finance, we believe financial access should be simple, fast, and built for the digital age. Founded to close the gap between opportunity and affordability, we started with a vision: empower individuals and small businesses across Africa with the tools they need to grow.
              </p>
              <p className="text-gray-600 mb-6">
                From helping families connect to high-speed internet through Starlink device financing, to offering tailored credit solutions for entrepreneurs, we're making financing accessible — anytime, anywhere.
              </p>
              <p className="text-gray-600 mb-6">
                Our fully digital platform means no queues, no endless paperwork — just quick, transparent, and flexible lending designed for modern life. Whether you're starting a business, upgrading your tech, or expanding your services, Hippo Finance is here to power your ambitions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">10K+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">$50M+</div>
                  <div className="text-gray-600">Loans Disbursed</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Our Expertise</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CreditCard className="text-primary-600" size={24} />
                    <span className="text-gray-700">Credit Solutions & Personal Loans</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Wifi className="text-primary-600" size={24} />
                    <span className="text-gray-700">Starlink Device Financing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building className="text-primary-600" size={24} />
                    <span className="text-gray-700">SME Lending & Business Finance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="text-primary-600" size={24} />
                    <span className="text-gray-700">Digital Banking Solutions</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Import and include all sections */}
      <ProjectsSection />
      <SkillsSection />
      <ResumeSection />
      <ContactSection />
      <TestimonialsSection />
      <BlogSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">HippoFinance.africa</h3>
              <p className="text-gray-400 mb-4">
                Empowering Africa through innovative digital microfinance solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Credit Solutions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Starlink Financing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SME Lending</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Digital Banking</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2023 HippoFinance.africa. All rights reserved. | Registered Microfinance Institution</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
