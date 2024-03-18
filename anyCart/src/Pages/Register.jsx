import React from "react";
import { FormInput } from "../Components";
import { Form, redirect } from "react-router-dom";
import custFetch from "../utilities/custFetch";

// Action to register the user
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const resp = await custFetch.post("/auth/local/register", data);
    return redirect("/login");
  } catch (error) {
    alert(error.response.data.error.message || "please check the credentials");
    return null;
  }
};

function Register() {
  return (
    <div className="register">
      <Form className="register-form" method="POST">
        {/* USERNAME */}
        <FormInput
          label={"username"}
          type={"text"}
          name={"username"}
          //   defaultValue={"testuser"}
        />

        {/* EMAIL */}
        <FormInput
          label={"email"}
          type={"email"}
          name={"email"}
          //   defaultValue={"test@test.com"}
        />

        {/* PASSWORD */}
        <FormInput
          label={"password"}
          type={"password"}
          name={"password"}
          defaultValue={"secret"}
        />

        <button className="btn hero-btn" type="submit">
          Register
        </button>
      </Form>
    </div>
  );
}

export default Register;
