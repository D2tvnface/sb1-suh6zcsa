import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaSearch, FaRobot, FaFileAlt, FaLink, FaUserFriends, FaBrain } from 'react-icons/fa';

const Benefits = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    {
      icon: <FaSearch />,
      title: "Tìm Kiếm Thông Tin Chính Xác",
      description: "Tổng hợp thông tin từ các nguồn uy tín, loại bỏ thông tin sai lệch."
    },
    {
      icon: <FaRobot />,
      title: "Truy Cập AI Tiên Tiến",
      description: "ChatGPT-4o, Claude 3.7 Sonnet, Gemini 2.0, Grok-2, và Sonar."
    },
    {
      icon: <FaFileAlt />,
      title: "Tóm Tắt Tự Động",
      description: "Nhanh chóng nắm bắt thông tin chính từ bài viết và báo cáo dài."
    },
    {
      icon: <FaLink />,
      title: "Trích Dẫn Nguồn Rõ Ràng",
      description: "Mọi thông tin đều có nguồn trích dẫn cụ thể để dễ dàng kiểm chứng."
    },
    {
      icon: <FaUserFriends />,
      title: "Giao Diện Thân Thiện",
      description: "Đơn giản, trực quan và dễ sử dụng cho mọi người dùng."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-perplexity-secondary to-perplexity-primary relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[url('https://ik.imagekit.io/d3kzbpbila/thejashari_neural_network_background_minimal_clean_modern_4k_00cf2556-670d-48c7-8928-e49c59b6adc6_xNB_2Zg0B.png')] opacity-5 bg-cover bg-center"></div>
      <div className="container mx-auto px-4 max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-perplexity-accent to-white">
            CÔNG CỤ AI TỐI ƯU CHO CÔNG VIỆC VÀ HỌC TẬP
          </h2>
          <p className="text-perplexity-muted text-xl max-w-3xl mx-auto">
            Khám phá sức mạnh của AI với các tính năng độc đáo và tiên tiến
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-perplexity-secondary backdrop-blur-xl bg-opacity-50 rounded-2xl p-8 border border-perplexity-accent border-opacity-20 hover:shadow-glow transition-all"
            >
              <div className="flex flex-col items-center">
                <div className="p-4 bg-perplexity-accent bg-opacity-10 rounded-full mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-4xl text-perplexity-accent">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-perplexity-muted text-center">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;