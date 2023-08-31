import { Gift } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
    return (
        <nav className="px-8 py-5 shadow-md flex justify-between">
            <a className="text-3xl font-mono font-bold" href="/">
                RSALI5
            </a>
            <a>
                <Button
                    className="text-md px-3"
                >
                    Donate
                    <Gift className="ml-2" /></Button>
            </a>
        </nav>
    )
}