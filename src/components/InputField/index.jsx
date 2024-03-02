import { useState } from 'react';

const InputField = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <>
      <input
        className="bg-transparent py-2 border-0 border-b-2 border-white w-full pl-2 outline-none text-white"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span className="text-red-600 ml-2 hidden">{errorMessage}</span>
    </>
  );
};

export default InputField;
