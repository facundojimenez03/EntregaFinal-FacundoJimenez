import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";

import { getDocs, collection, query, where, } from "firebase/firestore";
import { db } from "../../services/FireBaseConfig";

function ItemListContainer({ greeting }) {

        const [products, setProducts] = useState([])
        const [loading, setLoading] = useState(true)

        const { categoryId } = useParams()

        useEffect(() => {

                setLoading(true)

                const collectionRef = categoryId
                        ? query(collection(db, 'productos'), where('category', '==', categoryId))
                        : collection(db, 'productos')

                getDocs(collectionRef)
                        .then(response => {
                                const productsAdapted = response.docs.map(doc => {
                                        const data = doc.data()
                                        return { id: doc.id, ...data }
                                })
                                setProducts(productsAdapted)
                        })
                        .catch(error => {
                                console.log(error)
                        })
                        .finally(() => {
                                setLoading(false)
                        })

        }, [categoryId])


        return (
                <div>
                        <h1 className="text-center">{greeting} </h1>
                        <ItemList productos={products} />
                </div>

        )
}

export default ItemListContainer;