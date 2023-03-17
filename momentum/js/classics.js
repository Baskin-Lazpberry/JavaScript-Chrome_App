const classics = [
    {
        title:"Liebestraum(Love Dream)"
        , composer:"Franz Liszt"
        ,
    },
    {
        title:"Ondine(From Gaspard de la nuit)"
        , composer:"Maurice Ravel"
        ,
    },
    {
        title:"Pavane pour une infante defunte"
        , composer:"Maurice Ravel"
        ,
    },
    {
        title:"Prelude in C sharp Minor(Op. 3 No. 2)"
        , composer:"Sergei Rachmaninoff"
        ,
    },
    {
        title:"Prelude à l'Après-midi d'un faune"
        , composer:"Claude Debussy"
        ,
    },
    {
        title:"Eine kleine Nachtmusik(II. Romance: Andante)"
        , composer:"Wolfgang Mozart"
        ,
    },
    {
        title:"Nel cor piu non mi sento"
        , composer:"Niccolo Paganini"
        ,
    },
    {
        title:"Waltz of the flowers(From The Nutcracker)"
        , composer:"Pyotr Tchaikovsky"
        ,
    },
    {
        title:"Romance sans paroles"
        , composer:"Henryk Wieniawski"
        ,
    },
    {
        title:"Miserere mei, deus"
        , composer:"Gregorio Allegri"
        ,
    },
    {
        title:"Pas de deux(From The Nutcracker)"
        , composer:"Pyotr Tchaikovsky"
        ,
    },
    {
        title:"Valse sentimentale"
        , composer:"Pyotr Tchaikovsky"
        ,
    },
    {
        title:"La cathedral engloutie"
        , composer:"Claude Debussy"
        ,
    },
    {
        title:"Les sons et les farfums tournent dans l'air du soir"
        , composer:"Claude Debussy"
        ,
    },
    {
        title:"Symphony n. 41 \"Jupiter\" 4th movement"
        , composer:"Wolfgang Mozart"
        ,
    },
    {
        title:"Nocturne in B flat minor Op. 9 No. 1"
        , composer:"Frederic Chopin"
        ,
    },
    {
        title:"Votre Toast(From Carmen)"
        , composer:"Georges Bizet"
        ,
    },
]

const title = document.querySelector("#classic span:first-child");
const composer = document.querySelector("#classic span:last-child");

const todaysClassic = classics[Math.floor(Math.random() * classics.length)];

title.innerText = todaysClassic.title;
composer.innerText = todaysClassic.composer;