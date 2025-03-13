import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[400px] bg-gradient-to-r from-primary to-blue-600 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container-custom h-full flex items-center justify-center relative z-10">
          <motion.h1 
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white text-center"
          >
            Our Musical Journey
          </motion.h1>
        </div>
        <div className="musical-notes"></div>
      </motion.div>

      {/* Mission Section */}
      <div className="container-custom py-16">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Our Mission</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            At MusicShop, we believe that music has the power to transform lives. Our mission is to provide high-quality musical instruments to musicians of all levels, from beginners to professionals, helping them create the perfect sound they envision.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="feature-card"
          >
            <div className="icon-wrapper">
              <i className="fas fa-check-circle text-4xl text-primary"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Quality Assurance</h3>
            <p className="text-gray-600 dark:text-gray-300">Every instrument in our collection is carefully selected and quality tested to ensure the best performance.</p>
          </motion.div>

          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="feature-card"
          >
            <div className="icon-wrapper">
              <i className="fas fa-users text-4xl text-primary"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Expert Support</h3>
            <p className="text-gray-600 dark:text-gray-300">Our team of experienced musicians is here to help you find the perfect instrument for your needs.</p>
          </motion.div>

          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="feature-card"
          >
            <div className="icon-wrapper">
              <i className="fas fa-truck text-4xl text-primary"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Fast Delivery</h3>
            <p className="text-gray-600 dark:text-gray-300">We ensure safe and quick delivery of your musical instruments right to your doorstep.</p>
          </motion.div>
        </div>

        {/* Story Section */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Our Story</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300">
              Founded in 2010, MusicShop started as a small local music store with a big dream: to make quality musical instruments accessible to everyone. Over the years, we've grown into a trusted online destination for musicians worldwide, offering a carefully curated selection of instruments from renowned brands.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Our team consists of passionate musicians who understand the importance of finding the right instrument. We take pride in our personalized approach to customer service and our commitment to fostering musical creativity in communities around the globe.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="bg-primary py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <h3 className="text-4xl font-bold mb-2">10K+</h3>
              <p>Happy Customers</p>
            </motion.div>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <h3 className="text-4xl font-bold mb-2">1000+</h3>
              <p>Instruments</p>
            </motion.div>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <h3 className="text-4xl font-bold mb-2">50+</h3>
              <p>Brands</p>
            </motion.div>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <h3 className="text-4xl font-bold mb-2">24/7</h3>
              <p>Support</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;