import { useState } from "react";
import Footer from "~/components/Footer";
import Header from "~/components/Header";

const Calculator = () => {
  const [price, setPrice] = useState(0);
  const [reels, setReels] = useState(0);
  const [shots, setShots] = useState(0);
  const [admin, setAdmin] = useState(1);
  const [marketer, setMarketer] = useState(0);
  const [discount, setDiscount] = useState(0);
  var est = price * 1.07;

  const changeReels = (e: any) => {
    setReels(e.target.value);
  };

  const changeShots = (e: any) => {
    setShots(e.target.value);
  };

  const calculatePrice = () => {
    var shotsPrice = shots * 200000;
    var reelsPrice = reels * 850000;
    var adminPrice = 0;

    if (admin == 1) {
      adminPrice = 4500000;
      setPrice(950000 + shotsPrice + reelsPrice + adminPrice);
    } else if (admin == 2) {
      adminPrice = 3500000;
      setPrice(950000 + shotsPrice + reelsPrice + adminPrice);
    } else if (admin == 3) {
      adminPrice = 2000000;
      setPrice(950000 + shotsPrice + reelsPrice + adminPrice);
    } else if (admin == 4) {
      adminPrice = 0;
      setPrice(950000 + shotsPrice + reelsPrice + adminPrice);
    }

    setMarketer(price * 0.07);

    setDiscount(price * 0.85)
  };

  return (
    <>
      <Header />
      <div className="mb-52 flex w-full flex-col items-center justify-center gap-8 font-bodyFont text-white">
        <h1 className="mt-12 text-3xl font-bold text-white">
          فرم محاسبه قیمت خدمات فریان
        </h1>

        <div className="mx-5 h-auto w-auto bg-white p-12 text-right text-blue-500 md:w-1/3">
          <form action="" className="text-center">
            <h1 className="mb-3 text-xl">تولید محتوا ویدیویی (ریلز)</h1>
            عدد{" "}
            <input
              type="number"
              name=""
              id="reels"
              className="  border-b-2 border-blue-500 bg-transparent"
              onChange={changeReels}
              value={reels}
            />
          </form>
          <hr className="my-3" />

          <form action="" className="text-center">
            <h1 className="mb-3 text-xl">عکاسی</h1>
            عدد{" "}
            <input
              type="number"
              name=""
              id="shot"
              className=" border-b-2 border-blue-500 bg-transparent"
              onChange={changeShots}
              value={shots}
            />
          </form>
          <hr className="my-3" />
          <h1 className="mb-3 text-center text-xl">ادمین استوری</h1>
          <form
            action=""
            className="flex w-full flex-row-reverse items-center justify-center gap-3"
          >
            <label htmlFor="" className="">
              {" "}
              میخواهم
            </label>
            <input
              type="radio"
              name="plan"
              id="admin-1"
              onClick={() => setAdmin(1)}
            />
            <label htmlFor="" className="">
              نمیخواهم{" "}
            </label>
            <input
              type="radio"
              name="plan"
              id="admin-4"
              onClick={() => setAdmin(4)}
            />
          </form>
          <hr className="my-3" />
          <form
            action=""
            className="flex w-full flex-col-reverse flex-wrap items-center justify-center gap-3"
          >
            <label className="">گزارش هفتگی </label>
            <input type="checkbox" name="" id="gozaresh" checked disabled />

            <label className="">
              {" "}
              ارائه استراتژی محتوا و برنامه ریزی محتوایی{" "}
            </label>
            <input type="checkbox" name="" id="" checked disabled />

            <label className="">طراحی قالب اختصاصی برای اینستاگرام </label>
            <input type="checkbox" name="" id="" checked disabled />

            <label className="text-center">
              {" "}
              مدیریت پیج - پاسخدهی به دایرکت و کامنت ها - افزایش تعامل پیج و
              تعامل با مخاطبین هدف{" "}
            </label>
            <input type="checkbox" name="" id="" checked disabled />
          </form>
          <hr className="my-3" />
          {/* <p className="my-4 text-center">
            هزینه ها: <br />
            هر شات عکاسی - ۷۵ هزار تومان <br />
            هر ویدیو - ۱۲۵ هزار تومان <br />
            ادمین حضوری برای ۳ تا ۴ استوری روزانه - ۲ میلیون تومان
            <br />
            هزینه ادمین تعامل - ۵۰۰ هزار تومان
            <br />
          </p> */}
          <div className="flex flex-col items-center justify-center">
            <button
              className="border-1 mb-3 rounded-sm border border-blue-500 px-4 py-2 hover:bg-blue-500 hover:text-white"
              onClick={calculatePrice}
            >
              محاسبه قیمت
            </button>

            <h1 className="font-bold">
              قیمت نهایی: {est.toLocaleString()} تومان
            </h1>

            <h1 className="font-bold">
              قیمت بازاریاب: {marketer.toLocaleString()} تومان
            </h1>
            <h1 className="font-bold">
              قیمت با تخفیف: {discount.toLocaleString()} تومان
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Calculator;