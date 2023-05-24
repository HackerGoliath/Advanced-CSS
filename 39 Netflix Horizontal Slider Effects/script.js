const centerdiv = document.getElementById('centerdiv');


fetch("https://jsonplaceholder.typicode.com/photos?_limit=20")
    .then((apidata) => {
        return apidata.json();
    })
    .then((data) => {
        // console.log(data[0].url);

        data.map(val => {
            key = val.id;
            let img = document.createElement("img");
            // img.src = val.url;

            img.src = `https://picsum.photos/200/300?random=${val.url}`;
            // img.alt = val.title;
            centerdiv.appendChild(img);
            console.log(val.url);
        })
    })
    .catch((e) => console.log(e));