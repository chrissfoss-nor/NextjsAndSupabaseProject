import Link from "next/link";

export function Watermark() {
    return (
        // Centered at the bottom with copyrightsymbol and year and "made by Christian"
        <div className="fixed bottom-4 w-full flex justify-center items-center pointer-events-none">
            <div className="bg-white bg-opacity-70 text-gray-600 text-sm px-3 py-1 rounded-md shadow-md pointer-events-auto">
                &copy; {new Date().getFullYear()} Made by Christian
            </div>
        </div>
    );
}