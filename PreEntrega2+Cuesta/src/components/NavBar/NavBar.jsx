import CartWidget from '../CartWidget/CartWidget'
import CategoryList from '../JSON/CategoryList.json'

const NavBar = () => {

    const categories = CategoryList.categories.map( (categoryName) => 
            <li>
                <a
                    href={categoryName.link}
                    key={categoryName.name}>{categoryName.name}
                </a>
            </li>
    )

    return (
        <nav className="flex justify-around gap-2">
            <ul className="flex gap-5">
                {categories}
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar