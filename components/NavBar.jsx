import Container from "@/components/ui/container";
import Link from "next/link";
import MainNav from "@/components/MainNav";

const NavBar = () => {
    return (
        <div className="border-b">
            <Container>
                <div className="relative px-4 flex h-16 items-center sm:px-6 lg:px-8">
                    <Link href='/' className="ml-4 flex lg:ml-0 gap-x-2">
                        <p className="font-bold text-xl uppercase">Anime Store</p>
                    </Link>
                    <MainNav data={[]} />
                </div>
            </Container>
        </div>
    );
};

export default NavBar;