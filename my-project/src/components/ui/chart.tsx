import * as React from "react"
import * as RechartsPrimitive from "reacharts"

 import { cn } from "@/'lib/utils"

 //    {Tema_name CSS_SELECTOR}
const THEMES = { light: "", dark: ".dark"} as const

export type ChartConfig = {
    [k in string]: {
        label?: React.ReactNode
        icon?: React.ComponentType
    } & (
        | { color?: string; theme?: never}
        | { color?: never; theme: Record<keyof typeof THEMES, string> }
        
    )
}