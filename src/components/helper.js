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
export const pieData=(data)=>{
  let Data = data.map((item) => {
    return {
      ser_des: item.service_req_description,
      cost: item.extended_cost_$ + item.labour_cost_$,
    };
  });
  let sD = [...new Set(Data.map((item) => item.ser_des))];
  let service = sD.map((item) => {
    return Data.filter((ser) => item === ser.ser_des);
  });
  let repeatedServices = service.filter((item) => item.length > 1);
  
  let rpSC = repeatedServices.map((item) => {
    return {
      ser_des: item[0].ser_des,
      cost: item.reduce((acc, next) => acc + next.cost, 0),
    };
  });
  
  let uniqueServices = service.filter((item) => item.length === 1).flat();
   let overAllCost = [...uniqueServices, ...rpSC].map(
    (item) => {
      return { name: item.ser_des, y: item.cost };
    }
  )
  return overAllCost
}

export const pieData1=(data)=>{
  let Data = data.map((item) => {
    return {
      ser_des: item.service_req_description,
      time: item.duration_mins,
    };
  });
  let chartData = Data.map((item) => {
    return { name: item.ser_des, y: item.time };
  });
  return chartData
}