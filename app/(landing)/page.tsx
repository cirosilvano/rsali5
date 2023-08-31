import { Button } from "@/components/ui/button";

export default function LandingPage() {
    return (
        <div>
            <div className="text-center py-56">
                <h2 className="text-2xl">Want to know how RSA works?</h2>
                <h1 className="text-5xl font-bold mt-3">Learn it like you&apos;re five!</h1>
                <a href="/intro">                
                    <Button className="mt-8 text-xl py-7 px-8">Start now</Button>
                </a>
            </div>
        </div>
    )
}