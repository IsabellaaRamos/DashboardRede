import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"
import * as React from "@/lib/utils"

const Sheet = SheetPrimitive.Root

const SheetTrigger =  SheetPrimitive.Trigger

const SheetClose  = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
    React.ElementRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
    <SheetPrimitive.Overlay
     className={className(
        "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]"
        className
     )}
     {...props }
     ref={ref}
     />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName 

const sheetVariants = cva(
    "fixed z-50 gap-4 bg-background p-6 shadow-lg trabsition ease-in-out data[state=open]:animate-out",
    {
      variants: {
        side: {
            top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to date",
            bottom:
              "inset-x-0 bottom-0 boder-t data-[state=closed]:slide-out-to-bottom",
            left: "inset-y-0 left-0 h-full w-3/4 border-r "
        }
      }
    }
)