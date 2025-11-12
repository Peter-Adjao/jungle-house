import { plantList } from '../datas/plantList';
import PlantCard from './PlantCard'
import "../styles/ShoppingList.css";


function ShoppingList() {
    //Get unique categories
    const categories = [...new Set(plantList.map((plant) => plant.category))];

    return (
        <div className='plant-products'>
            <ul>
                {/*Display categories*/}
                {categories.map((cat, index) => (
                    <li key={`${cat}-${index}`}>{cat}</li>
                ))}
            </ul>
                
            <ul className="jh-plant-list">
                {plantList.map(({ id, cover, name, bestSale, water, light }) => (
					<PlantCard
                        key={id}
						id={id}
						cover={cover}
						name={name}
                        bestSale={bestSale}
						water={water}
						light={light} 
					/>
                ))}
            </ul>
        </div>
    );
}

export default ShoppingList;