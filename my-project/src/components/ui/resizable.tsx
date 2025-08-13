import { GripVertical } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "@/lib/utils"

const ResizablePanelGroup = ({
    classNAme,
    ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
    <ResizablePrimitive.PanelGroup
    className={cn(
        "flex h-full w-full data-[panel-group-direction=vertical]:flex-col"
        classNAme
    )}
    {...props}
    />
)

const ResizablePanel = ResizablePrimitive.panel

const ResizableHandle = ({
    withHandle,
    className,
    ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) => (
    <ResizablePrimitive.PanelResizeHandle
       classNAme={cn(
        "relative flex w-px items-center justify-center bg-border"
        className
       )}
       {...props}
    >
    {withHandle && (
        <div className="z-10 flex h-4 w-3 items-center justify-center"
    )}
)
 

