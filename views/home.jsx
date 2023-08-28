const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>Travel App</h1>
        <div>
          <img
            src="images\deskMap.jpg"
            width="90%"
            height="20%"
            alt="world map"
          ></img>
          <div>
            Photo from{" "}
            <a href="https://getinfolist.com/2014/03/12/printable-map-of-the-world/">
              getinfollist.com
            </a>
          </div>
        </div>

        <img
          src="images/pi_beach.jpg"
          width="90%"
          height="20%"
          alt="se asia beach"
        ></img>
        <br></br>
        <a href="/places">
          <button className="btn-primary">Destinations</button>
        </a>
        <br />
      </main>
    </Def>
  );
}

module.exports = home;
