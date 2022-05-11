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
   

    $("#formEl").on("submit", function(ev){
        ev.preventDefault
        console.log(firstName)
        $('#table_id').DataTable({
            data: [
               $("#firstName").val()
            ],
            'columns': [
                { data: firstName},
                { data: 'cell' },
                { data: 'email' },
                { data: 'gender' },
                { data: 'nat' },
                { data: 'phone' },
            ],
        });
    })
})