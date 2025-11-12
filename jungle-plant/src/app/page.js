import Banner from "../components/Banner";
import Cart from "../components/Cart";
import ShoppingList from "../components/ShoppingList";
import Footer from "../components/Footer";

export default function HomePage() {
    return (
        <div className="layout">
            <Banner />
            {/* <Cart /> */}
            <ShoppingList />
            <Footer />
        </div>
    );
}