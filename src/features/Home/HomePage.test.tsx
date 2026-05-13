import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, test, expect, vi, beforeEach } from 'vitest';

import HomePage from './HomePage';
import { COMPANY } from '@utils/constants';
import { HomePageTestIds } from '@test/constants'
import { stubIntersectionObserver } from '@test/MockIntersectionObserver';

describe('Home Page', () => {
  beforeEach(() => {
    stubIntersectionObserver()

    render(<MemoryRouter><HomePage /></MemoryRouter>);
  });

  test.for(HomePageTestIds)('renders %s', (testId) => {
    const container = screen.getByTestId(testId)
    expect(container).toBeInTheDocument()
  });

  test('renders company store button', () => {
    const button = screen.getByRole('button', { name: /Google Play Store/i });
    expect(button).toBeInTheDocument();
    expect(button.onclick).not.toBeNull();

    const mockWindowOpen = vi.fn();
    window.open = mockWindowOpen;

    // click button
    fireEvent.click(button);

    // verify window.open was called with expected url
    expect(mockWindowOpen).toHaveBeenCalledWith(COMPANY.STORE, '_blank');
  });

  test('renders github button', () => {
    const button = screen.getByRole('button', { name: /GitHub Community/i });
    expect(button).toBeInTheDocument();
    expect(button.onclick).not.toBeNull();

    const mockWindowOpen = vi.fn();
    window.open = mockWindowOpen;

    // click button
    fireEvent.click(button);

    // verify window.open was called with expected url
    expect(mockWindowOpen).toHaveBeenCalledWith(COMPANY.GITHUB, '_blank');
  });
});