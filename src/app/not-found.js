import Link from "next/link";
export default function NotFound() {
    return (
        <div className="flex items-center justify-center h-screen">
        <h1>404 - Page Not Found</h1>
        <Link href={"/"}>Go back home</Link>
        </div>
    );
}