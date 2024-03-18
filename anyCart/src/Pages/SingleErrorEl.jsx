import React from "react";
import { useRouteError } from "react-router-dom";

function SingleErrorEl() {
  const err = useRouteError();

  return (
    <div>
      <h2>{err.message}!!</h2>
    </div>
  );
}

export default SingleErrorEl;
