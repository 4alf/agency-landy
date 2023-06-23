import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FacebookLogo, TwitterLogo, InstagramLogo } from 'utils/Icons';


const Footer: React.FC = () => {

return (


    <footer className="bg-gray-darker">
      <div className="hidden md:block">
        <div className="flex items-center justify-between py-14  mx-auto max-w-7xl px-6">
          <div className="flex-shrink-0">
            <Image
              width={190}
              height={90}
              src="/svgs/main-logo.svg"
              alt="main-logo"
            />
          </div>
          <div className="flex items-center space-x-6">
            <h1 className="text-white text-lg font-medium">
              Get a free consultation
            </h1>
            <motion.button
              className="bg-primary-indigo hover:opacity-80 focus:opacity-100 text-white px-4 xl:px-12 py-3 rounded-lg text-lg font-medium focus:outline-none transition ease-in-out duration-200 hover:shadow-xl"
              whileHover={{ y: -4 }}
            >
              Contact
            </motion.button>
          </div>
        </div>
      </div>
    </footer>


)

    
}