
import { Link } from "react-router-dom";
import paramsItem from "../../../../../public/listaItem"
import Catalogo from "../catalogo/catalogo";

import "./lista.css";

export default function Lista ({parametro}) {

    return (
        <>

            <nav className="menu">
                <ul className="lista">
                    {parametro.map((params) => (                            
                        <li className="item" key={params.id}>                            
                            <i class="fa-solid fa-list"></i>
                            <Link to={""}>{params.nome}</Link>
                            <div className="sub">                                
                               <Catalogo paramsCatalogo={paramsItem}/>
                            </div>
                        </li>
                    ))}                   
                </ul>
            </nav>  
        </>
    )
}