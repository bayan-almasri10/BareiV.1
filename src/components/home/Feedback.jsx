/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qHtgNCx44pu
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"

export default function Feedback() {
    return (
        // <section className="w-full py-12 md:py-24 lg:py-32">
        //     <div className="container space-y-12 px-4 md:px-6">
        //         <div className="mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                    //<div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2 w-[20rem] mx-auto mb-10 rounded-lg border border-gray-200 bg-slate-50 p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                            <div className="flex items-center gap-4">
                                <Avatar className="h-10 w-10">
                                    <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                    <span className="font-semibold">Sarah Johnson</span>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Acme Inc</span>
                                </div>
                                <div className="ml-auto flex items-center gap-0.5">
                                    <StarIcon className="h-5 w-5 fill-primary" />
                                    <StarIcon className="h-5 w-5 fill-primary" />
                                    <StarIcon className="h-5 w-5 fill-primary" />
                                    <StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" />
                                    <StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" />
                                </div>
                            </div>
                            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                                "The customer service I received was exceptional. The support team went above and beyond to address my
                                concerns."
                            </p>
                        </div>
                //     </div>
                // </div>
            // </div>
        // </section>
    )
}

function StarIcon(props) {
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
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )
}