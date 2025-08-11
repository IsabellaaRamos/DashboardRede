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

type CarouselContexProps = {
    carousel: Returntype<typeof useEmblaCarousel>[0]
    api: Returntype<typeof useEmblaCarousel>[1]
    scrollPrev: () => void 
    scrollPrev: () => void
    canScrollPrev: boolean
    canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
    const context = React.useContext(CarouselContext)

    if (!context) {
        throw new Error("useCarousel must be used within a CarouselProvider")
    }

    return context
}