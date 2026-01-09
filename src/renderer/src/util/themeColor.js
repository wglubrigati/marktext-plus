import darkTheme from '../assets/themes/dark.theme.css?inline'
import graphiteTheme from '../assets/themes/graphite.theme.css?inline'
import materialDarkTheme from '../assets/themes/material-dark.theme.css?inline'
import oneDarkTheme from '../assets/themes/one-dark.theme.css?inline'
import ulyssesTheme from '../assets/themes/ulysses.theme.css?inline'

// New gogh themes - Dark
import draculaTheme from '../assets/themes/dracula.theme.css?inline'
import nordTheme from '../assets/themes/nord.theme.css?inline'
import catppuccinMochaTheme from '../assets/themes/catppuccin-mocha.theme.css?inline'
import gruvboxDarkTheme from '../assets/themes/gruvbox-dark.theme.css?inline'
import tokyoNightTheme from '../assets/themes/tokyo-night.theme.css?inline'
import tokyoNightStormTheme from '../assets/themes/tokyo-night-storm.theme.css?inline'
import solarizedDarkTheme from '../assets/themes/solarized-dark.theme.css?inline'
import ayuDarkTheme from '../assets/themes/ayu-dark.theme.css?inline'
import ayuMirageTheme from '../assets/themes/ayu-mirage.theme.css?inline'
import everforestDarkTheme from '../assets/themes/everforest-dark.theme.css?inline'
import rosePineTheme from '../assets/themes/rose-pine.theme.css?inline'
import rosePineMoonTheme from '../assets/themes/rose-pine-moon.theme.css?inline'
import monokaiProTheme from '../assets/themes/monokai-pro.theme.css?inline'
import synthwave84Theme from '../assets/themes/synthwave-84.theme.css?inline'
import horizonDarkTheme from '../assets/themes/horizon-dark.theme.css?inline'
import palenightTheme from '../assets/themes/palenight.theme.css?inline'
import oxocarbonDarkTheme from '../assets/themes/oxocarbon-dark.theme.css?inline'
import kanagawaTheme from '../assets/themes/kanagawa.theme.css?inline'
import nightfoxTheme from '../assets/themes/nightfox.theme.css?inline'
import cyberdreamTheme from '../assets/themes/cyberdream.theme.css?inline'

// New gogh themes - Light
import catppuccinLatteTheme from '../assets/themes/catppuccin-latte.theme.css?inline'
import gruvboxLightTheme from '../assets/themes/gruvbox-light.theme.css?inline'
import tokyoNightLightTheme from '../assets/themes/tokyo-night-light.theme.css?inline'
import solarizedLightTheme from '../assets/themes/solarized-light.theme.css?inline'
import ayuLightTheme from '../assets/themes/ayu-light.theme.css?inline'
import everforestLightTheme from '../assets/themes/everforest-light.theme.css?inline'
import rosePineDawnTheme from '../assets/themes/rose-pine-dawn.theme.css?inline'

// Prism.js syntax highlighting themes
import darkPrismTheme from '../assets/themes/prismjs/dark.theme.css?inline'
import oneDarkPrismTheme from '../assets/themes/prismjs/one-dark.theme.css?inline'
import draculaPrismTheme from '../assets/themes/prismjs/dracula.theme.css?inline'
import nordPrismTheme from '../assets/themes/prismjs/nord.theme.css?inline'
import catppuccinMochaPrismTheme from '../assets/themes/prismjs/catppuccin-mocha.theme.css?inline'
import catppuccinLattePrismTheme from '../assets/themes/prismjs/catppuccin-latte.theme.css?inline'
import gruvboxDarkPrismTheme from '../assets/themes/prismjs/gruvbox-dark.theme.css?inline'
import gruvboxLightPrismTheme from '../assets/themes/prismjs/gruvbox-light.theme.css?inline'
import tokyoNightPrismTheme from '../assets/themes/prismjs/tokyo-night.theme.css?inline'
import tokyoNightStormPrismTheme from '../assets/themes/prismjs/tokyo-night-storm.theme.css?inline'
import tokyoNightLightPrismTheme from '../assets/themes/prismjs/tokyo-night-light.theme.css?inline'
import rosePinePrismTheme from '../assets/themes/prismjs/rose-pine.theme.css?inline'
import rosePineMoonPrismTheme from '../assets/themes/prismjs/rose-pine-moon.theme.css?inline'
import rosePineDawnPrismTheme from '../assets/themes/prismjs/rose-pine-dawn.theme.css?inline'
import monokaiProPrismTheme from '../assets/themes/prismjs/monokai-pro.theme.css?inline'
import synthwave84PrismTheme from '../assets/themes/prismjs/synthwave-84.theme.css?inline'
import solarizedDarkPrismTheme from '../assets/themes/prismjs/solarized-dark.theme.css?inline'
import solarizedLightPrismTheme from '../assets/themes/prismjs/solarized-light.theme.css?inline'
import palenightPrismTheme from '../assets/themes/prismjs/palenight.theme.css?inline'
import kanagawaPrismTheme from '../assets/themes/prismjs/kanagawa.theme.css?inline'
import everforestDarkPrismTheme from '../assets/themes/prismjs/everforest-dark.theme.css?inline'
import everforestLightPrismTheme from '../assets/themes/prismjs/everforest-light.theme.css?inline'
import ayuDarkPrismTheme from '../assets/themes/prismjs/ayu-dark.theme.css?inline'
import ayuMiragePrismTheme from '../assets/themes/prismjs/ayu-mirage.theme.css?inline'
import ayuLightPrismTheme from '../assets/themes/prismjs/ayu-light.theme.css?inline'
import horizonDarkPrismTheme from '../assets/themes/prismjs/horizon-dark.theme.css?inline'
import oxocarbonDarkPrismTheme from '../assets/themes/prismjs/oxocarbon-dark.theme.css?inline'
import nightfoxPrismTheme from '../assets/themes/prismjs/nightfox.theme.css?inline'
import cyberdreamPrismTheme from '../assets/themes/prismjs/cyberdream.theme.css?inline'
import graphitePrismTheme from '../assets/themes/prismjs/graphite.theme.css?inline'
import ulyssesPrismTheme from '../assets/themes/prismjs/ulysses.theme.css?inline'

// Original themes
export const dark = () => {
  return darkTheme + '\n' + darkPrismTheme
}

export const graphite = () => {
  return graphiteTheme + '\n' + graphitePrismTheme
}

export const materialDark = () => {
  return materialDarkTheme + '\n' + darkPrismTheme
}

export const oneDark = () => {
  return oneDarkTheme + '\n' + oneDarkPrismTheme
}

export const ulysses = () => {
  return ulyssesTheme + '\n' + ulyssesPrismTheme
}

// New gogh themes - Dark (with matching Prism themes)
export const dracula = () => {
  return draculaTheme + '\n' + draculaPrismTheme
}

export const nord = () => {
  return nordTheme + '\n' + nordPrismTheme
}

export const catppuccinMocha = () => {
  return catppuccinMochaTheme + '\n' + catppuccinMochaPrismTheme
}

export const gruvboxDark = () => {
  return gruvboxDarkTheme + '\n' + gruvboxDarkPrismTheme
}

export const tokyoNight = () => {
  return tokyoNightTheme + '\n' + tokyoNightPrismTheme
}

export const tokyoNightStorm = () => {
  return tokyoNightStormTheme + '\n' + tokyoNightStormPrismTheme
}

export const solarizedDark = () => {
  return solarizedDarkTheme + '\n' + solarizedDarkPrismTheme
}

export const ayuDark = () => {
  return ayuDarkTheme + '\n' + ayuDarkPrismTheme
}

export const ayuMirage = () => {
  return ayuMirageTheme + '\n' + ayuMiragePrismTheme
}

export const everforestDark = () => {
  return everforestDarkTheme + '\n' + everforestDarkPrismTheme
}

export const rosePine = () => {
  return rosePineTheme + '\n' + rosePinePrismTheme
}

export const rosePineMoon = () => {
  return rosePineMoonTheme + '\n' + rosePineMoonPrismTheme
}

export const monokaiPro = () => {
  return monokaiProTheme + '\n' + monokaiProPrismTheme
}

export const synthwave84 = () => {
  return synthwave84Theme + '\n' + synthwave84PrismTheme
}

export const horizonDark = () => {
  return horizonDarkTheme + '\n' + horizonDarkPrismTheme
}

export const palenight = () => {
  return palenightTheme + '\n' + palenightPrismTheme
}

export const oxocarbonDark = () => {
  return oxocarbonDarkTheme + '\n' + oxocarbonDarkPrismTheme
}

export const kanagawa = () => {
  return kanagawaTheme + '\n' + kanagawaPrismTheme
}

export const nightfox = () => {
  return nightfoxTheme + '\n' + nightfoxPrismTheme
}

export const cyberdream = () => {
  return cyberdreamTheme + '\n' + cyberdreamPrismTheme
}

// New gogh themes - Light (with matching Prism themes)
export const catppuccinLatte = () => {
  return catppuccinLatteTheme + '\n' + catppuccinLattePrismTheme
}

export const gruvboxLight = () => {
  return gruvboxLightTheme + '\n' + gruvboxLightPrismTheme
}

export const tokyoNightLight = () => {
  return tokyoNightLightTheme + '\n' + tokyoNightLightPrismTheme
}

export const solarizedLight = () => {
  return solarizedLightTheme + '\n' + solarizedLightPrismTheme
}

export const ayuLight = () => {
  return ayuLightTheme + '\n' + ayuLightPrismTheme
}

export const everforestLight = () => {
  return everforestLightTheme + '\n' + everforestLightPrismTheme
}

export const rosePineDawn = () => {
  return rosePineDawnTheme + '\n' + rosePineDawnPrismTheme
}
