//import { useState } from 'react';
//import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';

import { PrivacyPolicy, type PrivacyPolicyData } from '@components/PrivacyPolicy';
import { Button } from '@/shared/components/ui/Button';
import CompanyHeader from '@components/CompanyHeader';

function PrivacyPage(data: PrivacyPolicyData) {
  return (
    <div className="min-h-screen bg-background-primary text-text-primary antialiased">
      {/* Company Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-accent-primary/10 to-accent-secondary/10"></div>
        <div className="relative container mx-auto px-4 py-16 sm:py-20">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <CompanyHeader />
          </motion.div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Privacy Policy
            </h2>
          </motion.div>

          <div className="gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <PrivacyPolicy data={data} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center gap-4 mb-6">
              <Button
                variant="default"
                size="lg"
                onClick={() => window.open('/', '_self') }
                className="cursor-pointer"
              >
                <Home className="h-5 w-5 mr-2" />
                Go to Homepage
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.history.back() }
                className="cursor-pointer"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Go Back
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;