import { createContext, useState } from "react";
import { apiProds } from "../services/api";
import { IProdContext, Prods } from "../types/types";

export const ProdContext = createContext<IProdContext>({} as IProdContext)

export const ProdProvider = ({children}: {children: JSX.Element}) =>{

        const[prods, setProds] = useState<Prods[]>([])

        const[individualProd, setIndividualProd] = useState<Prods | null>(null)

        const getProds = async () =>{
           await apiProds.get('products')
            .then(response =>{
                setProds(response.data)
            })
        }

        const getProdDetails = async (url: string) =>{
          await apiProds.get(url)
            .then(response=>{
                setIndividualProd(response.data)
            })
        }  

    return(
        <ProdContext.Provider value={{prods, getProds, getProdDetails, individualProd}}>
            {children}
        </ProdContext.Provider>
    )
}