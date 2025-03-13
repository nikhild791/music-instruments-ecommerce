import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
   
const Category = () => {
    const productArray =   
    [{
        "categoryName":"GUITAR",
        "categoryImgUrl":"https://music-club.mrsoni.me/uploads/Admin/categoryImage/GUITAR.jpg",
        "categoryProduct":[
            {   
                "name":"Semi-Acoustic Guitar MM400CE",
                "price":'₹ 70000.00',
                "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_1-1_MAYNdNI.jpg"
            },
            {
            "name":"Semi-Acoustic Guitar MM310MCE",
            "price":'₹ 50000.00',
            "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_2-1.jpg"
        },
        {
            "name":"Semi-Acoustic Guitar MM310MCE",
            "price":'₹ 50000.00',
            "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_3-1.jpg"
        },
       {
           "name":"Semi-Acoustic Guitar MM310MCE",
            "price":'₹ 50000.00',
            "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_4-1.jpg"
        },
        {
            "name":"Semi-Acoustic Guitar MM300CE",
            "price":'₹ 12000.00',
            "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_5-1.jpg"
        },
        {
            "name":"Semi-Acoustic Guitar MM300CE",
            "price":'₹ 12000.00',
            "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_6-1.jpg"
        }
    ]
    }, 
     {
        "categoryName":"TABLA",
        "categoryImgUrl":"https://music-club.mrsoni.me/uploads/Admin/categoryImage/TABLA.jpg",
        "categoryProduct":[
        {
            "name":"Tabla Set",
            "price":'₹ 1999.00',
            "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_30-1.jpg"
        },
        {
            "name":"Tabla Set",
            "price":'₹ 1999.00',
            "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_31-1.jpg"
        },
        {
            "name":"MUSIQAA JAHAN",
            "price":'₹ 3999.00',
            "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_32-1.jpg"
        },
        {
            "name":"Bayan Tabla",
            "price":'₹ 1999.00',
            "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_33-1.jpg"
        }]
      
    },
     {
        "categoryName":"KEYBOARD",
        "categoryImgUrl":"https://music-club.mrsoni.me/uploads/Admin/categoryImage/keybord.jpg",
        "categoryProduct":
        [{
            "name":"Henrix KB-61",
            "price":'₹ 25999.00',
            "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_14-1.jpg"
        },
        {
            "name":"Yamaha PSR I400 61-Key",
            "price":'₹ 9999.00',
            "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_10-1.jpg"
        },
        {
            "name":"Casio CT-X9000IN 61-Key",
            "price":'₹ 25999.00',
            "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_11-1.jpg"
        },
        ]
    },
    {
        "categoryName":"PIANO",
        "categoryImgUrl":"https://music-club.mrsoni.me/uploads/Admin/categoryImage/piano.jpg",
        "categoryProduct":[
            {
                "name":"Roland RP701",
                "price":'₹ 25999.00',
                "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_18-1.jpg"
            },
            {
                "name":"Vault Caesar MK2 88 Key",
                "price":'₹ 19999.00',
                "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_16-1.jpg"
            },
            {
                "name":"Korg LP-380U 88 Key",
                "price":'₹ 12999.00',
                "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_15-1.jpg"
            },
            {
                "name":"Korg B2SP 88 key",
                "price":'₹ 37999.00 ',
                "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_17-1.jpg"
            },    
                
        ]
    },
    {
        "categoryName":"DRUM",
        "categoryImgUrl":"https://music-club.mrsoni.me/uploads/Admin/categoryImage/drum.jpg",
        "categoryProduct":[
            {
                "name":"Ludwig Accent Drive 5 Piece Acoustic Drum Kit",
                "price":'₹ 54999.00',
                "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_8-1.jpg"
            },
            {
                "name":"EFNOTE EFNOTE 3 Acoustic",
                "price":'₹ 59999.00',
                "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_21-1.jpg"
            },
            {
                "name":"Ludwig Vistalite 5 Piece Drum Kit",
                "price":'₹ 49999.00',
                "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_9-1.jpg"
            },
            {
                "name":"Natal K-EVB-UF22 Evolution 5-Piece Shell Pack Acouustic Drum Kit",
                "price":'₹ 120000.00',
                "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_6-1.jpg"
            }
            

        ]
    },
    {
        "categoryName":"FLUTE",
        "categoryImgUrl":"https://music-club.mrsoni.me/uploads/Admin/categoryImage/flute.jpg",
        "categoryProduct":[
            {
                "name":"Ultimate Guru Bansuri",
                "price":'₹ 1999.00',
                "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Back/p_9-2.jpg"
            },
            {
                "name":"Bansuri Bamboo Flute",
                "price":'₹ 99.00',
                "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_23-1.jpg"
            },
            {
                "name":"Shiv'z Muzic Flute",
                "price":'₹ 499.00',
                "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_22-1.jpg"
            },
            {
                "name":"Goonj Flutes",
                "price":'₹ 399.00 ',
                "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_25-1.jpg"
            }
            
            
        ]
    },
    {
        "categoryName":"MUSICIANs MALL",
        "categoryImgUrl":"https://music-club.mrsoni.me/uploads/Admin/categoryImage/MUSICIANs_MALL.jpg",
        "categoryProduct":[]
    },
    {
        "categoryName":"SITAR",
        "categoryImgUrl":"https://music-club.mrsoni.me/uploads/Admin/categoryImage/Sitar.jpg",
        "categoryProduct":[
            {
                "name":"Sursargam Sitar",
                "price":'₹ 1999.00',
                "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_26-1.jpg"
            },
            {
                "name":"Male Concert Sitar",
                "price":'₹  15999.00 ',
                "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_28-1.jpg"
            },
            {
                "name":"Naeem Sitar",
                "price":'₹  17999.00 ',
                "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_27-1.jpg"
            },
            {
                "name":"Exquisite Handcrafted Sitar",
                "price":'₹  19999.00 ',
                "imgUrl":"https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_29-1.jpg"
            }
            
            
        ]
    },
    ]
  return (
    <section className="bg-gray-50 dark:bg-gray-900">

    <div className='flex flex-col  justify-center items-center'>
        <span className='text-3xl font-bold dark:text-white my-8 '>ALL CATEGORIES</span>
        <div className='flex flex-row flex-wrap items-center gap-11 justify-center mb-12'>

     
        {productArray.map((e)=>{
            return(<div>

        
          <Card className="w-72 dark:bg-gray-900 dark:border-white  border-2 rounded m-2">
      <CardHeader shadow={false} floated={false} className="h-60 mt-0">
        <Link to={(e.categoryName).toLowerCase()}>
        <img
          src={e.categoryImgUrl}
          className="h-full w-full object-cover"
          />
          </Link>
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-center text-center">
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