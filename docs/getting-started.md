# 🚀 Getting Started

This page will guide you through creating a new Angular project and setting up Tailwind CSS for styling.

---

## Create a New Angular Project

Make sure you have Angular CLI installed:

```bash
npm install -g @angular/cli
```

Now create a new Angular app:

```bash
ng new my-app --routing --style=scss
cd my-app
```

> Choose SCSS or CSS as your preferred styling format.

---

## Install Tailwind CSS

Run the following command to install Tailwind and its dependencies:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

This will generate a `tailwind.config.js` file.

---

## Configure Tailwind to Remove Unused Styles

Update your `tailwind.config.js`:

```js
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

## Include Tailwind in Your Styles

Edit `src/styles.scss` and add:

```scss
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Make sure your `angular.json` includes this global style:

```json
"styles": [
  "src/styles.scss"
]
```

---

## Start the Dev Server

Now run your Angular app:

```bash
ng serve
```

Your app is now using Tailwind CSS! 🎉

---

## 💡 Tips

- You can now use Tailwind utility classes directly in your templates.
- Combine with shared modules or UI libraries for consistency.
- Create reusable components styled with Tailwind.

---

## 🔗 Related Pages

- [Home](/)
- [Guide](/guide)
- [OAuth Setup](/oauth)