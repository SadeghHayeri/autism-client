import React from 'react'
import './style.css'
import Slider from "../slider";
import Questions from "../questions";
import Header from "../header";
import Footer from "../footer";

class MainPage extends React.Component {
    render() {
        return(
            <div className="App">
                <Header/>
                <Slider/>
                <div className='blog-text'>
                    سامانه ی هوشمند مقدماتی تشخیص اتیسم از مجموعه محصولات غربالک شرکت فناوران شناختی پارس میباشد که برای کمک به والدین و متخصصین در غربالگری اولیه اتیسم استفاده میشود. این سامانه حاصل بیش از 5 سال تحقیق توسط محققین این حوزه میباشد که قابلیت غربالگری اولیه با دقت بالایی را داراست. قابل ذکر است که سوالات این پرسشنامه توسط متخصصین باتجربه در حوزه تشخیص و درمان این نوع اختلالات تایید شده است. تا کنون چندین مقاله در مورد این سامانه در نشریات معتبر به چاپ رسیده است.
                    این سامانه ، یک پرسشنامه آن‌لاین در خصوص علایم مهم و اصلی اختلالات اتیسم است که والدین می‌توانند به‌راحتی به آن دسترسی داشته باشند و از آن استفاده کنند. نتایج این پرسشنامه می‌تواند به والدین هشدار اولیه‌ای را در خصوص احتمال ابتلای کودکشان به اتیسم دهد تا بتوانند برای انجام ارزیابی‌های دقیق‌تر به متخصص مراجعه کنند. لازم به ذکر است که تشخیص سامانه منوط به ورود صحیح اطلاعات توسط کاربران بوده و ورود هرگونه اطلاعات غلط یا عدم مطابق با واقع میتواند در نتیجه گیری سامانه تاثیر مستقیم داشته باشد. لذا کاربران باید با دقت کامل به پرکردن اطلاعات در سامانه بپردازند.
                </div>
                <br />
                <div className='blog-text'>
                    سامانه ی هوشمند مقدماتی تشخیص اتیسم از مجموعه محصولات غربالک شرکت فناوران شناختی پارس میباشد که برای کمک به والدین و متخصصین در غربالگری اولیه اتیسم استفاده میشود. این سامانه حاصل بیش از 5 سال تحقیق توسط محققین این حوزه میباشد که قابلیت غربالگری اولیه با دقت بالایی را داراست. قابل ذکر است که سوالات این پرسشنامه توسط متخصصین باتجربه در حوزه تشخیص و درمان این نوع اختلالات تایید شده است. تا باید با دقت کامل به پرکردن اطلاعات در سامانه بپردازند.
                </div>
                <br />
                <div className='blog-text'>
                    سامانه ی هوشمند مقدماتی تشخیص اتیسم از مجموعه محصولات غربالک شرکت فناوران شناختی پارس میباشد که برای کمک به والدین و متخصصین در غربالگری اولیه اتیسم استفاده میشود. این سامانه حاصل بیش از 5 سال تحقیق توسط محققین این حوزه میباشد که قابلیت غربالگری اولیه با دقت بالایی را داراست. قابل ذکر است که سوالات این پرسشنامه توسط متخصصین باتجربه در حوزه تشخورد این سامانه در نشریات معتبر به چاپ رسیده است.
                    این سامانه ، یک پرسشنامه آن‌لاین در خصوص علایم مهم و اصلی اختلالات اتیسم است که والدین می‌توانند به‌راحتی به آن دسترسی داشته باشند و از آن استفاده کنند. نتایج این پرسشنامه می‌تواند به والدین هشدار اولیه‌ای را در خصوص احتمال ابتلای کودکشان به اتیسم دهد تا بتوانند برای انجام ارزیابی‌های دقیق‌تر به متخصص مراجعه کنند. لازم به ذکر است که تشخیص سامانه منوط به ورود صحیح اطلاعات توسط کاربران بوده و ورود هرگونه اطلاعات غلط یا عدم مطابق با واقع میتواند در نتیجه گیری سامانه تاثیر مستقیم داشته باشد. لذا کاربران باید با دقت کامل به پرکردن اطلاعات در سامانه بپردازند.
                </div>
                <Footer/>
            </div>
        );
    }
}

export default MainPage