import * as React "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/Utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.SelectGroup

const SelectValue = SelectPrimitive.SelectValue

const SelectTrigger =  React.forwardRef<
   React.Element<typeof SelectPrimitive.Trigger>,
   React.ComponentPropsWithoutRef <typeof SelectPrimitive.Trigger>
>(({ className, children, ...props}, ref) => (
    <SelectPrimitive.Trigger
      ref={ref}
      ClassName={cn(
        "flex h-10 w-full items-center justify-between rounded-md border",
        className
      )}
      {...props}
      >
        {children}
      <SelectPrimitive.Icon as Child>
        <ChevronDown className="h-4 w-4 opacity-50 " />
      </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName 

const SelectScrollUpButton =React.forwardRef<
     React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
     
    