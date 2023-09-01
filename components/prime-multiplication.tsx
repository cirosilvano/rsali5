import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import NumberPicker from "./number-picker";
import Latex from "react-latex-next";

interface PrimeMultiplicationProps {
    firstPrimeNumber: number,
    setFirstPrimeNumber: (value: number) => void,
    secondPrimeNumber: number,
    setSecondPrimeNumber: (value: number) => void,
}

export default function PrimeMultiplication(
    { 
        firstPrimeNumber, 
        setFirstPrimeNumber, 
        secondPrimeNumber, 
        setSecondPrimeNumber 
    }: PrimeMultiplicationProps
) {

    const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23]

    return (
        <div className="">
            <h2 id="secondTitle" className="mt-20 text-3xl font-bold pt-5">
                2. Prime factorization
            </h2>
            <div className="mt-5 space-y-2">
                <p>
                    Now, we have to choose two <u><b>distinct</b></u> prime numbers and multiply them. We&apos;ll call them <Latex strict>$p1$ and $p2$, and their product $n$.</Latex>
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
                        <NumberPicker numberList={primeNumbers} value={firstPrimeNumber} setValue={setFirstPrimeNumber} />
                    </div>
                    <div>
                        <p className="text-center"><Latex>$p2=$</Latex></p>
                        <NumberPicker numberList={primeNumbers} value={secondPrimeNumber} setValue={setSecondPrimeNumber} />
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
                    disabled={firstPrimeNumber === secondPrimeNumber}
                    className="text-2xl py-7 w-60 mt-7 mx-auto"
                    onClick={() => { }}
                >
                    <a href="#second" className="text-center">
                        <div className="flex flex-row ml-1">
                            {false ?
                                <>
                                    Done
                                    <CheckCircle className="ml-2 mt-1" />
                                </>
                                : "Confirm"}
                        </div></a>
                </Button>



            </div>
        </div>
    )
}