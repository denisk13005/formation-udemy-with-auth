import React from "react";
import { ProtectedRoutes } from "../auth/protectedRoutes";

const Profile = () => {
  return (
    <>
      <div>profile</div> ;<div>test</div>
    </>
  );
};

export default ProtectedRoutes(Profile);
