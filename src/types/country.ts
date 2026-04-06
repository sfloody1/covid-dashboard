export interface PartialCountryData {
    name: {
        common: string;
        official: string;
    };

    cca2: string;
    cca3: string;
}

export interface CountryData {
    name: string;
    code: string;
}