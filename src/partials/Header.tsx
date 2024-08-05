export const Header = () => {
    return (
        <>
            <header className="container mx-auto w-5/6 max-h-20 mt-5">
                <nav className="flex justify-between px-10 text-semibold">
                    <div className="logo">
                        <img
                            src="/logo-react.svg"
                            alt="logo-reactJS"
                            width={50}
                            height={50}
                        />
                    </div>
                    <ul className="flex justify-around items-center w-1/4 font-medium">
                        <li>Home</li>
                        <li>Team</li>
                        <li>Portofolio</li>
                    </ul>
                    <div className="p-2 m-0">
                        <button className="px-5 py-2 rounded-full bg-black text-white">
                            Talk to Us
                        </button>
                    </div>
                </nav>
            </header>
        </>
    );
};
