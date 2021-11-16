import React from "react";
import Header from "../../Header";
import { Link,useParams } from "react-router-dom";
import {useSelector} from "react-redux"
import axios from "axios"
import { useHistory } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
// import { useHistory } from "react-router-dom";
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const UpgradeFlat = () => {
  const{id} =useParams()
  const history = useHistory();
  const [rates,setRates]= React.useState({"currency":"" , WeeklyPrice:"",MonthlyPrice:"", YearlyPrice:"",country:""})
  const country = useSelector(({ CountryReducer }) => CountryReducer.country);
  const [selected,setSelected]= React.useState("")
const payableaparice= selected==="week"?rates.WeeklyPrice:selected==="month"?rates.MonthlyPrice:selected==="year"?rates.YearlyPrice:""


 const PostFlatReducer = useSelector(({ PostFlatReducer }) => PostFlatReducer);
const getPricesRates=async()=>{
  const countryFull= country === "NG"
                              ? "Nigeria"
                              : country === "US"
                              ? "Usa"
                              : country === "IE"
                              ? "Ireland"
                              : country === "KE"
                              ? "Kenya"
                              : country === "GH"
                              ? "Ghana"
                              : country === "ZA"
                              ? "South Africa"
                              : country === "GB"
                              ? "Uk"
                              : ""
                            
await axios.get(`/Api/v1/getPricesRates/${countryFull}`).then(rates=>{
rates.data.userData&&setRates(rates.data.userData)
console.log(rates.data)
}).catch(error=>{
  console.log(error)
})
}

 const config = {
    // public_key: process.env.REACT_APP_FLUTTERWAVE_PUBLIC_KEY,
public_key: process.env.REACT_APP_FLUTTERWAVE_PUBLIC_KEY,
    tx_ref: new Date().getTime() + "-" + id,
     amount: parseFloat(payableaparice),
    currency: rates.currency || "USD",
    payment_options: "card",
    customer: {
      email: PostFlatReducer.email,
      phonenumber: PostFlatReducer.mobile_numbe,
      name: PostFlatReducer.firstname,
    },
    customizations: {
      title: "RoomNets Ad Payment",
      description: "payment Add Post Premimum",
      logo:
        "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };
const handleValidatePayment= React.useCallback(async(id,response,selected)=>{
const params={
  post_id:id,
  payment_response:response,
  plan:selected
}
console.log("api called")
await axios.post("/Api/v1/handleUpgradeApart",params).then(res=>{
if(res.data.status){

    history.replace("/process-apart-success");
}
console.log(res.data)
}).catch(error=>{
  console.log(error)
})

  },[])

    const handleValidatePaymentPayPal= React.useCallback(async(id,selected,orderID)=>{
const params={
  post_id:id,

  plan:selected,
  orderID:orderID
}
await axios.post("/Api/v1/handleUpgradesApartPayPal",params).then(res=>{
  console.log(res.data)
if(res.data.status){
    history.replace("/process-apart-success");
}
}).catch(error=>{
  console.log(error)
})

  },[])
  const handleFlutterPayment = useFlutterwave(config);
  const PayByflutterWave = async () => {
    await handleFlutterPayment({
      callback: (response) => {
        // console.log(response);
        closePaymentModal(); // this will close the modal programmatically
        if (response.status === "successful") {
          // console.log(response);
          // handleSuccess();
          handleValidatePayment(
            id,
            response,
            selected
          );
        }
      },
      onClose: () => {},
    });
  };


  const handleSelcted=(value)=>{
    setSelected(value)
  window.scrollTo(0,document.body.scrollHeight);
  }

  const handleCheckout=(value)=>{

if(!selected){
  return alert("You have not selected a plan")

}
  if(value==="fluterwave"){
  PayByflutterWave() 
}
if(value==="paypal"){
  //PayBypaypal() 
}
  }
  const onApprove= (data, actions)=> {
const orderID= data.orderID
handleValidatePaymentPayPal(id,selected,orderID)
// data.orderID 
    }
  const createOrder=(data, actions) => {
           return actions.order.create({
               purchase_units: [
                   {
                       amount: {
                           value: payableaparice,
                       },
                   },
               ],
           });
       }
React.useEffect(()=>{getPricesRates()},[])

  return (
          <PayPalScriptProvider options={{ "client-id":process.env.REACT_APP_PAYPAL_CLIENT}}>
    <div>
      <Header />
      <div>
        <div className="topPatch" style={{ height: "80px" }} />
        <div className="poststep pricing my-80">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 wow animated slideInUp">
                <div className="main-title w-75 mx-auto d-table text-center mb-30">
                  {/* <span className="small-title color-primary position-relative line-2-primary">
                    What We Do?
                  </span> */}
                  <h2 className="title mb-20 color-primary">
               Step 1: Choose A plan that suites you and Upgrade 
                  </h2>
                </div>
              </div>
           <div className="row justify-content-center">
              <div className="col-lg-12 wow animated slideInUp">
                <div className="main-title w-75 mx-auto d-table text-center mb-30">
                  {/* <span className="small-title color-primary position-relative line-2-primary">
                    What We Do?
                  </span> */}
                 
                  <span className="sub-title">
                  Upgrading gets you even  more values,
                  Early Bird Access & 2x enquiries

                  </span>
                </div>
              </div>
              <div onClick={handleSelcted.bind(this,"week")} className={`upgrade-card ${selected==="week"?"selected":null} col-md-5 col-lg-3 wow animated slideInDown`}>
                <div className="service-item bg-white px-30 py-40 mt-30">
                  <div className="service-info hover-secondery-primary">
                    <a
                    
                      className="my-20 d-table"
                    
                    >
                      <h4>1 Week plan</h4>
                    </a>
                    <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt nisi ut aliqu
                    </p>
                  <div className="row justify-content-between">
                     <span className="flat-large icon-primary">
                        <i className="flaticon-house" />
                      </span>
                     <p
                      className="my-20 d-table"
                    >
                       <h4>{rates.currency}{numberWithCommas(rates.WeeklyPrice)} </h4>
                    </p>
                    </div>
                    <hr className="border-top-1" />
                  </div>
                </div>
              </div>
              <div onClick={handleSelcted.bind(this,"month")} className={`upgrade-card ${selected==="month"?"selected":null} col-md-5 col-lg-3 wow animated slideInDown`}>
                <div className="service-item bg-white px-30 py-40 mt-30">
                  <div className="service-info hover-secondery-primary">
                    <a
                      className="my-20 d-table"
                     
                    >
                      <h4>1 Month plan</h4>
                    </a>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt nisi ut aliqu
                    </p>
                   <div className="row justify-content-between">
                     <span className="flat-large icon-primary">
                        <i className="flaticon-house" />
                      </span>
                     <p
                      className="my-20 d-table"
                    >
                    <h4>{rates.currency}{numberWithCommas(rates.MonthlyPrice)} </h4>
                    </p>
                    </div>
                    <hr className="border-top-1" />
                  </div>
                </div>
              </div>
              <div onClick={handleSelcted.bind(this,"year")} className={`upgrade-card ${selected==="year"?"selected":null} col-md-5 col-lg-3 wow animated slideInDown`}>
                <div className="service-item bg-white px-30 py-40 mt-30">
                  <div className="service-info hover-secondery-primary">
                    <a
                    
                      className="my-20 d-table"
                    >
                      <h4>1  Year Plan </h4>
                    </a>
                    <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt nisi ut aliqu
                    </p>
                    <div className="row justify-content-between">
                     <span className="flat-large icon-primary">
                        <i className="flaticon-house" />
                      </span>
                     <p
                      className="my-20 d-table"
                    >
                      <h4>{rates.currency}{numberWithCommas(rates.YearlyPrice)} </h4>
                    </p>
                    </div>
                    <hr className="border-top-1" />
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        
        <div className="col-lg-12 wow animated slideInUp">
                <div className="main-title w-75 mx-auto d-table text-center mb-10">
                  {/* <span className="small-title color-primary position-relative line-2-primary">
                    What We Do?
                  </span> */}
                  <h2 className="title  color-primary mt-3">
               Step 2: Proceed to payment
                  </h2>
                </div>
              </div>
<section className='row justify-content-center'>
<span  className="pay-card paypal-btn text-center d-flex align-items-center justify-content-center">
{/* <img className="paycard mx-4" src="/images/paypal.png" alt=""/> */}
    <PayPalButtons createOrder={createOrder} onApprove={onApprove}   forceReRender={[payableaparice]} disabled={!selected}  style={{ layout: "horizontal",color:"", }} />
</span>
<span  onClick={handleCheckout.bind(this,"fluterwave")} className="pay-card text-center">
<img className="paycard"  src="/images/flutterwave.png" alt=""/>
</span>
</section>



        </div>
      </div>
    </div>
      </PayPalScriptProvider>
  );
};

export default UpgradeFlat;
