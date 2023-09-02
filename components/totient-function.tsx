"use client"

import totient from "@/utils/totient";
import { AnimatePresence, useDragControls } from "framer-motion";
import Latex from "react-latex-next";
import { motion } from "framer-motion";
import { useState } from "react";

interface TotientFunctionProps {
    p1: number;
    p2: number;
}

export default function TotientFunction(
    { p1, p2 }: TotientFunctionProps
) {

    let [numberDropped, setNumberDropped] = useState(false)
    const controls = useDragControls();

    return (
        <>
            <div>
                <h2 id="totient" className="mt-20 text-3xl font-bold pt-5">
                    3. Totient function <Latex>$\ \phi(n)$</Latex>
                </h2>
                <div className="mt-5 space-y-2">
                    <p>
                        Now that we have <Latex>$p1 \times p2=n$</Latex>, we can calculate the totient function of <Latex>$n$</Latex>, which is usually denoted as <Latex>$\phi(n)$</Latex>.
                    </p>
                    <p>
                        The totient function is defined as the number of positive integers less than <Latex>$n$</Latex> that cannot divide <Latex>$n$</Latex> with zero remainder.
                    </p>
                    <p>
                        In mathematical lingo, these numbers are called <b>coprimes</b> of <Latex>$n$</Latex>.
                    </p>
                </div>

                <p className=""><Latex>$$\phi(n) = \text&#123; \#coprimes of $n$ from $1$ to &#125; n$$</Latex></p>

                <div className="flex flex-col text-5xl justify-center">
                    <AnimatePresence>
                        {
                            !numberDropped &&
                            <motion.div
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0, transition: { duration: 0.1 } }}
                                className="mx-auto text-2xl"><Latex>$n=$</Latex></motion.div>
                        }
                    </AnimatePresence>
                    <AnimatePresence>
                        {!numberDropped &&
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
                                onDrag={(e, info) => {
                                    let x_target = document.getElementById("targetDropNumber")?.getBoundingClientRect().x
                                    let y_target = document.getElementById("targetDropNumber")?.getClientRects()[0].y

                                    if (x_target) x_target += window.scrollX
                                    if (y_target) y_target += window.scrollY

                                    const x_drag = info.point.x
                                    const y_drag = info.point.y

                                    if (x_target && y_target) {
                                        if (Math.abs(x_target - x_drag) < 100 && Math.abs(y_target - y_drag) < 70) {

                                            document.getElementById("targetDropNumber")?.classList.add("shadow-xl")
                                        } else {
                                            document.getElementById("targetDropNumber")?.classList.remove("shadow-xl")
                                        }
                                    }
                                }}

                                onDragEnd={(e, info) => {
                                    let x_target = document.getElementById("targetDropNumber")?.getBoundingClientRect().x
                                    let y_target = document.getElementById("targetDropNumber")?.getClientRects()[0].y

                                    if (x_target) x_target += window.scrollX
                                    if (y_target) y_target += window.scrollY

                                    const x_drag = info.point.x
                                    const y_drag = info.point.y

                                    if (x_target && y_target) {
                                        if (Math.abs(x_target - x_drag) < 100 && Math.abs(y_target - y_drag) < 70) {
                                            setNumberDropped(true)
                                        }
                                    }

                                }}
                                dragControls={controls}
                                className="font-mono border-2 w-fit px-2 py-2 mx-auto mt-1 shadow-md rounded-md z-50 bg-background">
                                {p1 * p2}
                            </motion.div>
                        }

                    </AnimatePresence>
                    <div className="flex justify-center mt-5 text-5xl">
                        <Latex>$\phi($</Latex>

                        <div
                            id="targetDropNumber"
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

                <div>

                </div>

            </div>
        </>
    )
}