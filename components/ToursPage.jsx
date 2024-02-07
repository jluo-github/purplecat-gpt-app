"use client";

import { getAllTours } from "@/utils/action";
import { useQuery } from "@tanstack/react-query";

import ToursList from "./ToursList";
import { useState } from "react";

const ToursPage = () => {
 const [searchValue, setSearchValue] = useState("");

 const { data, isPending } = useQuery({
  queryKey: ["tours", searchValue],
  queryFn: () => getAllTours(searchValue),
 });

 return (
  <>
   <form className='max-w-lg my-12  '>
    <div className='join w-full'>
     <input
      type='text'
      placeholder='Enter City or Country'
      className='input input-bordered join-item w-full'
      value={searchValue}
      onChange={() => setSearchValue(e.target.value)}
      required
     />
     <button
      className='btn btn-primary join-item'
      type='button'
      disabled={isPending}
      onClick={() => setSearchValue("")}>
      {isPending ? "Pending" : "Reset"}
     </button>
    </div>
   </form>
   {isPending ? <span className='loading'></span> : <ToursList data={data} />}
  </>
 );
};
export default ToursPage;
