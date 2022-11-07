import { Link } from "react-router-dom";
// Components
import Botao from "./components/campo&BotaoBusca/botao";
import Campo from "./components/campo&BotaoBusca/campo";
import Lista from "./components/lista/lista";
import Logo from "./components/logo/logo";

// Informações e Métodos
import paramsItemHeader from "../../../public/listaItemHeader"

export default function Header () {



    return (
        <>
            <header>
                <Logo/>
                
                <div className="header_sup">
                    <div className="campoBusca">
                        <Campo/>
                        <Botao><i class="fa-solid fa-magnifying-glass"></i></Botao>
                    </div>
                </div>

                <div className="header_inf">
                    <Lista parametro={paramsItemHeader}/>
                </div>
            </header>
        </>
    )
}