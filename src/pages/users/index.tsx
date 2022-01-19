import React from "react";
import axios from "axios";
// Atoms
import TextComponent from "../../components/Atoms/TextComponent/TextComponent";
// Enums
import {
  TextVariant,
  typographyWeight,
} from "../../models/Enums/TypographyEnums";

interface UsersProps {
  users: any;
}

const blog = ({ users }: UsersProps) => {
  const UserComponent = users.map((user: any) => {
    return (
      <li key={user.id}>
        {user.name} - {user.email}
      </li>
    );
  });

  return (
    <div>
      <TextComponent
        text="Lista de usuarios"
        fontSize="48px"
        color="brown"
        weight={typographyWeight.bold}
        variant={TextVariant.h1}
      />
      <ul>{UserComponent}</ul>
    </div>
  );
};

export default blog;

export const getStaticProps = async () => {
  const { data: users } = await axios({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
  });

  return {
    props: {
      users,
    },
  };
};
