console.log("loaded!");



const player = document.querySelector('#player');
const theball = document.querySelector('#theball');
const pin1 = document.querySelector('#pin1');

player.addEventListener('collide', function (e) {

    e.detail.target.el;  // Original entity (playerEl).
    e.detail.body.el;    // Other entity, which playerEl touched.
    e.detail.contact;    // Stats about the collision (CANNON.ContactEquation).
    e.detail.contact.ni; // Normal (direction) of the collision (CANNON.Vec3).

    var positionX = e.detail.body.el.getAttribute("position").x;
    var positionY = e.detail.body.el.getAttribute("position").y;
    var positionZ = e.detail.body.el.getAttribute("position").z;

    // THIS IS HELPFUL (POSITION of thing bumped)
    console.log("POSITION X:" + positionX.toFixed(2).toString() + " Y: " + positionY.toFixed(2).toString() + " Z: " + positionZ.toFixed(2).toString());

    // THESE ARE NOT HELPFUL (ROTATION of thing bumped)
    console.log(e.detail.body.el.getAttribute("rotation"));
    console.log(e.detail.body.el.object3D.rotation);
});
