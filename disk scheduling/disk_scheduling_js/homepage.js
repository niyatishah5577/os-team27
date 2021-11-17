$('.circle').click(function(){
    $('.big-circle').show(2000,function(){
     $(".big-circle-content").animate({opacity: 1.0}, 3000)
     $('.run-algo').show(3000)
     $('#h4').animate({opacity: 1.0}, 4000)
     console.log($('#h4'))
    })
    
    $('.circle').hide(2000)
    $('.virtual-lab').hide(2000)
   
 })
 $('.big-circle').click(function(){
     $('.big-circle').hide(1000)
     $(".big-circle-content").animate({opacity: 0},00)
    $('.circle').show(3000)
    $('.virtual-lab').show(3000)
 })
 $('.c1').click(function(){
     $('.big-circle h1').html('FCFS')
     $('.big-circle-content').html('The simplest form of disk scheduling is, of course, the ﬁrst-come, ﬁrst-served (FCFS) algorithm. This algorithm is intrinsically fair, but it generally does not provide the fastest service. Consider, for example, a disk queue with requests for I/O to blocks on cylinders 98, 183, 37, 122, 14, 124, 65, 67. If the disk head is initially at cylinder 53, it will ﬁrst move from 53 to 98, then to 183, 37, 122, 14, 124, 65, and ﬁnally to 67, for a total head movement of 640 cylinders.')
     $(".run-algo a[href='#']").attr('href', 
     './disk_scheduling_html/fcfs.html');
 })
 $('.c2').click(function(){
    $('.big-circle h1').html('SSTF')
    $('.big-circle-content').html('SSTF scheduling priority is given to those processes which have the shortest seek, even if these requests are not the first ones in the queue. To implement this, the seek time of every request is calculated in advance in the queue and then requests are scheduled according to their seek time.SSTF does not ensure fairness as it can lead to indefinite postponement as its seek pattern tends to be highly localized. SSTF is like Shortest Job First (SJF) as it can prevent distant requests from being serviced under heavy load which can be termed as Starvation.')
    $(".run-algo a[href='#']").attr('href', 
    './disk_scheduling_html/sstf.html');
})
$('.c4').click(function(){
     $('.big-circle h1').html('Look')
     $('.big-circle-content').html(' LOOK is the advanced version of SCAN (elevator) disk scheduling algorithm which gives slightly better seek time than any other algorithm in the hierarchy (FCFS->SRTF->SCAN->C-SCAN->LOOK). The LOOK algorithm services request similarly as SCAN algorithm meanwhile it also “looks” ahead as if there are more tracks that are needed to be serviced in the same direction. If there are no pending requests in the moving direction the head reverses the direction and start servicing requests in the opposite direction.')
     $(".run-algo a[href='#']").attr('href', 
     './disk_scheduling_html/look.html');
    })
    $('.c5').click(function(){
     $('.big-circle h1').html('c-Look')
     $('.big-circle-content').html('C-LOOK is an enhanced version of both SCAN as well as LOOK disk scheduling algorithms. This algorithm also uses the idea of wrapping the tracks as a circular cylinder as C-SCAN algorithm but the seek time is better than C-SCAN algorithm. We know that C-SCAN is used to avoid starvation and services all the requests more uniformly, the same goes for C-LOOK. In this algorithm, the head services requests only in one direction(either left or right) until all the requests in this direction are not serviced and then jumps back to the farthest request on the other direction and service the remaining requests which gives a better uniform servicing as well as avoids wasting seek time for going till the end of the disk.')
     $(".run-algo a[href='#']").attr('href', 
     './disk_scheduling_html/c-look.html');
    })
    $('.c6').click(function(){
     $('.big-circle h1').html('scan')
     $('.big-circle-content').html('  In the SCAN algorithm, the disk arm starts at one end of the disk and moves toward the other end,servicing requests as it reaches each cylinder,until it gets to the other end of the disk. At the other end, the direction of head movement is reversed, and servicing continues. The head continuously scans back and forth across the disk. The SCAN algorithm is sometimes called the elevator algorithm, since the disk arm behaves just like an elevator in a building, ﬁrst servicing all the requests going up and then reversing to service requests the other way.')
     $(".run-algo a[href='#']").attr('href', 
     './disk_scheduling_html/scan.html');
    })
    $('.c7').click(function(){
     $('.big-circle h1').html('c-scan')
     $('.big-circle-content').html('Circular SCAN (C-SCAN) scheduling is a variant of SCAN designed to provide a more uniform wait time. Like SCAN, C-SCAN moves the head from one end of the disk to the other, servicing requests along the way. When the head reaches the other end, however, it immediately returns to the beginning of the disk without servicing any requests on the return trip (Figure 10.7). The C-SCAN scheduling algorithm essentially treats the cylinders as a circular list that wraps around from the ﬁnal cylinder to the ﬁrst one')
     $(".run-algo a[href='#']").attr('href', 
     './disk_scheduling_html/c-scan.html');
 })
