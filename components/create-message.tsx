import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import Latex from "react-latex-next"
import { CheckCircle } from "lucide-react"

interface CreateMessageProps {
    sliderValue: number,
    setSliderValue: (value: number) => void,
    sliderDisabled: boolean,
    setSliderDisabled: (value: boolean) => void
}

export default function CreateMessage(
    {
        sliderValue,
        setSliderValue,
        sliderDisabled,
        setSliderDisabled
    }: CreateMessageProps
) {
    return (
        <div>
            <h2 className="mt-10 text-3xl font-bold">
                1. The message to encrypt
            </h2>
            <p className="mt-6">
                Alright, let&apos;s be honest here. How long did it take for Alice to understand RSA encryption? Don&apos;t worry, only Bob will receive this information.
            </p>

            <div className="flex flex-col justify-center">
                <div className="text-8xl text-center pt-10">
                    <div className="text-lg"><Latex>$m=$</Latex></div>
                    {sliderValue / 10 + 2}
                    <div className="text-lg">(days)
                    </div>
                </div>

                <Slider
                    disabled={sliderDisabled}
                    className="pt-7 "
                    max={80}
                    step={10}
                    value={[sliderValue]}
                    onValueChange={([sliderValue]) => setSliderValue(sliderValue)}
                />


                <Button
                    asChild
                    className="text-2xl py-7 w-60 mt-10 mx-auto"
                    onClick={() => {
                        setSliderDisabled(true)

                    }}
                    variant={sliderDisabled ? "completed" : "default"}
                >
                    <a href="#prime-multiplication" className="text-center">
                        <div className="flex flex-row ml-1">
                            {sliderDisabled ?
                                <>
                                    Done
                                    <CheckCircle className="ml-2 mt-1" />
                                </>
                                : "Confirm"}
                        </div>
                    </a>
                </Button>
            </div>

            <div>
            </div>

        </div>
    )
}