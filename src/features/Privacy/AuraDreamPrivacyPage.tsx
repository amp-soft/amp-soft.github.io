import type { PrivacyPolicyData } from "@components/PrivacyPolicy";
import PrivacyPage from "./PrivacyPage";
import AuraDreamIcon from "@components/AuraDreamIcon";
import { COMPANY } from "@utils/constants";

function AuraDreamPrivacyPage() {
  const data: PrivacyPolicyData = {
    company: COMPANY.NAME,
    appName: 'Aura Dream AI',
    appIcon: AuraDreamIcon,
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
      {
        label: 'Gemma Terms',
        url: 'https://ai.google.dev/gemma/terms'
      },
    ],
    email: COMPANY.EMAIL,
    date: '2025-05-27'
  };

  return (
    PrivacyPage(data)
  );
};

export default AuraDreamPrivacyPage;