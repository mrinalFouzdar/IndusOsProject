import React, { useEffect, useState } from 'react'

export default function List() {
   const [data,setData]=useState(null)
   const [loding,setLoading] = useState(true)

   const getData=()=>{
     fetch(`/user`)
     .then((res)=>res.json())
     .then((res)=>{
       setData(res)

     }).catch((err)=>{
       console.log(err);
     })
     .finally(()=>{
      setLoading(false)
     })
   }

   useEffect(()=>{
     getData()
   },[])
  if(loding){
    return(
      <div>
        <h1>...is loading</h1>
      </div>
    )
  }
  return (
   data? <div>
      {
        data.map((item)=> 
          <h1 key={item._id}>{item.data}
          
          </h1>
        )
      }
    </div>: <div>List is Empty</div>
  )
}
