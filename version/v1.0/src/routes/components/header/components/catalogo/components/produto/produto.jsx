import { useLoaderData } from "react-router-dom";
import "./produto.css";

export async function loader({request, params}) {
    Produto(params)
    return params;
}

export async function action({request, params}) {
    console.log("Action", request)
    console.log("Action", params)
    return params;
}

export default function Produto (params) {
    debugger
    console.log(params.produtoId )
    return (
        <>
            {params.produtoId == "Teclado" ? 
            (
                
                <>
                    <h1>Mouse</h1>

                </>
            ) : (
                <>
                    <h1>Outra coisa</h1>
                </>
            )}
        </>
    )
}