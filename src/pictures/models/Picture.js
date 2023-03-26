import { generateUniqId } from "../../utils/algoMethods.js";

class Picture {
	#id;
	url;
	alt;
	credits;
	#price;
	#createdAt;
	like = [];
	category;
	#user_id;

	constructor(picture) {
		const { url, alt, credits, price, category, user_id } = picture;
		if (!url || !alt || !credits || !price || !user_id)
			throw new Error("Bad Request!");

		this.#id = generateUniqId(picture, 1_000_000, 9_999_999);
		this.url = url;
		this.alt = alt;
		this.credits = credits;
		this.#price = price;
		this.category = category || "";
		this.#user_id = user_id;
		this.#createdAt = new Date();
	}

	get _id() {
		return this.#id;
	}

	get createdAt() {
		return this.#createdAt;
	}

	get price() {
		return this.#price;
	}

	set price({ newPrice, user }) {
		if (user._id !== this.#user_id)
			throw new Error(
				"only user that uploaded this card can change it's price!"
			);
		this.price = newPrice;
	}

	get user_id() {
		return this.#user_id;
	}
}

// try {
// 	const pic = new Picture({
// 		url: "dd",
// 		alt: "ff",
// 		credits: "kk",
// 		price: 5_000_000,
// 		category: "tt",
// 		user_id: "jjjj123",
// 	});

// 	console.log(pic);
// } catch (error) {
// 	error.status = 400;
// 	console.dir(error);

// 	if (error.status >= 400) console.log("error blah blah");

// 	// console.log(error.message);
// 	// console.log(error.status);
// }

export default Picture;
