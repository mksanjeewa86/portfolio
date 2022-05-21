### create react app with typescript template
```
npx create-react-app . --template typescript
```
### install tailwind using npm
```
npm install -D tailwindcss postcss autoprefixer
```
### initialize the tailwind css
```
npx tailwindcss init -p
```
### edit the tailwind.config.js file as follows
```
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
### add the following code block to end of the src/index.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

![Alt text](./screenshot.png?raw=true "Optional Title")