import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const MenubarMenu = MenubarPrimitive.MenubarMenu
const MenubarGroup = MenubarPrimitive.Group 
const MenubarPortal =  MenubarPrimitive.Portal
const MenubarSub = MenubarPrimitive.Sub 

const MenubarRadioGroup = MenubarPrimitive.MenubarRadioGroup


const Menubar = React.forwardRef<
    React.ElementRef<typeof MenubarPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...Props }, ref) => (
    <MenubarPrimitive.Root
        ref={ref}
        className={cn(
            "flex h-10 items-center space-x-1 rounded-md border  bg-backg p-1"
            className
        )}
        {...props}
        />
)) 
Menubar.displayName = MenubarPrimitive.Root.displayName
