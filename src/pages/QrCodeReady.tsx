import React, { useEffect, useState } from "react";

import QrReader from "react-qr-reader";
import { useHistory } from "react-router-dom";

import "../assets/css/pages/qrCodeReady.css";

function QrCodeReady() {
  const [result, setResult] = useState<string>();
  let history = useHistory();

  function handleScan(data: any) {
    if (data) {
      console.log(data);
      setResult(data);
    }
  }

  useEffect(() => {
    if (result === "07227447065") {
      history.push("/card-cpfl");
    }
    // eslint-disable-next-line
  }, [result]);

  return (
    <>
      <h1 className="qrCodeReady__title">CardCPFL</h1>
      <QrReader
        className="qrCodeReader"
        delay={300}
        onError={(err) => console.error(err)}
        onScan={handleScan}
      />
    </>
  );
}

export default QrCodeReady;
