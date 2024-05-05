import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../firebase/Provider/AuthProvider";
import SingleBook from "./singleBook/SingleBook";
import axios  from "axios";
const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);
  //url of email base booking
  const url = `http://localhost:5000/booking?email=${user?.email}`;


  
  useEffect(() => {


//fetching async await


//axios data fetching
axios.get(url,{withCredential:true})
.then(res=>setBooking(res.data))


    //fethin data simple
   /*  fetch(url)
      .then((res) => res.json())
      .then((data) => setBooking(data)); */
  }, [url]);




  //handle delete click
  const deleteBooking = (id) => {
    //proces //agiye jawa
    const proced = confirm("Are you sure you want to delete this booking");
    //fetching into data
    if (proced) {
      fetch(`http://localhost:5000/booking/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if (data.deletedCount > 0) {
            alert("DELETED Successfully");
            //remainging data
            const reamaining = booking.filter(booking => booking._id !== id);
            setBooking(reamaining);
          }
        });
    }
  };
//handle Booking Confirmarin

const handleBookingConfirm=(id)=>{
  console.log(id)
  //proced

  const proced = confirm("Are you sure you want to delete this booking");
const url=`http://localhost:5000/booking/${id}`
fetch(url,{
  method:"PATCH",
  headers:{"content-type": "application/json"},

  body:JSON.stringify({status:'confirm'})
})
.then(res=>res.json())
.then(data=>{
console.log(data)
if(data.modifiedCount >0){
  //uupdate astae 
  //understan prolem
const remaing=booking.filter(booking=>booking._id !== id)
const updated=booking.find(booking=> booking._id  === id)
updated.status="confirm"
const newBOoking=[updated,...remaing]
setBooking(newBOoking)

}

})


}

  return (
    <div>
      {booking?.map((book) => (
        <SingleBook
          key={Math.random()}
          booking={book}
          deleteBooking={deleteBooking}
          handleBookingConfirm={handleBookingConfirm}
        ></SingleBook>
      ))}
    </div>
  );
};

export default Bookings;
