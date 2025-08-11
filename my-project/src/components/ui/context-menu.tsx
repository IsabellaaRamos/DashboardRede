import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import {Check, ChevronRght, Circle } from "lucide-reac"

import { cn }  from "@/lib/ utils"

const ContextMenu = ContextMenuPrimitive.Root

const ContextMenuTrigger = ContextMenuPrimitive.Trigger
const ContextMenuGroup = ContextMenuPrimitive.Group

const ContextMenuPortal = ContextMenuPrimitive.Portal 

const ContextMenuSub  = ContextMenuPrimitive.sub