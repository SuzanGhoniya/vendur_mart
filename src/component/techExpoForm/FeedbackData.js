import React from "react";
import { db } from "../../Firebase/firebase";
import { createBrowserHistory } from "history";

export const FeedbackData = async ({
  email,
  name,
  number,
  associate,
  likeConcept,
  rate,
  purchase,
  listYourBusiness,
  suggestions,
}) => {
  let history = createBrowserHistory();
  const res = db
    .collection("TechExpoFeedbackForm")
    .doc(name + " " + number)
    .set({
      Name: name,
      Email: email,
      Number: number,
      How_Would_You_Like_To_Associate_With_VendurMart: associate,
      Did_You_Like_Our_Concept: likeConcept,
      How_would_you_rate_VendurMart: rate,
      Would_you_purchase_from_VendurMart:purchase,
      Would_you_list_your_business_on_Vendurmart: listYourBusiness,
      Any_suggestions_or_comments_you_would_like_to_share_with_us: suggestions,
    })
    .then((response) => {})
    .catch(alert);
  return res;
};
