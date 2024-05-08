import CartWidget from '../CartWidget/CartWidget'
import CategoryList from '../CategoryList/CategoryList.json'

const NavBar = () => {

    const categories = CategoryList.categories.map((categoryName) => <a href={categoryName.link} key={categoryName.name}>{categoryName.name}</a>)

    return (
        <nav className="navBar flex justify-around gap-2">
            <div className="categories flex gap-5">
                {categories}
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar