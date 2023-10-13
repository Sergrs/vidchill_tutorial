import Image from "next/image";

export function UserImage({image, className = ""}:{image: string, className?: string}) {
    return (
        <div className={`relative h-10 w-10 ${className}`}>
            <Image src={image || "/profile.jpg" } alt="" width={40} height={40} className="absolute rounded-full fill"/>
        </div>
    )
}