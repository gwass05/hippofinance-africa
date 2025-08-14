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
  Wifi,
  Menu,
  X,
  ArrowRight,
  CheckCircle,
  Play,
  Award,
  Target,
  Heart
} from 'lucide-react'

import ProjectsSection from '../components/ProjectsSection'
import SkillsSection from '../components/SkillsSection'
import ResumeSection from '../components/ResumeSection'
import ContactSection from '../components/ContactSection'
import TestimonialsSection from '../components/TestimonialsSection'
import BlogSection from '../components/BlogSection'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-accent-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full glass z-50 border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-2xl font-bold text-gradient">HippoFinance.africa</h1>
              </motion.div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {['home', 'about', 'projects', 'skills', 'resume', 'contact', 'testimonials', 'blog'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-medium transition-all duration-300 relative group ${
                    activeSection === section
                      ? 'text-accent-600'
                      : 'text-gray-600 hover:text-accent-600'
                  }`}
                >
                  {section}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-600 transition-all duration-300 group-hover:w-full ${
                    activeSection === section ? 'w-full' : ''
                  }`}></span>
                </button>
              ))}
              <button className="btn-primary">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-600 hover:text-accent-600 transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden glass border-t border-gray-200/50"
          >
            <div className="container-padding py-4 space-y-4">
              {['home', 'about', 'projects', 'skills', 'resume', 'contact', 'testimonials', 'blog'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left capitalize font-medium py-2 px-4 rounded-lg transition-colors ${
                    activeSection === section
                      ? 'text-accent-600 bg-accent-50'
                      : 'text-gray-600 hover:text-accent-600 hover:bg-gray-50'
                  }`}
                >
                  {section}
                </button>
              ))}
              <button className="btn-primary w-full mt-4">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-100 rounded-full blur-3xl opacity-30 animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-100 rounded-full blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto container-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center px-4 py-2 bg-accent-50 text-accent-700 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2" />
                Trusted by 10,000+ African Businesses
              </div>
              
              <h1 className="heading-xl mb-6 text-balance">
                <span className="text-gradient">Digital Microfinance</span>
                <br />
                <span className="text-gray-900">Solutions for Africa</span>
              </h1>
              
              <p className="text-body-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 text-balance">
                Empowering businesses and individuals across Africa with innovative credit solutions, 
                device financing for Starlink, and comprehensive SME lending services.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <button className="btn-primary group">
                  Explore Our Services
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="btn-outline group">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-600">$50M+</div>
                  <div className="text-sm text-gray-600">Loans Disbursed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-600">15</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-600">98%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Hero Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-accent-500 to-primary-600 rounded-3xl p-8 lg:p-12 shadow-large">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                        <div className="flex items-center mb-2">
                          <CreditCard className="w-6 h-6 text-white mr-2" />
                          <span className="text-white font-semibold">Quick Loans</span>
                        </div>
                        <p className="text-white/80 text-sm">Get approved in minutes</p>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                        <div className="flex items-center mb-2">
                          <Wifi className="w-6 h-6 text-white mr-2" />
                          <span className="text-white font-semibold">Starlink Finance</span>
                        </div>
                        <p className="text-white/80 text-sm">Connect to the world</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                        <div className="flex items-center mb-2">
                          <Building className="w-6 h-6 text-white mr-2" />
                          <span className="text-white font-semibold">SME Support</span>
                        </div>
                        <p className="text-white/80 text-sm">Grow your business</p>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                        <div className="flex items-center mb-2">
                          <Shield className="w-6 h-6 text-white mr-2" />
                          <span className="text-white font-semibold">Secure & Safe</span>
                        </div>
                        <p className="text-white/80 text-sm">Bank-grade security</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-medium animate-float">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-success-500 rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-700">Live Support</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-medium animate-float" style={{ animationDelay: '2s' }}>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-warning-500 mr-2" />
                    <span className="text-sm font-medium text-gray-700">4.9/5 Rating</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white relative">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              About Our Mission
            </div>
            <h2 className="heading-lg mb-6">Revolutionizing Financial Services Across Africa</h2>
            <p className="text-body-lg text-gray-600 max-w-3xl mx-auto text-balance">
              A registered microfinance institution dedicated to closing the financial inclusion gap 
              and empowering African businesses and individuals with innovative digital solutions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="heading-md mb-8">Our Story & Vision</h3>
              <div className="space-y-6">
                <p className="text-body text-gray-600">
                  At Hippo Finance, we believe financial access should be simple, fast, and built for the digital age. 
                  Founded to close the gap between opportunity and affordability, we started with a vision: empower 
                  individuals and small businesses across Africa with the tools they need to grow.
                </p>
                <p className="text-body text-gray-600">
                  From helping families connect to high-speed internet through Starlink device financing, to offering 
                  tailored credit solutions for entrepreneurs, we're making financing accessible — anytime, anywhere.
                </p>
                <p className="text-body text-gray-600">
                  Our fully digital platform means no queues, no endless paperwork — just quick, transparent, and 
                  flexible lending designed for modern life.
                </p>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Digital First</h4>
                    <p className="text-sm text-gray-600">100% online process</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Fast Approval</h4>
                    <p className="text-sm text-gray-600">Minutes, not days</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Transparent</h4>
                    <p className="text-sm text-gray-600">No hidden fees</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Secure</h4>
                    <p className="text-sm text-gray-600">Bank-level security</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 lg:p-12">
                <h4 className="heading-sm mb-8 text-center">Our Impact</h4>
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gradient-primary mb-2">10K+</div>
                    <div className="text-gray-600">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gradient-primary mb-2">$50M+</div>
                    <div className="text-gray-600">Loans Disbursed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gradient-primary mb-2">15</div>
                    <div className="text-gray-600">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gradient-primary mb-2">98%</div>
                    <div className="text-gray-600">Satisfaction Rate</div>
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
      <footer className="gradient-bg-dark text-white py-16">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">HippoFinance.africa</h3>
              <p className="text-gray-300 mb-6">
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
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Credit Solutions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Starlink Financing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SME Lending</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Digital Banking</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 HippoFinance.africa. All rights reserved. | Registered Microfinance Institution</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
