import React, { useState } from "react";
import FormSelect from "./FormSelect";
import { Form, Link, useLoaderData } from "react-router-dom";
import FormInput from "./FormInput";
import FormCheckbox from "./FormCheckbox";
import FormRange from "./FormRange";

function FiltersContainer() {
  const { meta, params } = useLoaderData();
  const { search, company, category, order, shipping, price } = params;

  // handleCheckbox
  function handleCheckbox() {
    setIsTrue((prev) => !prev);
  }

  return (
    <div className="filters-container">
      <Form>
        {/* SEARCH */}
        <FormInput
          name={"search"}
          type={"search"}
          label={"search products"}
          defaultValue={search}
        />

        {/* CATEGORY */}
        <FormSelect
          name={"category"}
          label={"category"}
          list={meta.categories}
          defaultValue={category}
        />

        {/* COMPANY */}
        <FormSelect
          name={"company"}
          label={"company"}
          list={meta.companies}
          defaultValue={company}
        />

        {/* ORDER */}
        <FormSelect
          name={"order"}
          label={"sort by"}
          list={["a-z", "z-a", "high", "low"]}
          defaultValue={order}
        />

        {/* SHIPPING */}
        <FormCheckbox
          name={"shipping"}
          label={"free shipping"}
          defaultValue={shipping}
        />

        {/* PRICE RANGE */}
        <FormRange label={"price"} name={"price"} defaultValue={price} />

        {/* SUBMIT BTN */}
        <button type="submit" className="btn search-btn">
          search
        </button>

        {/* RESET LINK */}
        <Link to="/products">
          <button className="btn reset-btn">reset</button>
        </Link>
      </Form>
    </div>
  );
}

export default FiltersContainer;
