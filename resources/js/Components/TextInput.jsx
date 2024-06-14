import { forwardRef, useEffect, useRef } from "react";

const TextInput = forwardRef(function TextInput(
    {
        type = "text",
        name,
        value,
        defaultValue,
        autoComplete,
        required,
        className = "",
        variant = "primary",
        isFocused = true,
        handleChange,
        placeholder,
        isError,
        ...props
    },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused && input.current) {
            input.current.focus();
        }
    }, [isFocused]);

    return (
        <input
            {...props}
            type={type}
            name={name}
            value={value}
            autoComplete={autoComplete}
            required={required}
            className={
                "rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none" +
                className
            }
            ref={input}
            onChange={handleChange} // Tambahkan handleChange di sini
            placeholder={placeholder}
        />
    );
});

export default TextInput;
