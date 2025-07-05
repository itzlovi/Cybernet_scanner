import React, { forwardRef } from "react";

const Input = forwardRef(({ className = "", type = "text", ...props }, ref) => {
    const baseClass =
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm";

    return (
        <input
            type={type}
            className={baseClass + " " + className}
            ref={ref}
            {...props}
        />
    );
});

Input.displayName = "Input";

export default Input;
