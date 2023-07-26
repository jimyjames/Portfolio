import React from "react";

const sizeClasses = {
  txtMuseo50040Black9007f: "font-museo font-normal",
  txtMuseo70036WhiteA700: "font-museo font-semibold",
  txtMuseo50080: "font-museo font-normal",
  txtMuseo50032: "font-museo font-normal",
  txtMuseo50020: "font-museo font-normal",
  txtMuseo50032Black90099: "font-museo font-normal",
  txtMuseo50040: "font-museo font-normal",
  txtMuseo70080Yellow700: "font-museo font-semibold",
  txtMuseo50048Lightblue500: "font-museo font-normal",
  txtMuseo70070: "font-museo font-semibold",
  txtMuseo70080: "font-museo font-semibold",
  txtMuseo50048WhiteA700: "font-museo font-normal",
  txtMuseo50080Lightblue500: "font-museo font-normal",
  txtMuseo70080Orange500: "font-museo font-semibold",
  txtMuseo70036: "font-museo font-semibold",
  txtMuseo50032Black9007f: "font-museo font-normal",
  txtMuseo70020: "font-museo font-semibold",
  txtMuseo70064: "font-museo font-semibold",
  txtMuseo50024: "font-museo font-normal",
  txtMuseo50013: "font-museo font-normal",
  txtMuseo50032Lightblue500: "font-museo font-normal",
  txtMuseo50048: "font-museo font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
