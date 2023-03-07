import useStyles from "../hooks/useStyles";

function Input({
  handleClick,
  value,
  handleChange,
  isOpen,
}: {
  handleClick: () => void;
  handleChange: (value: React.FormEvent<HTMLInputElement>) => void;
  value: string;
  isOpen: boolean;
}) {
  const classes = useStyles();

  return (
    <div className={classes.inputContainer} onClick={handleClick}>
      <input className={classes.input} value={value} onChange={handleChange} />
      <img
        src="/icons/flesh.png"
        width={16}
        height={16}
        className={isOpen ? classes.rotate180 : ""}
      />
    </div>
  );
}

export default Input;
