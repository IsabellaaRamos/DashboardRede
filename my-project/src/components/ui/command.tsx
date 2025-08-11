import * as React from "react"
import { type DialogProps } from "@radix-ui/react-dialog"
import { Command as CommandPrimitive  } from "cmdk"
import { Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive> 
>(({ className, ...Props}, ref) =>  (
    <CommandPrimitive
        ref={ref}
        className={cn (
            "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover",
             className
        )}
        {...props}
        />

))
Command.displayName = CommandPrimitive.displayName
  
interface  CommandDialogProps extends DialogProps {}

const CommandDialogProps = ({ children, ...props}: CommandDialogProps) => {
    return (
        <Dialog {...props}>
          <DialogContent className="overflow-hidden p-0 shadow-lg">
            <Command>
                {children}
              </Commando>
            </DialogContent>
          </Dialog>   
    )
  } 

  const CommandInput = React.forwardRef<
  React.ComponentPropsWithRef<typeof CommandPrimitive.input>
  >(({ className, ...props }, ref ) => (
    <div className="flex iems-center border-b px-3 cmdk-input">
      <CommandPrimitive.input
           ref={ref}
           className={cn(
            "flex h-11 w-full rounded-md">
            className
           )}
           {...props}
           />
    </div>
  ))

  CommandInput.displayName = <CommandPrimitive.Input className="displayName"></CommandPrimitive.Input>




    
    
}