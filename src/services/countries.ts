import type { CountryData, PartialCountryData } from "@/types/country";

const REST_COUNTRIES_API = "https://restcountries.com/v3.1/all?fields=name,cca2,cca3";

export async function fetchCountries(): Promise<CountryData[]> {
    const response = await fetch(REST_COUNTRIES_API);
    if (!response.ok) {
        throw new Error(`API Request failed! with status: ${response.status}`);
    }
    const data: PartialCountryData[] = await response.json();

    return data.map((country) => ({
        name: country.name.common,
        code: country.cca2,
    }));
}
