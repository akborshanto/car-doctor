import React from 'react'
import './Css/Service.css'
import { Link } from 'react-router-dom';
const Service = ({service}) => {
    //destructuraing service data 
const {_id,img,title,price}=service;
   // console.log(service)
  return (
    <div>
    <div class="card-client">
    <div class="user-picture">
        <img src={img} alt={title} />
    </div>
    <p class="name-client"> {title}
        <span>${price}
        </span>
    </p>
    <div class="social-media">
     <Link to={`/checkout/${_id}`}>
     
     <button className='btn btn-warning text-white'>
        
     Book Now
     </button>
     </Link>
    </div>
</div>
    </div>
  )
}

export default Service
