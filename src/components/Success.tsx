import { Button, Image } from "@mantine/core";
import React from "react";
import tankyou from '../images/party.svg';

function Success() {
  return <>
    <div className='content'>
                <div className='form-container' style={{textAlign:'center'}}>
                    <div className="form-content">
                        <div className='header'>
                            <h1>Thank you!</h1>
                        </div>
                        <div className='form-content'>
                            <Image src={tankyou} />
                        </div>
                    </div>
                    <div className='form-navigation'>
                        {/* Close windows */}
                        <p>We greatly appreciate your participation!</p>
                            <p>You can now close this tab.</p>
                    </div>
                </div >
            </div>
  </>;
}

export default Success;