import React, { useCallback, useState } from "react";
import useDropdown from "./hooks/useDropdown";
import useStyles from "./hooks/useStyles";
import { OptionType, DropdownPropsTypes } from "./types";
import Option from "./utilities/option";
import Input from "./utilities/input";

function Dropdown({ options, onSelect }: DropdownPropsTypes) {
  const classes = useStyles();
  const [localOptions, setLocalOptions] = useState<OptionType[]>(() => options);

  const updateOptions = useCallback(
    (value: OptionType) => {
      const updatedOptions = [...localOptions];
      updatedOptions.unshift(value);
      setLocalOptions(updatedOptions);
    },
    [localOptions]
  );

  const {
    isOpen,
    setIsOpen,
    highlightedIndex,
    containerRef,
    handleItemClick,
    selectedValue,
    inputValue,
    setInputValue,
  } = useDropdown({
    options: localOptions,
    onSelect,
    updateOptions,
  });

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={classes.container} ref={containerRef}>
      <Input
        handleClick={toggleDropdown}
        handleChange={handleInputChange}
        value={inputValue}
        isOpen={isOpen}
      />
      {isOpen && (
        <ul className={classes.dropdown}>
          {localOptions.map((option: OptionType, index: number) => {
            return (
              <Option
                highlightedIndex={highlightedIndex}
                handleClick={handleItemClick}
                selectedValue={selectedValue}
                index={index}
                option={option}
                key={option}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
