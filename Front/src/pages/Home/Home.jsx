import MainCarousel from "../../components/MainCarousel/MainCarousel.jsx";
import PopularCategory from "../../components/PopularCategory/PopularCategory.jsx";
import HomeFeaturedProducts from "../../components/HomeFeaturedProducts/HomeFeaturedProducts.jsx";
import HomeNumbers from "../../components/HomeNumbers/HomeNumbers.jsx";
import PopularProducts from "../../components/PopularProducts/PopularProducts.jsx";
import TopSelling from "../../components/TopSelling/TopSelling.jsx";
import HomeHotDeals from "../../components/HomeHotDeals/HomeHotDeals.jsx";
import HomeFeatured from "../../components/HomeFeatured/HomeFeatured.jsx";

export default function Home() {
  return <>
    <MainCarousel />
    <PopularCategory />
    <HomeFeaturedProducts />
    <HomeNumbers />
    <PopularProducts />
    <TopSelling />
    <HomeHotDeals />
    <HomeFeatured />
  </>
}
