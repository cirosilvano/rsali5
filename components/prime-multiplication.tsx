import { CheckCircle, XCircle } from "lucide-react";
import { Button } from "./ui/button";
import NumberPicker from "./number-picker";
import Latex from "react-latex-next";
import { AnimatePresence, motion } from "framer-motion";

interface PrimeMultiplicationProps {
    firstPrimeNumber: number,
    setFirstPrimeNumber: (value: number) => void,
    secondPrimeNumber: number,
    setSecondPrimeNumber: (value: number) => void,
    numberPickersDisabled: boolean,
    setNumberPickersDisabled: (value: boolean) => void
}

export default function PrimeMultiplication(
    {
        firstPrimeNumber,
        setFirstPrimeNumber,
        secondPrimeNumber,
        setSecondPrimeNumber,
        numberPickersDisabled,
        setNumberPickersDisabled,
    }: PrimeMultiplicationProps
) {

    const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23]

    return (
        <div className="">
            <h2 id="prime-multiplication" className="mt-20 text-3xl font-bold pt-5">
                2. Prime multiplication
            </h2>
            <div className="mt-5 space-y-2">
                <p>
                    Now, we have to choose two <u><b>distinct</b></u> prime numbers and multiply them. We&apos;ll call them <Latex strict>$p1$ and $p2$, and their product $n$. Choose them randomly, just remember that in real life scenarios, those numbers will be millions of times bigger!</Latex>
                </p>
                <p>
                    Remember: a number is prime if it can only be divided by itself or by 1.
                </p>
                <p>
                    Don&apos;t worry if this is sounding a bit random to you, it&apos;ll make sense in a minute.
                </p>
            </div>

            <div className="flex flex-col justify-center mt-8">
                <div className="flex justify-around">
                    <div>
                        <p className="text-center"><Latex>$p1=$</Latex></p>
                        <NumberPicker disablePickers={numberPickersDisabled} numberList={primeNumbers} value={firstPrimeNumber} setValue={setFirstPrimeNumber} />
                    </div>
                    <div>
                        <p className="text-center"><Latex>$p2=$</Latex></p>
                        <NumberPicker disablePickers={numberPickersDisabled} numberList={primeNumbers} value={secondPrimeNumber} setValue={setSecondPrimeNumber} />
                    </div>
                </div>


                <div className="mx-auto mt-8">
                    <p className="text-center mb-2"><Latex>$n=$</Latex></p>
                    <div className="flex items-center font-mono border-2 text-center px-10 py-3 text-7xl rounded-md shadow-sm">
                        <p className="mt-2">{firstPrimeNumber * secondPrimeNumber}</p>
                    </div>
                </div>

                <div className="text-slate-500 text-sm mt-10 text-center" >
                    Note: real RSA encryption requires much bigger numbers (hundreds of digits).
                    We are using small numbers to illustrate the concept in an easy way.
                </div>

                <Button
                    asChild
                    disabled={firstPrimeNumber === secondPrimeNumber}
                    className="text-2xl py-7 w-60 mt-7 mx-auto flex"
                    variant={numberPickersDisabled ? "completed" : "default"}
                    onClick={() => {
                        if (!numberPickersDisabled && firstPrimeNumber !== secondPrimeNumber) {
                            setNumberPickersDisabled(true)
                        }
                    }}
                >
                    <a href="#totient" className="text-center">
                        <div className="flex flex-row ml-1">
                            {numberPickersDisabled ?
                                <>
                                    Done
                                    <CheckCircle className="ml-2 mt-1" />
                                </>
                                : "Confirm"}
                        </div>
                    </a>
                </Button>

                <AnimatePresence>
                    {firstPrimeNumber === secondPrimeNumber &&
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-red-700 flex justify-center items-center space-x-2">
                            <XCircle className="mt-4" />
                            <div className="text-sm text-center mt-5 mb-1">The two prime numbers must be different.</div>
                        </motion.div>
                    }
                </AnimatePresence>

            </div>
        </div>
    )
}