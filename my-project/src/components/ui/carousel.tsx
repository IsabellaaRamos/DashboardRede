import * as React from "react"
import useEmblaCarousel, {
    type EmblaCarouselType,
} from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"


type CarouselApi = useEmblaCarousel[1]
type UseCArouselPametrs = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCArouselPametrs[0]
type CarouselPlugin = UseCArouselPametrs[1]

type CarouselProps = {
    opts?: CarouselOptions
    plugins?: CarouselPlugin
    orientation?: "horizontal" | "vertical"
    setApi?: (api: CarouselApi) => void

}