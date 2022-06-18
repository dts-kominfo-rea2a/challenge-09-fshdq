import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";
import data from "./data/contacts.json";

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="divider"></div>
        {data.map((contact, index) => {
          return <Contact data={contact} key={index} />;
        })}
      </div>
    </div>
  );
};

export default App;
