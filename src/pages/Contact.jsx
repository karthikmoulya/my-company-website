import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 🔒 You can later wire this to backend or service like Formspree / EmailJS
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! ✨');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className='min-h-screen bg-white text-gray-800'>
      <div className='px-6 md:px-20 py-20'>
        <h2 className='text-4xl font-bold text-blue-700 mb-10 text-center'>
          Contact Us
        </h2>

        <form
          onSubmit={handleSubmit}
          className='max-w-2xl mx-auto bg-gray-100 p-8 rounded-xl shadow space-y-6'
        >
          <div>
            <label className='block mb-1 font-semibold'>Name</label>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='w-full p-3 rounded border border-gray-300'
              required
            />
          </div>

          <div>
            <label className='block mb-1 font-semibold'>Email</label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='w-full p-3 rounded border border-gray-300'
              required
            />
          </div>

          <div>
            <label className='block mb-1 font-semibold'>Message</label>
            <textarea
              name='message'
              rows='4'
              value={formData.message}
              onChange={handleChange}
              className='w-full p-3 rounded border border-gray-300'
              required
            />
          </div>

          <button
            type='submit'
            className='bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
