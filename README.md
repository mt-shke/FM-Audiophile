# Frontend Mentor - Audiophile e-commerce website

## Path

<details>
<summary>Roadmap</summary>

- Style
- Components
- Functionnalities
- Firebase

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

<details>
<summary>Add animation</summary>

tailwind.config.js

```js
module.exports = {
	theme: {
		animation: {
			spinning: " spinning 1s linear infinite",
			wiggle: "wiggle 1s ease-in-out infinite",
		},

		keyframes: {
			spinning: {
				"0%": {
					transform: " rotate(0deg)",
				},
				"100%": {
					transform: "rotate(360deg)",
				},
			},
			wiggle: {
				"0%, 100%": {
					transform: "rotate(-90deg)",
				},
				"50%": {
					transform: "rotate(90deg)",
				},
			},
		},
		extend: {
			fontSize: {
				xs: ["12px", "18px"],
			},
			/!\ if extended theme => add here
		},
	},
	plugins: [],
};

// => component
// className='animate-spinning'
// className='animate-wriggle'
```

</details>

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

</details>

## Code

<details>
<summary>Svg to component</summary>

https://react-svgr.com/playground/

- import svg code to react-svgr
- return to react components
- set stroke, fill, opacity properties

```js
const ValidateIcon = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		stroke="white"
		fill="white"
		width={60}
		height={60}
		viewBox="0 0 128 128"
		{...props}
	>
		<path d="M98.2 33.7c-1 1-11.5 12.3-23.1 25C63.4 71.5 53.5 82 53.1 82c-.5 0-6-5.4-12.2-12-11.7-12.3-14-13.7-17.3-10.4-3.7 3.7-2.2 6.2 13.2 22.2C44.9 90.2 52.2 97 53.1 97c2.3 0 2.8-.5 26-26 30.8-33.8 29.1-31.8 28.3-34.3-1.3-4.6-5.7-6-9.2-3z" />
	</svg>
);

export default ValidateIcon;
```

</details>

<details>
<summary>Object.methods(data)</summary>

```js
// const data = { 1: "one", b: "cdef", fruit: "apple", plant: "sunflower" };

// Object.values(data)  => return the values of an object, as a values array
// => ['one', 'cdef', 'apple', 'sunflower']

// Object.entries(data) => return the values of an object as pair values
// => [['1', 'one'], ['b', 'cdef'], ['fruit', 'apple'], ['plant', 'sunflower']];
// 0: (2) ['1', 'one']
// 1: (2) ['b', 'cdef']
// 2: (2) ['fruit', 'apple']
// 3: (2) ['plant', 'sunflower']

// Object.fromEntries(Object.entries(data)) => return an array of 2 values/pair values [first, second] as an object {first: second}
// => {1: 'one', b: 'cdef', fruit: 'apple', plant: 'sunflower'}
```

```js
// const result = Array.from(e.target.closest("form"))
// 	.filter((elem) => elem.tagName === "INPUT")
// 	.map((elem) => ({
// 		[elem.id]: elem.value,
// 	}));
```

</details>

</details>

<details>
<summary>Stripe - checkoutSession</summary>

```js
// npm i stripe @stripe/react-stripe-js @stripe/stripe-js
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const handler = async (req, res) => {
	if (req.method === "POST") {
		try {
			const products = req.body.map((item) => {
				return {
					price_data: {
						currency: "usd",
						product_data: {
							name: item.name,
						},
						unit_amount: +item.price * 100,
					},
					quantity: item.quantity,
				};
			});

			//  line_items : [{
			// 		price_data: {
			// 			currency: "usd",
			// 			product_data: {
			// 				name: item.name,
			// 			},
			// 			unit_amount: +item.price * 100,
			// 		},
			// 		quantity: item.quantity,
			// 	};
			// }, {}, {}]

			const session = await stripe.checkout.sessions.create({
				line_items: products,
				mode: "payment",
				success_url: `${req.headers.origin}/checkout-success/?success=true&session_id={CHECKOUT_SESSION_ID}`,
				cancel_url: `${req.headers.origin}/?canceled=true`,
			});
			res.json({ url: session.url });
		} catch (err) {
			res.status(err.statusCode || 500).json(err.message);
		}
	} else {
		res.setHeader("Allow", "POST");
		res.status(405).end("Method Not Allowed");
	}
};

export default handler;
```

</details>

<details>
<summary>Firebase</summary>

<details>
<summary>Config</summary>

clientApp.js

```js
// npm install firebase

// https://firebase.google.com/docs/firestore/quickstart?hl=en#web-version-9

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
	apiKey: "AIzaSyBQvlOH12Yej8qb4Kb5_zNwEnu0khWSMMA",
	authDomain: "audiophile-62b6b.firebaseapp.com",
	projectId: "audiophile-62b6b",
	storageBucket: "audiophile-62b6b.appspot.com",
	messagingSenderId: "1064050838541",
	appId: "1:1064050838541:web:fd565e6ec8a1ceedf8d944",
	measurementId: "G-LW8MN8YVGZ",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// const auth = getAuth(firebaseApp);
const db = getFirestore();
```

</details>

<details>
<summary>Create/Read commands</summary>

```js
import { addDoc, getDocs, collection } from "firebase/firestore";

// addDoc
const setCommandToDB = async (item) => {
	const response = await addDoc(collection(db, "commands"), {
		...item,
	});
	return response;
};

// GetDocs, docs.foreach((doc) doc => doc.data())
const commands = await getDocs(collection(db, "commands"));
commands.forEach((doc) => {
	if (doc.data().id === sessionId) {
		setCommand(doc.data());
	}
});
```

</details>

</details>
