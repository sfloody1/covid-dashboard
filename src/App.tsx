import SelectCountry from "@/components/select-country";
import DisplayStatistics from "@/components/display-statistics";

function App() {
  return (
    <div className="flex flex-col justify-between items-center min-h-screen max-w-4xl m-auto py-10">
      <SelectCountry />
      <DisplayStatistics />
    </div>
  );
}

export default App;
