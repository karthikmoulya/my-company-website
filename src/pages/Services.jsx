import React from 'react';
import Navbar from '../components/Navbar';

const Services = () => {
  const services = [
    {
      title: 'Custom Web Applications',
      description:
        'We build scalable, full-stack web apps tailored to your business needs using modern frameworks like React, NestJS, and MongoDB.',
    },
    {
      title: 'Internal Tools & Dashboards',
      description:
        'From analytics dashboards to workflow tools, we create solutions that boost productivity and help you make data-driven decisions.',
    },
    {
      title: 'API Development & Integration',
      description:
        'Need APIs? We design secure, RESTful or GraphQL APIs, and integrate with third-party services like Stripe, Firebase, AWS, and more.',
    },
  ];

  return (
    <div className='min-h-screen bg-gray-50 text-gray-800'>
      <div className='px-6 md:px-20 py-20'>
        <h2 className='text-4xl font-bold mb-10 text-center text-blue-700'>
          Our Services
        </h2>

        <div className='grid gap-8 md:grid-cols-3'>
          {services.map((service, index) => (
            <div
              key={index}
              className='bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition'
            >
              <h3 className='text-xl font-semibold mb-4'>{service.title}</h3>
              <p className='text-gray-600'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
