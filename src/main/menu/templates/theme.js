import * as actions from '../actions/theme'
import { t } from '../../i18n'

export default function (userPreference) {
  const { theme } = userPreference.getAll()
  return {
    label: t('menu.theme.theme'),
    id: 'themeMenu',
    submenu: [
      // Light Themes (alphabetical)
      {
        label: t('menu.theme.lightThemes'),
        enabled: false
      },
      {
        label: t('menu.theme.ayuLight'),
        type: 'radio',
        id: 'ayu-light',
        checked: theme === 'ayu-light',
        click (menuItem, browserWindow) {
          actions.selectTheme('ayu-light')
        }
      },
      {
        label: t('menu.theme.cadmiumLight'),
        type: 'radio',
        id: 'light',
        checked: theme === 'light',
        click (menuItem, browserWindow) {
          actions.selectTheme('light')
        }
      },
      {
        label: t('menu.theme.catppuccinLatte'),
        type: 'radio',
        id: 'catppuccin-latte',
        checked: theme === 'catppuccin-latte',
        click (menuItem, browserWindow) {
          actions.selectTheme('catppuccin-latte')
        }
      },
      {
        label: t('menu.theme.everforestLight'),
        type: 'radio',
        id: 'everforest-light',
        checked: theme === 'everforest-light',
        click (menuItem, browserWindow) {
          actions.selectTheme('everforest-light')
        }
      },
      {
        label: t('menu.theme.graphiteLight'),
        type: 'radio',
        id: 'graphite',
        checked: theme === 'graphite',
        click (menuItem, browserWindow) {
          actions.selectTheme('graphite')
        }
      },
      {
        label: t('menu.theme.gruvboxLight'),
        type: 'radio',
        id: 'gruvbox-light',
        checked: theme === 'gruvbox-light',
        click (menuItem, browserWindow) {
          actions.selectTheme('gruvbox-light')
        }
      },
      {
        label: t('menu.theme.rosePineDawn'),
        type: 'radio',
        id: 'rose-pine-dawn',
        checked: theme === 'rose-pine-dawn',
        click (menuItem, browserWindow) {
          actions.selectTheme('rose-pine-dawn')
        }
      },
      {
        label: t('menu.theme.solarizedLight'),
        type: 'radio',
        id: 'solarized-light',
        checked: theme === 'solarized-light',
        click (menuItem, browserWindow) {
          actions.selectTheme('solarized-light')
        }
      },
      {
        label: t('menu.theme.tokyoNightLight'),
        type: 'radio',
        id: 'tokyo-night-light',
        checked: theme === 'tokyo-night-light',
        click (menuItem, browserWindow) {
          actions.selectTheme('tokyo-night-light')
        }
      },
      {
        label: t('menu.theme.ulyssesLight'),
        type: 'radio',
        id: 'ulysses',
        checked: theme === 'ulysses',
        click (menuItem, browserWindow) {
          actions.selectTheme('ulysses')
        }
      },
      { type: 'separator' },
      // Dark Themes (alphabetical)
      {
        label: t('menu.theme.darkThemes'),
        enabled: false
      },
      {
        label: t('menu.theme.ayuDark'),
        type: 'radio',
        id: 'ayu-dark',
        checked: theme === 'ayu-dark',
        click (menuItem, browserWindow) {
          actions.selectTheme('ayu-dark')
        }
      },
      {
        label: t('menu.theme.ayuMirage'),
        type: 'radio',
        id: 'ayu-mirage',
        checked: theme === 'ayu-mirage',
        click (menuItem, browserWindow) {
          actions.selectTheme('ayu-mirage')
        }
      },
      {
        label: t('menu.theme.cadmiumDark'),
        type: 'radio',
        id: 'dark',
        checked: theme === 'dark',
        click (menuItem, browserWindow) {
          actions.selectTheme('dark')
        }
      },
      {
        label: t('menu.theme.catppuccinMocha'),
        type: 'radio',
        id: 'catppuccin-mocha',
        checked: theme === 'catppuccin-mocha',
        click (menuItem, browserWindow) {
          actions.selectTheme('catppuccin-mocha')
        }
      },
      {
        label: t('menu.theme.cyberdream'),
        type: 'radio',
        id: 'cyberdream',
        checked: theme === 'cyberdream',
        click (menuItem, browserWindow) {
          actions.selectTheme('cyberdream')
        }
      },
      {
        label: t('menu.theme.dracula'),
        type: 'radio',
        id: 'dracula',
        checked: theme === 'dracula',
        click (menuItem, browserWindow) {
          actions.selectTheme('dracula')
        }
      },
      {
        label: t('menu.theme.everforestDark'),
        type: 'radio',
        id: 'everforest-dark',
        checked: theme === 'everforest-dark',
        click (menuItem, browserWindow) {
          actions.selectTheme('everforest-dark')
        }
      },
      {
        label: t('menu.theme.gruvboxDark'),
        type: 'radio',
        id: 'gruvbox-dark',
        checked: theme === 'gruvbox-dark',
        click (menuItem, browserWindow) {
          actions.selectTheme('gruvbox-dark')
        }
      },
      {
        label: t('menu.theme.horizonDark'),
        type: 'radio',
        id: 'horizon-dark',
        checked: theme === 'horizon-dark',
        click (menuItem, browserWindow) {
          actions.selectTheme('horizon-dark')
        }
      },
      {
        label: t('menu.theme.kanagawa'),
        type: 'radio',
        id: 'kanagawa',
        checked: theme === 'kanagawa',
        click (menuItem, browserWindow) {
          actions.selectTheme('kanagawa')
        }
      },
      {
        label: t('menu.theme.materialDark'),
        type: 'radio',
        id: 'material-dark',
        checked: theme === 'material-dark',
        click (menuItem, browserWindow) {
          actions.selectTheme('material-dark')
        }
      },
      {
        label: t('menu.theme.monokaiPro'),
        type: 'radio',
        id: 'monokai-pro',
        checked: theme === 'monokai-pro',
        click (menuItem, browserWindow) {
          actions.selectTheme('monokai-pro')
        }
      },
      {
        label: t('menu.theme.nightfox'),
        type: 'radio',
        id: 'nightfox',
        checked: theme === 'nightfox',
        click (menuItem, browserWindow) {
          actions.selectTheme('nightfox')
        }
      },
      {
        label: t('menu.theme.nord'),
        type: 'radio',
        id: 'nord',
        checked: theme === 'nord',
        click (menuItem, browserWindow) {
          actions.selectTheme('nord')
        }
      },
      {
        label: t('menu.theme.oneDark'),
        type: 'radio',
        id: 'one-dark',
        checked: theme === 'one-dark',
        click (menuItem, browserWindow) {
          actions.selectTheme('one-dark')
        }
      },
      {
        label: t('menu.theme.oxocarbonDark'),
        type: 'radio',
        id: 'oxocarbon-dark',
        checked: theme === 'oxocarbon-dark',
        click (menuItem, browserWindow) {
          actions.selectTheme('oxocarbon-dark')
        }
      },
      {
        label: t('menu.theme.palenight'),
        type: 'radio',
        id: 'palenight',
        checked: theme === 'palenight',
        click (menuItem, browserWindow) {
          actions.selectTheme('palenight')
        }
      },
      {
        label: t('menu.theme.rosePine'),
        type: 'radio',
        id: 'rose-pine',
        checked: theme === 'rose-pine',
        click (menuItem, browserWindow) {
          actions.selectTheme('rose-pine')
        }
      },
      {
        label: t('menu.theme.rosePineMoon'),
        type: 'radio',
        id: 'rose-pine-moon',
        checked: theme === 'rose-pine-moon',
        click (menuItem, browserWindow) {
          actions.selectTheme('rose-pine-moon')
        }
      },
      {
        label: t('menu.theme.solarizedDark'),
        type: 'radio',
        id: 'solarized-dark',
        checked: theme === 'solarized-dark',
        click (menuItem, browserWindow) {
          actions.selectTheme('solarized-dark')
        }
      },
      {
        label: t('menu.theme.synthwave84'),
        type: 'radio',
        id: 'synthwave-84',
        checked: theme === 'synthwave-84',
        click (menuItem, browserWindow) {
          actions.selectTheme('synthwave-84')
        }
      },
      {
        label: t('menu.theme.tokyoNight'),
        type: 'radio',
        id: 'tokyo-night',
        checked: theme === 'tokyo-night',
        click (menuItem, browserWindow) {
          actions.selectTheme('tokyo-night')
        }
      },
      {
        label: t('menu.theme.tokyoNightStorm'),
        type: 'radio',
        id: 'tokyo-night-storm',
        checked: theme === 'tokyo-night-storm',
        click (menuItem, browserWindow) {
          actions.selectTheme('tokyo-night-storm')
        }
      }
    ]
  }
}
