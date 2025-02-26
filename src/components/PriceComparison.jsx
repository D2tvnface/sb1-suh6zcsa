import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCheck } from 'react-icons/fa';

const PriceComparison = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    'Giá/năm',
    'Truy cập ChatGPT-4o',
    'Truy cập Claude 3.7 Sonnet',
    'Truy cập Gemini 2.0',
    'Truy cập Grok-2',
    'Truy cập Sonar'
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-perplexity-primary to-perplexity-secondary relative" ref={ref}>
      <div className="absolute inset-0 bg-[url('https://ik.imagekit.io/d3kzbpbila/thejashari_neural_network_background_minimal_clean_modern_4k_00cf2556-670d-48c7-8928-e49c59b6adc6_xNB_2Zg0B.png')] opacity-5 bg-cover bg-center"></div>
      <div className="container mx-auto px-4 max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-perplexity-accent to-white">
            TIẾT KIỆM LÊN ĐẾN 80% SO VỚI GIÁ GỐC!
          </h2>
          <p className="text-perplexity-muted text-xl max-w-3xl mx-auto">
            So sánh và lựa chọn gói dịch vụ phù hợp với nhu cầu của bạn
          </p>
        </motion.div>
        
        {/* Mobile View */}
        <div className="md:hidden space-y-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-perplexity-secondary backdrop-blur-xl bg-opacity-50 rounded-lg p-4 border border-perplexity-accent border-opacity-20">
              <div className="font-bold text-white mb-2">{feature}</div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-sm text-perplexity-muted mb-1">Giá ưu đãi</div>
                  {feature === 'Giá/năm' ? (
                    <div className="text-xl font-bold text-perplexity-accent">399.000đ</div>
                  ) : (
                    <div className="flex justify-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-500 bg-opacity-20">
                        <FaCheck className="text-green-500" />
                      </span>
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <div className="text-sm text-perplexity-muted mb-1">Giá gốc</div>
                  {feature === 'Giá/năm' ? (
                    <div className="text-xl font-bold text-perplexity-muted">800.000đ</div>
                  ) : (
                    <div className="flex justify-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-500 bg-opacity-20">
                        <FaCheck className="text-green-500" />
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden md:block">
          <table className="w-full backdrop-blur-xl rounded-2xl shadow-glow">
            <thead>
              <tr className="border-b border-perplexity-accent border-opacity-20">
                <th className="px-6 py-6 text-left text-lg font-normal text-perplexity-muted w-1/3">Tính năng</th>
                <th className="px-6 py-6 text-center bg-perplexity-accent bg-opacity-10 text-white font-bold text-lg w-1/3">
                  Perplexity AI
                  <br />
                  <span className="text-sm font-normal text-perplexity-muted">Giá ưu đãi</span>
                </th>
                <th className="px-6 py-6 text-center text-lg font-normal text-perplexity-muted w-1/3">
                  Perplexity AI
                  <br />
                  <span className="text-sm">Giá gốc</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-b border-perplexity-accent border-opacity-10">
                  <td className="px-6 py-6 text-white">{feature}</td>
                  <td className="px-6 py-6 text-center bg-perplexity-accent bg-opacity-5">
                    {feature === 'Giá/năm' ? (
                      <span className="text-2xl font-bold text-perplexity-accent">399.000đ</span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-500 bg-opacity-20">
                        <FaCheck className="text-green-500" />
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-6 text-center">
                    {feature === 'Giá/năm' ? (
                      <span className="text-2xl font-bold text-perplexity-muted">800.000đ</span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-500 bg-opacity-20">
                        <FaCheck className="text-green-500" />
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-12 max-w-3xl mx-auto"
        >
          <p className="text-perplexity-muted text-lg">
            Đừng bỏ lỡ cơ hội sở hữu Perplexity AI với giá không thể tốt hơn!
            <br />
            <span className="text-white">Tiết kiệm đến 80% so với giá gốc</span> và trải nghiệm sức mạnh của AI ngay hôm nay.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PriceComparison;