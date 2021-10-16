import React, { useEffect, useState } from "react";
import LayoutCardPage from "../components/layoutCardPage/layoutCardPage";
import TextField from "../components/textField";
import { validator } from "../utils/validator";

const CreatePage = () => {
  const [data, setData] = useState({
    name: "",
    surname: "",
    yearOfBirthday: "",
    link: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validatorConfig = {
    name: {
      isRequired: {
        message: "Поле <Имя> обязательно для заполнения",
      },
      min: {
        message: "Поле <Имя> должно содержать минимум 3 символа",
        value: 3,
      },
    },
    surname: {
      isRequired: {
        message: "Поле <Фамилия> обязательно для заполнения",
      },
      min: {
        message: "Поле <Фамилия> должно содержать минимум 3 символа",
        value: 3,
      },
    },
    yearOfBirthday: {
      validateDate: {
        message: "<Год рождения> введен не корректно",
      },
    },
    link: {
      isLink: {
        message:
          "Поле <Портфолио> должно быть ссылкой.Например: https://www.google.ru/",
      },
    },
  };
  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  useEffect(() => {
    validate();
  }, [data]);

  const isValid = Object.keys(errors).length === 0;

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    setTouched((prevState) => ({ ...prevState, [target.name]: 1 }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = Date.now().toString();
    localStorage.setItem(`${id}`, JSON.stringify(data));

    setData({ name: "", surname: "", yearOfBirthday: "", link: "" });
    setTouched({});
  };

  return (
    <LayoutCardPage>
      <div className="card__body_create mx-auto">
        <h1 className="text-center">Создание карточки студента</h1>
        <form className="form-group" onSubmit={handleSubmit}>
          <TextField
            label="Имя"
            type="text"
            name="name"
            handleChange={handleChange}
            value={data.name}
            error={errors.name}
            touched={touched.name}
          />
          <TextField
            label="Фамилия"
            type="text"
            name="surname"
            handleChange={handleChange}
            value={data.surname}
            error={errors.surname}
            touched={touched.surname}
          />
          <TextField
            label="Год рождения"
            type="number"
            name="yearOfBirthday"
            handleChange={handleChange}
            value={data.yearOfBirthday}
            error={errors.yearOfBirthday}
            touched={touched.yearOfBirthday}
          />
          <TextField
            label="Портфолио"
            type="text"
            name="link"
            handleChange={handleChange}
            value={data.link}
            error={errors.link}
            touched={touched.link}
          />

          <button type="submit" className="btn btn-primary" disabled={!isValid}>
            Создать
          </button>
        </form>
      </div>
    </LayoutCardPage>
  );
};

export default CreatePage;
