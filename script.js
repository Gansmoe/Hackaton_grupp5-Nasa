var randomNumber = Math.floor(Math.random() * 1001);

const getData = async (roverName) => {
    const response = await fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/" + roverName + "/photos?sol="+randomNumber+"&api_key=KnCqcF57LIxMc5bB3MvfiBr0g0WxB7Vfaf5fRxX0")
    const data = await response.json();
    console.log(data);
    return data;
}

const printData = async (roverName) => {
    const numberOfPics = document.getElementById("numberOfPics");
    const sol = document.getElementById("sol");
    const picAppend = document.getElementById("pics");
    const picData = await getData(roverName);

    numberOfPics.innerText = picData.photos.length +" bilder";
    sol.innerText="Sol " + picData.photos[0].sol;

    for (let i = 0; i < picData.photos.length; i++)
    {
        const div = document.createElement("div");
        div.className = "card mx-auto";
        div.style = "width: 20rem;"
        const img = document.createElement("img");
        img.src = picData.photos[i].img_src;
        div.appendChild(img)
        picAppend.appendChild(div);
    }
}