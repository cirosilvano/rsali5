import totient from "@/utils/totient";
import { useDragControls } from "framer-motion";
import Latex from "react-latex-next";
import { motion } from "framer-motion";

interface TotientFunctionProps {
    p1: number;
    p2: number;
}

export default function TotientFunction(
    { p1, p2 }: TotientFunctionProps
) {

    const controls = useDragControls();

    return (
        <div className="">
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
                <div className="mx-auto text-2xl"><Latex>$n=$</Latex></div>
                <motion.div
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
                    dragControls={controls}
                    onDrop={
                        () => {

                        }
                    }
                    className="font-mono border-2 w-fit px-2 py-2 mx-auto mt-1 shadow-md rounded-md z-50 bg-background">
                    {p1 * p2}
                </motion.div>
                <div className="flex justify-center mt-5 text-5xl">
                    <Latex>$\phi($</Latex>

                    <div className="w-[3ch] border-2">

                    </div>

                    <Latex>$)=\ $</Latex>
                    <div className="w-[3ch] border-2">

                    </div>
                </div>

            </div>

            <p>
                This function is very important in cryptography, because it is used to calculate the private key <Latex>$d$</Latex> from the public key <Latex>$e$</Latex>.p
            </p>


            <div>

            </div>

        </div>
    )
}