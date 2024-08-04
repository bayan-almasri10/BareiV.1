/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Ic5kmT4Ho5M
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
export default function Component() {
  return (
    <Card className="w-full container mx-auto border-b shadow-lg">
      <CardHeader className="pb-3 border-b border-fuchsia-800">
        <div className="flex flex-col pb-2 mx-auto">
          <MarkUnreadChatAltIcon className="text-fuchsia-800 text-3xl my-2 mx-auto" />
          <CardTitle  className="text-fuchsia-800">الإشعارات</CardTitle>
        </div>
      </CardHeader>

      <CardContent className="conatiner grid gap-6 mt-3">
        <CardDescription>لديك 5 إشعارات غير مقروءة , أبق على اطلاع دائم لتعرف اخر تطورات طلبياتك.</CardDescription>

        <div className="flex items-center gap-4 rounded-xl p-3 border">
          <PackageIcon className="h-10 w-10"/>
          <div className="grid gap-1.5">
            <p className="font-medium text-xl">Your order has been shipped!</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Track your package to see the latest updates.</p>
          </div>
          <Button className="bg-fuchsia-700" size="icon">
            <ArrowRightIcon className="w-4 h-4"/>
            <span className="sr-only">View</span>
          </Button>
        </div>

        <div className="flex items-center gap-4 rounded-xl p-3 border">
          <PackageIcon className="h-10 w-10"/>
          <div className="grid gap-1.5">
            <p className="font-medium text-xl">Your order has been shipped!</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Track your package to see the latest updates.</p>
          </div>
          <Button className="bg-fuchsia-700" size="icon">
            <ArrowRightIcon className="w-4 h-4"/>
            <span className="sr-only">View</span>
          </Button>
        </div>
        <div className="flex items-center gap-4 rounded-xl p-3 border">
          <PackageIcon className="h-10 w-10"/>
          <div className="grid gap-1.5">
            <p className="font-medium text-xl">Your order has been shipped!</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Track your package to see the latest updates.</p>
          </div>
          <Button className="bg-fuchsia-700" size="icon">
            <ArrowRightIcon className="w-4 h-4"/>
            <span className="sr-only">View</span>
          </Button>
        </div>
        <div className="flex items-center gap-4 rounded-xl p-3 border">
          <PackageIcon className="h-10 w-10"/>
          <div className="grid gap-1.5">
            <p className="font-medium text-xl">Your order has been shipped!</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Track your package to see the latest updates.</p>
          </div>
          <Button className="bg-fuchsia-700" size="icon">
            <ArrowRightIcon className="w-4 h-4"/>
            <span className="sr-only">View</span>
          </Button>
        </div>
        <div className="flex items-center gap-4 rounded-xl p-3 border">
          <PackageIcon className="h-10 w-10"/>
          <div className="grid gap-1.5">
            <p className="font-medium text-xl">Your order has been shipped!</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Track your package to see the latest updates.</p>
          </div>
          <Button className="bg-fuchsia-700" size="icon">
            <ArrowRightIcon className="w-4 h-4"/>
            <span className="sr-only">View</span>
          </Button>
        </div>
        <div className="flex items-center gap-4 rounded-xl p-3 border">
          <PackageIcon className="h-10 w-10"/>
          <div className="grid gap-1.5">
            <p className="font-medium text-xl">Your order has been shipped!</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Track your package to see the latest updates.</p>
          </div>
          <Button className="bg-fuchsia-700" size="icon">
            <ArrowRightIcon className="w-4 h-4"/>
            <span className="sr-only">View</span>
          </Button>
        </div>
        <div className="flex items-center gap-4 rounded-xl p-3 border">
          <PackageIcon className="h-10 w-10"/>
          <div className="grid gap-1.5">
            <p className="font-medium text-xl">Your order has been shipped!</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Track your package to see the latest updates.</p>
          </div>
          <Button className="bg-fuchsia-700" size="icon">
            <ArrowRightIcon className="w-4 h-4"/>
            <span className="sr-only">View</span>
          </Button>
        </div>
        <div className="flex items-center gap-4 rounded-xl p-3 border">
          <PackageIcon className="h-10 w-10"/>
          <div className="grid gap-1.5">
            <p className="font-medium text-xl">Your order has been shipped!</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Track your package to see the latest updates.</p>
          </div>
          <Button className="bg-fuchsia-700" size="icon">
            <ArrowRightIcon className="w-4 h-4"/>
            <span className="sr-only">View</span>
          </Button>
        </div>

      </CardContent>
    </Card>
  )
}

function ArrowRightIcon(props) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <path d="M5 12h14"/>
        <path d="m12 5 7 7-7 7"/>
      </svg>
  )
}


function PackageIcon(props) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}
