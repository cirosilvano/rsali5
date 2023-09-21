import Latex from "react-latex-next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Key } from "lucide-react";
import exp from "constants";

interface EncryptionStageProps {
    message: number,
    exponent: number,
    n: number
}

export default function EncryptionStage(
    { message, exponent, n }: EncryptionStageProps
) {
    return (
        <div className="mt-20">
            <h1
                id="public-encryption"
                className="text-3xl font-bold"
            >
                5. Public key message encryption
            </h1>
            <p className="mt-3">
                We finally have all the ingredients needed to generate Bob&apos;s public key!
            </p>
            <Card className="hover:shadow-md mt-5 w-80 mx-auto">
                <CardHeader className="">
                    <CardTitle className="flex space-x-2"><Key /><div>Bob&apos;s Public Key</div></CardTitle>
                    <CardDescription>Anyone can use this.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-5 flex flex-col justify-center">
                        <div className="mx-auto">
                            <Latex>Number $n$</Latex>
                            <div className="text-center text-3xl font-mono mt-1 font-bold">120</div>
                        </div>
                        <div className="mx-auto">
                            <Latex>Exponent $e$</Latex>
                            <div className="text-center text-3xl font-mono mt-1 font-bold">5</div>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <p className="mt-5">Bob can freely share this key around without worries: anyone can just use it to <b>encrypt</b> a message <b>only he will be able to open.</b></p>
            <p className="mt-8 border-2 p-3 text-center rounded-md">It's helpful to think about it this way:<br /> <b>the public key is like an open lock</b>. <br />Anyone can grab Bob&apos;s lock, put the message in it and close it. <br />Only Bob has the private key (which we will generate later), so nobody (even the sender!) except for Bob will be able to decrypt the message.</p>

            <h2 className="text-2xl font-bold mt-8">Encrypting the message</h2>
            <p className="mt-2">Encrypting Alice&apos;s message for Bob just requires using this simple mathematical expression:</p>
            <div className="text-3xl">
                <Latex>
                    $$ c= m^e \ (mod \ n) $$
                </Latex>
            </div>
            <p className="text-center border-2 p-4 mt-10">Multiply <Latex>$m$ by itself $e$ times, then divide it by $n$ and calculate the remainder $c$, which is the encrypted message - also called</Latex> <b>cyphertext</b>.</p>
            <p className="mt-8">So now, since Alice only wants Bob to know it took her <Latex>$m=$</Latex> {message} days to learn RSA, she can just encrypt her message using Bob&apos;s publicly available key like this:</p>
            <div className="w-full text-center text-4xl font-serif mt-5">
                {message} ^ {exponent} (mod {n}) = {message ** exponent % n}
            </div>
        </div>
    )
}