import SelectCountry from "@/components/select-country";
import DisplayStatistics from "@/components/display-statistics";
import { useState } from "react"

function App() {
  const [countryCode, setCountryCode] = useState("US");
  return (
    <div className="flex flex-col justify-between items-center min-h-screen max-w-4xl m-auto py-10">
      <SelectCountry setCountryCode={setCountryCode} />
      <DisplayStatistics countryCode={countryCode} />
    </div>
  );
}

export default App;
