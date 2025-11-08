document.addEventListener('DOMContentLoaded', () => {
    // 1. Array de datos para los eventos (Simulación de una base de datos)
    const upcomingEvents = [
        {
            id: 1,
            title: "Hackathon del Futuro",
            date: "20 de Noviembre, 2025",
            description: "24 horas de programación y creación de prototipos."
        },
        {
            id: 2,
            title: "Lanzamiento de Drone-Show",
            date: "05 de Diciembre, 2025",
            description: "Espectáculo de luces con 1000 drones sincronizados."
        },
        {
            id: 3,
            title: "Conferencia de IA y Robótica",
            date: "15 de Enero, 2026",
            description: "Expertos globales debaten el futuro de la inteligencia artificial."
        }
    ];

    const eventListContainer = document.getElementById('event-list');

    // 2. Función para renderizar los eventos
    function renderEvents() {
        eventListContainer.innerHTML = ''; // Limpia el contenedor

        upcomingEvents.forEach(event => {
            const eventItem = document.createElement('div');
            eventItem.classList.add('event-item');

            eventItem.innerHTML = `
                <h4>${event.title}</h4>
                <p><strong>Fecha:</strong> ${event.date}</p>
                <p>${event.description}</p>
            `;

            eventListContainer.appendChild(eventItem);
        });
    }

    // Llama a la función para cargar los eventos al iniciar
    renderEvents();

    // 3. Efecto de desplazamiento suave para los enlaces del menú
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Puedes añadir más funcionalidades aquí, como animaciones al hacer scroll.
});