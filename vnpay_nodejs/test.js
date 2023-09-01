const data = [ [ { "uf_CalShoppingcartTotalCost('21')": 1300000 } ] ]
for (var key in data[0][0]) {
    console.log("Key1: " + key);
    console.log("Value: " + data[0][0][key]);
}
