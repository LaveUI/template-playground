import React from 'react';
import { Modal, Switch, Segmented } from 'antd';
import { DesktopOutlined, MoonOutlined, SunOutlined } from '@ant-design/icons';
import useAppStore from '../store/store';

const SettingsModal: React.FC = () => {
  const {
    isSettingsOpen,
    setSettingsOpen,
    showLineNumbers,
    setShowLineNumbers,
    textColor,
    backgroundColor,
    themePreference,
    setThemePreference,
  } = useAppStore((state) => ({
    isSettingsOpen: state.isSettingsOpen,
    setSettingsOpen: state.setSettingsOpen,
    showLineNumbers: state.showLineNumbers,
    setShowLineNumbers: state.setShowLineNumbers,
    textColor: state.textColor,
    backgroundColor: state.backgroundColor,
    themePreference: state.themePreference,
    setThemePreference: state.setThemePreference,
  }));

  const isDarkMode = backgroundColor === '#121212';

  return (
    <Modal
      title="Settings"
      open={isSettingsOpen}
      onCancel={() => setSettingsOpen(false)}
      footer={null}
      className={isDarkMode ? 'dark-modal' : ''}
      width="90%"
      style={{ maxWidth: 480 }}
    >
      <div className="space-y-6 py-4">
        {/* Theme Preference */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h4 className="font-medium text-sm sm:text-base" style={{ color: textColor }}>
              Theme Preference
            </h4>
            <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Choose your preferred appearance
            </p>
          </div>
          <div className="flex-shrink-0">
            <Segmented
              value={themePreference}
              onChange={(val) => setThemePreference(val as 'light' | 'dark' | 'system')}
              options={[
                { label: 'Light', value: 'light', icon: <SunOutlined /> },
                { label: 'Dark', value: 'dark', icon: <MoonOutlined /> },
                { label: 'System', value: 'system', icon: <DesktopOutlined /> },
              ]}
            />
          </div>
        </div>

        <hr className={isDarkMode ? 'border-gray-600' : 'border-gray-200'} />

        {/* Line Numbers Toggle */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h4 className="font-medium text-sm sm:text-base" style={{ color: textColor }}>
              Show Line Numbers
            </h4>
            <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Display line numbers in code editors
            </p>
          </div>
          <div className="flex-shrink-0">
            <Switch
              checked={showLineNumbers}
              onChange={setShowLineNumbers}
              aria-label="Toggle line numbers"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SettingsModal;
