import EspacioReservado from '../../ui/EpacioReservado'

export default function ConoceLasMoras() {
    return (
        <section id="conoce-las-moras" className="mx-auto max-w-7x1 scroll-mt-32 px-4 py-16" aria-labelledby="titulo-conoce">
                {/* ▼▼▼ EQUIPO 1: sSU CÓDIGO VA AQUI ▼▼▼ */}

                <EspacioReservado
                equipo="Equipo 1"
                titulo="Imágenes de la comunidad"
                archivo="src/components/home/equpo1/GaleriaComunidad.jsx"
                pemdientes={['Galeria de fotos representativas de Las Moras', 'Fotos en public/img/comunidad/', 'Cada foto con su texto "alt"']}
                />
                <h2 id="titulo-galeria" className="sr-only">Conoce Las Moras </h2>

                {/* ▲▲▲ EQUPO 1: HASTA AQUÍ ▲▲▲ */}
        </section>
    )
}