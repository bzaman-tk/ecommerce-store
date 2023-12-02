import { cn } from "@/lib/utils";
import { Tab } from "@headlessui/react";
import Image from "next/image";

const GalleryTab = ({ image }) => {
    return (
        <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
            {({ selected }) => (
                <div>
                    <span className="absolute aspect-square h-full w-full inset-0 rounded-md overflow-hidden">
                        <Image
                            alt="image" src={image.url} fill className="object-cover object-center"
                        />
                    </span>
                    <span className={cn(
                        "absolute inset-0 rounded-md ring-2 ring-offset-2",
                        selected ? "ring-black" : "ring-transparent"
                    )} />
                </div>
            )}
        </Tab>
    );
};

export default GalleryTab