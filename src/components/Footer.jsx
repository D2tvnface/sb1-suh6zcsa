import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-perplexity-primary to-perplexity-secondary text-white py-12 relative">
      <div className="absolute inset-0 bg-[url('https://ik.imagekit.io/d3kzbpbila/thejashari_neural_network_background_minimal_clean_modern_4k_00cf2556-670d-48c7-8928-e49c59b6adc6_xNB_2Zg0B.png')] opacity-5 bg-cover bg-center"></div>
      <div className="container mx-auto px-4 max-w-7xl relative">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Liên Hệ</h3>
            <div className="space-y-2">
              <p className="flex items-center text-perplexity-muted">
                <FaEnvelope className="mr-2 text-perplexity-accent" />
                Email: hotro@perplexity.ai
              </p>
              <p className="flex items-center text-perplexity-muted">
                <FaPhone className="mr-2 text-perplexity-accent" />
                Điện thoại: 1800-PERPLEXITY
              </p>
              <p className="flex items-center text-perplexity-muted">
                <FaMapMarkerAlt className="mr-2 text-perplexity-accent" />
                Địa chỉ: Tòa nhà AI, Phố Silicon
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Pháp Lý</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-perplexity-muted hover:text-perplexity-accent transition-colors">Điều khoản sử dụng</a>
              </li>
              <li>
                <a href="#" className="text-perplexity-muted hover:text-perplexity-accent transition-colors">Chính sách bảo mật</a>
              </li>
              <li>
                <a href="#" className="text-perplexity-muted hover:text-perplexity-accent transition-colors">Chính sách hoàn tiền</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Kết Nối</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-perplexity-muted hover:text-perplexity-accent transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-perplexity-muted hover:text-perplexity-accent transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-perplexity-muted hover:text-perplexity-accent transition-colors">
                <FaFacebook size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-perplexity-accent border-opacity-20 text-center">
          <p className="text-perplexity-muted">© {new Date().getFullYear()} Perplexity AI. Bảo lưu mọi quyền.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;