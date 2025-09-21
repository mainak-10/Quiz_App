import React,{useState,useRef} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import "./RecipeLandingPage.css"

const Recipe=()=>{

  const [name,setName]=useState<any>();
  

  const [lett,setLett]=useState<any[]>([]);
  const [id,setId]=useState<any>();

  const ref1=useRef<HTMLInputElement>(null);
  const ref2=useRef<HTMLInputElement>(null);
  const ref3=useRef<HTMLSelectElement>(null);

  
 
  // const nav=useNavigate();
  const navigate=useNavigate();
  // const navigateP=useNavigate();

  const sea1=()=>{
    const n:string=ref1.current!.value;
    console.log("n:",n);
    
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${n}`)
  .then((res)=>{
    setName(res.data.meals);
    console.log(res.data); 
  })
  .catch((err)=>{
    console.log(err);
  })
  }
  
  //meal list by Alphabetiacl Order (Pagination)
  const sea2=()=>{
     const l=ref2.current!.value;

     axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${l}`)
     .then((res)=>{
      setLett(res.data.meals)
      console.log(res.data.meals);
     })
     .catch((err)=>{
      console.log(err);
     })

    //  navigateP("/pagination",{state:{l}});
  }

  const callData:any=[
  
    {
      name:<span style={{ color: 'red', fontWeight: 'bold', fontSize:"medium"}}>Id</span>,
      selector:(row:{idMeal:number})=>{
        return row.idMeal
      },
      width:"10%",
      sortable:true
    },
  {
    name:<span style={{ color: 'red', fontWeight: 'bold', fontSize:"medium"}}>Image</span>,
    selector:(row:{strMealThumb:string})=>{
      return <img style={{ height: "200px", width: "205px", objectFit: "cover" }} src={row.strMealThumb}/>
    },
    
    wrap:true,
    sortable:false,
  },

  {
    name:<span style={{ color: 'red', fontWeight: 'bold', fontSize:"medium"}}>Name Of The Meal</span>,
    selector:(row:{strMeal:string})=>{
      return row.strMeal
    },
    wrap:true,
    sortable:false,
  },
  {
    name:<span style={{ color: 'red', fontWeight: 'bold', fontSize:"medium"}}>Category</span>,
    selector:(row:{strCategory:string})=>{
      return row.strCategory
    },
    wrap:true,
    sortable:false,
  },
    {
    name:<span style={{ color: 'red', fontWeight: 'bold', fontSize:"medium"}}>Area</span>,
    selector:(row:{strArea:string})=>{
      return row.strArea
    },
    wrap:true,
    sortable:false,
  },
  {
    name:<span style={{ color: 'red', fontWeight: 'bold', fontSize:"medium"}}>How To Cook</span>,
    selector:(row:{strInstructions:string})=>{
      return <span style={{fontSize:"medium"}}>{row.strInstructions}</span>
    },
    wrap:true,
    sortable:false,
  }
 ]
  const sea3=()=>{
     const i=Number(ref3.current!.value);

     axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${i}`)
     .then((res)=>{
      setId(res.data.meals)
     })
     .catch((err)=>{
      console.log(err);
     })
  }

  const det=(mealid:number)=>{
     
      navigate("/detail",{state:{mealid}})
  }
  return(
    <>
        <h2 className="animated-box text-center text-primary fw-bold my-4"> Tasty Book </h2>

       <div className="container mt-5">
        {/* Search by Meal Name */}
        <div className="mb-4">
          <label className="form-label fw-bold">Search Meal By Name:</label>
          <div className="input-group">
            <input type="text" className="form-control" ref={ref1} placeholder="Enter meal name..." />
            <button className="btn btn-primary" onClick={sea1}>
              Search
            </button>
          </div>
        </div>

        {/* List All Meals by First Letter */}
        <div className="mb-4">
          <label className="form-label fw-bold">List All Meals By First Letter:</label>
          <div className="input-group">
            <input type="text" className="form-control" ref={ref2} placeholder="Enter first letter..." maxLength={1} />
            <button className="btn btn-success" onClick={sea2}>
              Search
            </button>
          </div>
        </div>

        {/* Unique Meal Details By Selection */}
        <div className="mb-4">
          <label className="form-label fw-bold">Look Up Unique Meal Details :</label>
          <div className="input-group">
            <select className="form-select" ref={ref3}>
              <option value="">Select meal ..!</option>
              <option value="52767">Bakewell tart</option>
              <option value="52768">Apple Frangipan Tart</option>
              <option value="52769">Kapsalon</option>
              <option value="52770">Spaghetti Bolognese</option>
              <option value="52771">Spicy Arrabiata Penne</option>
              <option value="52772">Teriyaki Chicken Casserole</option>
              <option value="52773">Honey Teriyaki Salmon</option>
              <option value="52774">Pad See Ew</option>
              <option value="52775">Vegan Lasagna</option>
              <option value="52776">Chocolate Gateau</option>
              <option value="52777">Mediterranean Pasta Salad</option>
              <option value="52779">Cream Cheese Tart</option>
              <option value="52780">Potato Gratin with Chicken</option>
              <option value="52781">Irish Stew</option>
              <option value="52782">Lamb Tomato and Sweet Spices</option>
              <option value="52783">Rigatoni with Fennel Sausage Sauce</option>
              <option value="52784">Smoky Lentil Chili with Squash</option>
              <option value="52785">Dal Fry</option>
              <option value="52786">Rocky Road Fudge</option>
              <option value="52787">Hot Chocolate Fudge</option>
              <option value="52788">Christmas Pudding Flapjack</option>
            </select>
            <button className="btn btn-warning" onClick={sea3}>
              Search
            </button>
          </div>
        </div>
      </div>
      
      <br />
    {name && (
  <div className="container " >
    <div className="row" style={{height:"100%" }}>
      {name.map((v: any, index: number) => {
        return <div className=" col-lg-4" >
          <img src={v.strMealThumb} className="img-fluid " alt="Meal" width={304} height={236} />

         <div className="text-center"><button onClick={(()=>{det(v.idMeal)})} className="btn btn-info btn-lg ">DETAILS</button></div>
        </div>
      })}
      {/* <button onClick={() => nav(-1)}>Go Back</button> */}
    </div>
  </div>
)}

  <DataTable
        title=""
        data={lett}
        columns={callData}
        pagination
        responsive
        highlightOnHover
        dense
        paginationPerPage={10}
        noDataComponent={null}
      />
    {
      (id && id.map((v:any,index:number)=>{
        return <ul>
          <li><h2 ><strong className="text-success" >Name:</strong>{v.strMeal}</h2></li>
          <li><h2><strong className="text-success" >Image:</strong ><img src={v.strMealThumb}/></h2></li>
          <li><h2><strong className="text-success" >Recipe:</strong>{v.strInstructions}</h2></li>
          
        </ul>
      }))
    }
    
    </>
  )
}
export default Recipe;