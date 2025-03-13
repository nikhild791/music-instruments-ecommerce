import React from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const SubCategory = () => {
  const categoryNameUrl = useParams();
  const productArray = [
    {
      categoryName: "GUITAR",
      categoryImgUrl:
        "https://music-club.mrsoni.me/uploads/Admin/categoryImage/GUITAR.jpg",
      categoryProduct: [
        {
          name: "first",
          price: 3444,
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_1-1_MAYNdNI.jpg",
        },
        {
          name: "second",
          price: 3444,
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_2-1.jpg",
        },
        {
          name: "third",
          price: 3444,
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_3-1.jpg",
        },
        {
          name: "fourth",
          price: 3444,
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_4-1.jpg",
        },
        {
          name: "fifth",
          price: 3444,
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_5-1.jpg",
        },
        {
          name: "sixth",
          price: 3444,
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
          price: 3444,
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_30-1.jpg",
        },
        {
          name: "second",
          price: 3444,
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_31-1.jpg",
        },
        {
          name: "third",
          price: 3444,
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_32-1.jpg",
        },
        {
          name: "fourth",
          price: 3444,
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
          price: 3444,
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_14-1.jpg",
        },
        {
          name: "second",
          price: 3444,
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_10-1.jpg",
        },
        {
          name: "third",
          price: 3444,
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_11-1.jpg",
        },
        {
          name: "fourth",
          price: 3444,
          imgUrl:
            "https://music-club.mrsoni.me/uploads/Admin/ProductImage/Main/p_20-1.jpg",
        },
      ],
    },
    {
      categoryName: "PIANO",
      categoryImgUrl:
        "https://music-club.mrsoni.me/uploads/Admin/categoryImage/piano.jpg",
      categoryProduct: [],
    },
    {
      categoryName: "DRUM",
      categoryImgUrl:
        "https://music-club.mrsoni.me/uploads/Admin/categoryImage/drum.jpg",
      categoryProduct: [],
    },
    {
      categoryName: "FLUTE",
      categoryImgUrl:
        "https://music-club.mrsoni.me/uploads/Admin/categoryImage/flute.jpg",
      categoryProduct: [],
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
      categoryProduct: [],
    },
  ];
  const subcat = productArray.find(
    (a) => a.categoryName.toLowerCase() == categoryNameUrl.categoryName
  );

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col  justify-center items-center">
        <span className="text-3xl font-bold dark:text-white dark:bg-gray-900 my-8 ">
          {" "}
          {subcat.categoryName}{" "}
        </span>
        <div className="flex flex-row flex-wrap items-center gap-11 justify-center mb-12">
          {subcat.categoryProduct.map((e, index) => {
            return (
              <div key={index}>
                <Card className="w-96 ">
                  <CardHeader
                    shadow={false}
                    floated={false}
                    className="h-96 dark:bg-gray-900"
                  >
                    <img
                      src={e.imgUrl}
                      alt={e.name}
                      className="h-full w-full object-cover"
                    />
                  </CardHeader>
                  <CardBody>
                    <div className="mb-2 flex items-center justify-between dark:bg-gray-900">
                      <Typography color="blue-gray" className="font-medium">
                        {e.name}
                      </Typography>
                      <Typography color="blue-gray" className="font-medium">
                        $95.00
                      </Typography>
                    </div>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal opacity-75 dark:bg-gray-900 dark:text-white"
                    >
                      With plenty of talk and listen time, voice-activated Siri
                      access, and an available wireless charging case.
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <div className="flex gap-2">
                      <Button
                        ripple={false}
                        fullWidth={true}
                        className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                      >
                        Add to Cart
                      </Button>
                      <Button
                        ripple={false}
                        fullWidth={true}
                        className="bg-blue-500 text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                      >
                        Buy Now
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SubCategory;
