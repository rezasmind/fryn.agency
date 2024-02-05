import ZarinpalCheckout from "zarinpal-checkout";

const zarinpal = ZarinpalCheckout.create(
  "fe2b447b-e1c5-4c59-902b-29ede488eb14",
  true
);

const paymentCreater = () => {
  zarinpal
    .PaymentRequest({
      Amount: "1000", // In Tomans
      CallbackURL: "fryn.agency",
      Description: "A Payment from Node.JS",
      Email: "hi@siamak.work",
      Mobile: "09120000000",
    })
    .then((response: { status: number; url: any }) => {
      if (response.status === 100) {
        console.log(response.url);
      }
    })
    .catch((err: any) => {
      console.error(err);
    });

  return <></>;
};
