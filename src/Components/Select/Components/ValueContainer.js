export const ValueContainer = ({label, placeholder, value, toggleOpen}) => {
    return <div onClick={toggleOpen}>
        <span>{label}</span>
        <span>{value || placeholder}</span>
    </div>
}