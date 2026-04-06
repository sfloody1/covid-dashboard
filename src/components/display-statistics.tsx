import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const DisplayStatistics = () => {
  return (
    <div className="flex w-full justify-between flex-col sm:flex-row gap-5">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Confirmed</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-end items-center gap-2">
          <Avatar>
            <AvatarImage src="https://disease.sh/assets/img/flags/us.png" />
            <AvatarFallback>US</AvatarFallback>
          </Avatar>
          <div className="text-2xl">{(111820082).toLocaleString()}</div>
        </CardContent>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Active</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-end items-center gap-2">
          <Avatar>
            <AvatarImage src="https://disease.sh/assets/img/flags/us.png" />
            <AvatarFallback>US</AvatarFallback>
          </Avatar>
          <div className="text-2xl">{(786167).toLocaleString()}</div>
        </CardContent>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Recovered</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-end items-center gap-2">
          <Avatar>
            <AvatarImage src="https://disease.sh/assets/img/flags/us.png" />
            <AvatarFallback>US</AvatarFallback>
          </Avatar>
          <div className="text-2xl">{(109814428).toLocaleString()}</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DisplayStatistics;
