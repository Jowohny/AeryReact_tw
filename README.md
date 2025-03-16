# AeryReact_tw
Website Remake with tailwind

# Installation Guide
This will then prompt with a selection of framework. Choose React<br>
Next, it will prompt you with a choice of variant. Choose Typescript
```
npx vite@latest create-react-app my-react-app
```

<br/>

Keep in mind, "my-react-app" would be the name that you choose for your project
```
cd my-react-app
```

<br/>

Simply, running "npm install" will, you guess it, install npm into the folder directory<br>
Then the "code ." will bring you to an IDE of your choice
```
npm install
code .
```

<br/>

Running either of these commands will build the project and then create a localhost that allows you to view your web project
```
npm run dev
or
yarn dev
```

<br/>

First command will install tailwindcss, which will be the bulk of our styling for our html components<br>
MAKE SURE YOU'RE USING "tailwindcss@3" SPECIFCALLY, OTHERWISE THE SECOND COMMAND WILL NOT WORK FOR SHIT<br>
You will get 2 extra files in your folder being the tailwind.config.js and the postcss.config.js
```
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

<br/>

COPY AND PASTE this into the tailwind.config.js file
```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
  },
  plugins: [],
}
```
