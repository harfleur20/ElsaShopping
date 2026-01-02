import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import { IoIosArrowDropdown } from "react-icons/io";
import Item from '../components/item/Item';

const ShopCategory = (props) => {

  const {all_product} = useContext(ShopContext)

  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Voir 1-12</span> sur 36 produits
        </p>
        <div className="shopcategory-sort">
          Sort by <IoIosArrowDropdown className='dropdown'/>
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i) =>{
          if(props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
          else{
            return null;
          }
        })}
      </div>
    </div>
  )
}
 
export default ShopCategory
