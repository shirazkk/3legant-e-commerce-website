import { FC } from "react";

interface ButtonProps {
  text: string;
}

const Button: FC<ButtonProps> = ({ text }) => {
  return (
    <div className="w-[80%]">
      <button className="hover:hover:bg-gray-700 w-full bg-black py-4 rounded-lg text-xl text-white">
        {text}
      </button>
    </div>
  );
};

export default Button;
