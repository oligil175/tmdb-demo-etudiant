






document.addEventListener("DOMContentLoaded", function (){


    let connexion = new MovieDb();



if (document.location.pathname.search("fiche-film.html")>0){


    let params = (new URL(document.location)).searchParams;

    connexion.requeteInfoFilm(params.get("id"));



}else {


    connexion.requeteDernierFilm();







}






});








class MovieDb {

    constructor() {


        console.log("Constructeur");

        this.APIkey = "2437ff81f0910c3e12d904caf7628905";

        this.lang = "fr-CA";

        this.baseURL = "https://api.themoviedb.org/3";


        this.imgPath = "https://image.tmdb.org/t/p/";


        this.totalFilm = 8;


    }




    //-----------------------------------------------------------------------------------------------------------------------------------//



    requeteDernierFilm() {


        let requete = new XMLHttpRequest();


        requete.addEventListener("loadend", this.retourRequeteDernierFilm.bind(this));


        // requete.open("GET", "https://api.themoviedb.org/3/movie/now_playing?api_key=2437ff81f0910c3e12d904caf7628905&language=fr-CA&page=1")
        requete.open("GET", this.baseURL + "/movie/now_playing?api_key=" + this.APIkey + "&language=" + this.lang + "&page=1")

        requete.send();

    }


    retourRequeteDernierFilm(e) {

        console.log("Retour dernier Film");

        let target = e.currentTarget;


        let data;


//console.log(target.responseText);


        data = JSON.parse(target.responseText).results;

        //console.log(data);


        this.afficheDernierFilm(data);


    }


    afficheDernierFilm(data) {


        for (let i = 0; i < this.totalFilm; i++) {


            console.log(data[i].title);


            let unArticle = document.querySelector(".template>article.film").cloneNode(true);



            unArticle.querySelector("h2").innerHTML = data[i].title;
            unArticle.querySelector("p.description").innerHTML = data[i].overview || "Pas de description";
            unArticle.querySelector("p.cote").innerHTML = data[i].revenue;
            unArticle.querySelector("p.sortie").innerHTML = data[i].created_at;

            let src = this.imgPath + "w185" + data[i].poster_path;

            console.log(src)


            let uneImage = unArticle.querySelector("img");
            uneImage.setAttribute("src", src);
            uneImage.setAttribute("alt", data[i].title);


            document.querySelector(".liste-films").appendChild(unArticle);


        }

    }







    //-----------------------------------------------------------------------------------------------------------------------------------//







    requeteInfoFilm(movieId) {


        let request = new XMLHttpRequest();


        request.addEventListener("loadend", this.retourRequeteInfoFilm.bind(this));


        // requete.open("GET", "https://api.themoviedb.org/3/movie/now_playing?api_key=2437ff81f0910c3e12d904caf7628905&language=fr-CA&page=1")
        request.open("GET", this.baseURL + "/movie/" + movieId + "?api_key=" + this.APIkey + "&language=" + this.lang);


        //  {movie_id}?api_key=<>&language=en-US


        request.send();

    }


    retourRequeteInfoFilm(e) {

        console.log();

        let target = e.currentTarget;


        let data;


//console.log(target.responseText);


        data = JSON.parse(target.responseText);

        // console.log(data);


        this.afficheInfoFilm(data);


    }


    afficheInfoFilm(data) {


        document.querySelector("h1").innerHTML = data.title;
        document.querySelector("p.revenu").innerHTML = data.revenue;
        document.querySelector("p.sortie").innerHTML = data.language;






      let image = this.imgPath + "w342" + data.poster_path;

       // console.log(image);



       // document.querySelector("img.affiche").innerHTML = data.image;




        }

//-----------------------------------------------------------------------------------------------------------------------------------//






























}
var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters

    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})



















































