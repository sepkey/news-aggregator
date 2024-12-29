import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  GuardianSetting,
  NewsApiSetting,
  NyTimesSetting,
} from '@/features/settings';

export default function Settings() {
  return (
    <div className="container ">
      <Card className="w-full max-w-6xl mx-auto px-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <NewsApiSetting />
          <Separator />
          <GuardianSetting />
          <Separator />
          <NyTimesSetting />
        </CardContent>
      </Card>
    </div>
  );
}
