
    const RED = "RED";
    const YELLOW = "YELLOW";
    const BLUE = "BLUE";
    const GREEN = "GREEN";
    
    var j=0;  //  random generated

    var count = 1;
    var on;
    var off;
    off = 400;
    on = 800;
    var strict =0;
    var x;
    var lit;
    var max = 20;
    var onFlag = false;

    var simon = {

        sendColor: function (color){
            console.log("color:"+color);
            console.log("sequence: " +simon.sequence)
            if(!simon.sequence.length){
                simon.nextSequence();
            
            }
            else{
                console.log("s val:"+simon.sequence[simon.step]);
                if(color === simon.sequence[simon.step]){
                    if(simon.step === simon.sequence.length -1){
                        console.log("completed!");
                        simon.step = 0;
                        if(simon.sequence.length === max){
                                alert("You win");
                                location.reload();
                        }else {
                             setTimeout(function () {
                                $('#count').text(simon.sequence.length);
                                simon.nextSequence();
                            

                            }, 1000);     
                        }
                    }else {
                        simon.step++;
                    }
                }else {
                    alert("wrong!!");
                    if(strict === 1){
                        location.reload();

                    }else {
                   
                        simon.step = 0;
                        change1(simon.sequence);
                    }
                    
                }
            }
            console.log("New color: "+color);
        },
        colors: [GREEN, RED, YELLOW, BLUE],
        sequence: [],
        nextSequence: function(){
            var nextColor = simon.colors[Math.floor(Math.random()*4)];
            simon.sequence.push(nextColor);
            console.log(simon.sequence);
            change1(simon.sequence);
        },
    
        

    };

    function change1(jsequence) {
            count = jsequence.length;
            j = 0;
            console.log(count);
            console.log("j se: " +jsequence);
            console.log("jes va:"+jsequence[j]);
          
            x = setInterval(function () {

                if (jsequence[j] === GREEN) {

                    lit = 'light1';
                    $('#green').addClass(lit);
                    var jpromise1 = $('#audio1')[0].play();
                    
                    if (jpromise1 !== undefined){
                            jpromise1.then(_=>{
                                 setTimeout(function () {

                                $('#green').removeClass(lit);

                                }, off);
                            })
                            .catch(err=>{
                                console.log(err);
                            }); 
                    }

                }else if (jsequence[j] === RED) {

                    lit = 'light2';
                    $('#red').addClass(lit);
                    $('#audio2')[0].play();          

                    setTimeout(function () {
                        $('#red').removeClass(lit);
                    }, off);

                }else if (jsequence[j] == YELLOW) {

                    lit = 'light3';
                    $('#yellow').addClass(lit);
                    $('#audio3')[0].play();
                    setTimeout(function () {

                        $('#yellow').removeClass(lit);

                    }, off);

                } else {

                    lit = 'light4';
                    $('#blue').addClass(lit);
                    $('#audio4')[0].play();
                    
                    setTimeout(function () {

                        $('#blue').removeClass(lit);

                    }, off);
                }

                 j++;
                 console.log("j:"+j);
                 console.log("count: "+ count);
                if (j>=count) {
                       clearInterval(x);
                   }
            }, on);

        }

    //to switch on
    $(document).ready(function(){
        $('#on').on('click', function () {
            // location.reload();
            if(onFlag)
            {
                alert("You need to turn off the game before turn on again");
            }else {
            onFlag = true;
            $('#count').text('--');

            strict=0;
            simon.sequence=[];
            simon.step = 0;


            $('#strict').on('click', function () {
                strict=1;
            });

            //to start the game
            $('#start').on('click', function () {

                $('#count').text(simon.sequence.length);
        
                simon.nextSequence();
            });

        //user to play
            $('#green').on('click', function () {

                $('#green').addClass('light1');
                var jpromise21 = $('#audio1')[0].play();

                if (jpromise21 !== undefined){
                    jpromise21.then(_=>{
                       simon.sendColor(GREEN);

                        setTimeout(function () {
                            $('#green').removeClass('light1');

                        }, 250);
                    })
                    .catch(err=>{
                        console.log(err);
                    });
                           
                }

            });

             $('#red').on('click', function () {

                $('#red').addClass('light2');
                var jpromise22 = $('#audio2')[0].play();

                if (jpromise22 !== undefined){
                    jpromise22.then(_=>{
                        simon.sendColor(RED);

                        setTimeout(function () {
                            $('#red').removeClass('light2');

                        }, 250);
                    })
                    .catch(err=>{
                        console.log(err);
                    });
                           
                }
         
            });                     

                $('#yellow').on('click', function () {

                $('#yellow').addClass('light3');
                var jpromise23 = $('#audio3')[0].play();

                if (jpromise23 !== undefined){
                    jpromise23.then(_=>{
                          simon.sendColor(YELLOW);

                            setTimeout(function () {
                                $('#yellow').removeClass('light3');

                            }, 250);
                    })
                    .catch(err=>{
                        console.log(err);
                    });
                           
                }
       
            });

            $('#blue').on('click', function () {

                $('#blue').addClass('light4');
                var jpromise24 = $('#audio4')[0].play();

                if (jpromise24 !== undefined){
                    jpromise24.then(_=>{
                        simon.sendColor(BLUE);

                        setTimeout(function () {
                            $('#blue').removeClass('light4');

                        }, 250);
                    })
                    .catch(err=>{
                        console.log(err);
                    });
                           
                }
        
            });
        }

    });


    //to switch off
    $('#off').on('click', function () {
        location.reload();
        onFlag = false;
    });

});
