import React, { useEffect, useState } from "react";
import { Button, QRCode } from "antd";
import html2canvas from "html2canvas";
import "./QrPass.scss"; // Import SCSS file
import bg from '../../assets/CHEMORO LOGO.png'
import { DownloadOutlined } from '@ant-design/icons';
import { useParams } from "react-router-dom";
import { decryptData, decryptRoutes } from "../../utils/encrypt";
import { useMutation } from "@tanstack/react-query";
import hrmsApi from "../../api/hrmsApi";

export const QrPass = () => {
  const [color, setColor] = useState("#36cfc9"); // Define color state
  const [passData, setPassData] = useState([])

  const downloadQRCode = () => {
    const divToDownload = document.getElementById("myqrcode");

    html2canvas(divToDownload).then((canvas) => {
      const url = canvas.toDataURL();
      const a = document.createElement("a");
      a.download = "QRCode.png";
      a.href = url;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  };
  const { id } = useParams()
  console.log("kjhgx", decryptRoutes(id))

  const getpassData = useMutation({
    mutationFn: hrmsApi.VisitorPassDetails
  })
  const fetchdata = () => {
    getpassData.mutate({ passId: decryptRoutes(id) }, {
      onSuccess: (abv) => {
        console.log("abv", abv)
        setPassData(decryptData(abv.data))
       
      }
    })
  }
  useEffect(() => {
    fetchdata()
    
  }, [])
  console.log('data', passData)
  return (
    <>
      <div className="qr-pass-container">
        <div id="myqrcode" className="qr-code-section">
          <section className="Qr-header">
            <p> <img className="company-img" src={bg} alt="" /></p>
            <p>{passData.visitorName}</p>
            <p><img className="visitor-img" src={`http://192.168.1.9:3000/uploads/${passData.companyId}/Visitor/${passData.uploadImage}`}  alt="" /></p>
          </section>
          <section className="qr-code-content">
            <section className="content-section">
              <p className="Qr-date">Date:12-12-12 <span className="Qr-Time">Time:11:50</span></p>
              <h6>Chemoro -Industries Limited</h6>

              <QRCode
                // icon={bg}
                className="qr"
                value="9865320"
                size={200}
                color={color}
              />


              {/* <ColorPicker value={color} size="small" onChange={colorPick} /> */}
              <p>Scan QR CODE to Verify E-Pass</p>
              <p>Unit - I</p>
              
            </section>
          </section>
        </div>
        <div className="qr-code-btn">
                <Button
                  className="download-btn"
                  icon={<DownloadOutlined />}
                  onClick={downloadQRCode}
                >
                  Download
                </Button>
              </div>
      </div>
    </>
  );
};
