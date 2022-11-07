
import { Link } from "react-router-dom";
import "./catalogo.css";

export default function Catalogo ({paramsCatalogo}) {

    return (
        <>

            <nav className="submenu">
                <ul className="sublista">
                    {paramsCatalogo.map((params) => (                            
                        <li className="subitem" key={params.id}>
                            <Link to={params.url}>{params.nome}</Link>
                        </li>
                    ))}                   
                </ul>
            </nav>  
        </>
    )
}