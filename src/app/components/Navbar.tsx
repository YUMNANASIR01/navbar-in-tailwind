'use client';
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import { AnimatePresence, motion } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <AnimatePresence>
        {isOpen ? (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            onClick={() => setIsOpen(false)}
            className="w-full bg-purple-300 flex flex-col items-center justify-center p-4"
          >
            <ImCross
              style={{ color: 'black' }}
              className="cursor-pointer absolute top-4 left-4"
              onClick={() => setIsOpen(false)}
            />

            <ul className="space-y-4 text-center text-[purple] font-semibold text-[20px] mb-3">
              <li className="hover:text-purple-600 cursor-pointer">HOME</li>
              <li className="hover:text-purple-600 cursor-pointer">ABOUT</li>
              <li className="hover:text-purple-600 cursor-pointer">SERVICES</li>
              <li className="hover:text-purple-600 cursor-pointer">TESTIMONIAL</li>
              <li className="hover:text-purple-600 cursor-pointer">CONTACT</li>
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>

      {!isOpen && (
        <nav className="flex justify-between items-center p-4 bg-slate-400">
          <ul className="hidden lg:flex space-x-6 ml-auto">
            <li className="text-[#222247] font-bold text-[20px] cursor-pointer hover:text-[#6060e3]">HOME</li>
            <li className="text-[#222247] font-bold text-[20px] cursor-pointer hover:text-[#6060e3]">ABOUT</li>
            <li className="text-[#222247] font-bold text-[20px] cursor-pointer hover:text-[#6060e3]">SERVICES</li>
            <li className="text-[#222247] font-bold text-[20px] cursor-pointer hover:text-[#6060e3]">TESTIMONIAL</li>
            <li className="text-[#222247] font-bold text-[20px] cursor-pointer hover:text-[#6060e3]">CONTACT</li>
          </ul>

          <GiHamburgerMenu
            size={30}
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer lg:hidden"
          />
        </nav>
      )}
    </div>
  );
}

export default Navbar;


















