import React, { useEffect, useState } from "react";
function FetchData() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(data)


  async function fetchdATA () {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      if(!response.ok) throw new Error("response is not ok!!")
      const json = await  response.json()
      setData(json)
    } catch (error) {
      setError(error.message)
    } finally{
      setLoading(false)
    }
  }

  
  
  useEffect(() => {
    fetchdATA();
  }, []);
  if(!data.length) return <p>no data</p>
  if(loading) return <p>Loading..</p>
  if(error) return <p>{error}</p>
  return <div>
    {
      data?.map((value)=>(
        <div key={value.id}>
          <p>TITLE   :{value.title}</p>
          <p> ID    :{value.id}</p>
        </div>
      ))
    }
  </div>;
}

export default FetchData;
