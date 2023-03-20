/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Select from 'react-select';
import './custom-select.css';

export default function CustomSelect({ ...props }) {
  const { isClearable, isSeacheble, options, placeholder } = props;
  return (
    <Select
      isClearable={isClearable}
      isSeacheble={isSeacheble}
      options={options}
      placeholder={placeholder}
      classNamePrefix="react-select"
      className="react-select-container"
    />
  );
}
