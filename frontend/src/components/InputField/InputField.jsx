// InputField.jsx
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import ReactTooltip from "react-tooltip";

const InputField = ({ label, name, value, onChange, placeholder, infoText }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-white mb-1 capitalize flex items-center">
        <span>{label}</span>
        {/* Info icon right next to label */}
        {infoText && (
          <>
            <AiOutlineInfoCircle
              data-tip
              data-for={`tooltip-${name}`}
              className="text-black-500 cursor-pointer ml-2"
            />
            <ReactTooltip id={`tooltip-${name}`} place="right" effect="solid">
              {infoText}
            </ReactTooltip>
          </>
        )}
      </label>
      <input
        type="number"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full h-16 px-5 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
};

export default InputField;