export function cost(data,costType){
    let cost = [];
    let sumWarranty = 0;
    let sumOMNonPM = 0;
    let sumOMPM = 0;
    let sumRetroIt = 0;
    let sumCustomerRequest = 0;
    

    data.filter((eC) =>
      eC.sr_type === "Warranty"
        ? (sumWarranty = sumWarranty + eC[costType])
        : null
    );
    cost.push(parseFloat(sumWarranty.toFixed(2)));
    data.filter((eC) =>
      eC.sr_type === "O&M - Non PM"
        ? (sumOMNonPM = sumOMNonPM + eC[costType])
        : null
    );
    cost.push(parseFloat(sumOMNonPM.toFixed(2)));
    data.filter((eC) =>
      eC.sr_type === "O&M - PM" ? (sumOMPM = sumOMPM + eC[costType]) : null
    );
    cost.push(parseFloat(sumOMPM.toFixed(2)));
    data.filter((eC) =>
      eC.sr_type === "TI/Retrofit"
        ? (sumRetroIt = sumRetroIt + eC[costType])
        : null
    );
    cost.push(parseFloat(sumRetroIt.toFixed(2)));
    data.filter((eC) =>
      eC.sr_type === "Customer Request"
        ? (sumCustomerRequest = sumCustomerRequest + eC[costType])
        : null
    );
    cost.push(parseFloat(sumCustomerRequest.toFixed(2)));

    return cost;
}