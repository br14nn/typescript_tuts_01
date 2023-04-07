export default function App() {
	//***** function basics *****
	let greet: Function;
	greet = () => {
		console.log("Hello");
	};

	const add = (a: number, b: number, c?: number | string, d: number = 10) => {
		//'?' is an optional parameter
		console.log(a + b);
		console.log(c);
		console.log(d);
	};
	//add(5, 10, "C parameter");

	const minus = (a: number, b: number) => {
		return a - b;
	};
	let result = minus(10, 5);
	console.log(result);

	// //***** Any type *****
	// let age: any;
	// age = "6";
	// console.log(age);
	// age = 65;
	// console.log(age);

	// //array
	// let anyArr: any[] = [];
	// anyArr.push("Brian");
	// anyArr.push(false);
	// anyArr.push(24);
	// console.log(anyArr);

	// //object
	// let anyObj: {
	// 	id: any;
	// 	age: any;
	// };

	// anyObj = { id: 50560, age: "25" };
	// console.log(anyObj);

	// //***** Explicit types *****
	// let character: string;
	// let age: number;
	// let adult: boolean;
	// let uid: number | string;

	// //arrays
	// let ninjas: string[] = [];

	// ninjas.push("Witwicky");
	// ninjas.push("Artis");

	// console.log(ninjas);

	// let mixed: (string | number | boolean)[] = [];

	// mixed.push(true);
	// mixed.push("Brian");
	// mixed.push(22);

	// console.log(mixed);

	// //objects
	// let person: object;

	// person = { name: "Brian", age: 22, adult: true };

	// console.log(person);

	// let personTwo: {
	// 	name: string;
	// 	age: number;
	// 	adult: boolean;
	// };

	// personTwo = { name: "Mario", age: 55, adult: true };

	// console.log(personTwo);

	//***** arrays & objects *****
	//arrays
	// let fruits = ["orange", "apple", "grapes"];

	// fruits.push("Watermelon");

	// console.log(fruits);

	// let numbers = [1, 2, 3, 4, 5];

	// numbers.push(6);

	// console.log(numbers);

	// let mixed = ["Max", 5, "Downy", true];

	// mixed.push("Brian");
	// mixed.push("21");
	// mixed.push(false);

	// console.log(mixed);

	// //objects
	// let product = {
	// 	name: "name",
	// 	price: 0,
	// 	warranty: false,
	// };

	// product.name = "MSI";
	// product.price = 55000;
	// product.warranty = true;

	// console.log(product);

	//***** Basic Types in typescript *****
	// let name: string;
	// name = "Brian";
	// console.log(`Your name is ${name}`);

	// let age: number;
	// age = 21;
	// console.log(`your age is ${age}`);

	// let sumOfAandB = (a: number, b: number) => {
	// 	return a + b;
	// };
	// console.log(`The sum of A and b is ${sumOfAandB(5, 2)}`);

	return (
		<main>
			<div className="container mx-auto">
				<h1 className="text-center text-5xl font-bold">My Typescript Tutorials</h1>
			</div>
		</main>
	);
}
