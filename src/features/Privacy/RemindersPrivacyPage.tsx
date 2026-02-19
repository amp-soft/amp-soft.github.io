import type { PrivacyPolicyData } from "@components/PrivacyPolicy";
import PrivacyPage from "./PrivacyPage";
import RemindersIcon from "@components/RemindersIcon";
import { COMPANY } from "@utils/constants";

function RemindersPrivacyPage() {
  const data: PrivacyPolicyData = {
    company: COMPANY.NAME,
    appName: 'Reminders',
    appIcon: RemindersIcon,
    services: [
      {
        label: 'Google Play Services',
        url: 'https://play.google.com/about/play-terms/'
      },
      {
        label: 'Google AdMob',
        url: 'https://transparency.google/our-policies/product-terms/google-admob/'
      },
      {
        label: 'Firebase Crashlytics',
        url: 'https://firebase.google.com/support/privacy/'
      },
    ],
    email: COMPANY.EMAIL,
    date: '2025-05-27'
  };

  return (
    PrivacyPage(data)
  );
};

export default RemindersPrivacyPage;