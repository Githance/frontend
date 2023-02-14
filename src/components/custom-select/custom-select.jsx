/* eslint-disable import/prefer-default-export */
import Select from "react-select";
import styled from "styled-components";

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      height: "46px",
      color: "var(--text-color-black)",
      border: "1px solid black",
     
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: "pointer",
border: state.isSelected
? "1px solid var(--text-color-black)"
: "transperent",
    
    }),
    input: (styles) => ({ ...styles, color: 'red' }),
  
  },
})`
  width: 240px;
  border-radius: 10px;
  color: var(--text-color-black);
 

  & > * {
    
  }
  & input {
    padding-left: 0.25rem;
  }
  & * {
    color: var(--text-color-black) !important;
  }
  & > div[id] {
    
  }
`;
 