export const Footer = () => {
    return (
        <>
            <footer className="bg-red-400 w-3/4 min-h-10 mx-auto mt-20 px-5">
                <div className="border-t-4 w-full border-indigo-500 rounded-xl "></div>
                <section className="flex justify-between items-center">
                    {/* bagian kiri */}
                    <div className="flex-col">
                        <h1 className="text-2xl font-semibold mb-2">MLab</h1>
                        <p className="text-blue-500">
                            we will help you show your ads to more
                        </p>
                        <p className="text-red-500">people for less money</p>
                    </div>
                    {/* bagian kanan */}
                    <div className="bg-red-300">
                        <h1>hello world</h1>
                        <h1>hello world</h1>
                        <h1>hello world</h1>
                        <h1>hello world</h1>
                    </div>
                </section>
            </footer>
        </>
    );
};
