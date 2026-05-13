export const HOMEPAGE_TEST_ID = {
  COMPANY_SECTION: 'company-section',
  MISSION_SECTION: 'mission-section',
  SOFTWARE_SECTION: 'software-section',
  HIGHLIGHTS_SECTION: 'highlights-section',
  FOOTER_SECTION: 'footer-section',
} as const;

export const HomePageTestIds: Array<string> = [
  HOMEPAGE_TEST_ID.COMPANY_SECTION,
  HOMEPAGE_TEST_ID.MISSION_SECTION,
  HOMEPAGE_TEST_ID.SOFTWARE_SECTION,
  HOMEPAGE_TEST_ID.HIGHLIGHTS_SECTION,
  HOMEPAGE_TEST_ID.FOOTER_SECTION,
] as const;

export const PRIVACYPAGE_TEST_ID = {
  COMPANY_SECTION: 'company-section',
  PRIVACY_SECTION: 'privacy-section',
  FOOTER_SECTION: 'footer-section',
} as const;

export const PrivacyPageTestIds: Array<string> = [
  PRIVACYPAGE_TEST_ID.COMPANY_SECTION,
  PRIVACYPAGE_TEST_ID.PRIVACY_SECTION,
  PRIVACYPAGE_TEST_ID.FOOTER_SECTION,
] as const;

export const PRIVACYPOLICY_TEST_ID = {
  DATA_COLLECTION_POLICY: 'data-collection-policy',
  THIRD_PARTY_POLICY: 'third-party-policy',
  OPT_OUT_POLICY: 'opt-out-policy',
  CHILDREN_POLICY: 'children-policy',
  SECURITY_POLICY: 'security-policy',
  CHANGES_POLICY: 'changes-policy',
  CONSENT_POLICY: 'consent-policy',
  CONTACT_SECTION: 'contact-section',
} as const;

export const PrivacyPolicyTestIds: Array<string> = [
  PRIVACYPOLICY_TEST_ID.DATA_COLLECTION_POLICY,
  PRIVACYPOLICY_TEST_ID.THIRD_PARTY_POLICY,
  PRIVACYPOLICY_TEST_ID.OPT_OUT_POLICY,
  PRIVACYPOLICY_TEST_ID.CHILDREN_POLICY,
  PRIVACYPOLICY_TEST_ID.SECURITY_POLICY,
  PRIVACYPOLICY_TEST_ID.CHANGES_POLICY,
  PRIVACYPOLICY_TEST_ID.CONSENT_POLICY,
  PRIVACYPOLICY_TEST_ID.CONTACT_SECTION,
] as const;