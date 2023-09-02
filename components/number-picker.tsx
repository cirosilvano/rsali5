import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";


interface NumberPickerProps {
    numberList: number[],
    value: number,
    setValue: (value: number) => void
    disablePickers: boolean
}

export default function NumberPicker(
    { numberList, value, setValue, disablePickers }: NumberPickerProps
) {

    let [disabled, setDisabled] = useState([false, false])

    return (
        <div className="flex items-center justify-around py-2 px-2 rounded-md border-2 shadow-sm">
            <div className="text-6xl w-[2ch] text-right">
                {value}
            </div>
            <div className="grid grid-cols-1">
                <Button
                    disabled={disablePickers || disabled[0]}
                    onClick={() => {
                        if (disabled[0]) return
                            let nextIndex = numberList.indexOf(value) + 1
                            setValue(numberList[nextIndex])
                            if (nextIndex + 1 >= numberList.length) {
                                setDisabled([true, disabled[1]])
                                return
                            }
                            setDisabled([disabled[0], false])
                        }
                    }
                    variant="link"
                >
                    <ChevronUp />
                </Button>
                <Button
                    disabled={disablePickers || disabled[1]}
                    onClick={() => {
                        if(disabled[1]) return
                        let nextIndex = numberList.indexOf(value) - 1
                        setValue(numberList[nextIndex])
                        if (nextIndex - 1 < 0) {
                            setDisabled([disabled[0], true])
                            return
                        }
                        setDisabled([false, disabled[1]])
                    }}
                    variant="link"><ChevronDown />
                </Button>
            </div>
        </div>
    )
}