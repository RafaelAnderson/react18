import { Fragment } from "react";
import PropTypes from "prop-types";

export const HelloWorld = ({ user, id, title }) => {
  console.log(title);
  //const name = "Rafael";

  return (
    <Fragment>
      <h1>{title}</h1>
      {JSON.stringify(user)}
      <div>
        que tal! {user.name} {user.lastName} con el id {id}
      </div>
    </Fragment>
  );
};

HelloWorld.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
};
