import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
  CardAction,
  CardFooter,
} from "@/shared/components/ui/card";
export default function Test() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle>Product Card</CardTitle>
          <CardDescription>
            This is a reusable card component built with React + Tailwind.
          </CardDescription>

          <CardAction>
            <button className="text-sm px-3 py-1 rounded-md border hover:bg-gray-100">
              Action
            </button>
          </CardAction>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-gray-600">
            هنا محتوى الكارد الأساسي. تقدر تحط صورة، بيانات، فورم، أو أي UI.
          </p>
        </CardContent>

        <CardFooter>
          <button className="px-4 py-2 rounded-md bg-black text-white text-sm">
            Confirm
          </button>
        </CardFooter>
      </Card>
    </div>
  );
}
