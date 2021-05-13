
function araj1(){



//div windows    
let mydiv1 = document.getElementById("myDIV1");
let mydiv2 = document.getElementById("myDIV2");

//button het
let het1 = document.getElementById("het1");
let het2 = document.getElementById("het2");

let araj1 = document.getElementById("araj1");
let araj2 = document.getElementById("araj2");

if (mydiv1.style.display == "block") {
    het1.style.display = "none";
    het2.style.display = "block";
    araj1.style.display = "none";
    araj2.style.display = "block";
    mydiv1.style.display = "none";
    mydiv2.style.display = "block";
} 



}



function araj2(){

    //div windows    

    let mydiv2 = document.getElementById("myDIV2");
    let mydiv3 = document.getElementById("myDIV3");

    //button het

    let het2 = document.getElementById("het2");
    let het3 = document.getElementById("het3");

    //button araj

    let araj2 = document.getElementById("araj2");
    let araj3 = document.getElementById("araj3");

    
    if (mydiv2.style.display == "block") {
        het2.style.display = "none";
        het3.style.display = "block";
        araj2.style.display = "none";
        araj3.style.display = "block";
        mydiv2.style.display = "none";
        mydiv3.style.display = "block";
    } 
    
    
    
    }

    function araj3(){

        //div windows    

        let mydiv3 = document.getElementById("myDIV3");
        let mydiv4 = document.getElementById("myDIV4");

        //button het

        let het3 = document.getElementById("het3");
        let het4 = document.getElementById("het4");

        //button araj

        let araj3 = document.getElementById("araj3");
        let araj4 = document.getElementById("araj4");

        
        if (mydiv3.style.display == "block") {
            het3.style.display = "none";
            het4.style.display = "block";
            araj3.style.display = "none";
            araj4.style.display = "block";
            mydiv3.style.display = "none";
            mydiv4.style.display = "block";
        } 
        
        
        
        }

           

        function araj4(){

            //div windows    

            let mydiv4 = document.getElementById("myDIV4");
            let mydiv5 = document.getElementById("myDIV5");
            //button het

            let het4 = document.getElementById("het4");
            let het5 = document.getElementById("het5");
            //button araj

            let araj4 = document.getElementById("araj4");
            let araj5 = document.getElementById("araj5");

            let inptext = document.getElementById("inptext");
            
            if (mydiv4.style.display == "block") {
                het4.style.display = "none";
                het5.style.display = "block";
                araj4.style.display = "none";
                araj5.style.display = "block";
                mydiv4.style.display = "none";
                mydiv5.style.display = "block";
                inptext.style.display = "block";
            } 
            
            
            
            }        

            function araj5(){

    

                let inptext = document.getElementById("inptext");
                
                let a = inptext.value
                let b = a/14;

                
                if (inptext.value === "") {
                    
                    swal("Մուտքագրեք տվյալները","","info");

                } else if (b < 100 || b > 999) {

                    swal("Սխալ", "Խնդրում ենք վերանայել գործողությունները", "error").then(function() {
                        window.location.reload();
                    });;

                } else if (b % 1 == 0) {

                     swal(`${b}`, "Ձեր մտապահած թիվը", "success").then(function() {
                        window.location.reload();
                    });;
                    
                } else {

                    swal("Սխալ", "Խնդրում ենք վերանայել գործողությունները", "error").then(function() {
                        window.location.reload();
                    });;
                    
                }
                
                
                
                
                }        

function het5(){
     //div windows    

     let mydiv4 = document.getElementById("myDIV4");
     let mydiv5 = document.getElementById("myDIV5");
     //button het

     let het4 = document.getElementById("het4");
     let het5 = document.getElementById("het5");
     //button araj

     let araj4 = document.getElementById("araj4");
     let araj5 = document.getElementById("araj5");

     let inptext = document.getElementById("inptext");
     
     if (mydiv5.style.display == "block") {
         het5.style.display = "none";
         het4.style.display = "block";
         araj5.style.display = "none";
         araj4.style.display = "block";
         mydiv5.style.display = "none";
         mydiv4.style.display = "block";
         inptext.style.display = "none";
     } 
     
     
     



}

function het4(){
    //div windows    

    let mydiv3 = document.getElementById("myDIV3");
    let mydiv4 = document.getElementById("myDIV4");

    //button het

    let het3 = document.getElementById("het3");
    let het4 = document.getElementById("het4");
 
    //button araj

    let araj3 = document.getElementById("araj3");
    let araj4 = document.getElementById("araj4");
 


    
    if (mydiv4.style.display == "block") {
        het4.style.display = "none";
        het3.style.display = "block";
        araj4.style.display = "none";
        araj3.style.display = "block";
        mydiv4.style.display = "none";
        mydiv3.style.display = "block";
    } 
    
    
    



}

function het3(){
    //div windows    

    let mydiv2 = document.getElementById("myDIV2");
    let mydiv3 = document.getElementById("myDIV3");

    //button het

    let het2 = document.getElementById("het2");
    let het3 = document.getElementById("het3");

    //button araj

    let araj2 = document.getElementById("araj2");
    let araj3 = document.getElementById("araj3");



    
    if (mydiv3.style.display == "block") {
        het3.style.display = "none";
        het2.style.display = "block";
        araj3.style.display = "none";
        araj2.style.display = "block";
        mydiv3.style.display = "none";
        mydiv2.style.display = "block";
    } 
    
    
    



}

function het2(){
    //div windows    
    let mydiv1 = document.getElementById("myDIV1");
    let mydiv2 = document.getElementById("myDIV2");

    //button het
    let het1 = document.getElementById("het1");
    let het2 = document.getElementById("het2");

    //button araj
    let araj1 = document.getElementById("araj1");
    let araj2 = document.getElementById("araj2");



    
    if (mydiv2.style.display == "block") {
        het2.style.display = "none";
        het1.style.display = "block";
        araj2.style.display = "none";
        araj1.style.display = "block";
        mydiv2.style.display = "none";
        mydiv1.style.display = "block";
    } 
    
    
    



}