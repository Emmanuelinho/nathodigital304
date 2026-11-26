import HeroBanner from "../components/home/HeroBanner";
import ExploraPlataforma from "../components/home/ExploraPlataforma";

// Seccion del EQUIPO 1
import ConoceLasMoras from '../components/home/equipo1/ConoceLasMoras'
import GaleroaComunidad from  '../components/home/equipo1/GaleriaComunidad'
import PorQueVisitar from '../components/home/equipo1/PorQueVisitar'

export default function Inicio() {
    return (
        <>
        {/* 1. Banner */}
        <HeroBanner/>

        {/*2, 3 y 4. secciones del EQUPO 1 */}
        <ConoceLasMoras />
        <GaleroaComunidad />
        <PorQueVisitar />

        {/* 5. Explora la plataforma */}
        <ExploraPlataforma />
    
        </>
    )
}