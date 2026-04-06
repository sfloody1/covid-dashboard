import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react"; // 👀
import type { CountryData } from "@/types/country"; // 👀
import { fetchCountries } from "@/services/countries"; // 👀

const SelectCountry = () => {
    const [country, setCountry] = useState<CountryData | null>(null);
    const [countryData, setCountryData] = useState<CountryData[]>([]);

    useEffect(() => {
        fetchCountries().then((data) => setCountryData(data));
    }, []);

    const handleOnCountryChange = (value: string) => {
        const selected = countryData.find((c) => c.code === value);
        setCountry(selected!);
    }

    return (
    <div className="w-full space-y-12">
        <h1 className="text-6xl">Covid Statistics</h1>
        <div className="flex flex-col gap-5 justify-start w-full">
        <Label className="text-xl">Select a country:</Label>
        <Select value={country?.code} onValueChange={handleOnCountryChange}>
            <SelectTrigger className="w-full text-xl p-8 bg-white">
            <SelectValue placeholder="Country..." />
            </SelectTrigger>
            <SelectContent>
            {/* 👀 Render countries dynamically from state */}
            {countryData.map((c) => (
                <SelectItem value={c.code} key={c.code}>
                {c.name}
                </SelectItem>
            ))}
            </SelectContent>
        </Select>
        </div>
    </div>
  );
};


export default SelectCountry;