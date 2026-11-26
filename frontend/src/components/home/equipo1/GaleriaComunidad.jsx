import EspacioReservado from '../../ui/EpacioReservado'

export default function GaleriaComunidad() {
    return (
        <section id="galeria-comunidad" className="bg-manta-oscura/60" aria-labelledby="titulo-galeria">
            <div className="mx-auto max-w-7x1 px-4 py-16">
                {/* ▼▼▼ EQUIPO 1: sSU CÓDIGO VA AQUI ▼▼▼ */}

                <EspacioReservado
                equipo="Equipo 1"
                titulo="Imágenes de la comunidad"
                archivo="src/components/home/equpo1/GaleriaComunidad.jsx"
                pemdientes={['Galeria de fotos representativas de Las Moras', 'Fotos en public/img/comunidad/', 'Cada foto con su texto "alt"']}
                />
                <h2 id="titulo-galeria" className="sr-only">Imágenes de la comunidad </h2>

                {/* ▲▲▲ EQUPO 1: HASTA AQUÍ ▲▲▲ */}
            </div>
        </section>
    )
}