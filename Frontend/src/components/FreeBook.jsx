import React from "react";
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";

function FreeBook() {
  const filterData = list.filter((data) => data.category === "Free");
  console.log(filterData);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container  mx-auto md:px-20 px-4 bg-white dark:bg-slate-900 dark:text-white">
        <div>
          <h1 className="font-semibold text-xl pb-2 mt-10 text-slate-800">
            Free Offered Courses
          </h1>
          <p className="text-slate-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            voluptatibus tempore dicta beatae inventore ratione ex itaque neque
            eos fugiat doloremque quaerat, voluptas harum rem. Consequuntur rem
            odio voluptatum doloribus.
          </p>
        </div>

        <div>
          <div className="slider-container gap-4">
            <Slider {...settings}>
              {filterData.map((item) => (
                <Cards item={item} key={item.id} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default FreeBook;
