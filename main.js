$(document).ready(function(){
    var cnote = document.getElementById("c-note");
    var dnote = document.getElementById("d-note");
    var enote = document.getElementById("e-note");
    var fnote = document.getElementById("f-note");
    var gnote = document.getElementById("g-note");
    var anote = document.getElementById("a-note");
    var bnote = document.getElementById("b-note");
    $("#c").on("click mouseover", function(){
       
    });
    
    $("#d").on("click mouseover", function(){
        
    });
    
    $("#e").on("click mouseover", function(){
        
    });
    
    $("#f").on("click mouseover", function(){
        
    });
    
     $("#g").on("click mouseover", function(){
        
    });
    
    $("#a").on("click mouseover", function(){
        
    });
    
    $("#b").on("click mouseover", function(){
        
    });
    
     $(document).keypress(function(c) {
        if (c.keyCode === 119) // w
            cnote.currentTime =0;
            cnote.play();
        if (d.keyCode === 120) // e
            dnote.currentTime =0;
            dnote.play();
        if (e.keyCode === 121) // r
            enote.currentTime =0;
            enote.play();
        if (f.keyCode === 122) // t
            fnote.currentTime =0;
            fnote.play();
        if (g.keyCode === 123) // y
            gnote.currentTime =0;
            gnote.play();
        if (a.keyCode === 124) // u
            anote.currentTime =0;
            anote.play();
        if (b.keyCode === 125) // i
            bnote.currentTime =0;
            bnote.play();
    });
});