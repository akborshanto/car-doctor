import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../firebase/Provider/AuthProvider";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const loder = useLoaderData();
  console.log(loder.title);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    // const password = form.password.value;
    const date = form.dates.value;
    const choose = form.choose.value;
    //all check inforations
    const checkInfo = {
      name,
      email,
      date,
      choose,
    };

    //post request to server

fetch('http://localhost:5000/booking',{

method:"POST",
headers:{'content-type':'application/json'},
body:JSON.stringify(checkInfo)

})
.then(res=>res.json())
.then(data=>console.log(data))



  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">CHECK OUT</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  defaultValue={user?.email}
             
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  placeholder="Date"
                  className="input input-bordered"
                  required
                  name="dates"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type=" number"
                  placeholder="price"
                  className="input input-bordered"
                  required
                  name="date"
                />
              </div>
              <select
                className="select select-secondary w-full max-w-xs"
                name="choose"
              >
                <option disabled selected>
                  Choose Correct
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
