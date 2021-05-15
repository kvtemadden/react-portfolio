import React from "react";

export function Header(props) {

  return (
<>
  <h1 className="header">{props.page}</h1>
<div className="custom-shape-divider-top-1621079711">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" className="shape-fill"></path>
    </svg>
</div>
</>
);
}

export default Header;