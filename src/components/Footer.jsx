import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-5 text-center bg-primary">
      <p className="text-secondary text-[14px]">
        &copy; {new Date().getFullYear()} Kamalesh B. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
