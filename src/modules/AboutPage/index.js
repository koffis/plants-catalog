import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../components/Header";
import FooterMobile from "./../components/FooterMobile/index";
import Footer from "../components/Footer";
import MainBlock from "../components/MainBlock";
import { useWindow } from "../../utils";
import { receiveHome } from "../HomePage/actions/homeActions";
import mother from '../../assets/images/mother.jpg';
import mother2 from '../../assets/images/mother2.jpg';
import Preloader from "../components/Preloader";

import "./index.scss";

const AboutPage = () => {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(receiveHome());
    setTimeout(() => setLoading(false), 500);
  }, []);
  const { header } = useWindow();

  return loading ? <Preloader /> : (
    <div>
      <Header />
      <div className="about">
        <h2 className="about-header">Про магазин</h2>
        <p className="about-text">
        Ми раді вітати вас на нашому інтернет-магазині. Щоб ви були певні в нашій доброзичливості, розкажемо трішки про себе. 
        Мене звати Люба Бойко і вже понад 18 років займаюсь вирощуванням саджанців. За цей час надбала постійних клієнтів, які роками збирають чудовий урожай у садах із саджанців вирощених мною. Адже у разі виникнення складнощів я неодмінно надаю консультації своїм клієнтам. Також завжди допомогою початківцям в даній справі. 
        Моїм кредо у роботі є: «Хто хоче мати – той має, головне бажання». Тож із моєю допомогою ви виростите чудовий садочок. 
        Також роблячи замовлення саджанців у нас ви завжди отримаєте той товар, який був вказаний, у відповідності до сорту. Жодного обману, все чесно! Ми вже працюємо із клієнтами з різних куточків країни, тож маємо досвід роботи із поштою. Тому ви можете бути впевнені у тому, що товар, який ви замовили буде добре запакований, та зволожений. 
        Обробка замовлення займе 1-2 доби, плюс час доставки будь-якою поштою. (зазвичай пошта доставляє товар до вас протягом 2-3 днів).
        <br />
        <br />
        Я не приховую свого обличчя, тому прикріплюю свої фотографії. Також ви можете знайти інтерв’ю зі мною в програмі «Сільський календар», де я є частою гостею. Там розповідаю про свій досвід садівництва та раджу, що робити в своєму садку тої чи іншої пори року, як боротись із шкідниками та чим вдобрювати свої дерева і не тільки.
        В нашому магазині ви знайдете великий асортимент плодово-ягідних дерев, багато декоративних дерев та кущів, а в період з початку червня та до кінця липня у нас можна придбати саджанці троянд. 
        Чому саме в нас? Ми продаємо в період, коли на кожному кущі вже є квіточка, бо тоді ми на 100% впевнені що ви отримаєте троянду, того кольору, якого ви замовили.
        <br/>
        <br/>
        На останок, Ми знаходимось в м. Тернопіль, вул. Живова 9в, Центральний ринок. Тел. 0974933167. 
        Чекаємо на ваш вибір, ми завжди люб’язно вас зустрінемо.
        </p>
        <div className="about-image">
          <a href='https://www.facebook.com/green.garden.ternopil' target="_blank" rel="noopener noreferrer">
            <img src={mother} alt='mother' />
          </a>
          <a href='https://www.facebook.com/green.garden.ternopil' target="_blank" rel="noopener noreferrer">
            <img src={mother2} alt='mother' />
          </a>
        </div>
      </div>
      {header && <MainBlock />}
      {header ? <Footer /> : <FooterMobile />}
    </div>
  );
};
export default AboutPage;
