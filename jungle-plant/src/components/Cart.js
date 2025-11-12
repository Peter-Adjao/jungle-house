import "../styles/Cart.css";
import { formatCurrency } from "../utils/format";

function Cart() {
    const monsteraPrice = 8.00;
    const ivyPrice = 10.00;
    const flowerPrice = 15.00;
    const total = monsteraPrice + ivyPrice + flowerPrice 
    return (
        <div className="jh-cart">
            <h2>Cart</h2>
            <ul>
                <li>Monstera : {formatCurrency(monsteraPrice)}</li>
                <li>Ivy : {formatCurrency(ivyPrice)}</li>
                <li>Flower : {formatCurrency(flowerPrice)}</li>
            </ul>
            <strong>Total : {formatCurrency(total)}</strong>
        </div>
    )
}

export default Cart;