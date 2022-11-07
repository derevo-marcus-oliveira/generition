import { Link, Outlet } from "react-router-dom";

import "./main.css"

export default function Main(){
  return(
    <>
        <main id="main">
          <Outlet/>
        </main>
    </>
  )
}