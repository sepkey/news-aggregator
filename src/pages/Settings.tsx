import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { GuardianSetting, NewsApiSetting } from "@/features/settings";

export default function Settings() {
  return (
    <div className="container mx-auto py-4">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <NewsApiSetting />
          <Separator />
          <GuardianSetting />
          <Separator />
          The NY times setting goes here
        </CardContent>
      </Card>
    </div>
  );
}
