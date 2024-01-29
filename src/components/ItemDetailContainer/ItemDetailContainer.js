import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/FireBaseConfig";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, "productos", itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productAdapted = { id: response.id, ...data }
                setProduct(productAdapted)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])
    
    return(
        <div>
             <ItemDetail {...product}/> 
        </div>
    )
}

export default ItemDetailContainer;