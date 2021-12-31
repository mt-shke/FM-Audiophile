# Frontend Mentor - Audiophile e-commerce website

## Path

<details>
<summary>Roadmap</summary>

- Style
- Components
- Functionnalities
- Backend api/db ? => Learn more about firebase

</details>

## TailwindCSS

<details>
<summary>TailwindCSS</summary>

<details>
<summary>Init tailwind with next js & set starter styles</summary>

- https://tailwindcss.com/docs/guides/nextjs

```js
//  npx create-next-app my-project
//  cd my-project

// npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss init -p
```

tailwind.config.js

```js
// set the all the styled pages & components routes

module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		//   set new custom global theme here /!\
		extend: {
			// or just add more properties here if we expect to use tailwind's default property theme ( colors...)
			colors: {
				newBlue: "#2d4258",
			},
			fontFamily: {
				manrope: ["Manrope", "Verdana"],
			},
		},
	},
	plugins: [],
};
```

styles/global.css

```css
/* add tailwind style & set custom style */

/* base < components < utilities  */

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
	/* // generic default  */

	body {
		@apply font-manrope text-[15px] leading-[25px];
	}

	header,
	main,
	footer {
		@apply mx-auto grid items-center;
	}

	h1 {
		@apply font-bold text-[56px] leading-[58px] tracking-[2px];
	}
}

@layer components {
	/* components classes */
	/* override base layer */
	.overline {
		@apply font-normal text-[14px] leading-[19px] tracking-[10px];
	}

	.subTitle {
		@apply font-bold text-[13px] leading-[25px] tracking-[1px];
	}

	.home-landing {
		height: calc(100vh - 6rem);
	}
}

@layer utilities {
	/* utilities classes */
	.ultra {
		/* for ultra specifics classes or properties not found in tailwind */
		/* override others layers */
	}
}
```

</details>

<details>
<summary>Plugins</summary>

```js
const plugin = require("tailwindcss/plugin");

module.exports = {
	// ...
	plugins: [
		plugin(function ({ addBase, addComponents, addUtilities, theme }) {
			addBase({
				h1: {
					fontSize: theme("fontSize.2xl"),
				},
				h2: {
					fontSize: theme("fontSize.xl"),
				},
			});
			addComponents({
				".card": {
					backgroundColor: theme("colors.white"),
					borderRadius: theme("borderRadius.lg"),
					padding: theme("spacing.6"),
					boxShadow: theme("boxShadow.xl"),
				},
			});
			addUtilities({
				".content-auto": {
					contentVisibility: "auto",
				},
			});
		}),
	],
};
```

</details>

</details>

## Code

<details>
<summary>Object-position</summary>

```js
<div>
	<Image
		className="absolute object-[-540px]"
		src="/assets/home/image-hero.jpg"
		objectFit="cover"
		layout="fill"
		priority
	/>
</div>
```

</details>

<details>
<summary>Svg to component</summary>

https://react-svgr.com/playground/

- import svg code to react-svgr
- return to react components
- set stroke, fill, opacity properties

</details>

<details>
<summary>Grid with tailwind</summary>

<!-- parent -->

- set a width & height
- number of cols/rows => grid-cols-3 grid-rows-5
- or set to auto => grid-flow-cols or grid-flow-rows

<!-- children  -->

- set the line where children starts => col-start-1, row-start-3
- set the line where it ends => col-end-4 /!\ last line = numberOfCols + 1
- set its size => col-span-3

```js
<div className="w-full grid grid-cols-6 gap-6 grid-flow-rows h-[500px] lg:h-[600px]">
	<img className="col-start-3 col-end-7 row-start-1 row-end-3 w-full md:h-auto relative" src={image} />
</div>
```

</details>

</details>
