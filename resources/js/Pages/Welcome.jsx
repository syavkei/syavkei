import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-[url('/assets/images/maintenance_bg.png')] bg-cover bg-no-repeat h-screen flex justify-center items-center">
                <img
                    src="/assets/images/maintenance_main.png"
                    className="w-3/5 hidden md:block"
                />
                <img
                    src="/assets/images/maintenance_mobile.png"
                    className="w-3/5 md:hidden"
                />
            </div>
        </>
    );
}
