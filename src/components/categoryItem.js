function Category({ category }) {


    return (
        <div style={{ background: category.color }}
            className="rounded-md before:pt-[100%] before:block relative">
            <div className="absolute inset-0 overflow-hidden">
                <h3 className="p-4 text-2xl">
                    {category.title}
                </h3>
                <img src={category.cover} alt='category cover' className=" shadow-spotify w-[6.25rem] h-[6.25rem] absolute rotate-[25deg] bottom-0 right-0 translate-x-[18%] translate-y-[5%]" />
            </div>
        </div>
    )
}
export default Category