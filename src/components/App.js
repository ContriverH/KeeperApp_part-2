import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((Card) => (
        <Note key={Card.key} title={Card.title} content={Card.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
