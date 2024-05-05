import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../firebase/Provider/AuthProvider";
import SingleBook from "./singleBook/SingleBook";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);
  //url of email base booking
  const url = `http://localhost:5000/booking?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);
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

  return (
    <div>
      {booking?.map((book) => (
        <SingleBook
          key={Math.random()}
          booking={book}
          deleteBooking={deleteBooking}
        ></SingleBook>
      ))}
    </div>
  );
};

export default Bookings;
