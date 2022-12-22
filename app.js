// if, if else , else if ladder

//== > < >= <= && || ! true false

/*let a = false;
let b = 20;

if(!a){
    console.log('ok');
}else{
    console.log('not ok');
}

let check = a && b;

console.log(check);*/

let random_number = 44;
submit_btn.onclick = function(){
    let value = guess_value.value;
    
    if(value != random_number) {
        console.log('wrong guess');
        if(value > random_number) {
            output.innerHTML = `
            <p style="text-align: center; padding: 10px; color: white; background-color:red;">
                    Your number is greater then my number.
                </p>
            `
        } else {
            output.innerHTML = `
            <p style="text-align: center; padding: 10px; color: white; background-color:brown;">
                    Your number is less then my number.
                </p>
            `
        }
    }else{
        console.log('ok match');
        output.innerHTML = `
            <p style="text-align: center; padding: 10px; color: white; background-color:green;">
                Hurry you are win
            </p>
        `
    }
}



/*submit_btn.onclick = function() {
    let value = guess_value.value;

    if (value >= 40 && value <= 49) {
        console.log('d');

    } else if (value >= 50 && value <= 59) {
        console.log('c');

    } else if (value >= 60 && value <= 69) {
        console.log('b');

    } else if (value >= 70 && value <= 79) {
        console.log('a');

    } else if (value >= 80 && value <= 100) {
        console.log('a+');
    } else {
        console.log('fails');
    }
}*/


/*for (let index = 1; index <= 50; index++) {
    console.log(index);

    if(index % 2 !=0) {
        output.innerHTML += `
        <div style="padding: 5px"> ${index} </div>
        `
    }
    
}*/

