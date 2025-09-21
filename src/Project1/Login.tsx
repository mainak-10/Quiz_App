import React,{useState,useRef} from "react";
import { useNavigate } from "react-router-dom";

interface Doc{
  em:string,
  pw:string,
}
const Login=()=>{

  const [data,setData]=useState<Doc>({em:"",pw:""});
  const ref1=useRef<HTMLHeadingElement>(null);

  const navigate=useNavigate();

  const valup=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value}=e.target;
    setData({...data,[name]:value})
    // setData({em:"",pw:""})
    
  }

  const go=()=>{
    if(data.em=="mk123@gmail.com" && data.pw=="mk123"){
      navigate("/quiz")
    }
    else{
      ref1.current!.innerHTML="Invalid Credential...!!";
    }
  }
  return(
    <>
      <h1 className="text-center ">Login Application</h1>
     <div className="text-center "> 
      <label  >Enter Email:</label>
    <input type="email" name="em"   onChange={valup}/>
    </div>
      <br />
      <div className="text-center">
       <label> Enter Password:</label>
    <input type="password" name="pw"  onChange={valup}/>
      </div>
      <br />
      <div className="text-center">
        <button className="btn btn-success btn-lg " onClick={go}>Go</button>
      </div>
      <br />
      <h3 ref={ref1}></h3>
    </>
  )
}
export default Login;