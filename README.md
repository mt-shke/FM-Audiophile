# Frontend Mentor - Audiophile e-commerce website

## Path

<details>
<summary>Roadmap</summary>

- Style
- Components
- Functionnalities
- Backend api/db ? => Learn more firebase

</details>

<details>
<summary>TailwindCSS</summary>

#### Set custom styles & classes

<details>
<summary>Add Custom style/class</summary>

styles/global.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* base < components < utilities  */

@layer base {
	/* // generic default  */
	h1 {
		/* @apply text-blue-500... */
	}
}

@layer components {
	/* components classes */
	.card {
		/* background-color: grey; */
	}
}

@layer utilities {
	/* components classes */
	.ultra {
		/* for ultra specifics classes or properties not found in tailwind */
		/* override others layers */
	}
}
```

using plugin in config file

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

<details>
<summary>Object-postion</summary>

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

</details>
