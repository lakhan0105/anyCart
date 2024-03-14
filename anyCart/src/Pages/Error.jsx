import React from "react";
import { Link, useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError();
  console.log(err);

  if (err.status === 404) {
    return (
      <section className="error-section">
        <div className="error-container">
          <h3>404 Error</h3>
          <p>Page not found</p>
          <Link to="/">
            <button className="btn">go back home</button>
          </Link>
        </div>
      </section>
    );
  }

  return <div>Error</div>;
}

export default Error;
