import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
     
      <div className="banner overflow-hidden">
        <div className="container-fluid p-0">
          
         
          <div className="row g-0">
            

            <div className="col-lg-6 d-flex flex-column justify-content-center p-5">
              <div className="d-inline-block">
                <h1 className="display-3 fw-bold m-0">
                  <span className="h3 fw-normal d-inline-block me-2">Welcome to</span> 
                  Intern Web
                </h1>
              </div>
            
            </div>

            <div className="col-lg-6">
              <img src="/Banner.svg" alt="Banner Image" className="img-fluid w-100 d-block" />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}