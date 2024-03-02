import React, { useEffect, useState } from 'react';
import TicketDetails from '../utils/Tickets.json';
import RegisterTicket from '../components/RegisterTicket';
import Loader from '../components/loader';
import { FaArrowRight, FaCheck, FaUpload } from 'react-icons/fa';
import InputField from '../components/InputField';
import { generateID } from '../utils/generalFunc';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../utils/config';

const Payment = () => {
  const [user, setUser] = useState({});
  const [ticket, setTicket] = useState(null);
  const [fileUploadProgress, setFileUploadProgress] = useState(0);
  const [buttonState, setButtonState] = useState('disabled');

  const ticketId = new URLSearchParams(window.location.search).get('ticket_id');
  const team_id = new URLSearchParams(window.location.search).get('team_id');

  useEffect(() => {
    const fetchTickets = async () => {
      TicketDetails.filter((ticket) => ticket.id === ticketId).map((data) =>
        setTicket(data)
      );
    };

    fetchTickets();
  }, [ticketId]);

  if (!ticketId) {
    <Loader />;
  }

  if (!ticket) {
    <Loader />;
  }

  const onFileDrop = (e) => {
    const uploadFile = e.target.files[0];
    if (!uploadFile) return;
    const storageRef = ref(storage, `/documents/${generateID()}`);
    const uploadTask = uploadBytesResumable(storageRef, uploadFile);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const fileProgress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setFileUploadProgress(fileProgress);
      },
      (err) => {
        console.log(err);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setUser((prev) => ({
            ...prev,
            filePath: url,
          }));
          setButtonState('enabled');
        });
      }
    );
  };

  const buttonStateChange = (state) => {
    switch (state) {
      case 'disabled':
        return (
          <button
            className="btn confer-btn my-8 ml-4"
            type="submit"
            disabled={true}
          >
            Submit <FaArrowRight className="inline-block ml-2" />
          </button>
        );
      case 'enabled':
        return (
          <button
            className="btn confer-btn my-8 ml-4"
            type="submit"
            disabled={false}
            onClick={(e) => (e.currentTarget.innerHTML = 'Loading..')}
          >
            Submit <FaArrowRight className="inline-block ml-2" />
          </button>
        );
      default:
        break;
    }
  };

  const handleSubmit = () => {};

  const handlePaymentChange = (e) => {
    setUser((prev) => ({
      ...prev,
      teamId: team_id,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="w-full min-h-screen relative bg-primary py-12">
      <div className="container max-w-6xl mx-auto px-5 md:px-2 text-center">
        <h5 className="text-lg font-medium uppercase text-accent">
          Complete your Payment
        </h5>
        <h3 className="text-4xl my-2 tracking-wider font-medium uppercase text-white">
          Pay Here!
        </h3>
        <div className="w-full relative flex flex-wrap mt-10 items-center">
          <div className="basis-full md:basis-1/3">
            {ticket && <RegisterTicket {...ticket} />}
            {/* {console.log(ticket)} */}
          </div>
          <div className="basis-full md:basis-2/3 md:p-4 mt-10 md:mt-0">
            <div className="contact-container bg-[#ffffff0d] rounded-md p-4">
              <form className="form text-left" onSubmit={handleSubmit}>
                <div className="flex flex-wrap mt-4">
                  <div className="relative flex items-center justify-center w-full border-2 border-white py-10 rounded-xl border-dashed px-2">
                    {fileUploadProgress === 100 ? (
                      <FaCheck
                        style={{ flex: 1 }}
                        className=" text-2xl text-white"
                      />
                    ) : (
                      <FaUpload
                        style={{ flex: 1 }}
                        className="text-2xl text-white"
                      />
                    )}

                    <span style={{ flex: 3 }} className="text-gray-300">
                      {fileUploadProgress === 0
                        ? 'Drag & Drop or Click to add Abstract/Full Paper documents'
                        : fileUploadProgress === 100
                        ? 'File Uploaded'
                        : `File Uploading ${fileUploadProgress}% `}
                    </span>
                    <input
                      className="absolute left-0 top-0 w-full h-full opacity-0 cursor-pointer"
                      type="file"
                      accept=".doc,.docx,.pdf"
                      name="paymentFile"
                      id="paymentFile"
                      onChange={onFileDrop}
                      required={true}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap mt-8">
                  <div className="basis-full md:basis-1/2 px-4">
                    {/* Input field  */}
                    <InputField
                      key={7}
                      {...{
                        id: 7,
                        name: 'paperTitle',
                        type: 'text',
                        placeholder: 'Abstract Title',
                        errorMessage: 'Field Required',
                        pattern: '[A-Za-z0-9 ]{1,50}',
                        required: true,
                      }}
                      value={user.paperTitle}
                      onChange={handlePaymentChange}
                    />
                  </div>
                  <div className="basis-full md:basis-1/2 px-4 mt-8 md:mt-0">
                    {/* Input field */}
                    <InputField
                      key={8}
                      {...{
                        id: 8,
                        name: 'publication',
                        type: 'text',
                        placeholder: 'Publication (YES/NO)',
                        errorMessage: 'Enter Only YES/NO',
                        pattern: '[A-Za-z ]{1,5}',
                        required: true,
                      }}
                      value={user.publication}
                      onChange={handlePaymentChange}
                    />
                  </div>
                </div>

                {buttonStateChange(buttonState)}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
