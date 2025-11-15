import React, { useState, useEffect } from 'react';
import Card from '../Components/Product-Card/Card';

const Products = () => {
    const [product, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products/search?q=phone')
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <>
            <div className='py-20'>
                <div className="container">
                    <div className='flex flex-wrap justify-between gap-10'>
                        {
                            product.map((item) => (
                                <Card
                                    key={item.id}
                                    imgSrc={item.thumbnail}
                                    title={item.title}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products;
