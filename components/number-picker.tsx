import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useState } from "react";


interface NumberPickerProps {
    numberList: number[],
    value: number,
    setValue: (value: number) => void
}

export default function NumberPicker(
    { numberList, value, setValue }: NumberPickerProps
) {

    let [disabled, setDisabled] = useState([false, false])

    return (
        <div className="grid grid-cols-3 w-48 border-2 rounded-md px-5 py-3 w-auto space-x-2 shadow-sm">
            <div className="text-[70px] mt-7 font-mono col-span-2 text-right mr-2">
                {value}
            </div>
            <div className="grid grid-rows-2 space-y-[1px]">
                <Button
                    disabled={disabled[0]}
                    onClick={() => {
                        let nextIndex = numberList.indexOf(value) + 1
                        setValue(numberList[nextIndex])
                        if (nextIndex+1 >= numberList.length) {
                            setDisabled([true, disabled[1]])
                            return
                        }
                        setDisabled([disabled[0], false])
                    }}
                    variant="link"
                    >
                        <ArrowUp/>
                    </Button>
                <Button
                    disabled={disabled[1]}
                    onClick={() => {
                        let nextIndex = numberList.indexOf(value) - 1
                        setValue(numberList[nextIndex])
                        if (nextIndex-1 < 0) {
                            setDisabled([disabled[0], true])
                            return
                        }
                        setDisabled([false, disabled[1]])
                    }}
                    variant="link"><ArrowDown /></Button>
            </div>
        </div>
    )
}