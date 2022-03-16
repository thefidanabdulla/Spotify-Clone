import categories from "data/categories";
import favoriteCategories from "data/favorite-categories";
import Title from "components/Title";
import ScrollContainer from 'react-indiana-drag-scroll';
import { useEffect, useRef, useState } from "react";
import { Icon } from "Icons";
import Category from "components/categoryItem";
import WideCategory from "components/wideCategoryItem";

function Search() {

    const favoritesRef = useRef()
    const [prev, setPrev] = useState(false);
    const [next, setNext] = useState(false);
    useEffect(() => {
        if (favoritesRef.current) {
            const scrollHandle = () => {
                const isEnd = (favoritesRef.current.scrollLeft + favoritesRef.current.offsetWidth) === favoritesRef.current.scrollWidth
                const isBegin = (favoritesRef.current.scrollLeft === 0)
                setPrev(!isBegin)
                setNext(!isEnd)
            }
            scrollHandle()
            favoritesRef.current.addEventListener('scroll', scrollHandle)

            return () => {
                favoritesRef.current.removeEventListener('scroll', scrollHandle)
            }
        }
    }, [favoritesRef])
    const slideFavoriteNext = () => {
        favoritesRef.current.scrollLeft += favoritesRef.current.offsetWidth - 300
    }
    const slideFavoritePrev = () => {
        favoritesRef.current.scrollLeft -= favoritesRef.current.offsetWidth - 300
    }
    return (
        <>
            <section className="mb-8 ">
                <Title title={'Your top genres'} />
                <div className="relative">
                    {prev && <button className="w-10 absolute z-10 -left-6 top-1/2 -translate-y-1/2 h-10 rounded-full bg-white hover:scale-[1.06] text-black flex items-center justify-center" onClick={slideFavoritePrev}>
                        <Icon name={'prev'} />
                    </button>
                    }
                    {next && <button className="w-10 absolute z-10 -right-6 top-1/2 -translate-y-1/2 h-10 rounded-full bg-white hover:scale-[1.06] text-black flex items-center justify-center" onClick={slideFavoriteNext}>
                        <Icon name={'next'} />
                    </button>
                    }
                    <ScrollContainer innerRef={favoritesRef} className="scroll-container scrollable flex overflow-x gap-x-6">
                        {favoriteCategories.map((category, index) => <WideCategory key={index} category={category} />)}
                    </ScrollContainer>
                </div>
                
            </section>
            <section>
                <Title title={'Browse all'} />
                <div className="grid grid-cols-5 font-bold tracking-tighter gap-6">
                    {categories.map((category, index) => <Category key={index} category={category} />)}
                </div>
            </section>
        </>
    )
}
export default Search;