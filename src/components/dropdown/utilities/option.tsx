import useStyles from "../hooks/useStyles";
import { OptionType } from "../types";

function Option({
  option,
  handleClick,
  index,
  highlightedIndex,
  selectedValue,
}: {
  option: OptionType;
  handleClick: (option: OptionType) => void;
  index: number;
  highlightedIndex: number;
  selectedValue?: OptionType;
}) {
  const classes = useStyles();

  const isHighlightedItem = index === highlightedIndex;
  const isSelectedItem = option === selectedValue;

  let itemClassName = classes.listItem;
  if (isHighlightedItem) {
    itemClassName = classes.highlightedListItem;
  }
  if (isSelectedItem) {
    itemClassName = classes.selectedListItem;
  }

  return (
    <li className={itemClassName} onClick={() => handleClick(option)}>
      {option}
      {isSelectedItem && (
        <img src="/icons/check.png" width={25} height={25} alt="check" />
      )}
    </li>
  );
}
export default Option;
