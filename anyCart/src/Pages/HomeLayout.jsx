import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import NavContainer from "../Components/NavContainer";

function HomeLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      <NavContainer></NavContainer>

      {isLoading ? (
        <section className="page-center">
          <h2 style={{ textAlign: "center" }}>Loading..</h2>
        </section>
      ) : (
        <section className="page-center">
          <Outlet />
        </section>
      )}
    </>
  );
}

export default HomeLayout;
