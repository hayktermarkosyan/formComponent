export const MenuList = ({ options, renderOption, onSelect }) => {
  return (
    // here can be an infinity loading container
    <ul>
      {options.map((option) => {
        return (
          <li onClick={() => onSelect(option)} key={option.id}>
            {renderOption(option)}
          </li>
        );
      })}
    </ul>
  );
};
