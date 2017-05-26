import React, { Component } from 'react';


class Bot extends Component {
  render() {
    return (
        <div id="botDiv">
	        {/*<div id="floatingDiv" style="width: 300px; height: 40px; right: 10px; bottom: 450px; display: block; visibility: hidden; position: fixed; z-index: 10000;"></div>*/}
	        <iframe id="mebot_chat" src="https://webchat.botframework.com/embed/WHResumeBot?s=KVYT09wJxO0.cwA.kn8.blw-WxuPiQA45mKPaPAgDruw5xTO_DX5xLysZ-Qfw1M" style="height: 480px; right: 10px; bottom: 10px; display: block; position: fixed; z-index: 1000;"></iframe>
	        {/*<div id="mebot_botIco" style='border-radius: 25px; width: 70px; height: 70px; right: 10px; bottom: 10px; background-image: url("http://bot-framework.azureedge.net/bot-icons-v1/bot-framework-default-7.png"); display: block; visibility: visible; position: fixed; background-size: contain;'></div>*/}
	    </div>
    );
  }
}

export default Bot;