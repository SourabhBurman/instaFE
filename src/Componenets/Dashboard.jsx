import axios from 'axios';
import React, { useEffect, useState } from 'react'


function Dashboard() {
  const [arr,setArray] = useState([]);

    useEffect(()=> {
       (async ()=> {
        try{
             let res = await axios.get('https://precious-wasp-gloves.cyclic.app/pictures',{
                headers:{
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }
             });
             console.log(res.data.album)
             setArray(res.data.album);
        } catch(err) {
            console.log(err);
        }
       })()
    },[])
  return (
    <>
    <div>Your recent posts</div>
    {arr.map(item=><div key={item._id}>
<h2>quote : {item.quote}</h2>
{/* <p>{item.photo}</p> */}
<p> device : {item.device}</p>
<p>comments : {item.commentsCount}</p>
    </div>)}
    </>
  )
}

export default Dashboard