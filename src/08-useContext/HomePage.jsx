import { useContext } from "react";
import { UserContext } from "./context/UserContext";

const HomePage = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <h1>
        HomePage <small aria-label="spanElement">{user?.name}</small>{" "}
      </h1>
      <hr />

      <pre aria-label="preElement">{JSON.stringify(user, null, 3)}</pre>
    </>
  );
};

export default HomePage;
