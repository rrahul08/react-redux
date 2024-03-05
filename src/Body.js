import React from 'react'
import Restaurants from './Restaurants.json';
import { addItem } from './utils/cartSlice';
import { useDispatch } from 'react-redux';

const categories = Restaurants.categorys; // Access the array directly

const Body = () => {

  const dispatch = useDispatch();

  // console.log(categories[0]['menu-items'][0]['sub-items'][0].price);

  const handleadditem = (menu) => {
    dispatch(addItem(menu));
  }

  return (
    <div className='ml-80 mt-36'>
      <h1 className='text-2xl font-semibold'>Categories</h1>
      <div>
        {categories.map((category) => (
          <div className='mt-20 ml-10' key={category.id}> {/* Use unique ID as key */}
           <h1 className='text-xl font-semibold'> {category.name} :</h1>
            {category['menu-items'].map((menu)=>(
            <div className='mt-10 ml-10 mr-[200px] gap-2' key={menu.id}>
              <div className='flex justify-between'>
                 <h1 > {menu.name}</h1>
                 <button className='p-1 pl-2 pr-2 border 2px  rounded-md bg-green-100' onClick={()=>handleadditem(menu)}>Add item</button>
                 </div>
                 <h1>Rs.{menu['sub-items'][0].price}</h1>
                 <h1 className='text-gray-500'>{menu.description}</h1>
                 
            </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body