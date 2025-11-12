'use client'

import Image from 'next/image'
import '../styles/Care.css'

function CareScale({ care, careType }) {
	const scale = [1, 2, 3]

	// Select proper icon and label
	const isLight = careType === 'light'
	const icon = isLight ? "/icons/sun.svg" : "/icons/water.svg"
	const iconAlt = isLight ? 'Sunlight icon' : 'Watering icon'
	const label = isLight ? 'Light level' : 'Water level'

	// Tooltip text (based on level)
	const getTooltip = (level) => {
		const type = isLight ? 'sunlight' : 'watering'
		if (level === 1) return `Low ${type}`
		if (level === 2) return `Moderate ${type}`
		return `High ${type}`
	}

	return (
		<div
			className='care-container'
			role='group'
			aria-label={`${label}: ${care} out of 3`}
			tabIndex='0'
		>
			{scale.map((level) =>
				care >= level ? (
					<span
						key={level}
						className='care-level'
						title={getTooltip(level)} // Tooltip text on hover
						aria-hidden='true'
					>
						<Image
							src={icon}
							alt={iconAlt}
							width={24} 
							height={24}
							className='care-icon'
						/>
					</span>
				) : null
			)}
		</div>
	)
}

export default CareScale;
