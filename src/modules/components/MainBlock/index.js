import verify from "../../../assets/images/verify.svg";
import check from "../../../assets/images/check.svg";
import packages from "../../../assets/images/packages.svg";
import GoodsList from "../GoodsList";
import "./index.scss";

const goodsList = [
  {
    image:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    name: "Lorem ipsum",
    code: "1337228",
    price: "1560$",
    discount: false,
    cart: true,
  },
  {
    image:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    name: "Lorem ipsum",
    code: "1337228",
    price: "1560$",
    discount: false,
    cart: true,
  },
  {
    image:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    name: "Lorem ipsum",
    code: "1337228",
    price: "1560$",
    discount: false,
    cart: true,
  },
  {
    image:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    name: "Lorem ipsum",
    code: "1337228",
    price: "1560$",
    discount: "1560$",
    cart: true,
  },
];

const MainBlock = ({ isGood }) => {
  return (
    <div className="main-block">
      {isGood ? null : (
        <>
          <GoodsList title="Популярні товари" goods={goodsList} />
          <GoodsList title="Сезонний вибір" goods={goodsList} />
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
      <GoodsList title="Акції" goods={goodsList} />
    </div>
  );
};

export default MainBlock;
