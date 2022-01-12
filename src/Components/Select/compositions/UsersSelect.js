import { Select } from "../Select";

const users = [
  {
    id: "18622bfb-55c0-4fca-81d9-d9ab2008dcf9",
    fullName: "Jon Lakin",
  },
  {
    id: "b5c38588-c425-43d6-9ce1-b42a6fc956d1",
    fullName: "Rhiannon Daniel",
  },
  {
    id: "870a3f68-5df9-40ce-a90c-60a4ecd5a791",
    fullName: "Kristy Harber",
  },
  {
    id: "02a838d0-ae04-495d-b693-28fca5c464d8",
    fullName: "Giles Balistreri",
  },
  {
    id: "f8f86a91-a0a2-418e-a8d5-5ae9c3c81c94",
    fullName: "Jamey Hermann",
  },
];

export const UsersSelect = ({onSelect}) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [value, setValue] = useState(null);

  return (
    <div onClick={() => setMenuIsOpen((prevMenuIsOpen) => !prevMenuIsOpen)}>
      <Select
        value={value}
        renderValue={(option) => (
         // https://reactjs.org/docs/render-props.html
          <div style={{ background: "yellow" }}>
            fullName: {option.fullName}
          </div>
        )}
        options={users}
        renderOption={(option) => (
          // https://reactjs.org/docs/render-props.html
          <div style={{ background: "red" }}>{option.fullName}</div>
        )}
        menuIsOpen={menuIsOpen}
        munuHeader={<h3>I am a menu header</h3>}
        munuFooter={<h3>I am a menu Footer</h3>}
        label={"Label"}
        placehilder={"Placeholder"}
        onSelect={(selectedValue) => {
            setValue(selectedValue)
            onSelect(selectedValue)
        }}
      />
    </div>
  );
};
