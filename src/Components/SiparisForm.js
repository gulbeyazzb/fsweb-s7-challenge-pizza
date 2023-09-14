import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
const formDataInitial = {
  siparisNotu: "",
  boyut: "",
  hamur: "",
  ekMalzemeler: [],
};
const ekMalzemeler = [
  " Pepperoni",
  " Sucuk",
  " Sosis",
  " Domates",
  " Pastırma",
  " Ananas",
  " Jalepone",
  " Sarımsak",
  " Mısır",
  " Kanada Jambonu",
  " Kabak",
  " Zeytin",
  " Tavuk Izgara",
];
export default function SiparisForm({ urun }) {
  const history = useHistory();

  const [total, setTotal] = useState(0);
  const [formData, setformData] = useState(formDataInitial);
  const [sayac, setSayac] = useState(1);
  const [isValid, setValid] = useState(false);
  const [errors, setErrors] = useState({
    siparisNotu: "",
    boyut: "",
    hamur: "",
    ekMalzemeler: "",
  });

  const siparisFormSchema = Yup.object().shape({
    boyut: Yup.string().required("Boyut Seçiniz!"),
    hamur: Yup.string().required("Hamur Kalınlığını Seçmediniz!"),
    siparisNotu: Yup.string(),
    ekMalzemeler: Yup.array().max(10, "En fazla 10 adet malzeme seçiniz!"),
  });

  const inputChangeHandler = (event) => {
    const { name, value, checked } = event.target;

    if (name === "ekMalzemeler") {
      const malzemeler = [...formData.ekMalzemeler];
      if (checked) {
        malzemeler.push(value);
      } else {
        malzemeler.splice(malzemeler.indexOf(value), 1);
      }
      setformData({ ...formData, ekMalzemeler: malzemeler });

      Yup.reach(siparisFormSchema, "ekMalzemeler")
        .validate(malzemeler)
        .then((valid) => {
          if (errors.ekMalzemeler) setErrors({ ...errors, ekMalzemeler: "" });
        })
        .catch((err) => setErrors({ ...errors, ekMalzemeler: err.errors[0] }));
    } else {
      setformData(() => ({
        ...formData,
        [name]: value,
      }));
      Yup.reach(siparisFormSchema, name)
        .validate(value)
        .then((res) => setErrors({ ...errors, [name]: "" }))
        .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
    }
  };

  function onSubmitHandler(event) {
    event.preventDefault();

    axios.post("https://httpbin.org/post", { formData, urun }).then((res) => {
      history.push("/siparis-alindi");
    });
  }
  useEffect(() => {
    console.log(errors);
    siparisFormSchema.isValid(formData).then((valid) => setValid(valid));
  }, [errors]);

  useEffect(() => {
    let malzemeSayisi = formData.ekMalzemeler.length;
    let malzemePrice = malzemeSayisi * 5;
    let boyutPrice = 0;
    let hamurPrice = 0;
    if (formData.boyut === "S") {
      boyutPrice = 20;
    } else if (formData.boyut === "M") {
      boyutPrice = 40;
    } else if (formData.boyut === "L") {
      boyutPrice = 60;
    }

    if (formData.hamur === "ince") {
      hamurPrice = 10;
    } else if (formData.hamur === "orta") {
      hamurPrice = 20;
    } else if (formData.hamur === "kalın") {
      hamurPrice = 30;
    }

    let totalPrice =
      parseInt(urun.price) +
      parseInt(boyutPrice) +
      parseInt(hamurPrice) +
      parseInt(malzemePrice);
    setTotal(totalPrice * sayac);
  }, [urun, formData.boyut, formData.ekMalzemeler, formData.hamur, sayac]);

  return (
    <div className="siparisContainer">
      <form onSubmit={onSubmitHandler} className="mb-5 py-5">
        <div className="d-flex justify-content-between">
          <div>
            <h6 className="required fw-bold">Boyut Seç</h6>
            <div className="boyutSec w-100 d-flex gap-2">
              <input
                data-cy="radioButton"
                onChange={inputChangeHandler}
                id="radio-S"
                className=" boyut-input"
                type="radio"
                name="boyut"
                value="S"
              />
              <label className="boyut-label" htmlFor="radio-S">
                S
              </label>
              <input
                onChange={inputChangeHandler}
                id="radio-M"
                className="boyut-input"
                type="radio"
                name="boyut"
                value="M"
              />
              <label className="boyut-label" htmlFor="radio-M">
                M
              </label>
              <input
                onChange={inputChangeHandler}
                id="radio-L"
                className="boyut-input"
                name="boyut"
                type="radio"
                value="L"
              />
              <label className="boyut-label" htmlFor="radio-L">
                L
              </label>
              <div data-cy="name-error" className="text-danger">
                {errors.name}
              </div>
            </div>
          </div>
          <div>
            <h6 className="required fw-bold">Hamur Seç</h6>
            <select
              className="formSelect"
              aria-label="Default select example"
              name="hamur"
              onChange={inputChangeHandler}
            >
              <option selected disabled>
                - Hamur Kalınlığını Seç -{" "}
              </option>
              <option value="kalın">Kalın</option>
              <option value="orta">Orta</option>
              <option value="ince">İnce</option>
            </select>
            <div className="text-danger">{errors.hamur}</div>
          </div>
        </div>

        <h6 className="fw-bold mt-5">Ek Malzemeler</h6>
        <h6 className="text-muted my-4">
          En fazla 10 malzeme seçebilirsiniz. 5tl
        </h6>
        <div className="mb-5 w-100 d-flex gap-4 flex-wrap fw-medium">
          {ekMalzemeler.map((malzeme, i) => (
            <div className="w-25" key={malzeme}>
              <label className="d-flex align-items-center" key={malzeme}>
                <input
                  data-cy={i}
                  onChange={inputChangeHandler}
                  className="check"
                  type="checkbox"
                  name="ekMalzemeler"
                  value={malzeme}
                  checked={formData.ekMalzemeler.includes(malzeme)}
                />
                {malzeme}
              </label>
            </div>
          ))}
          <div
            className={`invalid-feedback ${
              errors.ekMalzemeler ? "d-block" : ""
            }`}
          >
            {errors.ekMalzemeler}
          </div>
        </div>

        <div>
          <label className="d-flex flex-column fw-bold">
            Sipariş Notu
            <input
              onChange={inputChangeHandler}
              data-cy="siparisNotu"
              className="siparisNotuInput"
              type="text"
              name="siparisNotu"
              placeholder="Siparişine eklemek istediğin bir not var mı?"
            />
          </label>
        </div>

        <hr />

        <div className="siparisOzetiForm">
          <div className="siparisSayisi">
            <button
              type="button"
              onClick={() => (sayac > 1 ? setSayac(sayac - 1) : setSayac(1))}
            >
              -
            </button>
            <label>{sayac}</label>
            <button type="button" onClick={() => setSayac(sayac + 1)}>
              +
            </button>
          </div>
          <div className="siparisToplami">
            <div className="siparisOzetiContainer">
              <h6 className="p-4 fw-bold">Sipariş Toplamı</h6>
              <h6 className="d-flex justify-content-between ">
                <div className="px-4 siparisOzetiListe">
                  <p className="w-100 d-flex justify-content-between">
                    {urun.urunName}
                    <p>{urun.price} ₺</p>
                  </p>
                  <p className="w-100 d-flex justify-content-between">
                    Boyut:<p>{formData.boyut}</p>
                  </p>
                  <p className="w-100 d-flex justify-content-between">
                    Hamur:<p>{formData.hamur}</p>
                  </p>
                  <p className="w-100 d-flex justify-content-between flex-wrap">
                    Ek Malzemeler:{" "}
                    <p className="m-0 text-wrap">{formData.ekMalzemeler}</p>
                  </p>
                </div>
              </h6>
              <h6 className="d-flex p-4 justify-content-between text-danger">
                Toplam
                <span>{total} ₺</span>
              </h6>
            </div>
            <button
              data-cy="submit"
              onclick="location.href = 'http://localhost:3000/siparis-alindi'"
              className="btn-siparisVer"
              type="submit"
              disabled={!isValid}
            >
              SİPARİŞ VER
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
