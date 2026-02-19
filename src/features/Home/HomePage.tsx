//import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Code,
  Database,
  Palette,
  Shield,
  Globe,
  Check,
  AlertTriangle,
  Download,
  Users,
  BarChart3,
} from 'lucide-react';

import { Button } from '@/shared/components/ui/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/shared/components/ui/Card';
import { Badge } from '@/shared/components/ui/Badge'
import CompanyHeader from '@components/CompanyHeader';
import RemindersIcon from '@components/RemindersIcon';
import AuraDreamIcon from '@components/AuraDreamIcon';
import { COMPANY } from '@utils/constants';

const mission = {
  title: 'Your Creativity, Your Privacy',
  // statement: 'Our apps use local-first AI to boost productivity and provide private insights.',
  statement: 'We build high-performance, local-first AI tools that empower your daily life without ever touching your data.',
  pillars: [
    {
      icon: Shield,
      title: 'Zero-Knowledge AI',
      description: 'What happens on your device stays on your device. By leveraging local models, our apps process your information in real-time without ever uploading a single byte to the cloud.',
      color: 'text-accent-error'
    },
    {
      icon: Palette,
      title: 'Adaptive, Expressive Design',
      description: 'Built on the latest Material 3 standards, our interface feels native to your device. It’s not just functional; it’s fluid, personalized, and designed to move with you.',
      color: 'text-accent-warning'
    },
    {
      icon: Globe,
      title: 'Global by Design',
      description: 'Privacy and productivity are universal needs. Our software is fully localized in over 10 languages, ensuring a world-class experience no matter where you call home.',
      color: 'text-accent-primary'
    },
  ],
};

const software = [
  {
    title: 'Aura Dream AI',
    url: 'https://play.google.com/store/apps/details?id=com.ampsoft.dreamjournal',
    description: 'Private Insights into Your Subconscious. Journal your dreams and let AI reveal symbolic meanings and emotional themes. Discover a deeper understanding of your mind with the ultimate private dream journal.',
    icon: AuraDreamIcon,
    features: [
      {
        title: 'Your Vault, Your Privacy',
        description: 'Your dream journal is for your eyes only. Our app uses local, on-device, AI computation. Meaning all your dream transcripts and analysis stay on your phone. No data is ever sent to a server, giving you complete peace of mind and total privacy.',
      },
      {
        title: 'Private AI Analysis',
        description: 'Get instant, insightful interpretations of your dreams. Our local AI tags key symbols, themes, and emotional tones, helping you decode your subconscious with complete privacy.',
      },
      {
        title: 'Track Your Mind',
        description: 'Log your dreams in a clean, intuitive journal. Track the emotional tone of your dreams over time to find correlations and patterns.',
      },
      {
        title: 'Symbol Library',
        description: 'A built-in library of common dream symbols gives you a deeper context for your AI analysis, helping you understand the universal language of dreams.',
      },
    ],
    disclaimers: [
      'For personal reflection and entertainment purposes only.',
      'AI interpretations are not medical or psychological advice.',
      'Users should consult a qualified healthcare professional for any health concerns.',
      'Not intended to diagnose, treat, cure, or prevent any disease or medical condition.',
    ],
    privacyPath: '#/privacy/auradream'
  },
  {
    title: 'Reminders',
    url: 'https://play.google.com/store/apps/details?id=com.ampsoft.notifier',
    description: 'Introducing Reminders, the ultimate reminder app designed to keep your life on track with unparalleled ease. Whether it’s a crucial appointment, a daily task, or a special occasion, our intuitive user interface makes creating and managing reminders a breeze.',
    icon: RemindersIcon,
    features: [
      {
        title: 'Simple & Intuitive UI',
        description: 'Our streamlined design ensures that creating a reminder is quick and hassle-free, even for first-time users.',
      },
      {
        title: 'One-Time Reminders',
        description: 'Set a specific date and time for a single event, and we’ll make sure you get a notification exactly when you need it.',
      },
      {
        title: 'Recurring Reminders',
        description: 'For daily habits, weekly meetings, or monthly bills, easily configure reminders to repeat at intervals that suit your schedule.',
      },
      {
        title: 'Customizable Messages',
        description: 'Personalize each reminder with a clear and concise message, ensuring you know exactly what needs to be done.',
      },
      {
        title: 'Reliable Notifications',
        description: 'Receive timely and prominent notifications that cut through the noise, so you never miss an important reminder.',
      },
    ],
    disclaimers: [
      'For personal productivity purposes only.',
    ],
    privacyPath: '#/privacy/reminders'
  },
];

const highlights = [
  {
    icon: Database,
    title: 'Device-Only Storage',
    description: 'Your data stays home.',
  },
  {
    icon: Users,
    title: 'No Account Required',
    description: 'Start using our aps instantly.',
  },
  {
    icon: BarChart3,
    title: 'Native Performance',
    description: 'Native built for the smoothest experience.',
  },
];

const footer = {
  title: 'Ready for more?',
  description: 'Browse our suite of private-first apps or provide feedback on our latest builds via GitHub.',
  navigation: [
    {
      icon: Download,
      button: 'default' as const,
      label: 'Google Play Store',
      url: COMPANY.STORE,
    },
    {
      icon: Code,
      button: 'outline' as const,
      label: 'GitHub Community',
      url: COMPANY.GITHUB,
    },
  ],
  techStack: [
    {
      name: 'Google AI Edge',
      url: 'https://ai.google.dev/edge',
    },
    {
      name: 'Gemma 3',
      url: 'https://ai.google.dev/gemma/docs/core',
    },
    {
      name: 'BigScience',
      url: 'https://bigscience.huggingface.co/',
    },
  ]
};

function HomePage() {
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

      {/* Mission Section */}
      <section className="py-8 bg-background-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              {mission.title}
            </h2>
            <p className="text-lg text-text-secondary mx-auto">
              {mission.statement}
            </p>
          </motion.div>

          {/* Mission Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mission.pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <pillar.icon className={`h-10 w-10 ${pillar.color} mb-2`} />
                    <CardTitle className="text-xl">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {pillar.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Software Library
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Beautiful, accessible, and easy-to-use applications.
            </p>
          </motion.div>

          <div className="gap-8">
            {software.map((app, index) => (
              <motion.div
                key={app.title}
                className="mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                {/* Software App */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 mb-3">
                      <app.icon className="h-6 w-6 flex-shrink-0" />
                      <span>{app.title}</span>
                    </CardTitle>
                    <CardDescription>{app.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <article>
                      <div className="pb-4">
                        <h2 className="text-xl text-text-primary mb-2">
                          Key Features
                        </h2>
                        <ul className="space-y-4">
                        {app.features.map((feature, index) => (
                          <li key={index} className="flex gap-3">
                            <div className="flex-shrink-0 mt-1">
                              <Check className="h-5 w-5 text-accent-success" />
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold text-text-primary">{feature.title}</p>
                              <p className="text-sm text-text-secondary mt-1">{feature.description}</p>
                            </div>
                          </li>
                        ))}
                        </ul>
                      </div>
                      <div className="pb-8 mt-6">
                        <h2 className="p-2 bg-accent-warning/10 border-l-4 border-accent-warning rounded text-lg font-bold text-accent-warning mb-2 flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5" />
                          Important Disclaimers
                        </h2>
                        <ul className="space-y-2">
                        {app.disclaimers.map((disclaimer, index) => (
                          <li key={index} className="flex gap-3 text-sm text-text-primary">
                            <span className="text-accent-warning font-bold">•</span>
                            <span>{disclaimer}</span>
                          </li>
                        ))}
                        </ul>
                      </div>
                      <div className="flex gap-4">
                        <Button
                          size="lg"
                          onClick={() =>
                            window.open(app.url,'_blank')
                          }
                          className="cursor-pointer"
                        >
                          Visit Google Play
                        </Button>
                        <Button
                          variant="outline"
                          size="lg"
                          onClick={() =>
                            window.open(app.privacyPath, '_self')
                          }
                          className="cursor-pointer"
                        >
                          Privacy Policy
                        </Button>
                      </div>
                    </article>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <highlight.icon className="h-12 w-12 mx-auto text-accent-primary mb-4" />
                    <div className="text-3xl font-bold text-text-primary mb-2">
                      {highlight.title}
                    </div>
                    <div className="text-text-secondary">
                      {highlight.description}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              {footer.title}
            </h2>
            <p className="text-lg text-text-secondary mb-8 mx-auto">
              {footer.description}
            </p>
            <div className="flex justify-center gap-4 mb-6">
              {footer.navigation.map((item, index) => (
                <Button
                  key={index}
                  variant={item.button}
                  size="lg"
                  onClick={() =>
                    window.open(item.url, '_blank')
                  }
                  className="cursor-pointer"
                >
                  <item.icon className="w-5 h-5 mr-2" />
                  {item.label}
                </Button>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center gap-2">
              {footer.techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Badge variant="outline">
                    <Link to={tech.url} target="_blank">{tech.name}</Link>
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;