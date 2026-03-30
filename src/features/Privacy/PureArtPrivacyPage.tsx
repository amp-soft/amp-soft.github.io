import type { PrivacyPolicyData } from "@components/PrivacyPolicy";
import PrivacyPage from "./PrivacyPage";
import PureArtIcon from "@components/PureArtIcon";
import { COMPANY } from "@utils/constants";

function PureArtPrivacyPage() {
  const data: PrivacyPolicyData = {
    company: COMPANY.NAME,
    appName: 'Pure Art AI',
    appIcon: PureArtIcon,
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
    date: '2026-03-27'
  };

  return (
    PrivacyPage(data)
  );
};

export default PureArtPrivacyPage;