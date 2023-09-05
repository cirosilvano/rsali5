import { ArrowLeft, CheckCircle, Key, Lock, XCircle } from "lucide-react";
import { Button } from "./ui/button";
import NumberPicker from "./number-picker";
import Latex from "react-latex-next";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger, DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";

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
                <a href="#prime-explanation" className="text-center">
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
                {
                    numberPickersDisabled &&
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="">
                        <div className="text-center mt-5 border-2 py-3 px-5 border-orange-300 bg-orange-100 rounded-xl mx-auto">
                            <div className="flex flex-col md:flex-row text">
                                <div className="flex flex-row mx-auto mb-3 md:mb-0 text-orange-900 space-x-1">
                                    <div>#1</div>
                                    <Lock />
                                </div>
                                <div className="text-center w-full"><Latex>$n = $</Latex> {firstPrimeNumber * secondPrimeNumber} will be the first part of Alice&apos;s public key.</div>
                            </div>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>

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

            <div id="prime-explanation" className="space-y-2 mt-10 border-2 px-5 py-5 rounded-md">
                <div>It&apos;s very easy to multiply two numbers together. A calculator can do that with <b>very</b> big numbers almost instantly.</div>
                <div>Refactoring a number to its two prime factors, however, is a whole different beast. It requires <b>a lot</b> of trial and error.</div>
                <div>Imagine having to find the two numbers that, when multiplied, output <Latex>$n=$</Latex>
                    <Dialog>
                        <DialogTrigger
                            className="border-2 px-2 py-1 rounded-sm shadow-sm hover:shadow-md"
                        >
                            251959084756578934940271832...
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>RSA-2048</DialogTitle>
                                <DialogDescription>
                                    <p>It&apos;s quite big, isn&apos;t it?</p>



                                </DialogDescription>
                            </DialogHeader>


                            <div className="w-96 px-2 font-mono break-words mt-3">
                                25195908475657893494027183240048398571429282126204032027777137836043662020707595556264018525880784406918290641249515082189298559149176184502808489120072844992687392807287776735971418347270261896375014971824691165077613379859095700097330459748808428401797429100642458691817195118746121515172654632282216869987549182422433637259085141865462043576798423387184774447920739934236584823824281198163815010674810451660377306056201619676256133844143603833904414952634432190114657544454178424020924616515723350778707749817125772467962926386356373289912154831438167899885040445364023527381951378636564391212010397122822120720357
                            </div>

                            <div>
                                This number will take hundreds of trillions of years for a classical computer to factor. Our only hope is to use a quantum computer!
                            </div>


                            <DialogFooter>
                                <DialogClose>
                                    <Button>Got it!</Button>
                                </DialogClose>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

        </div>
    )
}