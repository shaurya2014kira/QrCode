import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';

export const PopUp = ({ data, dataflag, cancelFlag,handleData }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState(null); 

    useEffect(() => {

        setModalData(data); // Set the data to be passed to the modal
        setIsModalOpen(true);
    }, [dataflag])

    console.log("modalData", modalData);
    const handleOk = () => {
        setIsModalOpen(false);
        handleData(data)
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        cancelFlag(!dataflag)
    };

    return (
        <>

            <Modal title="Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                {modalData && (
                    <>
                        <img src={`http://192.168.1.9:3000/uploads/${modalData.companyId}/Visitor/${modalData.uploadImage
                            }`} alt="Profile" style={{ maxWidth: '100%', height: 'auto' }} />
                        <p>Name: {modalData.visitorName}</p>
                        <p>Email: {modalData.visitorEmail}</p>
                        <p>Phone Number: {modalData.visitorPhoneNo}</p>
                        <p>Visit Time: {modalData.VisitTime}</p>
                        <p>Visit Date: {modalData.VisitDate}</p>
                    </>
                )}
            </Modal>
        </>
    );
};
