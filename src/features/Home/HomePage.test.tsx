import '@testing-library/jest-dom';
import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent, within, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, test, expect, vi, beforeEach } from 'vitest';

import HomePage, { Software } from './HomePage';
import { COMPANY } from '@utils/constants';
import { HOMEPAGE_TEST_ID, HomePageTestIds } from '@test/constants'
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

  test('renders footer company store button', () => {
    const button = screen.getByTestId(HOMEPAGE_TEST_ID.FOOTER_GOOGLE_PLAY_BUTTON);
    expect(button).toBeInTheDocument();
    expect(button.onclick).not.toBeNull();

    const mockWindowOpen = vi.fn();
    window.open = mockWindowOpen;

    // click button
    fireEvent.click(button);

    // verify window.open was called with expected url
    expect(mockWindowOpen).toHaveBeenCalledWith(COMPANY.STORE, '_blank');
  });

  test('renders footer github button', () => {
    const button = screen.getByTestId(HOMEPAGE_TEST_ID.FOOTER_GITHUB_BUTTON);
    expect(button).toBeInTheDocument();
    expect(button.onclick).not.toBeNull();

    const mockWindowOpen = vi.fn();
    window.open = mockWindowOpen;

    // click button
    fireEvent.click(button);

    // verify window.open was called with expected url
    expect(mockWindowOpen).toHaveBeenCalledWith(COMPANY.GITHUB, '_blank');
  });

  test.for(Software)('opens app dialogs for $title', async (app) => {
    const container = screen.getByTestId(app.testId)
    expect(container).toBeInTheDocument()

    const mockWindowOpen = vi.fn();
    window.open = mockWindowOpen;

    // test features dialog
    const featuresButton = within(container).getByTestId(HOMEPAGE_TEST_ID.APP_FEATURES_BUTTON)
    fireEvent.click(featuresButton);

    const featuresCloseButton = screen.getByTestId(HOMEPAGE_TEST_ID.DIALOG_CLOSE_BUTTON);
    fireEvent.click(featuresCloseButton);

    await act(async () => { await new Promise(r => setTimeout(r, 50)) });
    expect(featuresCloseButton).not.toBeInTheDocument();

    // test disclaimers dialog
    const disclaimersButton = within(container).getByTestId(HOMEPAGE_TEST_ID.APP_DISCLAIMERS_BUTTON)
    fireEvent.click(disclaimersButton);

    const disclaimersCloseButton = screen.getByTestId(HOMEPAGE_TEST_ID.DIALOG_CLOSE_BUTTON);
    fireEvent.click(disclaimersCloseButton);

    await act(async () => { await new Promise(r => setTimeout(r, 50)) });
    expect(disclaimersCloseButton).not.toBeInTheDocument();

    // test privacy button
    const privacyButton = within(container).getByTestId(HOMEPAGE_TEST_ID.APP_PRIVACY_BUTTON)
    fireEvent.click(privacyButton);
    expect(mockWindowOpen).toHaveBeenCalledWith(app.privacyPath, '_self');

    // test google play button
    const playButton = within(container).getByTestId(HOMEPAGE_TEST_ID.APP_GOOGLE_PLAY_BUTTON)
    fireEvent.click(playButton);
    expect(mockWindowOpen).toHaveBeenCalledWith(app.url, '_blank');
  });
});