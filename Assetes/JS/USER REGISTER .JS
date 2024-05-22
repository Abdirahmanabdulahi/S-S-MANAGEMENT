
//  GRADE CODE JQ
function calculateGrade() {
    var marks = $("#marks").val();
    var grade = '';

    if (marks > 100) {
        grade = 'Value must be less than or equal to 100';
    } else if (marks >= 90) {
        grade = 'A';
    } else if (marks >= 80) {
        grade = 'B';
    } else if (marks >= 70) {
        grade = 'C';
    } else if (marks >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    $("#grade").val(grade);

    if (marks >= 80 && marks <= 100) {
        $(".scho").show();
    } else {
        $(".scho").hide();
    }
}


// PHONE CODE JQ

function checkingphone() {
    var phnum = $("#phoneN").val();
    var carrier = '';
    let prefix1 = phnum.substring(0, 3);
    let prefix2 = phnum.substring(0, 2);

    if ((phnum.length === 9 && (prefix2 == "61" || prefix2 == "62"|| prefix2 == "68"|| prefix2 == "77")) || 
    (phnum.length === 10 && (prefix1 == "061" || prefix1 == "068" || prefix1 == "062"))) {
        
        
        if (prefix1 == "061" || prefix2 == "61" || prefix2 == "77") {
            carrier = 'HORMUUD';
            $("#carrier").css("background-color", "green");
        } else if (prefix1 == "068" || prefix2 == "68" ) {
            carrier = 'SOMNET';
            $("#carrier").css("background-color", "blue");
        } else if (prefix1 == "062" || prefix2 == "62" ) {
            carrier = 'SOMTEL';
            $("#carrier").css("background-color", "yellow");
        } else {
            carrier = 'Unknown carrier';
            $("#carrier").css("background-color", "brown");
        }
    } else { (phnum.length === 9 ) || (phnum.length === 10)
        carrier = ' Your length is lesthen 9 digits or 10 digits OR your key is incorrect';
        $("#carrier").css("background-color", "red");
    }

    $("#carrier").val(carrier);
}

//  ID CODE JQ

function checkingID() {
    var ID = $("#IDfacul").val();
    var Faculty = '';
    let prefix = ID.substring(0, 2);

    if ((ID) && (ID.length === 6)) {
        if (prefix == "11" ) {
            Faculty = 'Law';
            $("#Faculty").css("background-color", "green");
        } else if (prefix == "12" ) {
            Faculty = 'Islamic-Studies';
            $("#Faculty").css("background-color", "blue");
        } else if (prefix == "13" ) {
            Faculty = 'Engineering';
            $("#Faculty").css("background-color", "yellow");
       
        } else if (prefix == "14" ) {
            Faculty = 'Economics';
            $("#Faculty").css("background-color", "goldenrod");
       
        } else if (prefix == "15" ) {
            Faculty = 'Education';
            $("#Faculty").css("background-color", "wheat");
       
        } else if (prefix == "16" ) {
            Faculty = 'Architecture';
            $("#Faculty").css("background-color", "gold");
      
        } else if (prefix == "17" ) {
            Faculty = 'Medicine';
            $("#Faculty").css("background-color", "burlywood");
      
        } else if (prefix == "18" ) {
            Faculty = 'Social-Sciences';
            $("#Faculty").css("background-color", "orchid");
       
        } else if (prefix == "19" ) {
            Faculty = 'Arts';
            $("#Faculty").css("background-color", "olivedrab");
   
        } else if (prefix == "20" ) {
            Faculty = 'Humanities';
            $("#Faculty").css("background-color", "orange");
        } else {
            Faculty = 'Unknown carrier';
            $("#Faculty").css("background-color", "brown");
        }
    } else {
        Faculty = 'The length must be only 6digits';
        $("#Faculty").css("background-color", "red");
    }

    $("#Faculty").val(Faculty);
}


// AGE CODE JQ
function getAge() {
    bdate = $('#bdate').val();

    age = 2024 -  bdate;

    $('#age').val(age);
  
}



// CITY CODE JQ

const FlagST = {
    mogadishu: 'mogadishuFlag',
    kismanyo: 'kismanyoFlag',
    Hargaysa: 'HargaysaFlag',
    Jawhar: 'JawharFlag',
    cadaado: 'cadaadoFlag',
    Baydhabo: 'BaydhaboFlag',
    garoowe: 'garooweFlag',
    Lascaanood: 'LascaanoodFlag'
};

$(document).ready(function () {
    $('#Stage').change(function () {
        const selectedStage = $(this).val();
        const flags = $('#flagimage .flag');
        
        flags.hide();

        const flag = FlagST[selectedStage];
        const selectedFlag = $(`[data-flag="${flag}"]`);

        if (selectedFlag.length) {
            selectedFlag.show();
        }
    });
});




// LIGIN CODE JQ
// function checkingLogin(){
// $('#login').submit (function(event) {


//     var email = $('#email').val();
//     var password = $('#password').val();
// var name = $('#nameInput').val(); + name
//     // Simulate a basic client-side authentication check
//     if (email === 'addmin' && password === '123') {
//         $('#login-message').text.text("You have logged in correctly");
//         $('#login-message').css("color", "green");
//         $('#login-message').css("display" ,"block");
//     } else {
//         $('#login-message').text("Incorrect email or password");
//         S('#login-message').style("color", "red");
//         $('#login-message').css("display" ,"block");
//     }
// });

// }


$(document).ready(function () {
    $('#login').submit(function(event) {
        event.preventDefault();

        var email = $('#email').val();
        var password = $('#password').val();
     

        // Simulate a basic client-side authentication check
        if (email === 'admin' && password === '123') {
            $('#login-message').text("You have logged in correctly welcome !" );
            $('#login-message').css("color", "green");
            $('#login-message').css("display", "block");
        } else {
            $('#login-message').text("Incorrect email or password");
            $('#login-message').css("color", "red");
            $('#login-message').css("display", "block");
        }
    });
});



