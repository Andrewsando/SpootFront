import Cards from "./Pcards"

const PcardsContainer = ({data})=>{

    return (
        <div>
            {data.length && data.map((playlist)=>{
                <Cards
               name={playlist.name}
                image={playlist.image}
                description={playlist.descriptions}
                songs={playlist.songs}
                />
            })}
        </div>
    )
}

export default PcardsContainer