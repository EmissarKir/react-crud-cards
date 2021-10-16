import React from "react";
import User from "./user";

const UsersList = ({ data, onDeleteList, onEditUser }) => {
  return (
    <>
      <h1 className="text-center">Список студентов</h1>
      <button className="btn btn-outline-primary" onClick={onDeleteList}>
        Очистить список
      </button>
      <div className="list-group">
        {data.map((item) => (
          <div key={item._id}>
            <User item={item} onEditUser={onEditUser} />
          </div>
        ))}
      </div>
    </>
  );
};

export default UsersList;
