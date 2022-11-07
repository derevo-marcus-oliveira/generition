import { Link, Outlet } from "react-router-dom";
import Header from "./components/header/header";

import "./main.css"

export default function Main(){
  return(
    <>
      <div id="main">

        <Header/>

        <main>
          <Outlet/>
        </main>

      </div>
    </>
  )
}