import React from "react";

const SingleBook = ({ booking, deleteBooking, handleBookingConfirm }) => {
  // console.log(booking)
  // missing img, title,price
  const { _id, name, email, date, status } = booking;

  //delete item from booking table
  // const deleteBooking=(id)=>{
  // //proces //agiye jawa
  // const proced=confirm("Are you sure you want to delete this booking")
  // //fetching into data
  // if(proced){

  // fetch(`http://localhost:5000/booking/${id}`,{

  // method:"DELETE"
  // })
  // .then(res=>res.json())
  // .then(result=>{
  //     console.log(result)

  //     if(deletedCoun> 0 ){
  // alert("DELETED")
  //     }

  // })
  // }

  // }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <button
                  className="btn btn-square btn-outline"
                  onClick={() => deleteBooking(_id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{name}</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                {email}
                <br />
              </td>
              <td>{date}</td>
              <th>
                {status === "confirm" ? (
                  <span>Confirm</span>
                ) : (
                  <button
                    className="btn btn-warning btn-xs"
                    onClick={() => handleBookingConfirm(_id)}
                  >
                    Details
                  </button>
                )}
              </th>
            </tr>
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default SingleBook;
