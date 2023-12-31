import Offer from '../componemts/Amazing offer/Offer'
import Category from '../componemts/Category/Category'
import Slider from '../componemts/slider/Slider'
import BestSellingProducts from '../componemts/Best selling products/BestSellingProducts'
import MiddleBanner from '../componemts/banners/MiddleBanner'
import NewProducts from '../componemts/new products/NewProducts'
import EndBanners from '../componemts/banners/EndBanners'
import SuggestionProducts from '../componemts/suggestion products/SuggestionProducts'
import Blog from '../componemts/blogs/Blog'
function HomePage() {
  return (
  <>
  <Slider />
  <Category />
  <Offer />
  <BestSellingProducts />
  <MiddleBanner />
  <NewProducts />
  <EndBanners />
  <SuggestionProducts />
  <Blog />
  </>      
  )
}

export default HomePage
