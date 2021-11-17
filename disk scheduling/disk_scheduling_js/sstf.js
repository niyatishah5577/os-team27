var row = 0;
$('.addnew').click(function () {
    $('.container').append(' <div class="ip-container"><form><input type="text" class="discval" placeholder="Enter new disc position"> <input type="text" class="row" placeholder="this is row no"></form></div>')
    $('.container .ip-container:last').addClass("rowno" + row)
    $('.container .ip-container:last input:first').addClass("mainval" + row)
    $('.container .row:last').val(row)
    $('.container .rowno0').val(0)
    row = row + 1
})
$('.delrow').click(function () {
    $('.container .ip-container:last').remove();
    row = row - 1;
    if (row < 0) {
        row = 0;
    }
})
$('.sub').click(function () {
    var arr = [];
    for (var i = 1; i <= row; i++) {
        var isValid;
        $("input").each(function () {
            var element = $(this);
            if (element.val() == "") {
                isValid = false;
            }
        });
        if (isValid == false) {
            alert('missing values')
            break;
        }
        else {
            for (var n = 0; n < row; n++) {
                arr[n] = $('.mainval' + n).val()
            }
        }


    }
    console.log(arr)
    var head = $('.headval').val();
    if (head == "") {
        alert('enter head')
    }
    else {
        var seektime = 0
        var sequence=[]
        var diff_arr = []
        sequence.push(head)
        console.log(arr, head, seektime)
        function calc_seektime(arr, head, seektime) {
            while (arr.length != 0) {
                diff_arr = []
                for (var k = 0; k < arr.length; k++) {
                    diff_arr.push(Math.abs(head - arr[k]))
                }
                var min_diff = Math.min(...diff_arr)
                var index = diff_arr.indexOf(min_diff);
                seektime = seektime + min_diff
                head = arr[index]
                sequence.push(head)
                arr.splice(index, 1)
                // console.log(min_diff, index, head, seektime)
                // console.log(arr)
            }
            console.log(seektime,sequence)
            $('.output p').empty()
            $('.output p').html(seektime)
            $('.container').append('<div class="g-container" style="width: 500px; height: 500px; background: rgb(255, 255, 255);"><canvas id="myChart"></canvas> </div>')
            chartit(sequence,sequence.length)
        }
    }
    calc_seektime(arr, head, seektime);
    // $('.output p').empty()
    // $('.output p').html(seektime)
    // $('.container').append('<div style="width: 500px; height: 500px; background: rgb(255, 255, 255);"><canvas id="myChart"></canvas> </div>')
    // // chartit(arr,arr.length,start)
}
)
function chartit(arr,n) {
    // var k=n-1
    // while(k>=0){
    //     arr[k+1]=arr[k]
    //     k--
    // }
    // arr[0]=start
    console.log(arr)
    console.log(arr,n)
    var x_labels=[]
    for (var i=0;i<n;i++){
        x_labels.push(' ')
    }
    console.log(x_labels)
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: x_labels,
            datasets: [{
                label: 'movements of disk',
                data: arr,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
// var row = 0;
// $('.addnew').click(function () {
//     $('.container').append(' <div class="ip-container"><form><input type="text" class="discval" placeholder="Enter new disc position"> <input type="text" class="row" placeholder="this is row no"></form></div>')
//     $('.container .ip-container:last').addClass("rowno" + row)
//     $('.container .ip-container:last input:first').addClass("mainval" + row)
//     $('.container .row:last').val(row)
//     $('.container .rowno0').val(0)
//     row = row + 1;
// })
// $('.delrow').click(function () {
//     $('.container .ip-container:last').remove();
//     row = row - 1;
//     if (row < 0) {
//         row = 0;
//     }
// })
// $('.sub').click(function () {
//     var arr = [];
//     for (var i = 1; i <= row; i++) {
//         var isValid;
//         $("input").each(function () {
//             var element = $(this);
//             if (element.val() == "") {
//                 isValid = false;
//             }
//         });
//         if (isValid == false) {
//             alert('missing values')
//             break;
//         }
//         else {
//             console.log(row)
//             for (var n = 1; n <= row; n++) {
//                 arr[n - 1] = $('.mainval' + n).val()
//             }
//         }


//     }
//     console.log(arr)
//     var head = $('.headval').val();
//     if (head == "") {
//         alert('enter head')
//     }
//     else {
//         var seektime = 0
//         var diff_arr = []
//         console.log(arr, head, seektime)
//         function calc_seektime(arr, head, seektime) {
//             while (arr.length != 0) {
//                 diff_arr = []
//                 for (var k = 0; k < arr.length; k++) {
//                     diff_arr.push(Math.abs(head - arr[k]))
//                 }
//                 var min_diff = Math.min(...diff_arr)
//                 var index = diff_arr.indexOf(min_diff);
//                 seektime = seektime + min_diff
//                 head = arr[index]
//                 arr.splice(index, 1)
//                 // console.log(min_diff, index, head, seektime)
//                 // console.log(arr)
//             }
//             console.log(seektime)
//             $('.output p').empty()
//             $('.output p').html(seektime)
//         }
//         calc_seektime(arr, head, seektime);
//     }
// }
// )