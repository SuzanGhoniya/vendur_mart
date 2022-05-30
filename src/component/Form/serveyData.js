import React from "react";
import { db } from "../../Firebase/firebase";
import { createBrowserHistory } from "history";

export const serveyData = async ({
  email,
  name,
  gender,
  number,
  oRating,
  m3t1,
  m3t2,
  m3t3,
  t3bobna1,
  t3bobna2,
  t3bobna3,
  storeNearYou,
  localSRating,
  butOnline,
  permonthShoping,
  preferChoice,
}) => {
  let history = createBrowserHistory();
  const res = db
    .collection("serveyForm")
    .doc(name+" "+number)
    .set({
      Name: name,
      Email: email,
      Number: number,
      Gender: gender,
      RateonlineShoping: oRating,
      dailyBasisThings: [m3t1, m3t2, m3t3],
      notAvailableThings: [t3bobna1, t3bobna2, t3bobna3],
      storeNearYou: storeNearYou,
      shopingOfflinerate: localSRating,
      easilyAccessible: butOnline,
      perMonth: permonthShoping,
      preferAns: preferChoice,
    }).then(response =>{
        
    })
    .catch(alert);
  return res;
};
