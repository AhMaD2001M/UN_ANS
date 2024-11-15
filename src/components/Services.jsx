import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    title: 'Live Consultancy',
    description: 'AI-powered chatbot for live consultations.',
    icon: '💬',
    url: '/live-consultancy',
  },
  {
    title: 'Rehabilitation Centers',
    description: 'Contacts of rehabilitation centers and doctors.',
    icon: '🏥',
    url: '/rehabilitation-centers',
  },
  {
    title: 'Awareness Sessions',
    description: 'Online sessions with timings, dates, and video links.',
    icon: '📅',
    url: '/awareness-sessions',
  },
  {
    title: 'Emergency Report',
    description: 'Direct contact with ANF for drug-related emergencies.',
    icon: '🚨',
    url: '/emergency-report',
  },
  {
    title: 'Awareness Campaigns',
    description: 'Campaigns running against drugs.',
    icon: '📢',
    url: '/awareness-campaigns',
  },
  {
    title: 'Student Societies',
    description: 'Links to societies by area.',
    icon: '🎓',
    url: '/student-societies',
  },
];

const Services = () => {
  const servicesRef = useRef([]);

  useEffect(() => {
    servicesRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: index * 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
        }
      );
    });
  }, []);

  return (
    <section className="dark:bg-gray-800 bg-white relative overflow-hidden min-h-screen">
      <h2 className="text-4xl font-extrabold text-center text-white mb-12">Our Services</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {servicesData.map((service, index) => (
          <a
            key={index}
            href={service.url}
            target="_blank"
            rel="noopener noreferrer"
            ref={(el) => (servicesRef.current[index] = el)}
            className="bg-white dark:bg-gray-700 text-gray-700 dark:text-white rounded-2xl shadow-lg p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-indigo-400 hover:shadow-indigo-400"
          >
            <div className="text-6xl mb-4 text-indigo-800 dark:text-indigo-400">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-3 text-indigo-800 dark:text-white">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Services;
