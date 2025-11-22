"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import { EventCard } from "./EventCard";
import Slider from "react-slick";

export default function EventCarousel() {
  // const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const newsData = [
    {
      id: 1,
      title: "Vijata opens new center in Ho Chi Minh City",
      category: "Education",
      date: "Oct 24, 2025",
      image: "/images/display8.jpg",
      slug: "vijata-opens-hcmc-center",
    },
    {
      id: 2,
      title: "Vijata wins national teaching award",
      category: "Achievement",
      date: "Sep 12, 2025",
      image: "/images/display8.jpg",
      slug: "vijata-national-award",
    },
    {
      id: 3,
      title: "New collaboration with Japanese universities",
      category: "Partnership",
      date: "Aug 20, 2025",
      image: "/images/display8.jpg",
      slug: "vijata-japan-collab",
    },
    {
      id: 4,
      title: "Vijata language camp 2025 launched",
      category: "Event",
      date: "Jul 05, 2025",
      image: "/images/display8.jpg",
      slug: "vijata-camp-2025",
    },
    {
      id: 5,
      title: "Scholarship program for students announced",
      category: "Scholarship",
      date: "Jun 18, 2025",
      image: "/images/display8.jpg",
      slug: "vijata-scholarship",
    },
  ];
  const handlePrev = () => {
    if (!sliderRef.current) return;

    const slidesToShow = 3; // nhớ sync với settings.slidesToShow
    const lastIndex = newsData.length - slidesToShow;

    if (currentSlide == 0) {
      sliderRef.current.slickGoTo(lastIndex);
    } else {
      sliderRef.current.slickPrev();
    }
  };
  const handleNext = () => {
    if (!sliderRef.current) return;

    const slidesToShow = 3; // nhớ sync với settings.slidesToShow
    const lastIndex = newsData.length - slidesToShow;

    if (currentSlide >= lastIndex) {
      // nếu đang ở cuối → nhảy thẳng về đầu
      sliderRef.current.slickGoTo(0);
    } else {
      sliderRef.current.slickNext();
    }
  };
  // function PrevArrow(props: any) {
  // const { onClick } = props;
  function PrevArrow() {
    return (
      <button
        className="absolute -top-16 right-16   h-7 w-7 flex items-center justify-center text-gray-600  text-base font-semibold bg-white rounded-full hover:bg-red-600 hover:text-white transition-all duration-500 cursor-pointer"
        // shadow-sm shadow-gray-400/50
        onClick={handlePrev}
        type="button"
        style={{
          boxShadow: "0 0 6px rgba(0,0,0,0.1)",
        }}
      >
        ‹
      </button>
    );
  }

  // function NextArrow(props: any) {
  //   const { onClick } = props;
  function NextArrow() {
    return (
      <button
        className="absolute -top-16 right-7  h-7 w-7 flex items-center justify-center text-gray-600 text-base font-semibold bg-white rounded-full hover:bg-red-600 hover:text-white transition-all duration-500 cursor-pointer"
        // shadow-sm shadow-gray-400/50
        // onClick={onClick}
        onClick={handleNext}
        type="button"
        style={{
          boxShadow: "0 0 6px rgba(0,0,0,0.1)",
        }}
      >
        ›
      </button>
    );
  }
  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    draggable: true,
    swipeToSlide: true, // 🔥 kéo ít cũng auto next
    touchThreshold: 15,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // prevArrow:<PrevArrow onClick={() => sliderRef.current?.slickPrev()} />,
    // prevArrow: <PrevArrow />,
    beforeChange: (oldIndex: number, newIndex: number) => setCurrentSlide(newIndex),
    afterChange: (current: number) => {
      const lastIndex = newsData.length - settings.slidesToShow;
      if (current >= lastIndex) {
        setTimeout(() => {
          sliderRef.current?.slickGoTo(0);
          setCurrentSlide(0);
        }, 4000);
      }
    },
    // beforeChange: (oldIndex: number, newIndex: number) => {
    //   const lastIndex = newsData.length - settings.slidesToShow;
    //   if (newIndex > lastIndex) {
    //     sliderRef.current?.slickGoTo(0);
    //     setCurrentSlide(0);
    //   } else {
    //     setCurrentSlide(newIndex);
    //   }
    // },
    

    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  return (
    <section className="relative w-[90%] mx-auto py-9 ">
      <h2 className="text-2xl text-gray-800 font-semibold  text-left pl-7">
        OUR EVENTS
      </h2>

      <div className="slider-container pt-24  ">
        <Slider ref={sliderRef} {...settings}>
          {newsData.map((news) => (
            <div key={news.id}>
              <EventCard news={news} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
