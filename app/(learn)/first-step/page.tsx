"use client"

import NumberPicker from "@/components/number-picker";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, ArrowRight, ArrowUp, CheckCircle } from "lucide-react";
import Image from "next/image";

import 'katex/dist/katex.min.css';

import Latex from "react-latex-next";


import { useState } from "react";
import { cn } from "@/lib/utils";
import PrimeMultiplication from "@/components/prime-multiplication";
import CreateMessage from "@/components/create-message";
import TotientFunction from "@/components/totient-function";
import ExponentChooser from "@/components/exponent-chooser";
import EncryptionStage from "@/components/encryption-stage";

export default function FirstStepPage() {

    let [sliderValue, setSliderValue] = useState(50)
    let [sliderDisabled, setSliderDisabled] = useState(false)

    let [firstPrimeNumber, setFirstPrimeNumber] = useState(11)
    let [secondPrimeNumber, setSecondPrimeNumber] = useState(13)
    let [primesChosen, setPrimesChosen] = useState(false)

    let [totientCalculated, setTotientCalculated] = useState(false)
    let [totient, setTotient] = useState(0)

    let [exponent, setExponent] = useState(2)
    let [exponentChosen, setExponentChosen] = useState(false)

    return (
        <div className="flex flex-col p-10 lg:p-20 text-xl lg:px-60 xl:px-80">
            <h1 className="text-[38px] leading-10 font-bold">Prime-quality encryption</h1>

            <CreateMessage
                sliderValue={sliderValue}
                setSliderValue={setSliderValue}
                sliderDisabled={sliderDisabled}
                setSliderDisabled={setSliderDisabled}
            />

            <AnimatePresence>
                {
                    sliderDisabled &&
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 12,
                        }}
                        exit={{ opacity: 0 }}
                    >
                        <PrimeMultiplication
                            firstPrimeNumber={firstPrimeNumber}
                            secondPrimeNumber={secondPrimeNumber}
                            setFirstPrimeNumber={setFirstPrimeNumber}
                            setSecondPrimeNumber={setSecondPrimeNumber}
                            numberPickersDisabled={primesChosen}
                            setNumberPickersDisabled={setPrimesChosen}
                        />
                    </motion.div>
                }
            </AnimatePresence>
            <AnimatePresence>
                {
                    primesChosen &&
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 12,
                        }}
                        exit={{ opacity: 0 }}
                    >
                        <TotientFunction
                            p1={firstPrimeNumber}
                            p2={secondPrimeNumber}
                            setTotientCalculated={setTotientCalculated}
                            setTotient={setTotient}
                        />
                    </motion.div>
                }

            </AnimatePresence>

            <AnimatePresence>
                {
                    totientCalculated &&
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 12,
                        }}
                        exit={{ opacity: 0 }}
                    >
                        <ExponentChooser 
                            totient={totient} 
                            exponent={exponent}
                            setExponent={setExponent}
                            exponentChosen={exponentChosen}
                            setExponentChosen={setExponentChosen} 
                        />
                    </motion.div>
                }

            </AnimatePresence>

            <AnimatePresence>
                {
                    exponentChosen &&
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 12,
                        }}
                        exit={{ opacity: 0 }}
                    >
                        <EncryptionStage
                            message={sliderValue / 10 + 2}
                            exponent={exponent}
                            n={firstPrimeNumber * secondPrimeNumber}
                        />
                    </motion.div>
                }

            </AnimatePresence>

        </div>
    )
}