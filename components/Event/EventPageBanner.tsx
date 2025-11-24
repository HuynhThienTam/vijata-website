"use client";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import { EventCard } from "./EventCard";
import Slider from "react-slick";

export default function EventPageBanner() {
  // const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const newsData = [
    {
      id: 1,
      title: "Vijata opens new center in Ho Chi Minh City",
      image: "/images/phuong-banner.jpg",
    },
    {
      id: 2,
      title: "Vijata wins national teaching award",
      image: "/images/viethoa-banner.jpg",
    },
    {
      id: 3,
      title: "New collaboration with Japanese universities",
      image: "/images/writing-banner.png",
    },
  ];
  const handlePrev = () => {
    if (!sliderRef.current) return;

    const slidesToShow = 1; // nhớ sync với settings.slidesToShow
    const lastIndex = newsData.length - slidesToShow;

    if (currentSlide == 0) {
      sliderRef.current.slickGoTo(lastIndex);
    } else {
      sliderRef.current.slickPrev();
    }
  };
  const handleNext = () => {
    if (!sliderRef.current) return;

    const slidesToShow = 1; // nhớ sync với settings.slidesToShow
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
        className="absolute top-1/2 -translate-y-1/2 z-1 left-4 h-11 w-11 flex items-center justify-center leading-none text-gray-600  text-base font-semibold bg-white rounded-full hover:bg-red-600 hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-500 cursor-pointer"
        // shadow-sm shadow-gray-400/50
        onClick={handlePrev}
        type="button"
        style={{
          boxShadow: "0 0 6px rgba(0,0,0,0.1)",
        }}
      >
        <span className="pb-[2px] leading-none">‹</span>
      </button>
    );
  }

  // function NextArrow(props: any) {
  //   const { onClick } = props;
  function NextArrow() {
    return (
      <button
        className="absolute top-1/2 -translate-y-1/2 right-4 h-11 w-11 flex  items-center justify-center leading-none text-gray-600 text-base font-semibold bg-white rounded-full hover:bg-red-600 hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-500 cursor-pointer"
        // shadow-sm shadow-gray-400/50
        // onClick={onClick}
        onClick={handleNext}
        type="button"
        style={{
          boxShadow: "0 0 6px rgba(0,0,0,0.1)",
        }}
      >
        <span className="pb-[2px] leading-none">›</span>
        
      </button>
    );
  }
  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    draggable: true,
    swipeToSlide: true, // 🔥 kéo ít cũng auto next
    touchThreshold: 25,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // prevArrow:<PrevArrow onClick={() => sliderRef.current?.slickPrev()} />,
    // prevArrow: <PrevArrow />,
    beforeChange: (oldIndex: number, newIndex: number) =>
      setCurrentSlide(newIndex),
    afterChange: (current: number) => {
      const lastIndex = newsData.length - settings.slidesToShow;
      if (current >= lastIndex) {
        setTimeout(() => {
          sliderRef.current?.slickGoTo(0);
          setCurrentSlide(0);
        }, 4000);
      }
    },
  };
  return (
    <section className="relative w-[80%] mx-auto pt-2 pb-7">
      <div className="slider-container  banner-slider relative group ">
        <Slider ref={sliderRef} {...settings}>
          {newsData.map((news) => (
            <div key={news.id}  className="banner-slide-item relative aspect-[4/1] w-full">
              <Image
                src={news.image}
                alt={news.title}
                fill
                className="object-cover object-[center_60%] "
              />
               <div className="absolute inset-0 bg-blue-800/5 pointer-events-none"></div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
