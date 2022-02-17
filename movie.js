let movies = {
    data: [
        {
            movieName: "Doctor Strange",
            rating: 8,
            image: "ds.jpg",
            url: "https://www.youtube.com/watch?v=Rt_UqUm38BI&ab_channel=MarvelEntertainment",
        },
        {
            movieName: "Radhe Shyam",
            rating: 9,
            image: "radheshyam.jpg",
            url: "https://www.youtube.com/watch?v=ZAP6q_Zv-4g&ab_channel=T-Series",
        },
        {
            movieName: "Rise Roar Revolt (RRR)",
            rating: 9.5,
            image: "rrr.jpg",
            url: "https://www.youtube.com/watch?v=f_vbAtFSEc0&ab_channel=PenMovies",
        },
        {
            movieName: "The BatMan 2022",
            rating: 9,
            image: "batman.jpg",
            url: "https://www.youtube.com/watch?v=mqqft2x_Aa4&ab_channel=WarnerBros.Pictures",
        },
        {
            movieName: "Bheemla Nayak",
            rating: 8,
            image: "bheemla.jpg",
            url: "https://www.youtube.com/watch?v=ONLErlc_VHk&ab_channel=DropartRemix",
        },
        {
            movieName: "KGF",
            rating: 8.5,
            image: "kgf.jpg",
            url: "https://www.youtube.com/watch?v=Qah9sSIXJqk&ab_channel=HombaleFilms",
        },
    ],
};

//creating an array to store movies data and to sort them based on rating
let movieslist = []
//pushing the movies data to the array movieslist
for (let i = 0; i < movies.data.length; i++) {
    movieslist.push(movies.data[i]);
}

//function to sort the elements in the movieslist array based on ranking 
function sortRanking(movieslist) {
    for (let i = 0; i < movieslist.length; i++) {
        for (let j = i; j < movieslist.length; j++) {
            if (movieslist[i].rating < movieslist[j].rating) {
                let temp = movieslist[i]; 
                movieslist[i] = movieslist[j]; 
                movieslist[j] = temp;
            };
        };
    };
    return movieslist;
}
//calling sorting method 
sortRanking(movieslist);

//simple alternative to sort based on ranking
// movieslist.sort((c, other) => other.rating - c.rating);

//using a for loop to display all the list of movies
for (let i of movieslist) {
    //Creating Card
    let card = document.createElement("div_element");
    card.classList.add("card", i.rating);
    //image div_element
    let imgContainer = document.createElement("div_element");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div_element");
    container.classList.add("container");
    //movie name
    let name = document.createElement("h1");
    name.classList.add("movie-name");
    name.innerText = i.movieName.toUpperCase();
    container.appendChild(name);
    //rating
    let rating = document.createElement("h2");
    rating.innerText = "Rating:-" + " " + i.rating + "/10";
    container.appendChild(rating);
    card.appendChild(container);
    
    //url
    let url = document.createElement('a'); 
    var link = document.createTextNode("Watch the trailer");
    url.appendChild(link);
    url.href = i.url;
    container.appendChild(url);
    document.getElementById("show_movies").appendChild(card);

    
    
}

//Search button click functionality
document.getElementById("search").addEventListener("click", (e) => {
    //initializations
    e.preventDefault();
    displaySearchResult();
});
//implementing search function
function displaySearchResult() {
    let searchInput = document.getElementById("inputvalue").value;
    let elements = document.querySelectorAll(".movie-name");
    let cards = document.querySelectorAll(".card");
    console.log(searchInput)

    //initialize a var to check it for search element 
    let flag = 0
    //initializing the loop to check the search result
    elements.forEach((element, index) => {
        //check if text includes the search value
        if (element.innerText.includes(searchInput.toUpperCase())) {
            
            console.log(searchInput.toUpperCase())
            //display matching card and removing the hide data functionality for it to display
            cards[index].classList.remove("hide_data");
            //if flag var increments then then the search result is present
            flag++;
            console.log(flag)
        } else {
            //hide_data others
            cards[index].classList.add("hide_data");
        }
    });
    console.log("FLAG = " + flag)
    //calling compute function
    compute(flag)
}

//calling compute function to know whether the search element is found or not
function compute(flag) {
    if (flag == 0) {
        console.log("flg : " + flag)
        //if search element is not found the print not found 
        document.getElementById('errorDisplay').innerHTML = 'No Movies Found!!'
    }
    else {
        document.getElementById('errorDisplay').style.visibility = 'none'
    }
}

