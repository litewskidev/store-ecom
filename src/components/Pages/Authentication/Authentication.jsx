import { useState } from "react";
import Register from "../../Elements/Register/Register";
import Login from "../../Elements/Login/Login";

const Authentication = ({ handleBtn }) => {
  const [registerPage, setRegisterPage] = useState(false);

  return(
    <section id="authentication">
      <div className="test">
      {registerPage ? (
        <Register />
      ) : (
        <Login />
      )}

      </div>
    </section>
  );
};

export default Authentication;
