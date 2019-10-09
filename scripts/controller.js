var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var off = document.getElementById("off");
var Status = document.getElementById("stat");
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt")

client.on("connect", () => {
    off.disabled = true;
    Status.innerHTML = "The fan is currently turned Off";
});

one.addEventListener('click', (prevent) => {
    prevent.preventDefault();

    off.disabled = false;
    Status.innerHTML = "The fan is currently turned 1";

    client.publish('princess/device/status', 'FAN TURNED 1 at ' + date + " "  + time, (err) => {
        if (err) {
            alert("Oopps! Failed to connect!")
        }
    });
})

two.addEventListener('click', (prevent) => {
    prevent.preventDefault();

    off.disabled = false;
    Status.innerHTML = "The fan is currently turned 2";

    client.publish('princess/device/status', 'FAN TURNED 2 at ' + date + " "  + time, (err) => {
        if (err) {
            alert("Oopps! Failed to connect!")
        }
    });
})

three.addEventListener('click', (prevent) => {
    prevent.preventDefault();

    off.disabled = false;
    Status.innerHTML = "The fan is currently turned 3";

    client.publish('princess/device/status', 'FAN TURNED 3 at ' + date + " "  + time, (err) => {
        if (err) {
            alert("Oopps! Failed to connect!")
        }
    });
})

off.addEventListener('click', () => {

    Status.innerHTML = "The fan is currently turned Off";

    client.publish('princess/device/status', 'FAN TURNED OFF at ' + date + " "  + time, function (err) {
        if (err) {
            alert("Oopps! Failed to connect!")
        }
    })
});
