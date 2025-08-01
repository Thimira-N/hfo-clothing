'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart, Award, Users, Leaf } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Quality',
      description: 'Every piece is crafted with meticulous attention to detail and an unwavering commitment to excellence.'
    },
    {
      icon: Award,
      title: 'Timeless Design',
      description: 'We create pieces that transcend seasonal trends, focusing on enduring style and sophistication.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Our customers are at the heart of everything we do, inspiring us to continuously innovate and improve.'
    },
    {
      icon: Leaf,
      title: 'Sustainable Future',
      description: 'We are committed to responsible practices that protect our planet for future generations.'
    }
  ];

  const milestones = [
    { year: '2020', title: 'HFO Founded', description: 'Started with a vision to redefine premium fashion' },
    { year: '2021', title: 'First Collection', description: 'Launched our inaugural line of premium basics' },
    { year: '2022', title: 'Sustainability Initiative', description: 'Committed to eco-friendly materials and processes' },
    { year: '2023', title: 'Global Expansion', description: 'Extended our reach to fashion capitals worldwide' },
    { year: '2024', title: 'Innovation Lab', description: 'Established our design and technology innovation center' },
    { year: '2025', title: 'Digital Evolution', description: 'Launched our comprehensive e-commerce platform' }
  ];


    return (
        <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
            <Image
                src="https://images.pexels.com/photos/5552789/pexels-photo-5552789.jpeg"
                alt="HFO About Hero"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-royal-purple/80 to-dusty-mauve/80" />
            </div>

            <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                About HFO
                </h1>
                <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
                wear it • own it • live it
                </p>
                <p className="text-lg max-w-2xl mx-auto text-gray-200">
                Premium clothing that embodies luxury, comfort, and style for the modern individual who values quality and authentic expression.
                </p>
            </motion.div>
            </div>
        </section>

        {/* Our Story */}
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                    Our Story
                </h2>
                <div className="space-y-4 text-gray-600 text-lg">
                    <p>
                    HFO was born from a simple belief: that clothing should be more than just fabric and thread. 
                    It should be an extension of who you are, a reflection of your values, and a companion in your daily journey.
                    </p>
                    <p>
                    Founded in 2020 by a team of fashion enthusiasts and sustainability advocates, HFO emerged from 
                    the desire to create premium clothing that doesn't compromise on quality, comfort, or conscience.
                    </p>
                    <p>
                    Our tagline "wear it • own it • live it" represents our philosophy: when you truly connect with what 
                    you wear, you embody confidence, authenticity, and purpose in everything you do.
                    </p>
                </div>
                </motion.div>

                <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative aspect-[4/5] rounded-lg overflow-hidden"
                >
                <Image
                    src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg"
                    alt="HFO Founder Story"
                    fill
                    className="object-cover"
                />
                </motion.div>
            </div>
            </div>
        </section>

        {/* Our Values */}
        <section className="py-16 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Our Values
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do and shape every decision we make.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-royal-purple rounded-full mb-6">
                    <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                </motion.div>
                ))}
            </div>
            </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 lg:py-24 bg-midnight-black text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
            >
                <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-antique-gold">
                Our Mission
                </h2>
                <blockquote className="text-2xl sm:text-3xl leading-relaxed mb-8 text-gray-200">
                "To create premium clothing that empowers individuals to express their authentic selves 
                while building a more sustainable and inclusive fashion industry."
                </blockquote>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                We believe that when people feel confident in what they wear, they're empowered to make 
                positive changes in their lives and communities.
                </p>
            </motion.div>
            </div>
        </section>

        {/* Timeline */}
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Our Journey
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From a small startup to a global brand, here are the key milestones that shaped HFO.
                </p>
            </motion.div>

            <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-royal-purple opacity-20" />

                <div className="space-y-12">
                {milestones.map((milestone, index) => (
                    <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                    >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                        <div className="bg-white border-2 border-royal-purple rounded-lg p-6 shadow-lg">
                        <div className="text-2xl font-bold text-royal-purple mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                        </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-royal-purple rounded-full border-4 border-white shadow-lg">
                        <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    
                    <div className="w-1/2" />
                    </motion.div>
                ))}
                </div>
            </div>
            </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-royal-purple to-dusty-mauve text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Get in Touch
                </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                {`Have questions about our products, sustainability practices, or want to share your HFO story? 
                We'd love to hear from you.`}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                    href="mailto:hello@hfoclothing.com"
                    className="bg-white text-royal-purple hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                    Email Us
                </a>
                <a
                    href="tel:+1-555-HFO-STYLE"
                    className="border-2 border-white text-white hover:bg-white hover:text-royal-purple font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                    Call Us
                </a>
                </div>
            </motion.div>
            </div>
        </section>
        </div>
    )
}
export default AboutPage
