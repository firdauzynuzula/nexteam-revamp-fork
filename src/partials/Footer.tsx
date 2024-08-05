import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const itemsLogo = [
    {
        name: "Facebook",
        icon: FaFacebook,
        Link: "http://facebook.com/",
    },
    {
        name: "Twitter",
        icon: FaTwitter,
        Link: "http://twitter.com/",
    },
    {
        name: "Instagram",
        icon: FaInstagram,
        Link: "http://instagram.com/",
    },
];

const itemsContent = [
    {
        title: "Solutions",
        items: ["Social Ads", "Saas marketing", "Content marketing", "SEO"],
    },
    {
        title: "Support",
        items: ["pricing", "Documentation", "Guides"],
    },
    {
        title: "Company",
        items: ["About", "Blog", "Press", "Partners"],
    },
    {
        title: "Legal",
        items: ["Claim", "Privacy", "Terms"],
    },
];
export const Footer = () => {
    return (
        <>
            <footer className="container w-4/5 min-h-10 mt-20 mx-auto">
                <div className="border-t-4 w-full border-black rounded-xl"></div>
                <section className="flex flex-col-reverse sm:grid place-content-between py-5 grid-cols-2">
                    {/* title icons */}
                    <div className="social media col-span-4 sm:col-span-1">
                        <div className="mb-2">
                            <h1 className="text-2xl font-semibold">MLab</h1>
                            <p>we will help you show your ads to more</p>
                            <p>people for less money</p>
                        </div>
                        {/*  icons  */}
                        <div className="w-[150px] text-3xl flex justify-between">
                            {itemsLogo.map((x, index) => {
                                return (
                                    <x.icon
                                        key={index}
                                        className="hover:text-blue-500 cursor-pointer"
                                    />
                                );
                            })}
                        </div>
                        <div className="mt-10">
                            <p>&copy; 2023 Mlab,Inc. All rights reserved</p>
                        </div>
                    </div>

                    {/* bagian kanan */}
                    <div className="px-1">
                        <div className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-4">
                            {itemsContent.map((section, index) => (
                                <div key={index}>
                                    <h6 className="font-semibold capitalize pt-2">
                                        {section.title}
                                    </h6>
                                    <ul>
                                        {section.items.map((item, i) => (
                                        <li
                                                key={i}
                                                className="py-1 text-black  hover:text-blue-800 cursor-pointer"
                                            >
                                                {item}
                                        </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </footer>
        </>
    );
};
