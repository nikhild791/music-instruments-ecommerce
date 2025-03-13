import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
   
const Category = () => {
    const productArray =   
    [{
        "categoryName":"GUITAR",
        "categoryImgUrl":"https://music-club.mrsoni.me/uploads/Admin/categoryImage/GUITAR.jpg",
        "categoryProduct":[
            {   
                "name":"first",
                "price":3444,
                "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_1-1_MAYNdNI.jpg"
            },
            {
            "name":"second",
            "price":3444,
            "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_2-1.jpg"
        },
        {
            "name":"third",
            "price":3444,
            "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_3-1.jpg"
        },
       {
            "name":"fourth",
            "price":3444,
            "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_4-1.jpg"
        },
        {
            "name":"fifth",
            "price":3444,
            "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_5-1.jpg"
        },
        {
            "name":"sixth",
            "price":3444,
            "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_6-1.jpg"
        }
    ]
    }, 
     {
        "categoryName":"TABLA",
        "categoryImgUrl":"https://music-club.mrsoni.me/uploads/Admin/categoryImage/TABLA.jpg",
        "categoryProduct":[
        {
            "name":"first",
            "price":3444,
            "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_30-1.jpg"
        },
        {
            "name":"second",
            "price":3444,
            "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_31-1.jpg"
        },
        {
            "name":"third",
            "price":3444,
            "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_32-1.jpg"
        },
        {
            "name":"fourth",
            "price":3444,
            "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_33-1.jpg"
        }]
      
    },
     {
        "categoryName":"KEYBOARD",
        "categoryImgUrl":"https://music-club.mrsoni.me/uploads/Admin/categoryImage/keybord.jpg",
        "categoryProduct":
        [{
            "name":"first",
            "price":3444,
            "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_14-1.jpg"
        },
        {
            "name":"second",
            "price":3444,
            "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_10-1.jpg"
        },
        {
            "name":"third",
            "price":3444,
            "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_11-1.jpg"
        },
        {
            "name":"fourth",
            "price":3444,
            "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_20-1.jpg"
        }]
      
    }
    ]
  return (
    <section className="bg-gray-50 dark:bg-gray-900">

    <div className='flex flex-col justify-center items-center'>
        <span className='text-3xl font-bold dark:text-white my-4 '>Category</span>
        <div className='flex flex-row items-center gap-11 justify-center mb-12'>

     
        {productArray.map((e)=>{
            return(<div>

        
          <Card className="w-60 dark:bg-gray-900 dark:border-white border-black dark:border-2 rounded m-2">
      <CardHeader shadow={false} floated={false} className="h-60">
        <img
          src={e.categoryImgUrl}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between text-center">
          <Typography color="blue-gray" className="font-medium dark:text-white justify-center">
            {e.categoryName}
          </Typography>
        
        </div>
       
      </CardBody>
    </Card>
    </div>)
        })}
      </div>
      </div>
      </section>
  )}

  

export default Category