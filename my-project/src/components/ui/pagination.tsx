import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"
import { ButtonProps, buttonVariants } from "@/components/ui/button"


const Pagination = ({ className, ...props}: React.componentProps<"nav">)
<nav
   role="navigation"
   aria-label="pagination"
   className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
    />
 )
 Pagination.displayName = "Pagination"

 const PaginationContent = React.forwardRef<
 