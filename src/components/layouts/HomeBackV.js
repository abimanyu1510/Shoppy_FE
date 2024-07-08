 import V1 from '../../assets/image.png'

const HomeBackV = () => {

  return <>
  

      <div className="container bg-video my-4">
  <div className="row">
    <div className="col-11 col-xl-7 col-lg-8 col-md-10 mx-auto">
      {/* <video autoPlay muted loop id="myVideo" className='rounded-4' controls  src={V1} type="video/mp4" style={{borderRadius:'5em'}}>
      </video>       */}
      <img src={V1} style={{height:"", width:"100%",borderRadius:"2em"}}/>
    </div>
    <div className="col-11 col-xl-5 col-lg-8 col-md-10 mt-2 mx-auto">
      <div data-aos="flip-right">
      <h2 className="v-hd text-center mb" style={{fontStyle:'italic'}} id='letter'>SHOPPING  <i className="fa-brands fa-wordpress-simple"></i>ORLD</h2>
      </div>
      <div data-aos="fade-down-left">
      <p className="text-dark my-4 fs-6 fw-bold  text-center"> <b>Save time and effort:</b> You don’t want to waste time waiting and browsing the aisles during peak shopping hours only to discover that what you sought is already out of stock. This issue is easily solved by ordering online and having your things delivered to the closest and most convenient pickup location.

<br/> <b> Optional freedom:</b> When you shop online, you have a far wider range of product possibilities. When compared to what is available in-store, a particular product will be available online in a far wider range of sizes and colors.</p>
      </div>
      <div className="row text-dark my-4">
        <div className="col">
          <div data-aos="flip-right">
          <h3 className="v-hd text-center mb" style={{fontStyle:'italic'}}>Lowest Price Best Quality &nbsp; <i class="fa-solid fa-cart-shopping"></i></h3>
          </div>
        </div>
       </div>
       <div className="row d-flex justify-content-center">
       <marquee behavior="scroll" direction="right" scrollamount="12">
       <div className="col-12 my-2">
          <div>
            <i className="fa-solid fa-truck  text-danger"></i>&nbsp; Free Delivery &nbsp; &nbsp;&nbsp;  <i className="fa-solid fa-money-check-dollar  text-danger"></i>&nbsp; Cash On Delivery available &nbsp; &nbsp; &nbsp; <i className="fa-solid fa-person-walking-arrow-loop-left text-danger"></i>&nbsp; 
            Easy Return
          </div>
        </div>
       </marquee>
        </div>
        </div>
       </div>
</div>
    </>
}

export default HomeBackV