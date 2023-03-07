import { useState, useRef, useEffect, useCallback } from "react";
import { DropdownPropsTypes, OptionType } from "../types";

const useDropdown = ({
  options,
  onSelect,
  updateOptions,
}: DropdownPropsTypes) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<OptionType>();
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
          if (isOpen) {
            setHighlightedIndex((prev) =>
              prev === 0 ? options.length - 1 : prev - 1
            );
          }
          break;
        case "ArrowDown":
          if (isOpen) {
            setHighlightedIndex((prev) =>
              prev === options.length - 1 ? 0 : prev + 1
            );
          }
          break;
        case "Enter":
          // when user has wroten something in input and wants to add it in options .
          if (
            !options.includes(inputValue) &&
            inputValue?.length &&
            updateOptions
          ) {
            updateOptions(inputValue);
            onSelect(inputValue);
            setSelectedValue(inputValue);
            setInputValue(inputValue);
            setIsOpen(true);
            return;
          }
          // when user hasn't wroten anything in input and wants to select one of available options .
          if (isOpen) {
            onSelect(options[highlightedIndex]);
            setSelectedValue(options[highlightedIndex]);
            setInputValue(options[highlightedIndex]);
            setIsOpen(false);
          }
          break;
        default:
          break;
      }
    },
    [isOpen, inputValue, options, updateOptions, onSelect, highlightedIndex]
  );

  const handleItemClick = useCallback(
    (option: OptionType) => {
      onSelect(option);
      setSelectedValue(option);
      setInputValue(option);
      setIsOpen(false);
    },
    [onSelect]
  );

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    },
    [containerRef]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClickOutside, handleKeyDown]);

  return {
    isOpen,
    setIsOpen,
    highlightedIndex,
    setHighlightedIndex,
    containerRef,
    handleItemClick,
    selectedValue,
    setInputValue,
    inputValue,
  };
};

export default useDropdown;
