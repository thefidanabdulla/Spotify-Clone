import Section from "components/Section";
function Home(){
    const items = [
        {
            id: 1,
            title: 'RapCaviar',
            artist: 'Drake',
            description: 'Drake, Travis Scott',
            image: 'https://i.scdn.co/image/ab67706f00000002480421685a950a576c15f5d8',
            type: 'album', 
            src: 'https://freesound.org/data/previews/168/168823_321967-lq.mp3'
        },
        {
            id: 2,
            title: 'Dance Party',
            description: 'Move Your Feet',
            artist: 'J Balvin, Skrillex',
            image: 'https://i.scdn.co/image/ab67706f00000002707af5c8abb5c0b4ef0df2ed',
            type: 'album',
            src: 'https://freesound.org/data/previews/624/624019_4977896-lq.mp3',
        },
        {
            id: 3,
            title: 'Eminem Mix',
            description: 'Eminem',
            artist: 'Eminem',
            image: 'https://mosaic.scdn.co/300/ab67616d00001e02414c9f2508efab33884f60a0ab67616d00001e026ca5c90113b30c3c43ffb8f4ab67616d00001e02dbb3dd82da45b7d7f31b1b42ab67616d00001e02eab40fc794b88b9d1e012578',
            type: 'podcast',
            src: 'https://freesound.org/data/previews/623/623616_11861866-lq.mp3'
        },
        {
            id: 4,
            title: '2010s Mix',
            description: 'Post Malone, Avicii',
            artist: 'Post Malone',
            image: 'https://seed-mix-image.spotifycdn.com/v6/img/twenty_tens/246dkjvS1zLTtiykXe5h60/en/default',
            type: 'album',
            src: 'https://freesound.org/data/previews/623/623681_9497060-lq.mp3'
        },
        {
            id: 5,
            title: 'Måneskin Mix',
            description: 'Måneskin',
            artist: 'Måneskin',
            image: 'https://seed-mix-image.spotifycdn.com/v6/img/artist/0lAWpj5szCSwM4rUMHYmrr/en/default',
            type: 'artist',
            src: 'https://freesound.org/data/previews/623/623823_11861866-lq.mp3'
        },
        {
            id: 6,
            title: 'Lil Nas X Mix',
            description: 'Lil Nas X',
            artist: 'Lil Nas X',
            image: 'https://i.scdn.co/image/ab67616100005174ab6bd6e450cbc7629a9a2381',
            type: 'artist',
            src: 'https://freesound.org/data/previews/168/168823_321967-lq.mp3'
        }
    ]
    return(
        <div className="grid gap-y-10">
            <Section  
                title='Recently played'
                more='/blabla'
                items={items}
            />
            <Section  
                title="Today's Biggest Hits"
                more='/blabla'
                items={items}
            />
            <Section  
                title='Suggested Artists'
                more='/blabla'
                items={items}
            />
            <Section  
                title='Recommended for today'
                more='/blabla'
                items={items}
            />
            <Section  
                title='Your favorite artists'
                more='/blabla'
                items={items}
            />
        </div>
    )
}
export default Home;