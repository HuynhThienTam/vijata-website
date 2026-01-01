import BriefInfo from '@/components/About/BriefInfo';
import MottoAndFigures from '@/components/About/MottoAndFigures';
import NotableActivities from '@/components/About/NotableActivities';
import Timeline from '@/components/About/Timeline';
import CoursesIntro from '@/components/ProductsPage/CoursesIntro';
import ProductsShowing from '@/components/ProductsPage/ProductsShowing';
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giới thiệu về Vijata",
  description: "Được thành lập vào ngày 2/11/2015, Công ty TNHH Việt Nhật Đài là nơi chuyên đào tạo, hợp tác đào tạo các ngoại ngữ Hoa, Anh,... cho người Việt và đào tạo tiếng Việt cho người nước ngoài. Ngoài ra công ty còn là nơi chuyên tư vấn du học và đào tạo nghề ngắn hạn.",
  openGraph: {
    title: "Giới thiệu về Vijata",
    description: "Được thành lập vào ngày 2/11/2015, Công ty TNHH Việt Nhật Đài là nơi chuyên đào tạo, hợp tác đào tạo các ngoại ngữ Hoa, Anh,... cho người Việt và đào tạo tiếng Việt cho người nước ngoài. Ngoài ra công ty còn là nơi chuyên tư vấn du học và đào tạo nghề ngắn hạn.",
    url: "https://vijata-website.vercel.app/about",
    siteName: "Vijata",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://vijata-website.vercel.app/images/vijatameta.png",
        width: 1200,
        height: 630,
        alt: "About Vijata",
      },
    ],
  },
};
const About = () => {
  return (
    <div className="overflow-hidden bg-white">
      <BriefInfo/>
      <MottoAndFigures/>
      <NotableActivities/>
      <Timeline/>
    </div>
  );
};

export default About;