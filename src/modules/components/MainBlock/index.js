import { useSelector } from "react-redux";
import verify from "../../../assets/images/verify.svg";
import check from "../../../assets/images/check.svg";
import packages from "../../../assets/images/packages.svg";
import GoodsList from "../GoodsList";

import "./index.scss";

const MainBlock = ({ isGood }) => {

  const popular = useSelector(state => state.home.popular);
  const discount = useSelector(state => state.home.discount);
  const season = useSelector(state => state.home.season);

  return (
    <div className="main-block">
      {isGood ? null : (
        <>
          <GoodsList title="Популярні товари" goods={popular} />
          <GoodsList title="Сезонний вибір" goods={season} />
        </>
      )}
      <div className="main-block-betters">
        <h4>Переваги</h4>
        <div className="main-block-betters-list">
          <div className="main-block-list-item-text">
            <div className="main-block-betters-list-item">
              <img src={verify} alt="verify" />
            </div>
            <span>Надійні гарантії</span>
          </div>
          <div className="main-block-list-item-text">
            <div className="main-block-betters-list-item">
              <img src={check} alt="check" />
            </div>
            <span>Постійні знижки</span>
          </div>
          <div className="main-block-list-item-text">
            <div className="main-block-betters-list-item">
              <img src={packages} alt="packages" />
            </div>
            <span>Швидка доставка</span>
          </div>
        </div>
      </div>
      <GoodsList title="Акції" goods={discount} />
    </div>
  );
};

export default MainBlock;
