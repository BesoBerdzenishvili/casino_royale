import { useState, useEffect } from "react";
import { MenuItem, Select, type SelectChangeEvent } from "@mui/material";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

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
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "en");

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const newLang = event.target.value as string;
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    //  add flag
    <LangSelectorContainer>
      <StyledSelect value={language} onChange={handleChange} displayEmpty>
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="ru">Русский</MenuItem>
        <MenuItem value="ka">ქართული</MenuItem>
      </StyledSelect>
    </LangSelectorContainer>
  );
};

export default LangSelector;
