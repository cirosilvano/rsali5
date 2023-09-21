import Latex from "react-latex-next";
import NumberPicker from "./number-picker";
import { Input } from "./ui/input";
import { GCD } from "@/utils/totient";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./ui/button";
import { CheckCircle, Lock } from "lucide-react";


interface ExponentChooserProps {
    totient: number,
    exponent: number
    setExponent: (value: number) => void,
    exponentChosen: boolean,
    setExponentChosen: (value: boolean) => void
}

export default function ExponentChooser(
    { totient, exponent, setExponent, exponentChosen, setExponentChosen }: ExponentChooserProps
) {

    let inputRef = useRef<HTMLInputElement>(null)
    let suggestion = 0
    for(let i=2; i<10; i++) {
        if(GCD(i, totient) == 1) {
            suggestion = i
            break
        }
    }

    return (
        <div className="mt-20">
            <h1 className="text-3xl font-bold">4. Choose an exponent</h1>
            <div className="mt-5 space-y-3">
                <p>We are almost done with creating Bob&apos;s <b>public key</b>!</p>
                <p>The last thing we need to do is <b>generate a number</b> <Latex>$e$</Latex> (which we will later use as exponent for a mathematical expression).</p>
                <p>Usually, exponents aren&apos;t big numbers, even in standard RSA implementations. They usually don&apos;t exceed 65537 in size (actually, 65537 is the most used public exponent).</p>
                <p>Just note: <Latex>$e$</Latex> <b>must be a coprime of</b> <Latex> $\phi(n)$.</Latex></p>
            </div>
            <div className="flex justify-center flex-col mt-5">
                <p className="text-sm text-gray-600 text-center">For simplicity, only one-digit exponents are allowed here</p>
                <Input
                    ref={inputRef}
                    type="number"
                    placeholder={"2"}
                    className="text-5xl py-10 mx-auto w-[4ch] mt-4"
                    onChange={
                        (e) => {
                            if (e.target.value.length > 1) {
                                e.target.value = e.target.value.slice(0, 1)
                            }
                            if (e.target.value.length == 1 && parseInt(e.target.value) < 2) {
                                e.target.value = ""
                            }
                            if (e.target.value.length == 1) setExponent(parseInt(e.target.value))
                        }
                    }
                />

                <AnimatePresence>
                    {
                        !(GCD(exponent, totient) === 1) &&
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div className="text-center mx-auto mt-1 text-red-700 text-sm">
                                <p className="">Exponent must be coprime of <Latex>$\phi(n) = $</Latex> {totient}</p>
                                <p>Suggestion: <b>{suggestion}</b></p>
                            </div>
                        </motion.div>

                    }
                </AnimatePresence>

                <Button
                    asChild
                    className="text-2xl py-7 w-60 mt-5 mx-auto"
                    onClick={() => {
                        if(exponent >= 2 && exponent <= 9 && GCD(exponent, totient) == 1) {
                            inputRef.current!.disabled = true
                            setExponentChosen(true)
                        }
                    }}
                    variant={exponentChosen ? "completed" : "default"}
                >
                    <a href="#public-encryption" className="text-center">
                        <div className="flex flex-row ml-1">
                            {exponentChosen ?
                                <>
                                    Done
                                    <CheckCircle className="ml-2 mt-1" />
                                </>
                                : "Confirm"}
                        </div>
                    </a>
                </Button>

            </div>

            <AnimatePresence>
                {
                    exponentChosen &&
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="">
                        <div className="text-center mt-5 border-2 py-3 px-5 border-orange-300 bg-orange-100 rounded-xl mx-auto">
                            <div className="flex flex-col md:flex-row text">
                                <div className="flex flex-row mx-auto mb-3 md:mb-0 text-orange-900 space-x-1">
                                    <div>#2</div>
                                    <Lock />
                                </div>
                                <div className="text-center w-full"><Latex>$e = $</Latex> {exponent} will be the second (and last) part of Bob&apos;s public key.<br/>Now let&apos;s encrypt!</div>
                            </div>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>

            
        </div>
    )
}