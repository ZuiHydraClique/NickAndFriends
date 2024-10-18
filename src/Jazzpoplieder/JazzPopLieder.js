import React from 'react';
import './JazzPopLieder.css'; // Stile für diese Komponente
import '../styles/flex.css'; // Gemeinsame Flex-Stile
import '../styles/songcard.css'; // Stile für die Songkarten

const JazzPopLieder = () => {
    const songs = [
        { title: "Ain't No Sunshine", artist: 'Bill Withers' },
        { title: 'Alice in Wonderland', artist: 'Jazz-Standard' },
        { title: 'All of Me', artist: 'Jazz-Standard' },
        { title: 'All of Me', artist: 'John Legend' },
        { title: 'Billie Jean', artist: 'Michael Jackson' },
        { title: 'Blackbird', artist: 'The Beatles' },
        { title: 'But for Now', artist: 'Jamie Cullum' },
        { title: 'Cannonball', artist: 'Damien Rice' },
        { title: 'Ceora', artist: 'Jazz-Standard' },
        { title: 'Come Together', artist: 'The Beatles' },
        { title: 'Creep', artist: 'Radiohead' },
        { title: 'Desafinado', artist: 'Jazz-Standard' },
        { title: "Don't Look Back In Anger", artist: 'Oasis' },
        { title: "Don't Stop Me Now", artist: 'Queen' },
        { title: 'Englishman in New York', artist: 'Sting' },
        { title: 'Every Breath You Take', artist: 'The Police' },
        { title: 'Fever', artist: 'Peggy Lee' },
        { title: 'Fields Of Gold', artist: 'Sting' },
        { title: 'Fly Me To The Moon', artist: 'Jazz-Standard' },
        { title: 'Georgia On My Mind', artist: 'Jazz-Standard' },
        { title: 'Get Lucky', artist: 'Daft Punk' },
        { title: 'Girl From Ipanema', artist: 'Antônio Carlos Jobim' },
        { title: 'Hallelujah, I Love Her So', artist: 'Ray Charles' },
        { title: 'Hey Jude', artist: 'The Beatles' },
        { title: 'Hit the Road Jack', artist: 'Ray Charles' },
        { title: 'How Deep Is Your Love', artist: 'Bee Gees' },
        { title: 'How High The Moon', artist: 'Jazz-Standard' },
        { title: 'I Got A Woman', artist: 'Ray Charles' },
        { title: 'I See Fire', artist: 'Ed Sheeran' },
        { title: 'I Took A Pill In Ibiza', artist: 'Jamie Cullum' },
        { title: 'Imagine', artist: 'John Lennon' },
        { title: "Isn't She Lovely", artist: 'Stevie Wonder' },
        { title: "It Don't Mean A Thing", artist: 'Jazz-Standard' },
        { title: 'Just The Two Of Us', artist: 'Bill Withers & Grover Washington, Jr.' },
        { title: 'Lean On Me', artist: 'Bill Withers' },
        { title: 'Love Yourself', artist: 'Justin Bieber' },
        { title: 'Lullaby Of Birdland', artist: 'Jazz-Standard' },
        { title: 'Moondance', artist: 'Van Morrison' },
        { title: 'My Yard', artist: 'Jamie Cullum' },
        { title: 'No Woman, No Cry', artist: 'Bob Marley & The Wailers' },
        { title: 'Seven Nations Army', artist: 'The White Stripes' },
        { title: 'Shape Of My Heart', artist: 'Sting' },
        { title: 'Smells Like Teen Spirit', artist: 'Nirvana' },
        { title: 'Someday My Prince Will Come', artist: 'Jazz-Standard' },
        { title: 'Something Just Like This', artist: 'The Chainsmokers & Coldplay' },
        { title: 'Somewhere Over The Rainbow', artist: "Israel Kamakawiwo'ole" },
        { title: 'Stand By Me', artist: 'Ben E. King' },
        { title: 'Summertime', artist: 'George Gershwin' },
        { title: 'Sunny', artist: 'Boney M.' },
        { title: 'The Chicken', artist: 'Jaco Pastorius' },
        { title: 'The Long And Winding Road', artist: 'The Beatles' },
        { title: 'The Nearness Of You', artist: 'Jazz-Standard' },
        { title: 'Walk On The Wild Side', artist: 'Lou Reed' },
        { title: 'Wave', artist: 'Antônio Carlos Jobim' },
        { title: 'Zieh die Schuh aus', artist: 'Roger Cicero' }
    ];

    return (
        <div>
            <h1>Jazz-Pop-Lieder</h1>
            <div className="song-card-container flex-row space-around wrap">
                {songs.map((song, index) => (
                    <div className="song-card" key={index}>
                        <div className="song-title">{song.title}</div>
                        <div>{song.artist}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JazzPopLieder;
