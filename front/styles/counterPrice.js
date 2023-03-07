function TotalPrice(){
    var quantite = document.getElementById("counter").value;
    var prix =document.getElementById("price").value;
    var total = parseFloat(quantite)*parseFloat(prix);
    total = document.getElementById("tot_Amount").value;
    console.log(total);
  };