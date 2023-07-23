export const InputEmailHelper = (props) => {
  return (
    <input
      className={`rounded-lg focus:outline-none focus:ring-0 focus:border-cstColor-100 ${
        props.className ? props.className : ""
      }`}
      type="email"
      name="email"
      id={`${props.id ? props.id : ""}`}
      placeholder="Enter your email"
    />
  );
};

export const InputPasswordHelper = (props) => {
  return (
    <input
      className={`rounded-lg focus:outline-none focus:ring-0 focus:border-cstColor-100 ${
        props.className ? props.className : ""
      }`}
      type="password"
      name="password"
      id={`${props.id ? props.id : ""}`}
      placeholder="Enter your password"
    />
  );
};

export const InputTextHelper = (props) => {
  return (
    <input
      className={`rounded-lg focus:outline-none focus:ring-0 focus:border-cstColor-100 ${
        props.className ? props.className : ""
      }`}
      type="text"
      name="text"
      id={`${props.id ? props.id : ""}`}
      placeholder={props.placeholder}
    />
  );
};
