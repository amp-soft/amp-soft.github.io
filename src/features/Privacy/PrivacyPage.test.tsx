import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, test, expect, vi, beforeEach } from 'vitest';

import PrivacyPage from './PrivacyPage';
import type { PrivacyPolicyData } from '@components/PrivacyPolicy';
import { stubIntersectionObserver } from '@test/MockIntersectionObserver';
import { PrivacyPageTestIds, PrivacyPolicyTestIds } from '@test/constants';

const data: PrivacyPolicyData = {
    company: 'Test Company',
    appName: 'Test App',
    appIcon: () => { return (<div />) },
    services: [
      {
        label: 'Test Services',
        url: 'https://testwebsite.com/terms/'
      },
    ],
    email: 'test@company.com',
    date: '2026-05-25'
  };

describe('Privacy Page', () => {
  beforeEach(() => {
    stubIntersectionObserver()

    render(<MemoryRouter>{PrivacyPage(data)}</MemoryRouter>);
  });

  test.for(PrivacyPageTestIds)('renders %s', (testId) => {
    const container = screen.getByTestId(testId)
    expect(container).toBeInTheDocument()
  });

  test('renders homepage button', () => {
    const button = screen.getByRole('button', { name: /Go to Homepage/i });
    expect(button).toBeInTheDocument();
    expect(button.onclick).not.toBeNull();

    const mockWindowOpen = vi.fn();
    window.open = mockWindowOpen;

    // click button
    fireEvent.click(button);

    // verify window.open was called with expected url
    expect(mockWindowOpen).toHaveBeenCalledWith('/', '_self');
  });

  test('renders back button', () => {
    const button = screen.getByRole('button', { name: /Go Back/i });
    expect(button).toBeInTheDocument();
    expect(button.onclick).not.toBeNull();

    const mockWindowBack = vi.fn();
    window.history.back = mockWindowBack;

    // click button
    fireEvent.click(button);

    // verify window.history.back was called
    expect(mockWindowBack).toHaveBeenCalled();
  });
});

describe('Privacy Policy', () => {
  beforeEach(() => {
    stubIntersectionObserver()

    render(<MemoryRouter>{PrivacyPage(data)}</MemoryRouter>);
  });

  test.for(PrivacyPolicyTestIds)('renders %s', (testId) => {
    const container = screen.getByTestId(testId)
    expect(container).toBeInTheDocument()
  });
});