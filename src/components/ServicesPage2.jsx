// ServicesPage2.jsx
import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

const rehabCenters = [
  {
    name: 'New Beginnings Rehab',
    address: '101 Recovery Lane, Wellness City',
    phone: '+1 234 567 8901',
    email: 'hello@newbeginnings.com',
  },
  {
    name: 'Renew Life Center',
    address: '222 Hope Street, Peaceville',
    phone: '+1 345 678 9012',
    email: 'contact@renewlife.com',
  },
  // More centers can be added here
];

const ServicesPage2 = () => {
  const { ref: sectionRef, inView } = useInView({ threshold: 0.2 });
  const cardsRef = useRef([]);

  useEffect(() => {
    if (inView) {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: 'power4.out' }
      );
    }
  }, [inView]);

  return (
    <div className="min-h-screen bg-blackRadish text-white">
      {/* Top Navigation Bar */}
      <nav className="bg-blackRadish-light p-5 shadow-md">
        <h1 className="text-3xl font-bold text-blackRadish-accent">Rehabilitation Services</h1>
      </nav>

      {/* Main Content */}
      <div ref={sectionRef} className="container mx-auto py-12 px-6">
        <h2 className="text-4xl font-semibold text-blackRadish-accent mb-10 text-center">
          Find a Rehabilitation Center
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {rehabCenters.map((center, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="transform transition duration-300 hover:-translate-y-2 rounded-lg shadow-lg border border-blackRadish-secondary bg-blackRadish-light p-6"
            >
              <h3 className="text-2xl font-bold text-blackRadish-accent mb-3">
                {center.name}
              </h3>
              <p className="text-gray-300 mb-2">
                <strong>Address:</strong> {center.address}
              </p>
              <p className="text-gray-300 mb-2">
                <strong>Phone:</strong> {center.phone}
              </p>
              <p className="text-gray-300">
                <strong>Email:</strong>{' '}
                <a
                  href={`mailto:${center.email}`}
                  className="text-blackRadish-accent hover:underline"
                >
                  {center.email}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage2;
