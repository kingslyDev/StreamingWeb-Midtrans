export default function PrimaryButton({
    type = "submit",
    className = "",
    variant = "primary",
    disabled,
    processing,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                "rounded-2xl bg-alerange py-[13px] text-center" +
                (processing ? "opacity-30" : "") +
                `btn-{variant}` +
                className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
