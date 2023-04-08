import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Map from "../components/map/map";
const GETUSER = gql`
  query User($userId: ID) {
    user(id: $userId) {
      name
    }
  }
`;

const ME = gql`
  query Query {
    me {
      id
      created_at
      updated_at
      name
      email
      email_verified_at
      rememberToken
    }
  }
`;
import { setActive } from "../store/modalSlice";
const MainPage = () => {
  const dispatch = useDispatch();
  const { data } = useQuery(ME);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div>
      <button
        onClick={() => {
          dispatch(setActive(true));
        }}
      >
        Создать модальное окно
      </button>
      <Map />
    </div>
  );
};

export default MainPage;
