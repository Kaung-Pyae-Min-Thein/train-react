import React from "react";

const Employee = (props) => {
  console.log(props);
  const { fname, lastname, age } = props;
  return (
    <>
      <h1>{`Welcome ${fname} ${lastname}. Your age is: ${age}`}</h1>
    </>
  );
};

export { Employee };