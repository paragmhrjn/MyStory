---
title: "Headless-UI"
description: "A set of libraries used in frontend development"
pubDate: "Jul 2 2025"
heroImage: "../../assets/blog-placeholder-5.jpg"
---


# 🧠 Headless UI

**Headless UI** is a design pattern (and also a set of libraries) used in frontend development to provide functionality and accessibility without enforcing any specific design or styling.

---

## What Is Headless UI?

> **Headless UI = Functionality without presentation.**

Headless UI gives you the logic and behavior of UI components (like dropdowns, modals, tabs) while letting you control exactly how they look.

---

## 🔧 Why Use Headless UI?

- **Full Design Control**: No default styling — design components your way.
- **Accessibility Built-In**: Manages ARIA attributes, keyboard navigation, focus handling, etc.
- **Styling Freedom**: Works great with Tailwind CSS or any custom CSS setup.
- **Reusable Logic**: Clean separation of logic and presentation.

---

## 📦 Popular Headless UI Libraries

### 1. [Headless UI](https://headlessui.com/) by Tailwind Labs
- For **React** and **Vue**
- Components: `Dialog`, `Menu`, `Listbox`, `Tabs`, `Popover`, etc.
- Tailored for use with Tailwind CSS.

### 2. [Radix UI](https://www.radix-ui.com/)
- React-only
- Focused on low-level component primitives with high accessibility.

### 3. [React Aria](https://react-spectrum.adobe.com/react-aria/)
- From Adobe
- Hook-based and highly accessible
- Framework-agnostic

---

## ✅ When to Use Headless UI

- You want complete control over component styles.
- You’re building a design system or a custom UI.
- Accessibility is important, but you don’t want to manage it all manually.

---

## ❌ When Not to Use It

- You need pre-styled, plug-and-play components.
- You don’t want to spend time designing components from scratch.

---

## 🧪 Example: `Menu` Component (React + Headless UI)

```jsx
import { Menu } from '@headlessui/react';

<Menu>
  <Menu.Button>Options</Menu.Button>
  <Menu.Items>
    <Menu.Item>
      {({ active }) => (
        <button className={`${active ? 'bg-blue-500 text-white' : ''}`}>
          Account settings
        </button>
      )}
    </Menu.Item>
  </Menu.Items>
</Menu>
