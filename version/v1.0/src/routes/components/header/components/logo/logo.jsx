import { Link } from "react-router-dom";

import "./logo.css"

export default function Logo () {
    return (
        <>
            <div className="header_logo">
                <Link to={"/"}>search please</Link>
            </div>            
        </>
    )
}