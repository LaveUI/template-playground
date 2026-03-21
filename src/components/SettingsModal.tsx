import React from 'react';
import { Modal, Switch, Radio } from 'antd';
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
    setThemePreference
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
              Theme Appearance
            </h4>
            <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Choose your preferred theme appearance
            </p>
          </div>
          <div className="flex-shrink-0">
            <Radio.Group 
              value={themePreference} 
              onChange={(e) => setThemePreference(e.target.value)}
              buttonStyle="solid"
            >
              <Radio.Button value="light">Light</Radio.Button>
              <Radio.Button value="dark">Dark</Radio.Button>
              <Radio.Button value="system">System</Radio.Button>
            </Radio.Group>
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
