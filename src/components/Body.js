import React from "react";
import "./Body.css";
import Header from "./Header";

function Body({ spotify }) {
  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img
          src="https://newjams-images.scdn.co/v2/discover-weekly/tvj1oDdu54CpbRg4KH1hCn5KIVx4tBDjeV2H3rgJkavUD4kh329TMEsjqidjivVifLRW03Pwp4gi1fuC3R-rt7pKb9YBBlSy1BLeyPTsg-Fpsk-b_5-R7UkXL5SLw5P7T9cIFng37j9SOL1WTpIIT8gnPAXrnJRqNVikKaLdjr1I1DmH2W7q4Bfwky1lq_T-XqLOX7EXraA3fqnuKe-1OQkcEL1kmKzMiOnuF4jnvxEBWKeEdX25frYoagW37oKPuCNAwF_nGBKFfrWjEADpCYqG6KP5o4gtWdkS7VAkWyEF7slGYZls2ntncL8BPjy-oMwhmU74D_FlCmdmYfgf55mGITuWS5Csa3NBBqNB2ms=/OTA6MzA6NTFUMzItNTAtMA==/default"
          alt=""
        />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>description...</p>
        </div>
      </div>
    </div>
  );
}

export default Body;
