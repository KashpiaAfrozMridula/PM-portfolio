import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 bg-white text-center">
      <p className="text-[10px] text-gray-400 font-mono tracking-widest uppercase">
        © {new Date().getFullYear()} Kashpia Afroz Mridula.
      </p>
    </footer>
  );
};

export default Footer;
