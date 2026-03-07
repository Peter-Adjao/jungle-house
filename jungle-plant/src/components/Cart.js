"use client"
import { useState, useMemo, useEffect } from "react";
import { formatCurrency } from "../utils/format";
import { plantList } from '../datas/plantList';
import PropTypes from "prop-types";
import "../styles/Cart.css";

function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true);
    
	// Convert cart object to array entries
	const items = Object.entries(cart || {});

	// Memoized total calculation
	const total = useMemo(
		() =>
			items.reduce((sum, [name, item]) => {
				return sum + item.amount * item.price;
			}, 0),
		[items]
	);

	// Notify only when the total changes
	useEffect(() => {
		if (total > 0) {
			console.log(`Cart updated. Total: ${formatCurrency(total)}`);
		}
	}, [total]);

	return (
		<div className={`jh-cart ${isOpen 
        ? " cart--open" 
        : " cart--closed"}`}>
			<button
				className="jh-cart-toggle-button"
				onClick={() => setIsOpen(!isOpen)}
				aria-label="Toggle Cart"
			>
				{isOpen ? "Close Cart" : "Open Cart"}
			</button>

			{isOpen && (
				<div className="cart__content">
					<h2 className="cart__title">Your Cart</h2>

					{items.length > 0 ? (
						<>
							<ul className="cart__items">
								{items.map(([name, item]) => (
									<li key={name} className="cart__item">
										<span>{item.amount} × {name}</span>
										<span>{formatCurrency(item.price)}</span>
									</li>
								))}
							</ul>

							<h3 className="cart__total">Total: {formatCurrency(total)}</h3>

							<button
								className="cart__clear"
								onClick={() => updateCart([])}
							>
								Clear Cart
							</button>
						</>
					) : (
						<p className="cart__empty">Your cart is empty</p>
					)}
				</div>
			)}
		</div>
	);
}

Cart.propTypes = {
	cart: PropTypes.object.isRequired,
	updateCart: PropTypes.func.isRequired,
};

export default Cart;
