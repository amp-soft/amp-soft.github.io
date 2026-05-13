import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, test, expect, beforeEach } from 'vitest';

import PrivacyPage from './RemindersPrivacyPage';
import { stubIntersectionObserver } from '@test/MockIntersectionObserver';
import { PrivacyPageTestIds, PrivacyPolicyTestIds } from '@test/constants';

describe('Reminders Privacy Page', () => {
  beforeEach(() => {
    stubIntersectionObserver()

    render(<MemoryRouter><PrivacyPage /></MemoryRouter>);
  });

  test.for(PrivacyPageTestIds)('renders %s', (testId) => {
    const container = screen.getByTestId(testId)
    expect(container).toBeInTheDocument()
  });
});

describe('Reminders Privacy Policy', () => {
  beforeEach(() => {
    stubIntersectionObserver()

    render(<MemoryRouter><PrivacyPage /></MemoryRouter>);
  });

  test.for(PrivacyPolicyTestIds)('renders %s', (testId) => {
    const container = screen.getByTestId(testId)
    expect(container).toBeInTheDocument()
  });
});