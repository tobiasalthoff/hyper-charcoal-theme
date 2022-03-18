exports.decorateConfig = (config) => {
  exports.onWindow = (browserWindow) => browserWindow.setVibrancy("dark");

  return Object.assign({}, config, {
    cursorColor: '#535E68',
    cursorAccentColor: '#000',
    foregroundColor: '#D4D5D6',
    backgroundColor: 'rgba(15, 17, 19, 0.6)',
    selectionColor: 'rgba(83,94,104,0.3)',
    borderColor: 'transparent',
    css: `
      ${config.css || ''}
      .header_header {
        background-color: #1E2226;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        top: 0px;
        left: 0px;
        right: 0px;
      }

      .tab_tab.tab_active {
        border-bottom: 1px solid #535E68 !important;
      }

      .splitpane_divider {
        background-color: #1E2226 !important;
      }
    `,
    colors: {
      white: '#F8F9FA',
      black: '#000000',
      blue: '#4771E6',
      cyan: '#76D6EA',
      green: '#3AA655',
      magenta: '#F651A6',
      red: '#EB0A42',
      yellow: '#FBE870',
      lightWhite: '#F8F9FA',
      lightBlack: '#6c757d',
      lightBlue: '#A0C4FF',
      lightCyan: '#9BF6FF',
      lightGreen: '#CAFFBF',
      lightMagenta: '#FFC6FF',
      lightRed: '#FFADAD',
      lightYellow: '#FDFFB6',
    },
  });
};