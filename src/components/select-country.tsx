import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";

const SelectCountry = () => {
    return (
        <div className="w-full space-y-12">
            <h1 className="text-6xl">Covid Statistics</h1>
            <div className="flex flex-col gap-5 justify-start w-full">
                <Label className="text-xl">Select a country:</Label>
                <Select value="us">
                    <SelectTrigger className="w-full text-xl p-8 bg-white">
                        <SelectValue placeholder="Country..." />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default SelectCountry;