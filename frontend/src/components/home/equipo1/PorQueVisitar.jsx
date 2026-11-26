import EspacioReservado from '../../ui/EpacioReservado'

export default function PorQueVisitar() {
    return (
        <section id="por-que-visitar" className="mx-auto max-w-7x1 px-4 py-16" aria-labelledby="titulo-visitar">
            {/* ▼▼▼ EQUPO 1: SU CÓDIGO VA AQUI ▼▼▼ */}

            <EspacioReservado
            equipo="Equipo 1"
            titulo="¿Por que visitar Las Moras?"
            archivo="src/components/home/equpo1/PorqueVisitar.jsx"
            pendientes={['Razones para visitar la comunidad', 'Tarjetas con ícono, titulo y texto breve', 'Opcional: botón de "Cómo llegar"']}
            />
            <h2 id="titulo-visitar" className="sr-only"> ¿Por qué visitar Las Moras?</h2>

            {/* ▲▲▲ EQUIPO 1 : HASTA AQUI ▲▲▲ */}
        </section>
    )
}