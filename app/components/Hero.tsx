export default function Hero() {

    return (
        <div id="landing" className="section flex items-center gap-12">
            <div className="w-3/5">
                <h1 className="font-bold text-6xl mb-6 heroEl">
                    Unveiling the mastery behind every pixel's life. 
                </h1>
                <p className="text-sm heroEl">
                    Where creativity knows no bounds and digital art takes center stage. At CollectiveArt, we believe in the power of imagination to transform pixels into masterpieces, and we're passionate about fostering a vibrant community of digital artists, designers, and enthusiasts from around the globe.
                </p>

                <div className="flex gap-4 mt-12">
                    <button className="bg-dark text-white px-4 py-2 rounded-md font-bold heroEl">
                        See Artwork
                    </button>
                    <button className="bg-white px-4 py-2 rounded-md border border-[#073141] font-bold heroEl">
                        Meet Artists
                    </button>
                </div>
            </div>

            <div className="w-2/5 heroEl">
                <img src="/hero-illustration.png" alt="" />
            </div>
        </div>
    )
}