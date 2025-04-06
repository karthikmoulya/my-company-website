import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../assets/hero.svg';

const Home = () => {
  return (
    <div className='min-h-screen bg-white text-gray-800'>
      {/* Hero Section */}
      <section className='flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-24'>
        <div className='max-w-xl'>
          <h2 className='text-4xl md:text-5xl font-extrabold mb-6'>
            We Build Web Apps <br /> That Drive Results 🚀
          </h2>
          <p className='text-lg mb-6 text-gray-600'>
            Custom solutions for your business. Whether it's tools, dashboards,
            or full-blown platforms — we got you covered.
          </p>
          <Link
            to='/contact'
            className='inline-block px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition'
          >
            Let's Work Together
          </Link>
        </div>

        <img
          src={hero}
          alt='Hero illustration'
          className='mt-12 md:mt-0 w-full md:w-1/2 max-w-md'
        />
      </section>

      {/* What We Do */}
      <section className='px-8 md:px-20 py-16 bg-gray-100'>
        <h3 className='text-3xl font-bold text-center text-blue-700 mb-10'>
          What We Do
        </h3>
        <div className='grid gap-10 md:grid-cols-3'>
          {[
            {
              title: 'Web App Development',
              desc: 'Custom web apps using React, Next.js, or Vue to fit your business.',
            },
            {
              title: 'Backend APIs',
              desc: 'Robust REST/GraphQL APIs using NestJS, Express, or Django.',
            },
            {
              title: 'UI/UX Design',
              desc: 'Beautiful, intuitive interfaces crafted with modern design tools.',
            },
          ].map((item, i) => (
            <div key={i} className='bg-white p-6 rounded-xl shadow-md'>
              <h4 className='text-xl font-semibold mb-2'>{item.title}</h4>
              <p className='text-gray-600'>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className='px-8 md:px-20 py-16'>
        <h3 className='text-3xl font-bold text-center text-blue-700 mb-10'>
          Why Choose Us?
        </h3>
        <div className='grid gap-8 md:grid-cols-3'>
          <div className='p-6 bg-blue-50 rounded-xl shadow'>
            <h4 className='font-bold mb-2'>Experienced Team</h4>
            <p className='text-gray-600'>
              We bring years of experience building scalable and secure software
              for all kinds of businesses.
            </p>
          </div>
          <div className='p-6 bg-blue-50 rounded-xl shadow'>
            <h4 className='font-bold mb-2'>Client-First Approach</h4>
            <p className='text-gray-600'>
              We work closely with clients, ensuring each feature delivers real
              value.
            </p>
          </div>
          <div className='p-6 bg-blue-50 rounded-xl shadow'>
            <h4 className='font-bold mb-2'>Modern Tech Stack</h4>
            <p className='text-gray-600'>
              We use React, NestJS, MongoDB, TailwindCSS, Docker, and more to
              build cutting-edge apps.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
