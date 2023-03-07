export type OptionType = string;

export interface DropdownPropsTypes {
  options: OptionType[];
  onSelect: (option: OptionType) => void;
  updateOptions?: (value: string) => void;
}
