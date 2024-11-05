import React, { useEffect, useState, useRef } from 'react';

// API to fetch products: https://dummyjson.com/products

// API to search : ‘https://dummyjson.com/products/search?q={searchinput}'
// Use this API to build a search bar to filter the products based on the input
// Note: The API takes search as a query parameter

const CompA = () => {
    const [product, setProduct] = useState({})
    const [searchTerm, setSearchTerm] = useState('')
    const timeOut = useRef(null)

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(error => console.log(error))
            .finally(() => console.log('Fetch complete'))
    }, [])

    console.log(product, searchTerm)

    const searchProductTitles = async () => {
        // api call to searchproduct
        // ‘https://dummyjson.com/products/search?q={searchinput}'
        if (timeOut) {
            clearTimeout(timeOut)
        }
        try {
            // useDebounce
            timeOut.current = setTimeout((async () => {
                const response = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
                const data = await response.json()
                setProduct(data)
            }), 400)
        } catch (error) {
            console.error('searching product details failed!')
        }
    }

    // const searchWDebounce = setTimeout(searchProductTitles, 3000)
    // clearTimeout(searchWDebounce)  

    return (
        <>
            {/* Searchbar */}
            <input type='text'
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value)
                    searchProductTitles()
                }} />

            {/* Listing of products */}
            {product?.products?.map((product, id) =>
                <p key={id}>{product.title}</p>
            )}
        </>
    )
}

export default CompA