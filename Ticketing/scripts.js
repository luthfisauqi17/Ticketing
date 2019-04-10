// Fill the form
var from = document.getElementById("from");
var destination = document.getElementById("destination");
var departing = document.getElementById("departing");
var returning = document.getElementById("returning");
var adults = document.getElementById("adults");
var children = document.getElementById("children");
var infants = document.getElementById("infants");
var preffered_airline = document.getElementById("preffered_airline");
var preffered_class = document.getElementById("preffered_class");
var fill_btn = document.getElementById("fillbtn");
var check_btn = document.getElementById("checkbtn");

// Flight Available
var flight_info = document.getElementById("flight_info");
var flight_available = document.getElementById("flight_available");

// Check flights
var route = document.getElementById("route");
var returned = document.getElementById("returned");
var total = document.getElementById("total");
var yourplane = document.getElementById("yourplane");
var personal_info_btn = document.getElementById("personal_info_btn");

// Personal info
var personal_info = document.getElementById("personal_info");


var city = ['Jakarta', 'Surabaya', 'Medan', 'Padang', 'Pekanbaru', 'Semarang', 'Pontianak', 'Yogyakarta', 'Bandung', 'Banda Aceh'];
var airlines = ['Batik Air', 'Citilink', 'Garuda Indonesia', 'Lion Air', 'Sriwijaya Air', 'Wings Air'];
var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var airplaneclass = ['Economy', 'Premium Economy', 'Business', 'First Class'];



function checkTicket() {
    this.var_from;
    this.var_destination;
    this.var_departing;
    this.departing_d;
    this.departing_m;
    this.departing_y;
    this.returning_d;
    this.returning_m;
    this.returning_y;
    this.var_adults;
    this.var_children;
    this.var_infants;
    this.var_prefferedClass;
    this.var_prefferedAirline;
}

var return_validation;

fill_btn.addEventListener('click', function(){


    // From
    while (true) {
        var choice = parseInt(prompt("Flying from?\n1. Jakarta\n2. Surabaya\n3. Medan\n4. Padang\n5. Pekanbaru\n6. Semarang\n7. Pontianak\n8. Yogyakarta\n9. Bandung\n10. Banda Aceh"));
        for(let i=0;i<=city.length;i++){
            if (choice == i){ 
                checkTicket.var_from = city[i-1];
            }
        }
        if(choice<0||choice>10) continue;
        else break;
    }


    // From
    while (true) {
        var choice = parseInt(prompt("Flying to?\n1. Jakarta\n2. Surabaya\n3. Medan\n4. Padang\n5. Pekanbaru\n6. Semarang\n7. Pontianak\n8. Yogyakarta\n9. Bandung\n10. Banda Aceh"));
        for(let i=0;i<=city.length;i++){
            if (choice == i){
                checkTicket.var_destination = city[i-1];
            }
        }
        if(choice<0||choice>10) continue;
        else break;
    }


    // Departing
    while(true) {
        var d_date = parseInt(prompt("Departing Date?"));
        if(d_date<=0||d_date>31) {
            alert("Please enter the correct date")
            continue;
        }
        else {
            checkTicket.departing_d = d_date;
            break;
        }
    }
    while(true) {
        var d_month = parseInt(prompt("Departing Month?"));
        if(d_month<=0||d_month>12) {
            alert("Please enter the correct month")
            continue;
        }
        else {
            for(let i=0;i<=month.length;i++){
                if(d_month == i) checkTicket.departing_m = month[i-1];
            }
            break;
        }
    }
    while(true) {
        var d_year = parseInt(prompt("Departing Year"));
        if(d_year<=2018||d_year>2024) {
            alert("Sorry, our year range is 5 years only");
            continue;
        }
        else {
            checkTicket.departing_y = d_year;
            break;
        }
    }


    // Returning
    return_validation = confirm("You want to ticket for returning as well?");
    if (return_validation == true) {
        while(true) {
            var r_date = parseInt(prompt("Returning Date?"));
            if(r_date<=0||r_date>31) {
                alert("Please enter the correct date")
                continue;
            }
            else {
                checkTicket.returning_d = r_date;
                break;
            }
        }
        while(true) {
            var r_month = parseInt(prompt("Returning Month?"));
            if(r_month<=0||r_month>12) {
                alert("Please enter the correct month")
                continue;
            }
            else {
                for(let i=0;i<=month.length;i++){
                    if(r_month == i) checkTicket.returning_m = month[i-1];
                }
                break;
            }
        }
        while(true) {
            var r_year = parseInt(prompt("Returning Year"));
            if(r_year<=2018||r_year>2024) {
                alert("Sorry, our year range is 5 years only");
                continue;
            }
            else {
                checkTicket.returning_y = r_year;
                break;
            }
        }
        returning.innerHTML = "Returning: "+checkTicket.returning_d+"-"+checkTicket.returning_m+"-"+checkTicket.returning_y;
    }
    else returning.innerHTML = "Returning: -";


    // Travellers
    while(true) {
        var choice = parseInt(prompt("How many adults?"))
        if(choice<0) {
            continue;
        }
        else {
            checkTicket.var_adults = choice;
            break;
        }
    }

    while(true) {
        var choice = parseInt(prompt("How many children?"))
        if(choice<0) {
            continue;
        }
        else {
            checkTicket.var_children = choice;
            break;
        }
    }

    while(true) {
        var choice = parseInt(prompt("How many infants?"))
        if(choice<0) {
            continue;
        }
        else {
            checkTicket.var_infants = choice;
            break;
        }
    }


    // Preffered airline
    while(true) {
        var choice = parseInt(prompt("Preffered airline\n1. Batik Air\n2. Citilink\n3. Garuda Indonesia\n4. Lion Air\n5. Sriwijaya Air\n6. Wings Air"));
        for(let i=0;i<=airlines.length;i++) {
            if(choice == i) checkTicket.var_prefferedAirline = airlines[i-1];
        }
        if(choice<0||choice>6) continue;
        else break;
    }


    // preffered class
    while(true) {
        var choice = parseInt(prompt("Preffered class\n1. Economy\n2. Premium Economy\n3. Business\n4. First Class"));
        for(let i=0;i<=airplaneclass.length;i++) {
            if(choice == i) checkTicket.var_prefferedClass = airplaneclass[i-1];
        }
        if(choice<0||choice>4) continue;
        else break;
    }


    from.innerHTML = "From: "+checkTicket.var_from;
    destination.innerHTML = "Destination: "+checkTicket.var_destination;
    departing.innerHTML = "Departing: "+checkTicket.departing_d+"-"+checkTicket.departing_m+"-"+checkTicket.departing_y;
    adults.innerHTML = "Adults: "+checkTicket.var_adults;
    children.innerHTML = "Children: "+checkTicket.var_children;
    infants.innerHTML = "Infants: "+checkTicket.var_infants;
    preffered_airline.innerHTML = "Preffered airline: "+checkTicket.var_prefferedAirline;
    preffered_class.innerHTML = "Preffered class: "+checkTicket.var_prefferedClass;
});

var totprice = 0;
var plane;
var plane_code;
var random_code = Math.floor(Math.random()*200)+100;

check_btn.addEventListener('click', function(){

    if(checkTicket.var_adults>0)
    {
        totprice += checkTicket.var_adults*100000;
    }

    if(checkTicket.var_children>0)
    {
        totprice += checkTicket.var_children*50000;
    }
    if(checkTicket.var_infants>0)
    {
        totprice += checkTicket.var_infants*25000;
    }
    console.log("adults "+checkTicket.var_adults);
    console.log("children "+checkTicket.var_children);
    console.log("infants "+checkTicket.var_infants);

    console.log("travellers "+totprice);
    
    
    if(checkTicket.var_destination == 'Jakarta' || checkTicket.var_destination == 'Surabaya' ||checkTicket.var_destination == 'Semarang' ||checkTicket.var_destination == 'Yogyakarta' ||checkTicket.var_destination == 'Bandung') totprice+=250000;
    else if(checkTicket.var_destination == 'Medan' ||checkTicket.var_destination == 'Padang' ||checkTicket.var_destination == 'Pekanbaru') totprice+=350000;
    else if(checkTicket.var_destination == 'Pontianak' ||checkTicket.var_destination == 'Banda Aceh') totprice+=450000;
    console.log("route "+totprice);

    if(checkTicket.var_prefferedAirline == 'Batik Air') {
        totprice+=400000;
        plane = "Batik Air";
        plane_code = "ID-";
    }
    else if(checkTicket.var_prefferedAirline == 'Citilink') {
        totprice+=600000;
        plane = "Citilink Indonesia";
        plane_code = "QG-"
    }
    else if(checkTicket.var_prefferedAirline == 'Garuda Indonesia') {
        totprice+=700000;
        plane = "Garuda Indonesia";
        plane_code = "GA-";
    }
    else if(checkTicket.var_prefferedAirline == 'Lion Air') {
        totprice+=600000;
        plane = "Lion Air";
        plane_code = "JT-";
    }
    else if(checkTicket.var_prefferedAirline == 'Sriwijaya Air') {
        totprice+=500000;
        plane = "Sriwijaya Air";
        plane_code = "SJ-";
    }
    else if(checkTicket.var_prefferedAirline == 'Wings Air') {
        totprice+=500000;
        plane = "Wings Air";
        plane_code = "IW-";
    }
    console.log("airline "+totprice);


    if(checkTicket.var_prefferedClass == 'Economy') totprice+=100000;
    else if(checkTicket.var_prefferedClass == 'Premium Economy') totprice+=200000;
    else if(checkTicket.var_prefferedClass == 'Business') totprice+=300000;
    else if(checkTicket.var_prefferedClass == 'First Class') totprice+=400000;
    console.log("class "+totprice);


    route.innerHTML = checkTicket.var_from+" -> "+checkTicket.var_destination;
    if(return_validation == true) {
        totprice*=2;
        returned.innerHTML = checkTicket.var_destination+" -> "+checkTicket.var_from;
        console.log("Returning = totprice * 2");
    }
    yourplane.innerHTML = plane+" ("+plane_code+random_code+") "+checkTicket.var_prefferedClass;
    total.innerHTML = "Rp."+totprice;
    
    console.log("total "+totprice);
    


    flight_available.style.display = "block";
});

personal_info_btn.addEventListener('click', function(){
    personal_info.style.display = "block";
})

