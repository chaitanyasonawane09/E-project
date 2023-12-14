import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar'
import Card from '../Component/Card'
import image1 from './E-waste-1.jpg'
import image2 from './E-waste-2.jpg'
import image3 from './E-waste-3.jpeg'

export default function Home() {
  //for object we use for in loop and then for array we use map so we need to 
  //declare them in {} and [] resp.

  const[search,setSearch]=useState('');
  const [foodCat, setFoodCat] = useState([])
  const [foodItem, setFoodItem] = useState([])
  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json();
    // console.log(response[0],response[1]);   

    setFoodItem(response[0]);
    setFoodCat(response[1]);
  }
  useEffect(() => {
    loadData();
  }, [])

  return (
    <>
      <div><Navbar /></div>
       {/* //we do not made another component of it as because search-bar in it is use from selecting below food items */}
     
 <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel" style={{maxHeight:"500px",objectFit:"contain !important"}}>
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner" id="Carousel">
    <div className='carousel-caption' style={{zIndex:"10"}}>
       <div className="d-flex justify-content-center">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                {/* <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button> */}
              </div>
    </div>
    <div className="carousel-item active" data-bs-interval="10000"> 
      <img src={image1} className="d-block w-100"  style={{filter:"brightness(60%)",width:"900",height:"700"}}  alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={image2} className="d-block w-100" style={{filter:"brightness(60%)",width:"900",height:"700"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={image3} className="d-block w-100" style={{filter:"brightness(60%)",width:"900",height:"700"}} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

      <div className='container'>
        {
          foodCat !== [] ?
            foodCat.map((data) => {
              return (
                <div className='row mb-3'>
                  <div key={data._id} className="fs-3 m-3">
                    {data.CategoryName}
                  </div>
                  {foodItem !== [] ?
                    foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
                      .map(filterItems => {
                        return (
                          <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                            <Card foodItem={filterItems}
                            // foodName={filterItems.name}
                              options={filterItems.options[0]}
                              // imgSrc={filterItems.img}
                               />
                          </div>
                        )
                      }) : <div>"No Such Data Found"</div>}
                </div>
              )
            }) : ""
        }

      </div>
      <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <span className="text-muted">© 2023 E-Waste-Buy, Inc</span>
    </div>
  </footer>
      </div>
    </>
  )
}
