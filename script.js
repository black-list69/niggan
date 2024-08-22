document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('vehicle-form');
    const vehicleList = document.getElementById('vehicle-list');

    const vehicles = [
        { id: 1, tipo: 'carro', modelo: 'Fiat Uno', disponivel: true },
        { id: 2, tipo: 'moto', modelo: 'Honda CG', disponivel: false },
        { id: 3, tipo: 'van', modelo: 'Volkswagen Kombi', disponivel: true },
    ];

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const tipo = document.getElementById('tipo').value;
        const data = document.getElementById('data').value;

        let filteredVehicles = vehicles.filter(vehicle => vehicle.tipo === tipo && vehicle.disponivel);
        
        vehicleList.innerHTML = ''; // Limpa a lista existente
        filteredVehicles.forEach(vehicle => {
            const listItem = document.createElement('li');
            listItem.textContent = `${vehicle.modelo} (${vehicle.tipo})`;
            vehicleList.appendChild(listItem);
        });
    });
});
