import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";
import { Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './ItemDetailContainer';

export default function Item ({details}) {

 
    return (
        
            <div className="block border-solid border-2 border-slate-500">
                <p>
                    Nombre: {details.title}
                </p>

                <p>
                    Precio: {details.price}
                </p>
                <Link to={`/product/${details.id}/about`}>
                    Saber más
                </Link>
            </div>
    ) 
}