import * React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

const ScrollArea = React.forwardRef<
   React.ElementRef<typeof ScrollAreaPrimitive.Root>,
   React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props  }, ref) =>(
    <ScrollAreaPrimitive.Root
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      {...props}
      >
        <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
            {children}
        </ScrollAreaPrimitive.Viewport>
        <ScrollBar />
        <ScrollAreaPrimitive.Coner />

      </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React. forwardRef<
     React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = vertical}, ref) => (
    {...props}
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName
  
const ScrollBar = React.forwardRef<
     React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
     (({ className, children, ...props }, ref) =>)(
        
     )


  
