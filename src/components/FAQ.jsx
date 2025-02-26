import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Perplexity AI là gì?",
      answer: "Perplexity AI là công cụ tìm kiếm và xử lý thông tin tiên tiến được hỗ trợ bởi AI, kết hợp nhiều mô hình AI để cung cấp thông tin chính xác và đáng tin cậy một cách nhanh chóng."
    },
    {
      question: "Tôi có thể sử dụng Perplexity AI trên những thiết bị nào?",
      answer: "Perplexity AI hoạt động trên mọi thiết bị có trình duyệt web, bao gồm máy tính để bàn, laptop, máy tính bảng và điện thoại thông minh."
    },
    {
      question: "Các phương thức thanh toán được chấp nhận?",
      answer: "Chúng tôi chấp nhận tất cả các thẻ tín dụng chính, chuyển khoản ngân hàng và các phương thức thanh toán phổ biến khác. Mọi giao dịch đều được bảo mật và mã hóa."
    },
    {
      question: "Chính sách hoàn tiền như thế nào?",
      answer: "Chúng tôi cung cấp chính sách hoàn tiền trong vòng 30 ngày. Nếu bạn không hài lòng với Perplexity AI, bạn có thể yêu cầu hoàn tiền đầy đủ trong vòng 30 ngày kể từ ngày mua."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-perplexity-secondary to-perplexity-primary relative" ref={ref}>
      <div className="absolute inset-0 bg-[url('https://ik.imagekit.io/d3kzbpbila/thejashari_neural_network_background_minimal_clean_modern_4k_00cf2556-670d-48c7-8928-e49c59b6adc6_xNB_2Zg0B.png')] opacity-5 bg-cover bg-center"></div>
      <div className="container mx-auto px-4 max-w-3xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-perplexity-accent to-white">
            CÂU HỎI THƯỜNG GẶP
          </h2>
        </motion.div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-perplexity-secondary backdrop-blur-xl bg-opacity-50 rounded-2xl border border-perplexity-accent border-opacity-20"
            >
              <button
                className="w-full px-6 py-4 text-left font-bold text-white hover:bg-perplexity-primary hover:bg-opacity-50 focus:outline-none flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <FaChevronUp className="text-perplexity-accent" />
                ) : (
                  <FaChevronDown className="text-perplexity-accent" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-perplexity-muted border-t border-perplexity-accent border-opacity-20">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;