import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      quote: "Perplexity AI đã giúp tôi tiết kiệm rất nhiều thời gian trong việc tìm kiếm thông tin cho các bài viết. Tôi rất hài lòng với công cụ này!",
      author: "Nguyễn Văn An",
      role: "Content Creator",
      image: "https://placehold.co/100x100/png?text=NVA"
    },
    {
      quote: "Là một sinh viên, Perplexity AI là công cụ học tập tuyệt vời. Nó giúp tôi tìm thông tin nhanh chóng và chính xác cho các bài luận và nghiên cứu.",
      author: "Trần Thị Bình",
      role: "Sinh viên",
      image: "https://placehold.co/100x100/png?text=TTB"
    },
    {
      quote: "Các mô hình AI có sẵn thông qua Perplexity AI đã cách mạng hóa cách tôi tiếp cận công việc nghiên cứu của mình.",
      author: "TS. Lê Văn Cường",
      role: "Nhà nghiên cứu",
      image: "https://placehold.co/100x100/png?text=LVC"
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
            NGƯỜI DÙNG NÓI GÌ VỀ PERPLEXITY AI
          </h2>
          <p className="text-perplexity-muted text-xl max-w-3xl mx-auto">
            Khám phá trải nghiệm thực tế từ cộng đồng người dùng
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-perplexity-secondary backdrop-blur-xl bg-opacity-50 rounded-2xl p-8 border border-perplexity-accent border-opacity-20 hover:shadow-glow transition-all"
            >
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="absolute -top-2 -left-2">
                    <FaQuoteLeft className="text-2xl text-perplexity-accent opacity-50" />
                  </div>
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-20 h-20 rounded-full mb-6 border-2 border-perplexity-accent border-opacity-20 group-hover:border-opacity-50 transition-all"
                  />
                </div>
                <p className="text-perplexity-muted italic mb-6 text-center">
                  {testimonial.quote}
                </p>
                <div className="text-center">
                  <p className="font-bold text-white mb-1">{testimonial.author}</p>
                  <p className="text-perplexity-muted text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;