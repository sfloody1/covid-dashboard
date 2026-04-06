import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState, useEffect } from "react"; // 👀
import type { CovidData } from "@/types/covid"; // 👀
import { fetchCovidData } from "@/services/disease";

const STATISTICS: (keyof CovidData)[] = ["confirmed", "active", "recovered"];


const DisplayStatistics = () => {

    const [covidData, setCovidData] = useState<CovidData | null>(null);

    useEffect(() => {
        fetchCovidData("US").then((data) => setCovidData(data));
    }, []);

    return (
    <div className="flex w-full justify-between flex-col sm:flex-row gap-5">
        {/* 👀 Map over STATISTICS instead of repeating cards */}
        {STATISTICS.map((statistic) => (
        <Card className="w-full" key={statistic}>
            <CardHeader>
            <CardTitle className="capitalize">{statistic}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-end items-center gap-2">
            <Avatar>
                <AvatarImage src={covidData?.countryFlag} />
                <AvatarFallback>
                {covidData?.countryCode.toUpperCase()}
                </AvatarFallback>
            </Avatar>
            <div className="text-2xl">
                {covidData?.[statistic]?.toLocaleString()}
            </div>
            </CardContent>
        </Card>
        ))}
    </div>
    );
};

export default DisplayStatistics;
