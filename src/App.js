import React from "react";

function Food(props) {
  return (
  <h1>{props.fav}가 좋아..!!</h1>
  )
}


function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <Food fav="kimchi" />
      <Food fav="혜원이" />
      <Food fav="진짜로 혜원이" />
      <Food fav="엄청 혜원이" />
      <Food fav="커여운 혜원이" />
    </div>
  );
}

export default App;
