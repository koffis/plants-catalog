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

const MainBlock = () => {
  return (
    <div className="main-block">
      <GoodsList title="Популярні товари" goods={goodsList} />
      <GoodsList title="Сезонний вибір" goods={goodsList} />
      <GoodsList title="Акції" goods={goodsList} />
    </div>
  );
};

export default MainBlock;
