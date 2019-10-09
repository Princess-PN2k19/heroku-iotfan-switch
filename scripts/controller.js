var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var off = document.getElementById("off");
var Status = document.getElementById("stat");

client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt")

client.on("connect", () => {
    off.disabled = true;
    Status.innerHTML = "The fan is currently turned Off";
});

one.addEventListener('click', (prevent) => {
    prevent.preventDefault();

    off.disabled = false;
    Status.innerHTML = "The fan is currently turned 1";

    client.publish('princess/fan/status', 'FAN TURNED 1 at ' + new Date(), (err) => {
        if (err) {
            alert("Oopps! Failed to connect!")
        }
    });
})

two.addEventListener('click', (prevent) => {
    prevent.preventDefault();

    off.disabled = false;
    Status.innerHTML = "The fan is currently turned 2";

    client.publish('princess/fan/status', 'FAN TURNED 2 at ' + new Date(), (err) => {
        if (err) {
            alert("Oopps! Failed to connect!")
        }
    });
})

three.addEventListener('click', (prevent) => {
    prevent.preventDefault();

    off.disabled = false;
    Status.innerHTML = "The fan is currently turned 3";

    client.publish('princess/fan/status', 'FAN TURNED 3 at ' + new Date(), (err) => {
        if (err) {
            alert("Oopps! Failed to connect!")
        }
    });
})

off.addEventListener('click', () => {

    Status.innerHTML = "The fan is currently turned Off";

    client.publish('princess/fan/status', 'FAN TURNED OFF at ' + new Date(), function (err) {
        if (err) {
            alert("Oopps! Failed to connect!")
        }
    })
});
