import "../styles/Categories.css"

function Categories({ categories, index, activeCategory, setActiveCategory }) {
	return (
		<div className="jh-categories">
			<label htmlFor="category-select" className="categories__label">
				Shop by category
			</label>

			<select
				id="category-select"
				value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
				className="jh-categories__select"
			>
				<option value="">All categories</option>

				{categories.map((category) => (
					<option key={`${category}-${index}`} value={category}>
						{category}
					</option>
				))}
			</select>

			<button
				type="button"
				onClick={() => setActiveCategory('')}
				className="categories__reset"
			>
				Reset
			</button>
		</div>
	)
}

export default Categories;
