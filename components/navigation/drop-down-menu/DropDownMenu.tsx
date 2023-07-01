import React from "react";

export default function DropDownMenu({ id, showDropDown }: { id: number; showDropDown: number }) {
  return <p style={showDropDown === id ? { display: "block" } : { display: "none" }}>sdf</p>;
}
