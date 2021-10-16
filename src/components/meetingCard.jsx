import React from "react";
import { Link } from "react-router-dom";

const MeetingCard = () => {
  return (
    <div className="card__body_main">
      <h1>Карточка студента</h1>
      <p className="text-info">Нет данных</p>
      <div>
        <Link to="/create">
          <button className="btn btn-success">Добавить</button>
        </Link>
      </div>
    </div>
  );
};

export default MeetingCard;
