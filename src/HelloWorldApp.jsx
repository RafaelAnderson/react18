import { Fragment } from "react";
import PropTypes from "prop-types";
import { Title } from "./components/Title";
import { UserDetails } from "./components/UserDetails";
import { Book } from "./components/Book";

export const HelloWorldApp = ({ user, id, title, book }) => {
  //const name = "Rafael";

  return (
    <Fragment>
      <Title title={title} />
      {JSON.stringify(user)}
      <UserDetails user={user} id={id} />
      <Book book={book} />
    </Fragment>
  );
};

HelloWorldApp.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
};
