import React, { useEffect, useState } from 'react';
import Item from './Item';

const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    return (
        <div>
            <div>
                <h2 className='text-primary font-bold text-3xl text-center mt-5 mb-3 '>Products </h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
                    {
                        items.slice(0, 9).map(item => <Item
                            key={item._id}
                            item={item}
                        ></Item>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Items;