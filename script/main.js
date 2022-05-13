import statesAndCapitals from './states.js'
$("#country").select2();
$("#state").select2();
$("#sex").select2();
$("#LGA").select2();

$.each(statesAndCapitals[0], function (index, value) {
    // console.log(value)
    let val = value
    $("#state").append(`<option>${index}</option>`)

    $("#state").change(function () {
        $.each(val, function (i, data) {
            console.log(data)
            $("#LGA").append(`<option>${data}</option>`)
        })
    })
    // $('#state').change(function() {
    //     // var lga = $(this).val();
    //      console.log(index)
    //     $.each(statesAndCapitals[0].index, function() {
    //         console.log(i)
    //     });
    
    // });
})


$().ready(function () {
    // Validation using validation plugin
    $("#formEl").validate({
        rules: {
            firstName: {
                required: true,
                minlength: 2
            },
            middleName: {
                required: true,
                minlength: 2
            },
            surname: {
                required: true,
                minlength: 2
            },
            DOB: {
                required: true,
                date: true,
            },
            sex: {
                required: true,
                maxlength: 1
            },
            phoneNum: {
                required: true,
                number: true,
                maxlength: 11,
                minlength: 11
            },
            country: {
                required: true,
                maxlength: 1
            },
            state: {
                required: true,
                maxlength: 1
            },
            LGA: {
                required: true,
                maxlength: 1
            }
        }
    });

    // DataTable - Jquery datatable plugin
    $('#table_id').DataTable();

    $("#formEl").on("submit", function (ev) {
        ev.preventDefault()

        $("#table_body").append(`<tr>
      <td>${$("#firstName").val()}</td> 
      <td>${$("#middleName").val()}</td> 
      <td>${$("#surname").val()}</td>
      <td>${$("#sex").val()}</td>
      <td>${$("#DOB").val()}</td>
      <td>${$("#phoneNum").val()}</td>
      <td>${$("#country").val()}</td>
      <td>${$("#state").val()}</td>
      <td>${$("#LGA").val()}</td>
    </tr>`)

    })
    $("#formEl").trigger('reset')
})



// // Declare some variables
// const theData = statesData[0]
// const theStates = Object.keys(theData)

// //console.log(statesData[0].Abia)



// // Manipulate DOM
// theStates.forEach(state => {
//     $("#state-el").append(`<option>${state}</option>`)
// })

// //$("#state-el").on("change", getSelectedOpt)
// $("#state-el").on("change", function(){
//     let selState = this.selectedOptions[0].value
//     populateLga(selState)
// }  )



// function getSelectedOpt(){
//     console.log(this.selectedOptions[0].value)
// }

// function populateLga(selState){
//     $("#lg-el").html(`<option selected>Choose LG</option>`)
//     let lgArr = []
//     lgArr = statesData[0][selState]
//     lgArr.forEach(lg => {
//         $("#lg-el").append(`<option>${lg}</option>`)
//     })
    
// }