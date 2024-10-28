"use client"

import Link from "next/link";
import {X} from "lucide-react";
import { Button } from "./ui/button";

const SearchFormReset = () => {
    const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement;

        if(form) form.reset();
    }

    return (
        <Button type="reset" onClick={reset}>
            <Link href="/">
                <X className="size-5" />
            </Link>
        </Button>
    )
}
export default SearchFormReset