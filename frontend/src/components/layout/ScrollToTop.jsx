import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop(){
    // Corregido: se agregaron los paréntesis () para llamar al hook
    const { pathname } = useLocation();

    useEffect(() =>{
        // Corregido: 'scrollTo' con 's' minúscula
        window.scrollTo(0, 0);
    }, [pathname]);

    return null; 
}