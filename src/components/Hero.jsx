import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaBrain, FaSearch, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-perplexity-primary to-perplexity-secondary">
      <div className="absolute inset-0 bg-[url('https://ik.imagekit.io/d3kzbpbila/thejashari_neural_network_background_minimal_clean_modern_4k_00cf2556-670d-48c7-8928-e49c59b6adc6_xNB_2Zg0B.png')] opacity-10 bg-cover bg-center"></div>
      <div className="container mx-auto max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-8"
          >
            <div className="p-4 bg-perplexity-accent bg-opacity-10 rounded-full shadow-glow">
              <FaBrain className="text-6xl text-perplexity-accent" />
            </div>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-perplexity-accent to-white">
            KHÁM PHÁ SỨC MẠNH AI
            <br />VỚI PERPLEXITY
          </h1>
          
          <h2 className="text-xl md:text-2xl text-perplexity-muted mb-12 max-w-3xl mx-auto leading-relaxed">
            Truy cập không giới hạn đến các mô hình AI tiên tiến nhất thế giới
          </h2>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-perplexity-secondary backdrop-blur-xl bg-opacity-50 rounded-2xl p-8 mb-12 border border-perplexity-accent border-opacity-20 shadow-glow"
          >
            <div className="text-4xl md:text-6xl font-bold text-white mb-4">
              399.000đ
              <span className="text-perplexity-muted text-2xl">/năm</span>
            </div>
            <p className="text-perplexity-muted text-xl mb-8">
              Ưu đãi đặc biệt - Tiết kiệm 50% ngay hôm nay!
            </p>
            <button className="group bg-perplexity-accent text-white text-xl font-bold py-4 px-8 rounded-full hover:shadow-glow transform hover:scale-105 transition-all flex items-center justify-center gap-3 mx-auto">
              ĐĂNG KÝ NGAY
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-perplexity-secondary backdrop-blur-xl bg-opacity-50 rounded-2xl p-8 border border-perplexity-accent border-opacity-20 hover:shadow-glow transition-shadow group"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-perplexity-accent bg-opacity-10 rounded-full group-hover:scale-110 transition-transform">
                  <FaSearch className="text-4xl text-perplexity-accent" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Tìm Kiếm Thông Minh</h3>
              <p className="text-perplexity-muted">
                Tìm kiếm thông tin nhanh chóng và chính xác với công nghệ AI tiên tiến
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-perplexity-secondary backdrop-blur-xl bg-opacity-50 rounded-2xl p-8 border border-perplexity-accent border-opacity-20 hover:shadow-glow transition-shadow group"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-perplexity-accent bg-opacity-10 rounded-full group-hover:scale-110 transition-transform">
                  <FaRobot className="text-4xl text-perplexity-accent" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI Tiên Tiến</h3>
              <p className="text-perplexity-muted">
                Trải nghiệm sức mạnh của các mô hình AI tân tiến nhất hiện nay
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;