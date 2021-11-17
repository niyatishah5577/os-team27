var row = 0;
$('.addnew').click(function () {
    row = row + 1;
    $('.container').append(' <div class="ip-container"><form><input type="text" class="discval" placeholder="Enter new disc position"> <input type="text" class="row" placeholder="this is row no"></form></div>')
    $('.container .ip-container:last').addClass("rowno" + row)
    $('.container .ip-container:last input:first').addClass("mainval" + row)
    $('.container .row:last').val(row)
    $('.container .rowno0').val(0)
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
            console.log(row)
            for (var n = 1; n <= row; n++) {
                arr[n - 1] = parseInt($('.mainval' + n).val())
            }
        }


    }
    console.log(arr)
    var head = parseInt($('.headval').val());
    var disk_size = $('.disksize').val();
    var dir = $('.dir').val();
    if (head == "") {

        alert('enter head')
    }
    else {
        var seektime = 0
        var diff_arr = []
        var left=[]
        var right=[]
        var seek_sequence=[]
        seek_sequence.push(head)
        for(var m=0;m<arr.length;m++){
           if(arr[m]<head){
               left.push(arr[m])
           }
           if(arr[m]>head){
               right.push(arr[m])
           }
        }
        left.sort(function (a, b) { return b - a });
        right.sort(function (a, b) { return a - b });
        console.log(arr, head, seektime)
        function calc_seektime(arr, head, seektime) {
            var moment_to_right = 0;
            var moment_to_left = 0

            if (dir == "right") {
                var max_of_arr = Math.max(...arr)
                var min_of_arr = Math.min(...arr)

                if (min_of_arr < head) {
                    moment_to_left = disk_size - min_of_arr - 1
                }
                if (max_of_arr > head) {
                    moment_to_right = disk_size - head - 1;

                }
                for(let r=0;r<right.length;r++){
                    seek_sequence.push(right[r])
                }
                seek_sequence.push(disk_size-1)
                for(let l=0;l<left.length;l++){
                    seek_sequence.push(left[l])
                }
            }
            if (dir == "left") {
                var max_of_arr = Math.max(...arr)
                var min_of_arr = Math.min(...arr)
                if (min_of_arr < head) {
                    moment_to_left = head - 0;

                }
                if (max_of_arr > head) {
                    var moment_to_right = max_of_arr - 0
                }
                for(let l=0;l<left.length;l++){
                    seek_sequence.push(left[l])
                }
                seek_sequence.push(0)
                for(let r=0;r<right.length;r++){
                    seek_sequence.push(right[r])
                }
            }
            seektime = moment_to_left + moment_to_right
            console.log(seektime, seek_sequence)
            $('.output p').empty()
            $('.output p').html(seektime)
            $('.container').append('<div class="g-container" style="width: 500px; height: 500px; background: rgb(255, 255, 255);"><canvas id="myChart"></canvas> </div>')
            chartit(seek_sequence,seek_sequence.length)
        }
        calc_seektime(arr, head, seektime);
    }
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