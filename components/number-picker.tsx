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
        <div className="flex flex-row justify-center border-2 rounded-md p-3 space-x-2 shadow-sm">
            <div className="text-6xl mt-4 ml-3 font-mono col-span-2 text-right w-[2ch] pl-4">
                {value}
            </div>
            <div className="grid grid-rows-2 space-y-[1px] pr-4">
                <Button
                    className=""
                    disabled={disabled[0]}
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
                    <ArrowUp />
                </Button>
                <Button
                    disabled={disabled[1]}
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
                    variant="link"><ArrowDown />
                </Button>
            </div>
        </div>
    )
}