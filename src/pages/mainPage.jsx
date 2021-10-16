import React, { useEffect, useState } from "react";
import LayoutCardPage from "../components/layoutCardPage/layoutCardPage";
import MeetingCard from "../components/meetingCard";
import UsersList from "../components/usersList";
import EditPage from "./editPage";

const MainPage = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const [editing, setEditing] = useState(false);

  const handleDeleteList = () => {
    if (
      window.confirm(
        "Вы действительно хотите удалить все данные с LocalStorage?"
      )
    ) {
      localStorage.clear();
      setUsers([]);
    }
  };

  useEffect(() => {
    const keys = Object.keys(localStorage);
    let users = [];
    for (let _id of keys) {
      let newValue = JSON.parse(`${localStorage.getItem(_id)}`);
      users.push({ ...newValue, _id });
    }
    setUsers(users);
  }, [editing]);

  const handleEditUser = (id) => {
    setCurrentUser(id);
    setEditing(true);
  };
  console.log("editing", editing);
  console.log("currentUser", currentUser);

  return (
    <LayoutCardPage>
      {users.length > 0 ? (
        !editing ? (
          <UsersList
            data={users}
            onDeleteList={handleDeleteList}
            onEditUser={handleEditUser}
          />
        ) : (
          <EditPage setEditing={setEditing} currentUser={currentUser} />
        )
      ) : (
        <MeetingCard />
      )}
    </LayoutCardPage>
  );
};

export default MainPage;
