import { ReactNode } from "react"

export default function AllArt() {
    function renderArts() {
        const arts: ReactNode[] = []

        for (let i = 1; i <= 12; i++) {
            arts.push(
                <div key={i}>
                    <img src={`/artwork/${i}.png`} />
                </div>
            )
        }

        return arts
    }
    
    return (
        <div id="featured-work" className="section">
            <h1 className="title">FEATURED ARTWORK SHOWCASE</h1>
            <p className="sub-title">Stunning digital artworks created by CollectiveArt members.</p>

            <div className="grid grid-cols-5 gap-8 mt-12">
            {
                renderArts()
            }
            </div>
        </div>
    )
}

