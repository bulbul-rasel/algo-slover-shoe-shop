import React from 'react';

const Item = ({ item }) => {
    const { name, img, category, price } = item;
    return (
        <div className='product shadow-lg p-3'>
            <img className='w-full' src={img} alt="" />
            <h4 className='text-xl text-primary font-bold'> Name: {name}</h4>
            <p className='text-xl text-primary font-semibold'>Category: {category}</p>
            <p className='text-xl text-primary font-semibold'>Price: ${price}</p>
            {/* <p className='text-xl text-primary font-semibold'>Quantity: {quantity}/pcs</p>
            <p className='text-xl text-primary font-semibold'>Minimum Order Quantity: {minimum}</p> */}
            <button className='btn btn-primary my-3' variant="" type="submit">Book now</button>

        </div>
    );
};

export default Item;