"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
import qs from "query-string";
import { useState } from "react";

export const Search = () => {
    const router = useRouter();
    const [value, setValue] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        if (!value) return;

        const url = qs.stringifyUrl({
            url: "/search",
            query: { term: value },
        }, { skipEmptyString: true });

        router.push(url);
    };

    const onClear = () => {
        setValue("");
    };

    return (
        <form 
            onSubmit={onSubmit}
            className="relative w-full lg:w-[400px] flex items-center"
        >
            <Input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Search"
                className="h-10 rounded-full focus-visible:ring-0 
                focus-visible:ring-transparent focus-visible:ring-offset-0 bg-white text-black border border-white flex-1"
            />
            {value && (
                <X 
                    className="absolute top-2.5 right-14 h-5 w-5 text-black cursor-pointer hover:opacity-75 transition"
                    onClick={onClear}
                />
            )}
            <Button
                type="submit"
                size="sm"
                variant="signup"
                className="h-10 rounded-full absolute right-0 mr-px"
            >
                <SearchIcon className="h-5 w-5 text-muted-foreground"/>
            </Button>
        </form>
    );
};
