import { Routes, Route } from 'react-router-dom'
import CategoryList from '../JSON/CategoryList.json'
import ItemListContainer from '../JSON/ItemListContainer.json'

export default function PageRouting() {

    const categories = CategoryList.categories.map( (category) => 
        <Route
            path={`/category/${category.url}`} 
            element={<h1>{category.name}</h1>}
            key={category.name}
        /> )
    
    const items = ItemListContainer.products.map ( (product) =>
        <Route
            path={`/product/${product.title}`} 
            element={<p>{product.description}</p>}
            key={product.title}
        /> )

    return (
        <Routes>
            {categories}
            {items}
        </Routes>
    )
}