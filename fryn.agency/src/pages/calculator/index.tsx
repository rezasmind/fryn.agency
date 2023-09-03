import { useState } from "react"
import Footer from "~/components/Footer"
import Header from "~/components/Header"

const Calculator = () => {
    const [price, setPrice] = useState(0)
    const [reels, setReels] = useState(0)
    const [shots, setShots] = useState(0)
    const [admin, setAdmin] = useState(1)

    const changeReels = (e) => {
        setReels(e.target.value)
    }

    const changeShots = (e) => {
        setShots(e.target.value)
    }


    const calculatePrice = () => {
        var shotsPrice = shots * 100000
        var reelsPrice = reels * 450000
        var adminPrice = 0

        if(admin == 1) {
            adminPrice = 5000000
            setPrice(950000 + shotsPrice + reelsPrice + adminPrice)
        } else if (admin == 2 ) {
            adminPrice = 3500000
            setPrice(950000 + shotsPrice + reelsPrice + adminPrice)
        } else if (admin == 3) {
            adminPrice = 2000000
            setPrice(950000 + shotsPrice + reelsPrice + adminPrice)
        }

    }


    return (
        <>
        <Header />
        <div className="w-full flex justify-center items-center font-bodyFont text-white flex-col gap-8 mb-20">
            <h1 className="text-white font-bold text-3xl mt-12">فرم محاسبه قیمت خدمات فریان</h1>

            <div className="bg-white text-blue-500 w-1/3 h-auto text-right p-12">
                <form action="" className="">
                    <h1 className="text-xl mb-3">تولید محتوا ویدیویی (ریلز)</h1>
                    عدد <input type="number" name="" id="reels" className=" bg-transparent border-b-2 border-blue-500 w-1/2" onChange={changeReels} value={reels}/> 
                </form>
                <hr className="my-3"/>

                <form action="" className="">
                    <h1 className="text-xl mb-3">عکاسی</h1>
                    عدد <input type="number" name="" id="shot" className=" bg-transparent border-b-2 border-blue-500 w-1/2" onChange={changeShots} value={shots}/> 
                </form>
                <hr className="my-3"/>
                <h1 className="text-xl mb-3">ادمین حضوری</h1>
                <form action="" className="flex flex-row-reverse gap-3 w-full justify-center items-center">
                    
                    <label htmlFor="" className=""> روزانه</label>
                    <input type="radio" name="plan" id="admin-1" onClick={() => setAdmin(1)}/>
                    <label htmlFor="" className="text-right">سه روز در هفته </label>
                    <input type="radio" name="plan" id="admin-2" onClick={() => setAdmin(2)}/>
                    <label htmlFor="" className="">یک روز در هفته </label>
                    <input type="radio" name="plan" id="admin-3" onClick={() => setAdmin(3)}/>
                </form>
                <hr className="my-3"/>
                <form action="" className="flex flex-col-reverse justify-center items-center gap-3 w-full flex-wrap">
                    <label className="">گزارش هفتگی </label>
                    <input type="checkbox" name="" id="gozaresh" checked disabled/>

                    <label className=""> ارائه استراتژی محتوا و برنامه ریزی محتوایی </label>
                    <input type="checkbox" name="" id="" checked disabled/>

                    <label className="">طراحی قالب اختصاصی برای اینستاگرام  </label>
                    <input type="checkbox" name="" id="" checked disabled/>

                    <label className="text-center">    مدیریت پیج - پاسخدهی به دایرکت و کامنت ها - افزایش تعامل پیج و تعامل با مخاطبین هدف  </label>
                    <input type="checkbox" name="" id="" checked disabled/>
                </form>
                <hr className="my-3"/>

                <button className="px-4 py-2 border rounded-sm border-1 border-blue-500 mb-3 hover:bg-blue-500 hover:text-white" onClick={calculatePrice}>محاسبه قیمت</button>

                <h1 className="font-bold">قیمت نهایی: {price.toLocaleString()} تومان</h1>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Calculator