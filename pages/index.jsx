import React,{useState,useEffect} from 'react'
import axios from 'axios'
const index = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [wallete, setWallete] = useState("")
  const [datas, setDatas] = useState("")
  const [isLoading, setIsLoading] = useState(false)



  useEffect(() => {

   

    getData()
    
  }, [])


  const getData = () =>{
    setIsLoading(true)

      
    try {

      axios.get("/api/User")
      .then((acc)=>{
        console.log(acc.data)
        setDatas(acc.data)
        setIsLoading(false)
        
      })
      .catch((err)=>{
        console.log(err)
        setIsLoading(false)

      })


      
    } catch (error) {
      console.log(error)
    }


}
  






  const handleSubmit = (e) =>{
    e.preventDefault()
    setIsLoading(true)

    console.log( typeof(name),typeof(Number(age)),typeof(Number(wallete)))


    try {


      axios.post("/api/User",{

        "Name":name,
        "Age":Number(age),
        "Wallete":Number(wallete)

      })
      .then((acc)=>{
        console.log(acc.data)
        getData()
        setIsLoading(false)
      })
      .catch((err)=>{
        console.log(err)
        setIsLoading(false)
      })




      
    } catch (error) {
      console.log(error)
    }










  }



  const handleDelete  = (id) =>{




  }



  
  return (
    <div>
<form style={{marginLeft:150,marginTop:150}} onSubmit={handleSubmit}>
  <label >Name:</label><br/>
  <input  onChange={(e)=>setName(e.target.value)}   type="text" /><br/>
  <label >Age:</label><br/>
  <input  onChange={(e)=>setAge(e.target.value)}  type="number" /><br/><br/>
  <label >Wallete:</label><br/>
  <input  onChange={(e)=>setWallete(e.target.value)}  type="number" /><br/><br/>
  {
    isLoading ? 
    <input type="submit" disabled value="Please Wait..."/>

    :
    <input type="submit" value="Submit"/>



  }
</form> 






















<table style={{marginTop:100}}>
  <tbody><tr>
      <th>Name</th>
      <th>Age</th>
      <th>Wallete</th>
      <th></th>
    </tr>
    {
      datas ? 
      datas.map((hit)=>{
        return <tr key={hit.id}>
        <td>{hit.Name}</td>
        <td>{hit.Age}</td>
        <td>{hit.Wallete}</td>
        <td><button onClick={()=>handleDelete(hit.id)}>Delete User</button></td>
      </tr>
      })


      


      :



      <>


<tr >
        <td>Loading...</td>
        <td>Loading...</td>
        <td>Loading...</td>
      </tr>
      
      
      </>
    }
    
 
  </tbody></table>
















    </div>
  )
}

export default index