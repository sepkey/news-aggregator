import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./alert";

type Props = { message: string };
export default function ErrorMessage({ message }: Props) {
  return (
    <div className=" max-w-5xl mx-auto px-8">
      <Alert>
        <AlertCircle className="h-4 w-4  stroke-red-400" />
        <AlertTitle className="text-red-500">Error</AlertTitle>
        <AlertDescription>{message} </AlertDescription>
      </Alert>
    </div>
  );
}
