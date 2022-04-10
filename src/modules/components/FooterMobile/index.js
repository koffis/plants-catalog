import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import GoodsList from "../GoodsList";

import "../../HomePage/index.scss";

const FooterMobile = () => {
  
  const popular = useSelector(state => state.home.popular);
  const discount = useSelector(state => state.home.discount);
  const season = useSelector(state => state.home.season);

  return (
    <div>
      <div className="home-popular-goods">
        <div className="home-popular-goods-items">
          <GoodsList title="Популярні товари" goods={popular} />
        </div>
      </div>
      <Link to={`/shop?filter=Новинки`}><div className="home-newsorts">Нові сорти</div></Link>
      <div className="home-popular-goods">
        <div className="home-popular-goods-items">
          <GoodsList title="Акції" goods={discount} />
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
