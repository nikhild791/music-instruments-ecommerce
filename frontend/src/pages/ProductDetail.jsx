import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { section } from 'framer-motion/client';

const ProductDetail = () => {
  const { categoryName,productname } = useParams();
  const productArray = [
    {
      categoryName: "GUITAR",
      categoryImgUrl:
        "https://music-club.mrsoni.me/uploads/Admin/categoryImage/GUITAR.jpg",
      categoryProduct: [
        {
          name: "first",
          price: "₹ 70000.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_1-1_MAYNdNI.jpg",
        },
        {
          name: "second",
          price: "₹ 50000.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_2-1.jpg",
        },
        {
          name: "third",
          price: "₹ 50000.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_3-1.jpg",
        },
        {
          name: "fourth",
          price: "₹ 50000.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_4-1.jpg",
        },
        {
          name: "fifth",
          price: "₹ 12000.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_5-1.jpg",
        },
        {
          name: "sixth",
          price: "₹ 12000.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_6-1.jpg",
        },
      ],
    },
    {
      categoryName: "TABLA",
      categoryImgUrl:
        "https://music-club.mrsoni.me/uploads/Admin/categoryImage/TABLA.jpg",
      categoryProduct: [
        {
          name: "first",
          price: "₹ 1999.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_30-1.jpg",
        },
        {
          name: "second",
          price: "₹ 1999.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_31-1.jpg",
        },
        {
          name: "third",
          price: "₹ 3999.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_32-1.jpg",
        },
        {
          name: "fourth",
          price: "₹ 1999.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_33-1.jpg",
        },
      ],
    },
    {
      categoryName: "KEYBOARD",
      categoryImgUrl:
        "https://music-club.mrsoni.me/uploads/Admin/categoryImage/keybord.jpg",
      categoryProduct: [
        {
          name: "first",
          price: "₹ 25999.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_14-1.jpg",
        },
        {
          name: "second",
          price: "₹ 9999.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_10-1.jpg",
        },
        {
          name: "third",
          price: "₹ 25999.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_11-1.jpg",
        },
      ],
    },
    {
      categoryName: "PIANO",
      categoryImgUrl:
        "https://music-club.mrsoni.me/uploads/Admin/categoryImage/piano.jpg",
      categoryProduct: [
        {
          name: "first",
          price: "₹ 25999.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_18-1.jpg",
        },
        {
          name: "second",
          price: "₹ 19999.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_16-1.jpg",
        },
        {
          name: "third",
          price: "₹ 12999.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_15-1.jpg",
        },
        {
          name: "fourth",
          price: "₹ 37999.00 ",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_17-1.jpg",
        },
      ],
    },
    {
      categoryName: "DRUM",
      categoryImgUrl:
        "https://music-club.mrsoni.me/uploads/Admin/categoryImage/drum.jpg",
      categoryProduct: [
        {
          name: "first",
          price: "₹ 54999.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_8-1.jpg",
        },
        {
          name: "second",
          price: "₹ 59999.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_21-1.jpg",
        },
        {
          name: "third",
          price: "₹ 49999.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_9-1.jpg",
        },
        {
          name: "fourth",
          price: "₹ 120000.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_6-1.jpg",
        },
      ],
    },
    {
      categoryName: "FLUTE",
      categoryImgUrl:
        "https://music-club.mrsoni.me/uploads/Admin/categoryImage/flute.jpg",
      categoryProduct: [
        {
          name: "first",
          price: "₹ 1999.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Back/p_9-2.jpg",
        },
        {
          name: "second",
          price: "₹ 99.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_23-1.jpg",
        },
        {
          name: "third",
          price: "₹ 499.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_22-1.jpg",
        },
        {
          name: "fourth",
          price: "₹ 399.00 ",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_25-1.jpg",
        },
      ],
    },
    {
      categoryName: "MUSICIANs MALL",
      categoryImgUrl:
        "https://music-club.mrsoni.me/uploads/Admin/categoryImage/MUSICIANs_MALL.jpg",
      categoryProduct: [],
    },
    {
      categoryName: "SITAR",
      categoryImgUrl:
        "https://music-club.mrsoni.me/uploads/Admin/categoryImage/Sitar.jpg",
      categoryProduct: [
        {
          name: "first",
          price: "₹ 1999.00",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_26-1.jpg",
        },
        {
          name: "second",
          price: "₹  15999.00 ",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_28-1.jpg",
        },
        {
          name: "third",
          price: "₹  17999.00 ",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_27-1.jpg",
        },
        {
          name: "fourth",
          price: "₹  19999.00 ",
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_29-1.jpg",
        },
      ],
    },
  ];
  const subcat = productArray.find(
    (a) => a.categoryName.toLowerCase() == categoryName
  );
  const productDetail = subcat.categoryProduct.find(a=>a.name == productname)
  return (
    <section className="bg-gray-50 dark:bg-gray-900">

    <ProductCard productDetail={productDetail}/>
  </section>
  );
};

export default ProductDetail;
