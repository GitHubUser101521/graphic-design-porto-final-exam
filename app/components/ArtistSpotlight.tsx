
export default function ArtistSpotlight() {
    const selectedArt = [
        {
            imgUrl: '/artist-spotlight/artworks/1.png',
            title: 'Celestial Symphony',
            desc: "Explore the cosmos through Luna's celestial landscapes and star-filled skies. Each painting invites viewers on a journey through the vast expanse of space, where galaxies collide, stars are born, and cosmic wonders await discovery."
        },
        {
            imgUrl: '/artist-spotlight/artworks/2.png',
            title: 'Magical Creatures',
            desc: "Magical Creatures: Encounter mythical beings and fantastical creatures in Luna's imaginative character designs. From elegant faeries and wise wizards to majestic dragons and mischievous sprites, Luna's creations breathe life into legends and folklore."
        }
    ]
    return (
        <div id="artist-spotlight" className="section">
            <h1 className="title">ARTISTS SPOTLIGHT</h1>

            <div className="mt-12 bg-sky-50 p-8 rounded-tr-2xl rounded-bl-2xl">
                <div className="flex gap-8">
                    <img src="/artist-spotlight/artist.png" />

                    <div className="flex flex-col justify-center gap-4">
                        <h2 className="font-bold text-xl">Luna Evergreen</h2>
                        <p className="text-sm">
                            Luna Evergreen is a visionary digital artist renowned for her ethereal and enchanting creations. With a background in mystical studies and a deep connection to nature, Luna's artistry transcends the boundaries of reality, weaving together elements of magic, mythology, and fantasy into breathtaking works of art.
                        </p>
                        <div>
                            <img src="/artist-spotlight/social-media.png" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-8 mt-8">
                {
                    selectedArt.map(s => (
                        <div key={s.title} className="flex flex-col gap-2">
                            <div>
                                <img src={s.imgUrl} alt={s.title} />
                            </div>
                            <div>
                                <h2 className="font-bold text-xl mb-2">{s.title}</h2>
                                <p className="text-sm">{s.desc}</p>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

