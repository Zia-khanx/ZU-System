function calculate(){
    let travel = parseFloat(document.querySelector("#travel").value);
    if(travel === 0 || isNaN(travel)){
        document.querySelector(".result").textContent = "NOT TRAVELLED";
    }
    else if (travel > 0.1 && travel <= 5){
        document.querySelector(".result").textContent = "Rs 15"
    }
    else if (travel > 5.1 && travel <= 10){
        document.querySelector(".result").textContent = "Rs 20"
    }
    else if (travel > 10.1 && travel <= 15){
        document.querySelector(".result").textContent = "Rs 25"
    }
    else if (travel > 15.1 && travel <= 20){
        document.querySelector(".result").textContent = "Rs 30"
    }
    else if (travel > 20.1 && travel <= 25){
        document.querySelector(".result").textContent = "Rs 35"
    }
    else if (travel > 25.1 && travel <= 30){
        document.querySelector(".result").textContent = "Rs 45"
    }
    else if (travel > 30.1 && travel <= 35){
        document.querySelector(".result").textContent = "Rs 45"
    }
    else if (travel > 35.1 && travel <= 40){
        document.querySelector(".result").textContent = "Rs 50"
    }
    else {
        document.querySelector(".result").textContent = "Rs 55"
    }
}