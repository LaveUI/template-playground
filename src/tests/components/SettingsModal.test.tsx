import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import SettingsModal from '../../components/SettingsModal';

// Mock the store - use inline functions to avoid hoisting issues
vi.mock('../../store/store', () => {
  return {
    default: vi.fn((selector) => selector({
      isSettingsOpen: true,
      setSettingsOpen: vi.fn(),
      showLineNumbers: true,
      setShowLineNumbers: vi.fn(),
      textColor: '#121212',
      backgroundColor: '#ffffff',
      themePreference: 'system',
      setThemePreference: vi.fn(),
    })),
  };
});

describe('SettingsModal', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the modal with title when open', () => {
    render(<SettingsModal />);

    expect(screen.getByText('Settings')).toBeInTheDocument();
  });

  it('renders the Theme Preference setting', () => {
    render(<SettingsModal />);

    expect(screen.getByText('Theme Preference')).toBeInTheDocument();
    expect(screen.getByText('Choose your preferred appearance')).toBeInTheDocument();
  });

  it('renders the Show Line Numbers setting', () => {
    render(<SettingsModal />);

    expect(screen.getByText('Show Line Numbers')).toBeInTheDocument();
    expect(screen.getByText('Display line numbers in code editors')).toBeInTheDocument();
  });

  it('renders the theme preference options', () => {
    render(<SettingsModal />);

    expect(screen.getByText('Light')).toBeInTheDocument();
    expect(screen.getByText('Dark')).toBeInTheDocument();
    expect(screen.getByText('System')).toBeInTheDocument();
  });

  it('renders the line numbers toggle switch', () => {
    render(<SettingsModal />);

    const toggle = screen.getByRole('switch', { name: /toggle line numbers/i });
    expect(toggle).toBeInTheDocument();
  });

  it('line numbers toggle is checked when showLineNumbers is true', () => {
    render(<SettingsModal />);

    const toggle = screen.getByRole('switch', { name: /toggle line numbers/i });
    expect(toggle).toBeChecked();
  });

  it('renders divider between settings', () => {
    render(<SettingsModal />);

    const divider = document.querySelector('hr');
    expect(divider).toBeInTheDocument();
  });
});
