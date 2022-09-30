let btn = document.getElementById("calculate");

btn.addEventListener("click" , ()=>{
    let billam = document.getElementById("bill-amount").value;
    let tipper= document.getElementById("tip-percentage").value;
    if(billam === '' || tipper === '')
    {     
        alert("Please Enter Bill Amount");
        return ;

    }
    
    
    document.getElementById("tip-amount").value= billam*tipper;
    let totalBill =   document.getElementById("total-bill");
    let peoples =document.getElementById("peoples").value;
    let tipAmount=document.getElementById("tip-amount");
    let result;
    if(peoples!= 1 && peoples!= ''){
        result = parseFloat(billam*tipper/peoples).toFixed(2);
        tipAmount.innerText = "TIP-AMOUNT :  " + result + " " + "EACH";

    }
    else if(peoples==1){
        result = (billam*tipper).toFixed(2) ;
        tipAmount.innerText = "TIP-AMOUNT :  " + result ;

    }
    else {
       
            alert("Please Enter No Of Peoples");
            return ;
    
        

    }
     
  let totalBillResult = (parseFloat(billam)+parseFloat(document.getElementById("tip-amount").value)).toFixed(2)

   totalBill.innerText = "TOTAL-BILL :  " + totalBillResult ;
   

    


})
