import { useState } from "react";
import { MenuItem, Select } from "@mui/material";
import styled from "styled-components";

const LangSelectorContainer = styled.div`
  width: 100%;
  max-width: 289px;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--white-white-10, #ffffff1a);
  background: var(--white-white-10, #ffffff1a);
  backdrop-filter: blur(10px);
  opacity: 1;
  transform: rotate(0deg);
`;

const StyledSelect = styled(Select)`
  color: white;
  background: transparent;
  border: none;
  width: 289px;
  font-size: 16px;

  .MuiSelect-icon {
    color: white;
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  &:hover .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border: none;
  }
`;

const LangSelector = () => {
  const [language, setLanguage] = useState("English");

  // replace any
  const handleChange = (event: any) => {
    setLanguage(event.target.value as string);
  };

  return (
    // add flag
    <LangSelectorContainer>
      <StyledSelect value={language} onChange={handleChange} displayEmpty>
        <MenuItem value="English">English</MenuItem>
        <MenuItem value="Russian">Russian</MenuItem>
        <MenuItem value="Georgian">Georgian</MenuItem>
      </StyledSelect>
    </LangSelectorContainer>
  );
};

export default LangSelector;
