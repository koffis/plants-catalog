import { Formik, Field, Form } from "formik";
import novaposhta from "../../assets/images/novaposhta.svg";
import banks from "../../assets/images/banks.png";

const Delivery = () => {
  return (
    <div className="card-delivery">
      <h4>1. Контактні дані</h4>
      <Formik
        initialValues={{
          name: "",
          number: "",
          email: "",
          delivery: "",
          town: "",
          department: "",
          payment: "",
          comment: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values }) => (
          <Form>
            <Field required name="name" placeholder="ПІБ" />
            <Field required name="number" placeholder="+38(0__)___-__-__" />
            <Field required name="email" placeholder="Email" type="email" />
            <h4>2. Спосіб доставки</h4>
            <img src={novaposhta} alt="nova poshta" />
            <div role="group" aria-labelledby="my-radio-group">
              <label>
                <Field type="radio" name="delivery" value="Нова пошта" />
                Нова Пошта
              </label>
              {values.delivery === "Нова пошта" && (
                <div>
                  <Field required name="town" placeholder="Місто" />
                  <Field required name="department" placeholder="Відділення" />
                </div>
              )}
              <label>
                <Field type="radio" name="delivery" value="Самовивіз" />
                Самовивіз зі складу
              </label>
            </div>
            <h4>3. Спосіб оплати</h4>
            <img src={banks} alt="banks" />
            <div role="group" aria-labelledby="my-radio-group">
              <label>
                <Field type="radio" name="payment" value="Переказ на карту" />
                Переказ на карту
              </label>
              <label>
                <Field type="radio" name="payment" value="Накладний платіж" />
                При отриманні замовлення (Накладний платіж)
              </label>
              <label>
                <Field
                  type="radio"
                  name="payment"
                  value="Безготівковий розрахунок"
                />
                Безготівковий розрахунок
              </label>
            </div>
            <Field
              type="textarea"
              name="comment"
              placeholder="Коментар до замовлення."
            />
            <p>
              Совершая покупки в нашем магазине вы соглашаетесь с
              <b> пользовательским соглашением</b>
            </p>
            <button type="submit">Оформити замовлення</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Delivery;
