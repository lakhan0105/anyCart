import React from "react";
import { FormInput } from "../Components";
import { Form, NavLink, redirect } from "react-router-dom";
import custFetch from "../utilities/custFetch";
import { login } from "../features/user/userSlice";
import { useDispatch } from "react-redux";

// Action to login the user
export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const resp = await custFetch.post("/auth/local", data);
      store.dispatch(login(resp.data));
      alert("logged in!");
      return redirect("/");
    } catch (error) {
      alert(
        error?.response?.data?.error?.message || "Please check your credentials"
      );

      return null;
    }
  };

function Login() {
  const dispatch = useDispatch();

  return (
    <div className="login register">
      {/* LOGIN FORM */}
      <Form className="login-form register-form" method="post">
        {/* EMAIL */}
        <FormInput
          name={"identifier"}
          label={"email"}
          type={"email"}
          defaultValue={"test@test.com"}
        />

        {/* PASSWORD */}
        <FormInput
          name={"password"}
          label={"password"}
          type={"password"}
          defaultValue={"secret"}
        />

        {/* LOGIN BTN */}
        <button className="btn hero-btn">Login</button>
      </Form>
    </div>
  );
}

export default Login;
