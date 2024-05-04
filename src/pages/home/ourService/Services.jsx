import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  //services state

  const [service,setService]=useState([])
  
  //fetch the sevices data from the server
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) =>setService(data));
  }, []);

  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center my-10" >

  {
    service.map(service=> <Service key={Math.random()} service={service}></Service>)
  }
  
  </div>;
};

export default Services;
