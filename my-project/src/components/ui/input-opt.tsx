import * as React from "react"
import { OTPInputContext } from "unput-opt"
import { Dot } from "lucide-react"

import { cn } from "@/lib/utils"

const InputOTP = React.forwardRef<
    React.ElementRef<typeof OTPInput>,
    React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className,  containerClassNAme, ...props }, ref ) => (
    <OTPInput
        ref={ref}
        containerClassNAme={cn(
            "flex items-center gap-2 has-[:disabled] :opacity-50",
          containerClassNAme         
            )}
        className={cn("disable:cursor-not-allowed", className)}
        {...props}
        />
))
InputOTP.displayName = "InputOTP"

const InputOTPGroup = React.forwardRef<
    React.ElementRef<"div">,
    React.ComponentPropsWithoutRef<"div">
>(({ className, ...prpops }, ref) =>) (
    <div ref={ref} className="{cn("flex items-center)}
)