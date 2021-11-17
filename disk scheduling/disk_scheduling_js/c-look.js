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
    var dir = $('.dir').val();
    var disk_size = parseInt($('.disksize').val());
    // var dir = $('.dir').val();
    if (head == "") {

        alert('enter head')
    }
    else {
        var seek_count = 0
        var diff_arr = []
        var seek_sequence=[]
        seek_sequence.push(head)
        console.log(arr, head, seek_count)
        function calc_seektime(arr, head, seek_count) {
            // let seek_count = 0;
            let distance, cur_track;
     
            let left = [];
            let right = []
     
            // Tracks on the left of the
            // head will be serviced when
            // once the head comes back
            // to the beginning (left end)
            size=arr.length
            for(let i = 0; i < size; i++)
            {
                if (arr[i] < head)
                    left.push(arr[i]);
                if (arr[i] > head)
                    right.push(arr[i]);
            }
     
            // Sorting left and right vectors
            left.sort(function(a, b){return a - b});
            right.sort(function(a, b){return a - b});
            console.log(right,left)
            // First service the requests
            // on the right side of the
            // head
            for(let i = 0; i < right.length; i++)
            {
                cur_track = right[i];
     
                // Appending current track
                // to seek sequence
                seek_sequence.push(cur_track);
     
                // Calculate absolute distance
                distance = Math.abs(cur_track - head);
     
                // Increase the total count
                seek_count += distance;
     
                // Accessed track is now new head
                head = cur_track;
            }
     
            // Once reached the right end
            // jump to the last track that
            // is needed to be serviced in
            // left direction
            seek_count += Math.abs(head - left[0]);
            head = left[0];
     
            // Now service the requests again
            // which are left
            for(let i = 0; i < left.length; i++)
            {
                cur_track = left[i];
     
                // Appending current track to
                // seek sequence
                seek_sequence.push(cur_track);
     
                // Calculate absolute distance
                distance = Math.abs(cur_track - head);
     
                // Increase the total count
                seek_count += distance;
     
                // Accessed track is now the new head
                head = cur_track;
            }
            console.log(seek_count,seek_sequence)
            $('.output p').empty()
            $('.output p').html(seek_count)
            $('.container').append('<div class="g-container" style="width: 500px; height: 500px; background: rgb(255, 255, 255);"><canvas id="myChart"></canvas> </div>')
            chartit(seek_sequence,seek_sequence.length)
        }
        calc_seektime(arr, head, seek_count);
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

