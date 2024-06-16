export default function PrimaryButton({
    type = "submit",
    className = "",
    disabled,
    processing,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            type={type}
            className={`rounded-2xl bg-alerange py-[13px] text-center ${
                processing ? "opacity-30" : ""
            } ${className}`}
            disabled={disabled || processing}
        >
            {children}
        </button>
    );
}
