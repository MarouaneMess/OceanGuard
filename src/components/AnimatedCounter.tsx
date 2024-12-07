import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StatProps {
  value: number;
  label: string;
  suffix?: string;
}

export function AnimatedCounter({ value, label, suffix = '' }: StatProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center p-6"
    >
      <div className="text-4xl font-bold text-blue-600 mb-2">
        {inView ? (
          <CountUp
            end={value}
            duration={2.5}
            suffix={suffix}
          />
        ) : '0'}
      </div>
      <div className="text-gray-600">{label}</div>
    </motion.div>
  );
}