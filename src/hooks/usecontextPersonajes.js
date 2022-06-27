import { useContext } from "react";
import contextRevisados from "../context/contextRevisados";
export default function useRevisadosContext(){
    return useContext(contextRevisados)
}