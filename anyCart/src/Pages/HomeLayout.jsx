import React from "react";
import { Outlet } from "react-router-dom";
import NavContainer from "../Components/NavContainer";

function HomeLayout() {
  return (
    <>
      <NavContainer></NavContainer>

      <section className="page-center">
        <Outlet />
      </section>
    </>
  );
}

export default HomeLayout;
