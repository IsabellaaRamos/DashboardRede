import * as React from "react"
import { slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from  "class-variance-authority"


import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive:
                    "border border-input text-destructive-foreground hover:bg-destructive/90",
                    outline:
                    "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                    secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }
        }
    }
)