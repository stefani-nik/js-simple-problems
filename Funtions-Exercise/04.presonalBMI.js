function personalBMI(name, age, weight , height) {
    let personalStaus;
    let heightInmeters = height/100;

    let bmi = Math.round((weight / (heightInmeters * heightInmeters)));
    if(bmi<18.5){
        personalStaus = 'underweight'
    }
    else if(bmi<25){
        personalStaus = 'normal';
    }
    else if(bmi<30){
        personalStaus = 'overweight';
    }
    else if(bmi >= 30){
        personalStaus = 'obese';
    }

    let person = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: bmi,
        status: personalStaus
    };

    if(personalStaus == 'obese'){
        person['recommendation'] = 'admission required';
    }
     return person;
}
console.log(personalBMI('Peter', 29, 75, 182));