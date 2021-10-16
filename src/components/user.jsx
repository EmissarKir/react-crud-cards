import React from "react";
import { getAge } from "../utils/getAge";

const User = ({ item, onEditUser }) => {
  return (
    <div className="card mb-2">
      <div className="card-body px-5">
        <div className="row justify-content-between align-items-baseline">
          <div className="col-12 col-md-6">
            {" "}
            <h5 className="card-title">
              {item.name} {item.surname} {getAge(item.yearOfBirthday)}
            </h5>
          </div>
          <div className="col-12 col-md-6">
            {" "}
            <h6 className="card-subtitle text-muted">
              Год рождения: {item.yearOfBirthday}
            </h6>
          </div>
        </div>
        <div className="row justify-content-between align-items-center">
          <div className="col-12 col-md-6">
            <a
              className="btn btn-outline-info"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Перейти к Портфолио
            </a>
          </div>
          <div className="col-12 col-md-6">
            <button
              className="btn btn-primary"
              onClick={() => onEditUser(item)}
            >
              Изменить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
