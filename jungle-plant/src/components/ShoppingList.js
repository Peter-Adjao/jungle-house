"use client"
import { useState } from 'react'
import { plantList } from '../datas/plantList'
import PlantCard from './PlantCard'
import Categories from './Categories'
import "../styles/ShoppingList.css"

function ShoppingList({ cart, updateCart }) {
	// Selected category
	const [activeCategory, setActiveCategory] = useState('')

	// Get unique categories
	const categories = [...new Set(
		plantList.map((plant) => plant.category)
	)]

	// Add plant to cart
	function addToCart(name, price) {
		const plantInCart = cart.find((plant) => plant.name === name)

		if (plantInCart) {
			updateCart(
				cart.map((plant) =>
					plant.name === name
						? { ...plant, amount: plant.amount + 1 }
						: plant
				)
			)
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div className="jh-shopping-list">

			{/* Category filter */}
			<Categories
				categories={categories}
				activeCategory={activeCategory}
				setActiveCategory={setActiveCategory}
			/>

			{/* Plant list */}
			<ul className="jh-plant-list">
				{plantList.map((plant) =>
					!activeCategory || activeCategory === plant.category ? (
						<div key={plant.id}>
							<PlantCard {...plant} />
							<button className="add-to-cart" onClick={() => addToCart(plant.name, plant.price)}>
								Add
							</button>
						</div>
					) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList;
