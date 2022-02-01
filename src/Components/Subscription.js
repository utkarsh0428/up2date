import React from 'react';

function Subscription() {
    return (
        <div id="subsBody">
            <div id="headingParaCon">
                <h1 id="subsHeading">Subscription</h1>
                <p id="subsPara">We know keeping up with the current news events is very difficult due to your busy schedule!We have got a solution! </p>
                <form>
                    <input id="numberInput" type="text" placeholder='Enter Whatsapp number here..' /><br/><br/>
                    <input type="submit" id="submitBTN" value="Send News"/>
                </form>
            </div>

        </div>

    );
}

export default Subscription;
