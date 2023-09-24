// import React from 'react'

// const Navbar = () => {
//   return (
//     <>
//       <nav className='main-nav'>
//       <div className='logo'>
//         <h2>
//           <span></span>
//           <span></span>

//         </h2>
//       </div>
//       <div className='menu-link'>
//       <ul>
//         <li>
//         <a href='#'>Menu</a>
//         </li>
//         <li>
//         <a href='#'>FAQ</a>
//         </li>
//         <li>
//         <a href='#'>About</a>
//         </li>
//         <li>
//         <a href='#'>Gift cards</a>
//         </li>
//         <li>
//         <a href='#'>Contact</a>
//         </li>
//       </ul>
//      </div>
//      <div>9370419427</div>
//      <div className='main-icons'>
//         <ul className='main-icons-desctop'>
//         <li><a href=''><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//         style={{fill: "rgba(0, 0, 0, 1)",transform: "msFilter"}}>
//         <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952
//         0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8
//          8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
//         </svg></a></li>
//         <li><a href=''>
//         <svg xmlns="http://www.w3.org/2000/svg"
//         width="24" height="24" viewBox="0 0 24 24"
//         style={{fill: "rgba(0, 0, 0, 1)",transform: "msFilter"}}>
//         <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5
//         6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path>
//         </svg>
//         </a></li>
//         <li><a href=''>
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//         style={{fill: "rgba(0, 0, 0, 1)",transform:"msFilter"}}>
//         <path d="M21 4H3a1 1 0 0 0-1 1v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a1 1 0 0 0-1-1zm-9 9c-3.309
//          0-6-2.691-6-6h2c0 2.206 1.794 4 4 4s4-1.794 4-4h2c0 3.309-2.691 6-6 6z"></path>
//          </svg>
//         </a></li>
//         </ul>
//      </div>

//       </nav>
//       <section>

//       </section>
//     </>
//   )
// }

// export default Navbar;

import React, { Fragment } from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <Fragment>
      <div
        className={`d-flex justify-content-space-between    ${classes.container}`}
      >
        <div>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAACXCAMAAAAvQTlLAAAAxlBMVEX////u7u7t7e3v7+/r6+vs7Ozq6ur8/Pz19fXy8vL4+PgAAADn5+fs7+7w7e7//f/5a53Q0NCxsbG4uLiampr/+v/0ZZfujbDnoMEnJyfY2Nh9fX1XV1eKioqmpqb9aJ3GxsYfHx81NTVtbW3jY5DohKjvwc/mdZz56PBCQkJLS0tfX191dXXxscrskrL95fHgnLT3qcbQmLHh0Nn42ObrVYsXFxfwu8/syNrlW4vyxNrfeZz/8/7klbHpbpvcsb/2f6vUZozfLWwoAAANvElEQVR4nO1ci0LquBZNWkoefUiBgoA8RLiACsgMig9kvP//U3cnbdIARRF8MDM35+A5bNNmde+dlZWkLcJxsew80sWxrdiWI9pmJxVth2sbw+poqm3UUkambdzRR2sbyalGnLThvK2ORj+JyzpRXKfqr1PF9e+KY3LIQbjwp/1lyQKHmLjgq7TmDVyWtGGcM3Apm2PgAgzyhJaBK6dsBq48Tho2cSUNWxay44LXceHYthFHadvwl7Rt+EvaNvwV20x/qUbWcOEED8qr4qW/9rQtxeVoW4rL1jYDlz44xcC1LcVA0kYyGjachLxcUgw0OW1L0WBly6doWF7ZUi9RZcthA6E+o4FQN4KySi4jelhF6oOI6ugZEX0nejKzN2yikR24trMd62zP6AEmriTbzR7AnYxs1z3AwKV7wA5cquOauGJ2sPAHjKHZYcNf2+ygTmji0rS0P653GHZfXNlseiQu/C/D9Zk4ZuU93jfvY5u1b97jT+T9ifKEl4up1qS3dDQwsGawPNMVDV7V7G1gyGL0rIaRo4pHVEF5ZctzpGyWtlFts5Utx7SN5ZTR1jaqT2hpG08bQbplT6PZNW7vFT2WEb00onuN23jXuP2OzsHfrHPwezpH9W97A9c+LH+cLlSN/FN19PG4vmfecSr6fiO/vjrvc6qRT+n7X+cJpX/XWD6X31LUjrat6fstRa3U87q+V42Y+l7Z1plfqWzNteIC4pLn2qaTJZfadA44VNuY1hNM22iqJ7SN60as1JbXjaRgUqxST0jHGhcgcxVvRtQ6etw29QSSuOx39IRMRPwL+h7jd3VOQsA/ru91I9m4/q/v/xm4FAFv6Xv8cd4nNsv6OO9xhr5/P++Tfp3/YX2fV7Zd+n57+SJdNzGwHrFuQjLWTTIbVuOjDfolZfkMmxq4bCtleX0sVizPCdMVU5an+oQ4ZXlHnzDDZmuds6kn9mEtZinbup6QB1uH6FXVSKK/JMubuJTNzPbkiNy6npAVt3BZ63oil5xvQ98nF2XiUi0f5y916i/T9xv++iodfXaS+n4Y7fTXL+wr+ArXYjCLvt5fe+eXmfe+H2DxwfTscXVfqDyNl5D3QSDqBht5/8n8UvL+IH3vg7NsC3DQ6HlVKRQKleo88gFYAJ99mX+jPyb8pVY+HFPfO7nEluKylC1v4nICx3dowMAWjVftQqH9NJlyAOX4vuEvfUIrxeXpE6YNJzaxbsJ10USNqbbZ79lsBt8IiRYv4yX3fTrvPwGwymC8JKIes5mqqI+l6WiQYcMpmBSroVdT2/t6VUQqenyptCurBSQaWz73KxLZs+yZIso7s2pN37+vV1VH2tATcbav6xzdA6Z3PYACCT+EtPLRuFcQpfc6T7Mdb+qcJLO1LZ0P7cC1r76XvT7wfTKEnGoXKpXXIYXvwXTyJHK/0oY0m025n8Dyf0jf+1CwH/jLx5enQrv91H+EHuf7AFJE8alavYcOUBkshraoBxV/SEcHggcwjkT7kEwLMfr4w0UvIQqEnvv38N/7/hIwCdb4BlwZ/mLSX4E/7MXxksb5RETvfjUeQkNoOBO/600DS9Q1GONQfb8jv9byPliCByBGAtdKojqbvj6J0PXGS5/K0RsNB4BrCMENhlDfwKWY/xP5tWd//Ot1fLe4GwpclaoghOViIBLrvjqnth59xpUC4BpCzcXrX1u4PtMf9cK1wfx63drA+to/f5sNBK5CZQLf5yuRTU99GIGcIKdwLQDX1B8OXgfn/YmBIV0J10Wvjpu7tEwVWzM6tXfaKGMEcPVnLxFfClyc0XMRwtViGA8dND6S393fP01J9DLrn1cnRB65byOiZOuJmDkty4wodK1AzMaiSfW8P+5HaCniyAI2qxSAwFQ96sSp/rhYLJYoehkLXDBKWf7mOrlq5F29uq3vNzKNCVwgYKLHalX6Cy1XBYVrMIyzXeKS7QVBJMa4BNefHI4N7D31vYnrY/0VSKnFln9IfwGuKPXXi2SHuD0YwH35kbj6Alf1j4gxoNhv0feCsoLHcXXwtuqv+oXzx+U6LlnO5v8xyvLxrlId9Advg+rdIpBizcD1VTral7hmg7e36lu1N5svVwpXW8fxbHJfabdhhBR/etP5uAJ1395eZotHkQXfgSvwYQT2efRHdXI+GfdRkl/YT3DF/pq0C7r0wDoZT2QcORx+kL/20vcwEEd/Qt5Xx0BJkcDFBa6CxoVee72K+LsSuKaAcwy1q39GyWz30/mV3R+350O+RV4FriqEbQC4Imsd13A+n/8Jn/m5iCNCVeGvVyImRKLJLCWW3R/j7QXLscxVHPgqbSZ/OcLmBHkOuGQchb8mkbOOC3HBXrbty3EIob7Exf1cvK9qjj6qEXNlJ7aJ/Q6qC9P/YbttnKJXwV/9iMZ8T7nExVlSXdUTuKZU8gSMQ3zr1EYbGbZ0LgVO1F5KbZa6AMNz4/Px3V93gT/tFdpV+C5x+Y4P8zXfd7bHbahveikJTzozymzYKPvqieUyiAKIH4zbUufEuITSAo5TKzvTvsTFIgaV0yh/sb5fw8VEfweSXYK6acOkbAY/ARcW44EVa8DoWSif3hTIheFUYxyov/bV9zDxECHj46d2u33fr0pcgRgBsSVm2WdSR8MMd+hvs8O3rpODu4TDxlLSA5MCrniKIWb/IKnFJBIkNU1mRD+j7225hgMY/LP5ObgMoK3mYlImnAizosq9mFDOpsRnwZfg2jO/gPljXAEHZT8RqxKFgZzXOn4US+rKZH6GuEi5bZb/fH7t2R/F1clBOO57j/Hcv/8Mc47naiWeOgrZz3NB7K8j59v78pctbAFMwZKVsGgsOma7N3s+X0lJPVtKO88HCVetq9T9+OuTfJ9h43w6EzPtipQ4vdc5/xy3Z/P958ZHy1lb/4ptYompWhH9snBffQ7EopgYDdfWv5KD9x8fdbz30xMZ6/fQOx0uEl6sCYiFMOiXkPGb6/dbPVPZjtT3u/c7fMmmw7v/vk7Fuq+YCED6fcV+x3Hr5NbaLlqgLvn31+8Fk6lCLbGC4/8gLnm/DLa382vtbkfqBFZ8N8saLhnxQ/YVduVXco8FEVt5nDMHc/hOYjuhWFyCzaVNmoF3CBf7ftDpYxv85Y7FxHox5iw2kSP1PfAEu+h2UDga5euNbu22TsKHJsK1C1TsdrtXIZXbja3aQ7eE6jdurWmh0mWJ0PqojJq1Wq3MCCrX6tQmD7cEe9edUjdEqHFND+uP5vpEyb3iV26RXLjX124N1d0rxODfont94Y48x8Kk7BbDYok9NOqdbgPq13Lowm2iq1G947YQ6rpNgpHrlogDl3h9jUK3+PH6xIfrOaTplgFL3b1A0Fy97t4muELUcMFhNnLLiBLAYxHSqdmd2vVt+bpbRrc34Jlb1OkWu3mK3NtLzwZc3kP5ogFtfLSeY4DNWv+yHIa7btcjIXgANd1OqHFdNbtdWfWyhFieNEc0x+pdr9Otu254U4Zogb/AbQ3klhByw4srexQyXnRreeZYH61/pSVTT0C/gjO1OBV+QrduJ/bXCLXcLjQvKz0UoReiVpdh2qnlOpd2sYEuAJc7GjVp/fK6URsJXN5leRRyiGiLW1v358jyOf3FSm6L2di9LJYuXUTdWqcFcW25JfCeXMW5uBBDYF2gbHZJ58EiTOK6oJij1kO53HTrCOoW4UIo4Coy+wv0vU2LbpnmULHmujVI2JbrutceacHpu9CeiMMITGVUhp+XIeSZOP01BPAapgIUfoHIza3ABe4OwbHiKr9CRzMv9GyHEC8Mxf4aqXdCj9pemKfwiY8MO2GO0Xqn4zFqdQTx1uuoHgKf0g6TZ0AhAHHCPHBY6LEv0fdw0XCimOXFbxj0G+B9GLS5Xo3jMD7ZIJ9snDI/YZZt5yhAsBXDAmtZGLrwl+h74fSNfSsw2aDOONFYrXhPD+dpihWyWy6XJCOSMMeKxz5e3yueW9f3dh785QnfcCI9QXHey3uCZeXdKB7CMPrkxKhoZ+v7g/pjatux/2h7t6jUMo5lLLy9uAKa4hLDLSpKEDQeOw7Zfzxov5aRVuuKFBtNXva8Uv2qQzFBTcqbjRIpN1oIaIQ0m03UaTQIO2y/9sD9bTrCpIGKpWbdaxWBduECG6xTzl/Vm+gCcDVs+Hg3pFlCh+1vH3o/wA0iDQ64wrBULLIYV3hV6tSbLMZ1i5r1m1JJXO4h9wN8pL+MrEqSM8YFoxIMwPn6zY1XKlHocbxp8+ZNkbTKI9SAoDZQ2etcXYnah9w/oXAdoqPBSgWf8ZzBWqXyLVAXoeQX9b0gAsdZn3fUO7bQ19ZvzjuSSJj6HrpfouV/+P6cLVxCC5n3k8e3C5zi/XLyPtDfvF/uG+8v1Pz7Jfdjki+7HzMtp3X/qoEBn+b9vid7f/Sp3k/+d8J1Cs8r7F6//93nO1SOn+DzMDJGW88P4c39jviZok2ewBk8gbd5YnM+lP38UPqI097PW+n8+s7nrU71+TQ1cJ3a83yn+vyjCvepPS+6P64kh0/u+drjcR0979hXrx4Vxyy9utd7fX71efdT5YlTfZ9CWk7r/RNpOdX3dZzs+01O9X0wfyd9f+K4fvX9TFl5fwrvszpRnjit96WljG4gzGD5n36/3I5xeyuimeM2fmfcPvJ9fO/onF99f6Hq3/9mff9Lz/3+bXH9P47/DFyfiOP/AIEOZydWpYMlAAAAAElFTkSuQmCC" />
        </div>
        <div>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Gift cards
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="">
                Contact
              </a>
            </li>
       </ul>
          
          {/* s */}
        </div>
        
        <div className={classes.account}>
      <ul className={` nav  w-100  d-flex   ${classes.acoount1}`}>
      <li className="nav-item"><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        style={{fill: "rgba(0, 0, 0, 1)",transform: "msFilter"}}>
        <path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393
         2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 
         1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 
         6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992
       0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z">
        </path></svg></a></li>
      <li className="nav-item"><a href=''><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        style={{fill: "rgba(0, 0, 0, 1)",transform: "msFilter"}}>
        <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952
        0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8
         8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
        </svg></a></li>
        <li className="nav-item"><a href=''>
        <svg xmlns="http://www.w3.org/2000/svg"
        width="24" height="24" viewBox="0 0 24 24"
        style={{fill: "rgba(0, 0, 0, 1)",transform: "msFilter"}}>
        <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5
        6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path>
        </svg>
        </a></li>
        <li className="nav-item me-4"><a href=''>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        style={{fill: "rgba(0, 0, 0, 1)",transform:"msFilter"}}>
        <path d="M21 4H3a1 1 0 0 0-1 1v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a1 1 0 0 0-1-1zm-9 9c-3.309
         0-6-2.691-6-6h2c0 2.206 1.794 4 4 4s4-1.794 4-4h2c0 3.309-2.691 6-6 6z"></path>
         </svg>
        </a></li>
        </ul>
     </div>
        </div>
       
      
    </Fragment>
  );
};

export default Navbar;
