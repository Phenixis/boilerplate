'use server';

import { Table2 } from "lucide-react";
import Link from "next/link";

export default async function Logo({
    title = false,
    className
}: {
    title?: boolean,
    className?: string
}) {
    const appName = process.env.APP_NAME || '[App]';

    return (
        <Link href="/" className={`flex items-center justify-center ${className}`}>
            <Table2 className="h-12 w-12 text-brand-primary" />
            {
                title ? (
                    <h1 className="ml-2 text-xl font-semibold text-gray-900">
                        {appName}
                    </h1>
                ) : null
            }
        </Link>
    )
}