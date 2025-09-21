import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";

const Detail = () => {
  const [data1, setData1] = useState<any[]>([]);

  const location = useLocation();
  const { mealid }:any = location.state;
   const nav = useNavigate();

  useEffect(() => {
    

    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
      .then((res) => {
        setData1(res.data.meals );
      })
      .catch((err) => {
        console.error(err);
      });
  }, [mealid]);

  
  return (
    <>
      {data1.map((v: any, index: number) => (
        <ul key={index}>
          <li><h2><strong>Meal's Name:</strong>{v.strMeal}</h2></li>
          <li><h2><strong>Area:</strong>  {v.strArea}</h2></li>
          <li>
            <img src={v.strMealThumb} alt={v.strMeal} width={300} />
          </li>
          <li><h2><strong>Instructions:</strong></h2> <h3>{v.strInstructions}</h3></li>
        </ul>
      ))}


       <div className="btn"> <button className="btn btn-success" onClick={() => nav("/", { state: { meal: data1[0] } })}> Go to Recip </button> </div>
    </>
  )
}

export default Detail;
