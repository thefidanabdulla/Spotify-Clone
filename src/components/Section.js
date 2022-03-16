import SongItem from "./SongItem";
import Title from "./Title";
function Section({ title , more=false, items }) { 
    
    return(
        <section>
            <Title title={title} more={more} />
            <div className="grid grid-cols-6 gap-x-6">
                {items.map(item =>  <SongItem item={item} key={item.id} /> )}
            </div>
        </section>
    )
}
export default Section;