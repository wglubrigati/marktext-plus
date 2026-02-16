<p align="center"><img src="static/logo-small.png" alt="MarkText+" width="100" height="100"></p>

<h1 align="center">MarkText+</h1>

<p align="center">
  <strong>A modern, enhanced fork of MarkText — the elegant markdown editor.</strong><br>
  Built on top of <a href="https://github.com/Tkaixiang/marktext">Tkaixiang's modernized fork</a>, with stability fixes, multi-format file support, and smarter dirty-state detection.
</p>

<p align="center">
  <a href="https://github.com/wplusg/marktext-plus/releases/latest">
    <img alt="GitHub Release" src="https://img.shields.io/github/v/release/wplusg/marktext-plus">
  </a>
  <a href="https://github.com/wplusg/marktext-plus/releases">
    <img alt="GitHub Downloads (all assets, all releases)" src="https://img.shields.io/github/downloads/wplusg/marktext-plus/total">
  </a>
  <a href="https://github.com/wplusg/marktext-plus/blob/main/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-blue.svg">
  </a>
</p>

---

## Why MarkText+?

[MarkText](https://github.com/marktext/marktext) is one of the best open-source markdown editors out there — minimal, fast, and distraction-free. But the original project has been unmaintained for years. [Tkaixiang's fork](https://github.com/Tkaixiang/marktext) did an incredible job modernizing it (Vue 3, Pinia, electron-vite), but there were still rough edges in daily use: false "unsaved changes" prompts, crashes on edge cases, and a strict markdown-only limitation.

**MarkText+** picks up where those projects left off, focusing on **stability** and **practical improvements** for daily use.

## What's New in MarkText+

### Open Any File, Not Just Markdown
- Open and edit **any text file** directly — `.json`, `.yaml`, `.js`, `.py`, `.txt`, and more
- Non-markdown files open in **source code mode** with proper syntax highlighting via CodeMirror
- Quick Open (`Ctrl+P`) now searches **all files** in your project, not just `.md`
- Sidebar file tree allows clicking on any file type
- Drag & drop support for all file types

### Smarter Dirty-State Detection
- No more phantom "unsaved changes" dialogs after opening a file
- Content-based dirty detection anchors the normalized markdown after Muya's initial processing
- Edit-then-undo correctly shows the file as clean again

### Stability Fixes
- Fixed crash when history stack is empty and save is triggered
- Fixed race condition when saving blocks/cursor state during tab switches
- Fixed crash when cursor points to an invalid block after switching tabs
- Source code mode: guards against null refs on tab switch and scroll events
- Watcher: prevents duplicate watchers on already-open files (which caused data loss on reload)

### Auto-Reload Unmodified Files
- New experimental setting: files that haven't been edited locally are automatically reloaded when changed on disk

### Notification System Improvements
- Auto-hide notifications with countdown timer
- Success notification type

### Performance
- Ignored binary/generated file extensions in file watcher (images, fonts, archives, lock files, etc.)
- Reduced unnecessary I/O for non-text files in the sidebar

### Experimental Preferences Panel
- New "Experimental" category in Preferences for opt-in features

<!-- TODO: Add screenshot of MarkText+ in action -->

## Features

Everything from MarkText you already love:

- WYSIWYG real-time preview with a clean, distraction-free interface
- [CommonMark](https://spec.commonmark.org/0.29/), [GitHub Flavored Markdown](https://github.github.com/gfm/), and selective [Pandoc markdown](https://pandoc.org/MANUAL.html#pandocs-markdown) support
- Math expressions (KaTeX), front matter, emojis, Mermaid diagrams
- **33 built-in themes** — Dracula, Nord, Catppuccin, Tokyo Night, Gruvbox, and more
- Source Code, Typewriter, and Focus editing modes
- Paste images from clipboard
- Export to HTML and PDF
- **9 languages** available from Preferences

## Installation

Download the latest release for your platform from the [Releases page](https://github.com/wplusg/marktext-plus/releases).

| Platform | Format |
|----------|--------|
| Windows  | `.exe` installer |
| macOS    | `.dmg` |
| Linux    | `.AppImage`, `.deb`, `.rpm`, `.snap` |

> **macOS note:** You may see a "damaged and can't be opened" warning due to lack of notarization. See [this fix](https://github.com/marktext/marktext/issues/3004#issuecomment-1038207300).

## Building from Source

```bash
# Clone
git clone https://github.com/wplusg/marktext-plus.git
cd marktext-plus

# Install dependencies
npm install

# Development
npm run dev

# Build for your platform
npm run build:linux   # or build:win / build:mac
```

## Acknowledgements

MarkText+ stands on the shoulders of giants:

- **[MarkText](https://github.com/marktext/marktext)** by [Jocs (Luo Ran)](https://github.com/Jocs) and [contributors](https://github.com/marktext/marktext/graphs/contributors) — the original, beautiful markdown editor
- **[Tkaixiang's fork](https://github.com/Tkaixiang/marktext)** by [Teo Kai Xiang](https://github.com/Tkaixiang) — the massive modernization effort (Vue 3, Pinia, electron-vite, i18n)
- **[Jacob Whall's fork](https://github.com/jacobwhall/marktext)** — early maintenance efforts that kept the project alive

## Contributing

Contributions are welcome! Whether it's bug reports, pull requests, or just testing on your platform — all help is appreciated.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes
4. Push to the branch and open a Pull Request

## License

[MIT](LICENSE) — see the LICENSE file for full details.

Copyright (c) 2017-present Luo Ran & MarkText Contributors
Copyright (c) 2025 Teo Kai Xiang
Copyright (c) 2026 William Guedes Lubrigati
