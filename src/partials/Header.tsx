import briyani from '../assets/biryani.png'
export const Header = () => {
    return (
        <>
            {/* header / navbar */}
            <header className="container mx-auto w-5/6 min-h-[400px] mt-5">
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

                {/* hero section */}
                <div className="min-h-[100px] flex flex-col justify-center items-center px-5 mt-2">
                    {/* text section */}
                    <div className="sm:w-1/2 text-wrap text-center order-1">
                        <h1 className="text-2xl pt-5 sm:text-4xl font-bold">Lorem ipsum dolor sit amet Consectetur</h1>
                    </div>
                    {/* image section */}
                    <div className="p-5 order-2">
                        <img
                            src={briyani}
                            alt="nasi-briyani"
                            className="max-h-[300px] bg-cover"
                        />
                    </div>
                </div>
            </header>
        </>
    );
};
