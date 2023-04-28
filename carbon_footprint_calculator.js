function calculate() {
    // Get user inputs
    var electricity_usage = parseFloat(document.getElementById("electricity_usage").value);
    var gas_usage = parseFloat(document.getElementById("gas_usage").value);
    var car_mileage = parseFloat(document.getElementById("car_mileage").value);
    var public_transport_mileage = parseFloat(document.getElementById("public_transport_mileage").value);
    var flight_mileage = parseFloat(document.getElementById("flight_mileage").value);
  
    // Calculate carbon footprint
    var electricity_emissions = electricity_usage * 0.0006; // kg CO2e/kWh
    var gas_emissions = gas_usage * 5.29; // kg CO2e/therm
    var car_emissions = car_mileage * 0.404; // kg CO2e/mile
    var public_transport_emissions = public_transport_mileage * 0.063; // kg CO2e/mile
    var flight_emissions = flight_mileage * 0.257; // kg CO2e/mile
  
    var total_emissions = electricity_emissions + gas_emissions + car_emissions + public_transport_emissions + flight_emissions;
  
    // Output results
    document.getElementById("result").innerHTML = "Your carbon footprint is " + total_emissions.toFixed(2) + " kg CO2e per month.";
  }
  