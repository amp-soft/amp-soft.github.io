//import { useState } from 'react';
import { Link } from 'react-router-dom';
//import { motion } from 'framer-motion';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/shared/components/ui/Card';
import { Separator } from '@/shared/components/ui/Separator';

interface PrivacyPolicyData {
    company: string,
    appName: string,
    appIcon: React.ComponentType<React.HTMLAttributes<HTMLDivElement>>,
    services: Array<{
      label: string,
      url: string,
    }>,
    email: string,
    date: string,
};

interface PrivacyPolicyProps extends React.HTMLAttributes<HTMLDivElement> {
  data: PrivacyPolicyData
};

const disclosures = [
  'as required by law, such as to comply with a subpoena, or similar legal process',
  'when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request',
  'with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement',
];

function PrivacyPolicy({data, className, ...props } : PrivacyPolicyProps) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 mb-3">
          <data.appIcon className="h-6 w-6 flex-shrink-0" />
          <span>{data.appName}</span>
        </CardTitle>
        <CardDescription>
          <article>
            This privacy policy applies to the {data.appName} app (hereby referred to as “Application”) for mobile devices that was
            created by {data.company} (hereby referred to as “Service Provider”) as an Ad Supported service. This service is intended
            for use “AS IS”.
            <Separator className='my-4' />
          </article>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="pb-1">
          {/* Data Collection Policy */}
          <section className="mb-3">
            <h2 className="text-xl text-text-primary mb-2">
              Information Collection and Use
            </h2>
            <p className="text-sm text-text-secondary mb-2">
              The Application does not collect information to share when using it. All data stored and used by the app is user generated,
              for the functionality of the application.
            </p>
            <p className="text-sm text-text-secondary mb-2">
              The Application does not gather precise information about the location of your mobile device.
            </p>
            <p className="text-sm text-text-secondary">
              For a better experience, while using the Application, additional information may be sent by Third Parties to help debug and fix
              any reported issues. The information that the Third Parties request will be retained by them and used as described in this privacy policy.
            </p>
            <Separator className='my-4' />
          </section>
          {/* Third Party Policy */}
          <section className="mb-3">
            <h2 className="text-xl text-text-primary mb-2">
              Third Party Access
            </h2>
            <p className="text-sm text-text-secondary mb-2">
              Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application
              and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy
              statement.
            </p>
            <p className="text-sm text-text-secondary mb-2">
              Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the
              links to the Privacy Policy of the third-party service providers used by the Application:
            </p>
            <ul className="space-y-2 mb-4">
            {data.services.map((service, index) => (
              <li key={index} className="flex gap-3 text-sm text-text-primary">
                <span className="font-bold">•</span>
                {' '}<Link className='text-link' to={service.url} target="_blank">{service.label}</Link>
              </li>
            ))}
            </ul>
            <p className="text-sm text-text-secondary mb-2">
              The Service Provider may disclose User Provided and Automatically Collected Information:
            </p>
            <ul className="space-y-2 mb-2">
            {disclosures.map((disclosure, index) => (
              <li key={index} className="flex gap-3 text-sm text-text-primary">
                <span className="font-bold">•</span>
                <span>{disclosure}</span>
              </li>
            ))}
            </ul>
            <Separator className='my-4' />
          </section>
          {/* Opt-Out Policy */}
          <section className="mb-3">
            <h2 className="text-xl text-text-primary mb-2">
              Opt-Out Rights
            </h2>
            <p className="text-sm text-text-secondary">
              You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall
              processes as may be available as part of your mobile device or via the mobile application marketplace or network.
            </p>
            <Separator className='my-4' />
          </section>
          {/* Children Policy */}
          <section className="mb-3">
            <h2 className="text-xl text-text-primary mb-2">
              Children
            </h2>
            <p className="text-sm text-text-secondary">
              The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable
              information from children under 13 years of age. In the case the Service Provider discover that a child under 13 has provided personal
              information, the Service Provider will immediately delete this from their servers. If you are a parent or guardian and you are aware
              that your child has provided us with personal information, please contact the
              {' '}<Link className='text-link' to={`mailto:${data.email}`}>Service Provider</Link>{' '}
              so that they will be able to take the necessary actions.
            </p>
            <Separator className='my-4' />
          </section>
          {/* Security Policy */}
          <section className="mb-3">
            <h2 className="text-xl text-text-primary mb-2">
              Security
            </h2>
            <p className="text-sm text-text-secondary">
              The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical,
              electronic, and procedural safeguards to protect information the Service Provider processes and maintains.
            </p>
            <Separator className='my-4' />
          </section>
          {/* Changes Policy */}
          <section className="mb-3">
            <h2 className="text-xl text-text-primary mb-2">
              Changes
            </h2>
            <p className="text-sm text-text-secondary mb-2">
              This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the
              Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any
              changes, as continued use is deemed approval of all changes.
            </p>
            <p className="text-sm text-text-secondary">
              This privacy policy is effective as of {data.date}.
            </p>
            <Separator className='my-4' />
          </section>
          {/* Consent Policy */}
          <section className="mb-3">
            <h2 className="text-xl text-text-primary mb-2">
              Your Consent
            </h2>
            <p className="text-sm text-text-secondary">
              By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as
              amended by us.
            </p>
            <Separator className='my-4' />
          </section>
          {/* Contact */}
          <section className="mb-3">
            <h2 className="text-xl text-text-primary mb-2">
              Contact Us
            </h2>
            <p className="text-sm text-text-secondary">
              If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the
              {' '}<Link className='text-link' to={`mailto:${data.email}`}>Service Provider</Link>.
            </p>
          </section>
        </div>
      </CardContent>
    </Card>
  );
};

export { PrivacyPolicy, type PrivacyPolicyData };