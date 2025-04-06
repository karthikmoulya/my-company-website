import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div className='min-h-screen bg-white text-gray-800'>
      <div className='px-6 md:px-20 py-20'>
        <h2 className='text-4xl font-bold text-blue-700 mb-6 text-center'>
          About Us
        </h2>
        <p className='max-w-3xl mx-auto text-lg text-gray-600 leading-8 text-center'>
          We’re a team of passionate developers dedicated to building web
          solutions that help businesses thrive. From custom apps to internal
          tools, we use cutting-edge technologies and a client-first approach to
          bring your ideas to life.
        </p>

        <div className='mt-12 flex flex-col md:flex-row items-center justify-center gap-10'>
          <div className='bg-blue-100 p-6 rounded-xl text-center max-w-sm shadow'>
            <h3 className='text-xl font-semibold mb-2'>Our Mission</h3>
            <p>
              To deliver high-quality software that makes a real impact for our
              clients.
            </p>
          </div>
          <div className='bg-blue-100 p-6 rounded-xl text-center max-w-sm shadow'>
            <h3 className='text-xl font-semibold mb-2'>Our Vision</h3>
            <p>
              To be a trusted tech partner for startups, SMEs, and enterprises
              worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
