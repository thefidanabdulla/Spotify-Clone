import CollectionListItem from "./collectionListItem";

function CollectionSection() { 
    
    return(
        <section className="mb-8">
            <div className="grid grid-cols-5 gap-6 ">
                 <CollectionListItem />
                 <CollectionListItem />
                 <CollectionListItem />
                 <CollectionListItem />
                 <CollectionListItem />
                 <CollectionListItem />
                 <CollectionListItem />
            </div>
        </section>
    )
}
export default CollectionSection;