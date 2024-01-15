import React from "react";
import { Content } from "./Components/Content";
import { SideBar } from "./Components/SideBar";

function App() {
  const [hamburgerActive, setHaburgerActive] = React.useState(false);
  return (
    <main className="main-container">
      <SideBar
        hamburgerActive={hamburgerActive}
        onclick={() => {
          setHaburgerActive(!hamburgerActive);
        }}
      />
      <Content hamburgerActive={hamburgerActive} />
    </main>
  );
}

export default App;
