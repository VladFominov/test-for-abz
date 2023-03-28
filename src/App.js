import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Registration from "./components/registrationSection/Registration";
import Users from "./components/users_section/Users";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Users />
      <Registration />
    </div>
  );
}

export default App;
