import { useState, useEffect } from "react";
import { MenuItem, Select, type SelectChangeEvent } from "@mui/material";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import en from "../assets/en.png";
import ge from "../assets/ge.png";
import ru from "../assets/ru.png";

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

const FlagWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid white;
  overflow: hidden;
  margin-right: 12px;
  flex-shrink: 0;
`;

const Flag = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LangSelector = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "en");

  const langMap: Record<string, { flag: string; name: string }> = {
    en: { flag: en, name: "English" },
    ru: { flag: ru, name: "Русский" },
    ka: { flag: ge, name: "ქართული" },
  };

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const newLang = event.target.value as string;
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <LangSelectorContainer>
      <StyledSelect
        value={language}
        onChange={handleChange}
        renderValue={(value) => (
          <div style={{ display: "flex", alignItems: "center" }}>
            <FlagWrapper>
              <Flag src={langMap[value as string].flag} alt="" />
            </FlagWrapper>
            {langMap[value as string].name}
          </div>
        )}
      >
        {Object.entries(langMap).map(([code, { flag, name }]) => (
          <MenuItem key={code} value={code}>
            <FlagWrapper>
              <Flag src={flag} alt="" />
            </FlagWrapper>
            {name}
          </MenuItem>
        ))}
      </StyledSelect>
    </LangSelectorContainer>
  );
};

export default LangSelector;
