export const orderFields = [
    { name: 'delivery_location', label:'Miejsce dostarczenia', type: 'text' },
    { name: 'weight', label: 'Waga (kg)', type: 'number' },
    { name: 'client_id', label: 'Klient', type: 'text' },
    { name: 'car_id', label: 'Pojazd', type: 'text' },
    { name: 'driver_id', label: 'Kierowca', type: 'text' },
    { name: 'description', label: 'Opis', type: 'text' },
  ];

export const driverFields = [
    { name: 'name', label: 'Imię', type: 'text' },
    { name: 'surname', label: 'Nazwisko', type: 'text' },
    { name: 'phone_number', label: 'Numer telefonu', type: 'text' },
    { name: 'address', label: 'Adres', type: 'Adres' },
]