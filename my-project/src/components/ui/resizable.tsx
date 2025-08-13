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
}: React.ComponentProps<typeof ResizablePrimitive.
