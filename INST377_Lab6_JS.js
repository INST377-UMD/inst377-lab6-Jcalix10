function getMap() {

    var map = L.map('map').setView([getRandomInRange(30, 35, 3), getRandomInRange(-90, -100, 3)], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 5,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map)


    for (let i = 1; i < 4; i++) {
        const latitude = getRandomInRange(30, 35, 3)
        const longitude = getRandomInRange(-90, -100, 3)

        console.log("long", longitude)
        console.log("lat", latitude)

        var marker = L.marker([latitude, longitude]).addTo(map)
        document.getElementById('mark' + i).innerHTML += `Latitude: ${latitude}, Longitude: ${longitude}`

        // fetch('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en')
        //     .then((res) => res.json())
        //     .then((resJson) => {
        //         const locality = 
        //         document.getElementById('locality' + i).innerHTML = `Locality: ${locality}`;
        //     })

    }


}

function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
}

window.onload = getMap
