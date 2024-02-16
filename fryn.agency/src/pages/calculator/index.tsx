import { useState } from "react";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Head from "next/head";
import { Input } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";

const Calculator = () => {
  const [price, setPrice] = useState(0);
  const [reels, setReels] = useState(0);
  const [teaser, setTeaser] = useState(0);
  const [shots, setShots] = useState(0);
  const [admin, setAdmin] = useState("4");
  const [marketer, setMarketer] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [phone, setPhone] = useState(0);

  const changeReels = (e: any) => {
    setReels(e.target.value);
  };

  const changeShots = (e: any) => {
    setShots(e.target.value);
  };

  const changeTeaser = (e: any) => {
    setTeaser(e.target.value);
  };

  const changePhone = (e: any) => {
    setPhone(e.target.value);
  };

  const calculatePrice = () => {
    var shotsPrice = shots * 450000;
    var reelsPrice = reels * 2800000;
    var teaserPrice = teaser * 5000000;
    var phonePrice = phone * 1500000;
    var adminPrice = 0;

    if (admin == "1") {
      adminPrice = 5500000;
      setPrice(
        1000000 +
          shotsPrice +
          reelsPrice +
          adminPrice +
          teaserPrice +
          phonePrice
      );
    } else if (admin == "2") {
      adminPrice = 3500000;
      setPrice(
        1000000 +
          shotsPrice +
          reelsPrice +
          adminPrice +
          teaserPrice +
          phonePrice
      );
    } else if (admin == "3") {
      adminPrice = 2000000;
      setPrice(
        1000000 +
          shotsPrice +
          reelsPrice +
          adminPrice +
          teaserPrice +
          phonePrice
      );
    } else if (admin == "4") {
      adminPrice = 0;
      setPrice(
        1000000 +
          shotsPrice +
          reelsPrice +
          adminPrice +
          teaserPrice +
          phonePrice
      );
    }

    setDiscount(price * 0.8);
  };

  return (
    <>
      <Head>
        <title>فرم محاسبه قیمت</title>
      </Head>
      <Header />
      <div className="mb-52 flex w-full flex-col items-center justify-center gap-8 font-bodyFont text-white">
        <h1 className="mt-12 text-2xl font-bold text-white sm:text-3xl">
          فرم محاسبه قیمت خدمات فریان
        </h1>

        <div className="mx-5 flex h-auto flex-col items-center justify-center rounded-lg border-3 border-opacity-30 bg-white p-12 text-right text-blue-500 md:w-1/3">
          <Input
            type="number"
            name=""
            id="reels"
            className=" flex justify-center bg-transparent text-right"
            color="primary"
            onChange={changePhone}
            labelPlacement="inside"
            label="ریلز با گوشی"
            placeholder=""
          />
          <hr className="my-3" />

          <Input
            type="number"
            name=""
            color="primary"
            id="reels"
            className="   flex justify-center bg-transparent"
            onChange={changeReels}
            labelPlacement="inside"
            label="ریلز با دوربین"
          />

          <hr className="my-3" />

          <Input
            type="number"
            name=""
            color="primary"
            labelPlacement="inside"
            id="reels"
            className=" flex justify-center bg-transparent"
            onChange={changeTeaser}
            label="تیزر"
          />

          <hr className="my-3" />

          <Input
            type="number"
            name=""
            color="primary"
            labelPlacement="inside"
            id="shot"
            className="  flex justify-center bg-transparent"
            onChange={changeShots}
            label=" عکاسی"
          />

          <hr className="my-3" />
          <h1 className="mb-3 text-center text-xl">ادمین استوری</h1>
          <form
            action=""
            className="flex w-full flex-row-reverse items-center justify-center gap-3"
          >
            <RadioGroup
              value={admin}
              onValueChange={setAdmin}
              orientation="horizontal"
            >
              <label htmlFor="" className="">
                نمیخواهم{" "}
              </label>
              <Radio type="radio" name="plan" id="admin-4" value="4" />
              <label htmlFor="" className="">
                {" "}
                میخواهم
              </label>
              <Radio
                type="radio"
                name="plan"
                id="admin-1"
                value="1"
                defaultChecked
              />
            </RadioGroup>
          </form>
          <hr className="my-3" />
          <Card
            isBlurred
            className=" bg-blue-600 text-white shadow-md shadow-blue-500"
          >
            <CardBody>
              <p className="text-center">
                گزارش هفتگی / ارائه استراتژی محتوا و برنامه ریزی محتوایی / طراحی
                قالب اختصاصی برای اینستاگرام / مدیریت پیج - پاسخدهی به دایرکت و
                کامنت ها - افزایش تعامل پیج و تعامل با مخاطبین هدف{" "}
              </p>
            </CardBody>
          </Card>

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
            <Button
              className="mb-3"
              onClick={calculatePrice}
              color="primary"
              size="lg"
              radius="sm"
              variant="shadow"
            >
              محاسبه قیمت
            </Button>

            <h1 className="font-bold">
              قیمت نهایی: {price.toLocaleString()} تومان
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
