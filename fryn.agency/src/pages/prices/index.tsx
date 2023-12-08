import Head from "next/head";
import Header from "~/components/Header";
import fav from "../../../public/New-logo-trans-1.png";
import Footer from "~/components/Footer";
const Prices = () => {
  return (
    <>
      <Head>
        <title>تعرفه خدمات | آژانس تبلیغاتی فریان</title>
        <link rel="shortcut icon" href={fav.src} type="image/x-icon" />
      </Head>
      <Header />
      <h1 className="my-8 text-center font-bodyFont text-2xl font-extrabold text-white">
        تعرفه خدمات تیم فریان
      </h1>
      <div className="main flex justify-center items-center w-full ">
      <div className="tables rtl mb-48 flex h-2/4 sm:flex-row-reverse flex-col justify-center sm:items-start items-center  gap-5 font-bodyFont">
        <div className="table1 border-black-50 flex sm:w-1/3 w-4/5  flex-col items-center sm:h-2/3 h-1/2 justify-center rounded-lg border-2 bg-white p-10">
          <div className="title flex w-full flex-col mb-4">
            <h1 className="text-blue-500 font-bold"> به صرفه</h1>
            <p className="text-lg line-through">۱۶،۵۰۰،۰۰۰ تومان</p>
            <p className="text-2xl font-bold">۹،۵۰۰،۰۰۰ تومان</p>
          </div>

          <ul className="flex w-full flex-col items-end justify-center gap-4 text-md font-medium mb-4">
            <li className="rtl">۶ ریلز با گوشی</li>
            <li className="rtl">۴ شات عکاسی با دوربین</li>
            <li className="rtl">ادمین حضوری برای استوری</li>
            <li className="rtl"> تعیین استراتژی و پلن محتوایی</li>
          </ul>
          <p className="font-bodyFont text-lg font-bold">سود شما: ۷،۰۰۰،۰۰۰ تومان</p>
          <button className="mt-3 border-2 border-black-500 text-lg bg-blue-500 w-full py-3 rounded-lg text-white">
            تماس با ما
          </button>
        </div>

        <div className="table1 border-black-50 flex  sm:w-1/3 w-4/5 h-4/5 flex-col items-center justify-center rounded-lg border-2 bg-transparent p-10 text-white">
          <div className="title flex w-full flex-col mb-4">
            <h1 className="text-white font-bold"> حرفه ای</h1>
            <p className="text-lg line-through">۳۰،۲۰۰،۰۰۰ تومان</p>
            <p className="text-2xl font-bold">۱۸،۵۰۰،۰۰۰ تومان</p>
          </div>

          <ul className="flex w-full flex-col items-end justify-center gap-4 text-md font-medium mb-4">
            <li className="rtl">۲ ریلز با گوشی</li>
            <li className="rtl">۴ ریلز با دوربین</li>
            <li className="rtl">۶ شات عکاسی با دوربین</li>
            <li className="rtl">ادمین حضوری برای استوری</li>
            <li className="rtl"> تبلیغات منطقه ای <span className="text-white">(رایگان!)</span></li>
            <li className="rtl"> تعیین استراتژی و پلن محتوایی</li>
          </ul>
          <p className="font-bodyFont text-lg font-bold">سود شما: ۱۱،۷۰۰،۰۰۰ تومان</p>
          <button className="mt-3 border-2 border-black-500 text-lg bg-blue-500 w-full py-3 rounded-lg text-white">
            تماس با ما
          </button>
        </div>

        <div className="table1 border-black-50 flex sm:w-1/3 w-4/5 h-4/4 flex-col items-center  justify-center rounded-lg border-2 bg-white p-10">
          <div className="title flex w-full flex-col mb-4">
            <h1 className="text-blue-500 font-bold"> VIP </h1>
            <p className="text-lg line-through">۴۲،۴۰۰،۰۰۰ تومان</p>
            <p className="text-2xl font-bold">۲۸،۵۰۰،۰۰۰ تومان</p>
          </div>

          <ul className="flex w-full flex-col items-end justify-center gap-4 text-md font-medium mb-4">
            <li className="rtl">۴ ریلز با دوربین</li>
            <li className="rtl">۲ تیزر تبلیغاتی با تجهیزات کامل</li>
            <li className="rtl">۶ شات عکاسی با دوربین</li>
            <li className="rtl text-right">۴ طراحی گرافیک مربوط به برند (طراحی لوگو ، پکیج بیرون بر و...) </li>
            <li className="rtl">ادمین حضوری برای استوری</li>
            <li className="rtl"> تبلیغات منطقه ای <span className="text-[#085bff]">(رایگان!)</span></li>
            <li className="rtl"> تعیین استراتژی و پلن محتوایی</li>
          </ul>
          <p className="font-bodyFont text-lg font-bold">سود شما: ۱۳،۹۰۰،۰۰۰ تومان</p>
          <button className="mt-3 border-2 border-black-500 text-lg bg-blue-500 w-full py-3 rounded-lg text-white">
            تماس با ما
          </button>
        </div>
      </div>
      </div>

      <Footer />
    </>
  );
};

export default Prices;
