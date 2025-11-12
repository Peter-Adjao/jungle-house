'use client'

import Image from 'next/image'
import CareScale from './CareScale'
import '../styles/PlantCard.css'

function handleClick(plantName) {
	 alert(`You want to buy 1 ${plantName}? Great choice 🌱✨`);
}

function PlantCard({ id, cover, name, bestSale, water, light }) {
	return (
		<li className='plant-card' onClick={handleClick}>
			<div className='plant-card-image-container'>
				<Image
					src={cover}
					alt={`${name} cover`}
					fill
					className='plant-card-image'
				/>
				 {bestSale && <div className="card-sales-badge">Sales</div>}
				 {/* {bestSale && <span className='lmj-best-sale'>🔥 Best Seller</span>}  */}
			</div>

			<h3 className='lmj-plant-name'>{name}</h3>

			<div className='lmj-care-icons'>
				<CareScale careType='water' care={water} />
				<CareScale careType='light' care={light} />
			</div>
		</li>
	)
}

export default PlantCard;
