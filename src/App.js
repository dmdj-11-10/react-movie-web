import React from "react";
import PropTypes from "prop-types";

const iLoveHye = [
  {
    id: 1,
    name: "hyewon",
    image: "https://lh3.googleusercontent.com/proxy/61tV8oBQlASyzg0O-pkEMu70Qz5w4ZGlzeZEF3XMk-nJowpifrOqx7J4_4_fwy5IPCCqFvro7cBlY7OFonIsLbWreYIy7ie7a441Ilxo5lUbioTUWyfpkNlSfQYmZcqptLyIVl3uZ6HM0yG5xJ_Y60R_Um1ZLMfh7Zqpk-9t5D7wcPs0j8kY9KWumgwXlVu8YJz1DXqMLha1N6qZILxlWkNtyM_SQfbqev7_hSp8HlRDGPmrT36-xFZySuF6P7qiOENm8hr6IErp9oS5zb6JTYHpZYXpMnpmZyQGUWMfNA",
    rating: 100
  },
  {
    id: 2,
    name: "Love",
    image: "https://adventuresoftheordinaryblog.files.wordpress.com/2020/06/love-technology-style.jpg",
    rating: 101
  }
];

function Hyewon({name, picture, rating}) {
  return (
    <div>
      <h2>{name} Love</h2>
      <p>{rating}</p>
      <img src={picture} alt={name+" img"} />
    </div>
  )
}

Hyewon.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {iLoveHye.map(love => (
            <Hyewon
              key={love.id}
              name={love.name}
              picture={love.image}
              rating={love.rating}
            />
          )
        )
      }
    </div>
  );
}

export default App;
