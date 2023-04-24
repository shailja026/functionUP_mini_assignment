export default function Card({image,Designation,name}){

    const handleClick = () => {
        alert(name)
    }


    return (
        <div style={{backgroundColor:"black", color:"whitesmoke", border:"3px solid white", margin:"auto", width:"50%" , marginTop:"20px"}}>
          <img src={image} width="150px" style={{borderRadius:"50%"}}/>
          <p>{Designation}</p>
          <h3>{name}</h3>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Totam facere voluptatum quod, repellendus tenetur, </p>
          <button style={{padding:"5px",margin:"10px" , color:"red" , backgroundColor:"hotpink", border:"none"}} onClick={handleClick}>See more</button>



        </div>
    )
}