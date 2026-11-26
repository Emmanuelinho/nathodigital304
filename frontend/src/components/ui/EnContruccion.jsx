import { Link } from "react-router-dom";

export default function EnConstruccion(){
    return(
        <section className="mx-auto max-w-2xl px-4 text-center">
            <p className="text-5xl" aria-hidden="true"></p>
            <h1 className="mt-4 text-3xl font-extrabold"> Estamos construyendo esta seccion</h1>
            <p className="mt-3 text-carbon/30">lo esta progrmando otro equipo. !vuelva pronto¡</p>
            <Link to="/" className="mt-8 inline-block rounded-full bg-maiz px-3 font-extrabold text-carbon hover:bg-maiz/80">
            Regrsa al inicio 
            </Link>
        </section>
    )
}