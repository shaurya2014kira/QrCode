import React, { useContext, useEffect, useState } from 'react'
import { Button, QRCode } from "antd";
import html2canvas from "html2canvas";
import "./Qrgenerate.scss"
import { DownloadOutlined } from '@ant-design/icons';
import bg from "../../assets/CHEMORO LOGO.png"
import { AuthContext } from '../../Context/AuthContext';
import { ColorPicker } from 'antd';
import { useLocation } from "react-router-dom"
import { encryptionData } from "../../utils/encrypt"

export const QrGenerateAndDownload = (data) => {

    const downloadQRCode = () => {
        const divToDownload = document.getElementById("myqrcode");

        // Capture the entire div, including the QR code and paragraph
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
    const { SelectProduct, setSelectProduct } = useContext(AuthContext)
    const [url, setUrl] = useState("")
    const [color, setColor] = useState('#36cfc9');
    const location = useLocation();
    const { pathname } = location;
    console.log("pathname", pathname)
    const colorPick = (e) => {
        console.log(e, "ertyujk")
        setColor(`rgb(${e.metaColor
            .r},${e.metaColor
                .g},${e.metaColor
                    .b})`)
        console.log("color", color);
    }


    useEffect(() => {
        const text = (localStorage.getItem("userData"));

        console.log(JSON.stringify(JSON.parse(text).companyId), "sajfkljskldfjlk");

        setUrl(import.meta.env.VITE_Current_API + `/Check/${encryptionData(JSON.parse(text).companyId)}`);

    }, [SelectProduct])
    useEffect(() => {
        if (pathname === "/home") {
            setSelectProduct("jkhgf")
        } else {
            setSelectProduct("")
        }
    }, [pathname])
    console.log("dataUrl", url);
    return (
        <>{SelectProduct != "" ? <div><div id="myqrcode" className='Qr-icon'>
            <section className='icon-display-section1' >
                <h4>{SelectProduct}</h4>
                <p>Scan the QR code to check out</p>
            </section>
            <section className='icon-display-section2'>
                <section>
                    <img src={bg} alt="" />
                    <h6>Chemoro Industries Limited
                    </h6>
                    <QRCode
                        className='Qr-icon-show'
                        icon={bg}
                        value={url}
                        // bgColor={color}
                        size={200}
                        color={color}

                    />
                    <ColorPicker value={color} size="small" onChange={colorPick} />
                    <p>Thank You For Visiting Us
                    </p>
                    <p>Unit - I</p>
                </section>
            </section>
        </div>
            <div className='Qr-btn'>

                <Button type="primary" icon={<DownloadOutlined />} onClick={downloadQRCode}>
                    Download
                </Button>
            </div> </div> : <div>
            <h1>No Office selected</h1>

        </div>}

        </>
    )
}
