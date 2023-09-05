"use client"

import totient from "@/utils/totient";
import { AnimatePresence, PanInfo, useDragControls } from "framer-motion";
import Latex from "react-latex-next";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { GCD } from "@/utils/totient";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Minus, Plus } from "lucide-react";

interface TotientFunctionProps {
    p1: number;
    p2: number;
}

export default function TotientFunction(
    { p1, p2 }: TotientFunctionProps
) {

    let [selectedNumber, setSelectedNumber] = useState(1)

    let onDragEnd = (e: Event, info: PanInfo) => {
        let x_target = targetDropNumber?.current?.getBoundingClientRect().x
        let y_target = targetDropNumber?.current?.getBoundingClientRect().y

        if (x_target) x_target += window.scrollX
        if (y_target) y_target += window.scrollY

        const x_drag = info.point.x
        const y_drag = info.point.y

        console.log(x_target, y_target, x_drag, y_drag)

        if (x_target && y_target) {
            if (Math.abs(x_target - x_drag) < 100 && Math.abs(y_target - y_drag) < 70) {
                setNumberDropped(true)
                targetDropNumber?.current?.classList.remove("shadow-xl")
            }
        }
    }

    let onDrag = (e: Event, info: PanInfo) => {

        let x_target = targetDropNumber?.current?.getBoundingClientRect().x
        let y_target = targetDropNumber?.current?.getBoundingClientRect().y

        console.log(x_target, y_target)

        if (x_target) x_target += window.scrollX
        if (y_target) y_target += window.scrollY

        const x_drag = info.point.x
        const y_drag = info.point.y

        if (x_target && y_target) {
            if (Math.abs(x_target - x_drag) < 100 && Math.abs(y_target - y_drag) < 70) {

                targetDropNumber?.current?.classList.add("shadow-xl")
            } else {
                targetDropNumber?.current?.classList.remove("shadow-xl")
            }
        }
    }

    let [numberDropped, setNumberDropped] = useState(false)

    let targetDropNumber = useRef<HTMLDivElement>(null)

    const controls = useDragControls();

    return (
        <>
            <div>
                <h2 id="totient" className="mt-20 text-3xl font-bold pt-5">
                    3. Totient function <Latex>$\ \phi(n)$</Latex>
                </h2>
                <div className="mt-5 space-y-2">
                    <p>
                        Now that we have <Latex>$p1 \times p2=n$</Latex>, we can calculate the <b>totient function</b> of <Latex>$n$</Latex>, which is usually denoted as <Latex>$\phi(n)$</Latex>.
                    </p>
                    <p>
                        The totient function is defined as the number of positive integers less than or equal to <Latex>$n$</Latex> <b>that do not share a divider other than 1</b> (aka <b>coprimes</b>).
                    </p>
                </div>

                <p className=""><Latex>$$\phi(n) = \text&#123; \#coprimes of $n$ from $1$ to &#125; n$$</Latex></p>

                <div className="flex flex-col justify-center">
                    <AnimatePresence>
                        {
                            !numberDropped &&
                            <motion.div
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0, transition: { duration: 0.1 } }}
                                className="mx-auto text-2xl">
                                <Latex>$n=$</Latex>
                            </motion.div>
                        }
                    </AnimatePresence>
                    <AnimatePresence>
                        {numberDropped ?
                            <motion.div
                                initial={{ opacity: 0, x: 0, y: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0, transition: { duration: 0.1 } }}
                                className="italic font-sm text-center mx-auto mt-5"

                            >
                                &quot;There are {totient(p1 * p2).phi} numbers less than or equal to {p1 * p2} that do not share a divider with {p1 * p2} other than 1.&quot;
                            </motion.div>
                            :
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0, transition: { duration: 0.1 } }}
                                id="dragNumber"
                                style={{ touchAction: "none" }}
                                dragMomentum={false}
                                dragConstraints={{
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0,
                                }}

                                dragElastic={1}
                                drag
                                onDrag={onDrag}

                                onDragEnd={onDragEnd}
                                dragControls={controls}
                                className="text-5xl font-mono border-2 w-[3.5ch] text-center py-2 mx-auto mt-1 shadow-md rounded-md z-50 bg-background">
                                {p1 * p2}
                            </motion.div>
                        }

                    </AnimatePresence>
                    <div className="flex justify-center mt-5 text-5xl">
                        <Latex>$\phi($</Latex>

                        <div
                            ref={targetDropNumber}
                            className="w-[3.5ch] font-mono border-2 flex items-center justify-center">
                            {
                                numberDropped &&
                                p1 * p2
                            }

                        </div>

                        <Latex>$)=\ $</Latex>
                        <div className="w-[3.5ch] font-mono border-2 flex items-center justify-center">
                            <AnimatePresence>
                                {
                                    numberDropped &&
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0, transition: { duration: 0.1 } }}

                                    >
                                        {totient(p1 * p2).phi}
                                    </motion.div>

                                }
                            </AnimatePresence>

                        </div>
                    </div>

                </div>

                <div className="mt-10">
                    <h3 className="text-2xl font-bold">Coprime evaluator</h3>
                    <p className="mt-3">Feel free to use the buttons below to evaluate the coprimes of {p1 * p2} one by one.</p>

                    <div className="flex flex-col justify-center space-x-2 mt-10">
                        <div className="flex flex-row justify-center space-x-3">
                            <Button variant="outline"
                                disabled={selectedNumber === 1}
                                onClick={() => { if (selectedNumber > 1) setSelectedNumber(selectedNumber - 1) }}
                            ><ArrowLeft /></Button>
                            <div className="text-center text-5xl font-mono">{selectedNumber}</div>
                            <Button variant="outline"
                                disabled={selectedNumber === p1 * p2}
                                onClick={() => { if (selectedNumber < p1 * p2) setSelectedNumber(selectedNumber + 1) }}
                            ><ArrowRight /></Button>
                        </div>
                        <div className="border-2 rounded-md text-center px-3 py-3 shadow-sm">
                            <div className="h-[5ch]">
                                {
                                    GCD(p1 * p2, selectedNumber) === 1 ?
                                        <>is a coprime of {p1 * p2}.</>
                                        :
                                        <>is not coprime of {p1 * p2}, they can both be divided by {GCD(p1 * p2, selectedNumber)}.</>
                                }
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}