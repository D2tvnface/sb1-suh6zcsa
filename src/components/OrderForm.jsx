import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaShieldAlt, FaCreditCard, FaLock, FaCheckCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const OrderForm = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Thay thế các giá trị bên dưới bằng thông tin từ EmailJS của bạn
      const templateParams = {
        to_email: 'your-email@example.com', // Email người nhận
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone,
        message: `Đăng ký mới từ ${formData.fullName}
          \nEmail: ${formData.email}
          \nSố điện thoại: ${formData.phone}
          \nGói: Truy cập 1 năm
          \nGiá: 399.000đ`
      };

      await emailjs.send(
        'YOUR_SERVICE_ID', // Service ID từ EmailJS
        'YOUR_TEMPLATE_ID', // Template ID từ EmailJS
        templateParams,
        'YOUR_PUBLIC_KEY' // Public Key từ EmailJS
      );

      setShowConfirmation(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Có lỗi xảy ra khi gửi form. Vui lòng thử lại sau.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-perplexity-primary to-perplexity-secondary relative" ref={ref}>
      <div className="absolute inset-0 bg-[url('https://ik.imagekit.io/d3kzbpbila/thejashari_neural_network_background_minimal_clean_modern_4k_00cf2556-670d-48c7-8928-e49c59b6adc6_xNB_2Zg0B.png')] opacity-5 bg-cover bg-center"></div>
      <div className="container mx-auto px-4 max-w-3xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="bg-perplexity-secondary backdrop-blur-xl bg-opacity-50 rounded-2xl p-8 border border-perplexity-accent border-opacity-20 shadow-glow"
        >
          {!showConfirmation ? (
            <>
              <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-perplexity-accent to-white">
                ĐĂNG KÝ NGAY HÔM NAY
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white font-bold mb-2" htmlFor="fullName">
                    Họ và Tên
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-perplexity-primary bg-opacity-50 border border-perplexity-accent border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-perplexity-accent text-white"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-white font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-perplexity-primary bg-opacity-50 border border-perplexity-accent border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-perplexity-accent text-white"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-white font-bold mb-2" htmlFor="phone">
                    Số Điện Thoại
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-perplexity-primary bg-opacity-50 border border-perplexity-accent border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-perplexity-accent text-white"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="bg-perplexity-primary bg-opacity-50 p-6 rounded-lg mb-6 border border-perplexity-accent border-opacity-20">
                  <h3 className="text-xl font-bold mb-4 text-white">Gói Đăng Ký</h3>
                  <div className="flex items-center justify-between p-4 border border-perplexity-accent border-opacity-20 rounded-lg bg-perplexity-secondary bg-opacity-50">
                    <div>
                      <p className="font-bold text-lg text-white">Truy cập 1 năm</p>
                      <p className="text-perplexity-muted">Đầy đủ tính năng</p>
                    </div>
                    <div className="text-2xl font-bold text-perplexity-accent">399.000đ</div>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <div className="flex items-center text-perplexity-muted">
                    <FaShieldAlt className="mr-2" />
                    <span>Bảo mật</span>
                  </div>
                  <div className="flex items-center text-perplexity-muted">
                    <FaCreditCard className="mr-2" />
                    <span>Thanh toán an toàn</span>
                  </div>
                  <div className="flex items-center text-perplexity-muted">
                    <FaLock className="mr-2" />
                    <span>Mã hóa SSL</span>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-perplexity-accent text-white text-xl font-bold py-4 px-8 rounded-full hover:shadow-glow transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'ĐANG XỬ LÝ...' : 'ĐĂNG KÝ NGAY'}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <FaCheckCircle className="text-6xl text-green-500" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Đăng Ký Thành Công!</h2>
              <p className="text-perplexity-muted mb-8">
                Vui lòng chuyển khoản theo thông tin dưới đây:
              </p>
              <div className="bg-perplexity-primary bg-opacity-50 p-6 rounded-lg mb-8 border border-perplexity-accent border-opacity-20">
                <div className="space-y-4 text-left">
                  <div>
                    <p className="text-perplexity-muted">Tên tài khoản:</p>
                    <p className="text-white font-bold">Derek</p>
                  </div>
                  <div>
                    <p className="text-perplexity-muted">Số tài khoản:</p>
                    <p className="text-white font-bold">1900</p>
                  </div>
                  <div>
                    <p className="text-perplexity-muted">Ngân hàng:</p>
                    <p className="text-white font-bold">MBBANK</p>
                  </div>
                  <div>
                    <p className="text-perplexity-muted">Số tiền:</p>
                    <p className="text-white font-bold">399.000đ</p>
                  </div>
                  <div>
                    <p className="text-perplexity-muted">Nội dung chuyển khoản:</p>
                    <p className="text-white font-bold">PERPLEXITY {formData.phone}</p>
                  </div>
                </div>
              </div>
              <p className="text-perplexity-muted">
                Chúng tôi đã gửi thông tin chi tiết vào email của bạn.
                <br />
                Tài khoản sẽ được kích hoạt trong vòng 24h sau khi nhận được thanh toán.
              </p>
              <button
                onClick={() => setShowConfirmation(false)}
                className="mt-8 bg-perplexity-accent text-white px-6 py-3 rounded-full hover:shadow-glow transform hover:scale-105 transition-all"
              >
                Đăng ký tài khoản khác
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default OrderForm;