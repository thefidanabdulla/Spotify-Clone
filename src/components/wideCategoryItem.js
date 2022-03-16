function WideCategory({ category }) {
    return (
        <div style={{ background: category.color }}
            className="rounded-lg relative flex-shrink-0 w-[25.75rem] h-[13.75rem] scroll-smooth">
            <div className="absolute inset-0 overflow-hidden">
                <h3 className="p-4 text-[2.5rem] font-bold">
                    {category.title}
                </h3>
                <img src={category.cover} alt='category cover' className=" shadow-spotify w-32 h-32 absolute rotate-[25deg] bottom-0 right-0 translate-x-[18%] translate-y-[5%]" />
            </div>
        </div>
    )
}
export default WideCategory;