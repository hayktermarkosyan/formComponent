import { Menu } from "./Components/Menu";
import { MenuList } from "./Components/MenuList";
import { ValueContainer } from "./Components/ValueContainer";

export const Select = ({
  menuHeader,
  menuFooter,
  menuIsOpen,
  options,
  renderOption,
  renderValue = renderOption,
  placeholder,
  value,
  label,
  onSelect
}) => {
  return (
    <div className="select-container">
      <ValueContainer placeholder={placeholder} value={renderValue(value)} label={label} />
      {menuIsOpen && <Menu header={menuHeader} footer={menuFooter}>
        <MenuList options={options} renderOption={renderOption} onSelect={onSelect} />
      </Menu>}
    </div>
  );
};
