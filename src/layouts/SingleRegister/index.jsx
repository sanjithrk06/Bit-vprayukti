import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useState } from 'react';
import axios from 'axios';
import {
  FaArrowRight,
  FaCheck,
  FaCopy,
  FaReceipt,
  FaRupeeSign,
  FaUpload,
  FaUserAlt,
} from 'react-icons/fa';
import AccountInfo from '../../components/AccountInfo';
import InputField from '../../components/InputField';
import RegisterTicket from '../../components/RegisterTicket';
import { storage } from '../../utils/config';
import { generateID } from '../../utils/generalFunc';

const PersonalInfo = ({
  setSingleUser,
  handleInputChange,
  setMultiStep,
  ...singleUser
}) => {
  return (
    <form
      className="form text-left"
      onSubmit={(e) => {
        e.preventDefault();
        setMultiStep(2);
      }}
    >
      <div className="mx-4 p-4 flex justify-between items-center">
        {/* first  */}
        <div className="w-full flex items-center">
          <div className="relative flex flex-col items-center text-teal-600">
            <div
              className={`rounded-full transition duration-500 ease-in-out border-2 border-accent h-12 w-12 flex items-center justify-center py-3`}
            >
              <span className="text-accent font-bold text-xl">
                <FaUserAlt />
              </span>
            </div>
          </div>
          <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300 "></div>
        </div>
        {/* second  */}
        <div className="w-full flex items-center">
          <div className="relative flex flex-col items-center text-teal-600">
            <div
              className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3`}
            >
              <span className="text-white font-bold text-xl">
                <FaRupeeSign />
              </span>
            </div>
          </div>
          <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300 "></div>
        </div>
        {/* third  */}
        <div className="w-full flex items-center">
          <div className="relative flex flex-col items-center text-teal-600">
            <div
              className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3`}
            >
              <span className="text-white font-bold text-xl">
                <FaReceipt />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="basis-full md:basis-1/2 px-4">
          {/* Input field */}
          <select
            name="salutation"
            id="salutation"
            required={true}
            className="bg-transparent py-2 border-0 border-b-2 border-white w-full pl-2 outline-none text-white"
            value={singleUser.salutation}
            onChange={handleInputChange}
            defaultValue="Dr"
          >
            <option className="bg-gray-700" value="Dr">
              Dr.
            </option>
            <option className="bg-gray-700" value="Mr">
              Mr.
            </option>
            <option className="bg-gray-700" value="Mrs">
              Mrs.
            </option>
            <option className="bg-gray-700" value="Ms">
              Ms.
            </option>
          </select>
        </div>
        <div className="basis-full md:basis-1/2 px-4 mt-8 md:mt-0">
          {/* Input field */}
          <InputField
            key={1}
            {...{
              id: 1,
              name: 'name',
              type: 'text',
              placeholder: 'Participant Name',
              errorMessage: 'Field Required',
              pattern: '[A-Za-z ]{1,30}',
              required: true,
            }}
            value={singleUser.name}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="flex flex-wrap mt-8">
        <div className="basis-full md:basis-1/2 px-4">
          {/* Input field  */}
          <InputField
            key={3}
            {...{
              id: 3,
              name: 'designation',
              type: 'text',
              placeholder: 'Designation',
              errorMessage: 'Field should be in letters',
              pattern: '[A-Za-z0-9 ]{1,20}',
              required: true,
            }}
            value={singleUser.designation}
            onChange={handleInputChange}
          />
        </div>
        <div className="basis-full md:basis-1/2 px-4 mt-8 md:mt-0">
          {/* Input field  */}
          <InputField
            key={2}
            {...{
              id: 7,
              name: 'department',
              type: 'text',
              placeholder: 'Department',
              errorMessage: 'Invalid Department',
              pattern: '[A-Za-z. ]{1,100}',
              required: true,
            }}
            value={singleUser.department}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="flex flex-wrap mt-8">
        <div className="basis-full md:basis-1/2 px-4">
          {/* Input field */}
          <select
            name="year"
            id="year"
            required={true}
            className="bg-transparent py-2 border-0 border-b-2 border-white w-full pl-2 outline-none text-white"
            value={singleUser.year}
            onChange={handleInputChange}
            defaultValue="I year"
          >
            <option className="bg-gray-700" value="I year">
              I Year
            </option>
            <option className="bg-gray-700" value="II year">
              II Year
            </option>
            <option className="bg-gray-700" value="III year">
              III Year
            </option>
            <option className="bg-gray-700" value="IV year">
              IV Year
            </option>
            <option className="bg-gray-700" value="V year">
              V Year
            </option>
            <option className="bg-gray-700" value="Nil">
              Nil
            </option>
          </select>
        </div>
        <div className="basis-full md:basis-1/2 px-4 mt-8 md:mt-0">
          {/* Input field */}
          <InputField
            key={4}
            {...{
              id: 4,
              name: 'clgName',
              type: 'text',
              placeholder: 'College Name',
              errorMessage: 'Field Required',
              pattern: '[A-Za-z0-9 ]{1,50}',
              required: true,
            }}
            value={singleUser.clgName}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="flex flex-wrap mt-8">
        <div className="basis-full md:basis-1/2 px-4">
          {/* Input field  */}
          <InputField
            key={5}
            {...{
              id: 5,
              name: 'email',
              type: 'email',
              placeholder: 'Email',
              errorMessage: 'Invalid email address',
              required: true,
            }}
            value={singleUser.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="basis-full md:basis-1/2 px-4 mt-8 md:mt-0">
          {/* Input field */}
          <InputField
            key={6}
            {...{
              id: 6,
              name: 'phone',
              type: 'text',
              placeholder: 'Phone',
              errorMessage: 'Invalid Phone Number',
              pattern: '[6-9]{1}[0-9]{9}',
              required: true,
            }}
            value={singleUser.phone}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <button
        className="btn confer-btn my-8 ml-4"
        type="submit"
        onClick={(e) => (e.currentTarget.innerHTML = 'Loading..')}
      >
        Next <FaArrowRight className="inline-block ml-2" />
      </button>
    </form>
  );
};
const PaymentInfo = ({
  handlePaymentChange,
  setMultiStep,
  handleSubmit,
  setSingleUser,
  ...singleUser
}) => {
  const [fileUploadProgress, setFileUploadProgress] = useState(0);
  const [buttonState, setButtonState] = useState('disabled');

  const onFileDrop = (e) => {
    const uploadFile = e.target.files[0];
    if (!uploadFile) return;
    const storageRef = ref(storage, `/paymentImg/${generateID()}`);
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
          setSingleUser((prev) => ({
            ...prev,
            payment: {
              ...prev.payment,
              filePath: url,
            },
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

  return (
    <form className="form text-left" onSubmit={handleSubmit}>
      <div className="mx-4 p-4 flex justify-between items-center">
        {/* first  */}
        <div className="w-full flex items-center">
          <div className="relative flex flex-col items-center text-teal-600">
            <div
              className={`rounded-full transition duration-500 ease-in-out border-2 border-accent bg-accent h-12 w-12 flex items-center justify-center py-3`}
            >
              <span className="text-white font-bold text-xl">
                <FaCheck />
              </span>
            </div>
          </div>
          <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-accent "></div>
        </div>
        {/* second  */}
        <div className="w-full flex items-center">
          <div className="relative flex flex-col items-center text-teal-600">
            <div
              className={`rounded-full transition duration-500 ease-in-out border-2 border-accent h-12 w-12 flex items-center justify-center py-3`}
            >
              <span className="text-accent font-bold text-xl">
                <FaRupeeSign />
              </span>
            </div>
          </div>
          <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300 "></div>
        </div>
        {/* third  */}
        <div className="w-full flex items-center">
          <div className="relative flex flex-col items-center text-teal-600">
            <div
              className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3`}
            >
              <span className="text-white font-bold text-xl">
                <FaReceipt />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="relative flex items-center justify-center w-full border-2 border-white py-10 rounded-xl border-dashed px-2">
          {fileUploadProgress === 100 ? (
            <FaCheck style={{ flex: 1 }} className=" text-2xl text-white" />
          ) : (
            <FaUpload style={{ flex: 1 }} className="text-2xl text-white" />
          )}

          <span style={{ flex: 3 }} className="text-gray-300">
            {fileUploadProgress === 0
              ? 'Upload Payment proof with Transaction ID.'
              : fileUploadProgress === 100
              ? 'File Uploaded'
              : `File Uploading ${fileUploadProgress}% `}
          </span>
          <input
            className="absolute left-0 top-0 w-full h-full opacity-0 cursor-pointer"
            type="file"
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
              name: 'senderName',
              type: 'text',
              placeholder: 'Account Holder name',
              errorMessage: 'Field Required',
              pattern: '[A-Za-z0-9 ]{1,50}',
              required: true,
            }}
            value={singleUser.payment.senderName}
            onChange={handlePaymentChange}
          />
        </div>
        <div className="basis-full md:basis-1/2 px-4 mt-8 md:mt-0">
          {/* Input field */}
          <InputField
            key={8}
            {...{
              id: 8,
              name: 'paymentId',
              type: 'text',
              placeholder: 'Transaction ID',
              errorMessage: 'Invalid ID',
              pattern: '[A-Za-z0-9 ]{1,50}',
              required: true,
            }}
            value={singleUser.payment.paymentId}
            onChange={handlePaymentChange}
          />
        </div>
      </div>
      {buttonStateChange(buttonState)}
    </form>
  );
};

const RegistrationSuccess = ({ ...singleUser }) => {
  return (
    <div className="form text-left">
      <div className="mx-4 p-4 flex justify-between items-center">
        {/* first  */}
        <div className="w-full flex items-center">
          <div className="relative flex flex-col items-center text-teal-600">
            <div
              className={`rounded-full transition duration-500 ease-in-out border-2 border-accent bg-accent h-12 w-12 flex items-center justify-center py-3`}
            >
              <span className="text-white font-bold text-xl">
                <FaCheck />
              </span>
            </div>
          </div>
          <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-accent "></div>
        </div>
        {/* second  */}
        <div className="w-full flex items-center">
          <div className="relative flex flex-col items-center text-teal-600">
            <div
              className={`rounded-full transition duration-500 ease-in-out border-2 border-accent bg-accent h-12 w-12 flex items-center justify-center py-3`}
            >
              <span className="text-white font-bold text-xl">
                <FaCheck />
              </span>
            </div>
          </div>
          <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-accent "></div>
        </div>
        {/* third  */}
        <div className="w-full flex items-center">
          <div className="relative flex flex-col items-center text-teal-600">
            <div
              className={`rounded-full transition duration-500 ease-in-out border-2 border-accent h-12 w-12 flex items-center justify-center py-3`}
            >
              <span className="text-accent font-bold text-xl">
                <FaReceipt />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-5 flex-col relative">
        <h2 className="text-3xl font-medium text-white">
          Registration Success
        </h2>
        <h2
          className="text-xl font-medium text-white mt-3"
          onClick={(e) => {
            navigator.clipboard.writeText(`${singleUser.teamId}`);
          }}
        >
          Ticket ID : {singleUser.teamId}
          <FaCopy className="inline-block ml-2 cursor-pointer" />
        </h2>
      </div>
    </div>
  );
};

const SingleRegister = (props) => {
  const [multiStep, setMultiStep] = useState(1);

  const [singleUser, setSingleUser] = useState({
    users: [
      {
        userId: '',
        name: '',
        designation: '',
        year: '',
        clgName: '',
        email: '',
        phone: '',
        department: '',
        salutation: '',
      },
    ],
    payment: {
      status: false,
      senderName: '',
      paymentId: '',
      filePath: '',
    },
    ticketId: props.id,
  });

  const handleInputChange = (e) => {
    setSingleUser((prev) => ({
      ...prev,
      users: [
        {
          ...prev.users[0],
          [e.target.name]: e.target.value,
        },
      ],
    }));
  };
  const handlePaymentChange = (e) => {
    setSingleUser((prev) => ({
      ...prev,
      payment: {
        ...prev.payment,
        [e.target.name]: e.target.value,
      },
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Count teams
    const teamCount = await axios.get(
      'https://bitvprayukti.bitsathy.ac.in/api/fetchTeams',
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const teamId =
      'VPT-' +
      props.eventId +
      (teamCount.data.count + 80).toString().padStart(4, '0');
    const ticket = { ...singleUser, status: false, teamId: teamId };
    // Users
    const users = [];

    for (let i = 0; i < ticket.users.length; i++) {
      const user = await axios.get(
        `https://bitvprayukti.bitsathy.ac.in/api/fetchUser/${ticket.users[i].email}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (user.data) {
        users.push({
          ...ticket.users[i],
          userId: user.data.user_id,
          ticketId: user.data.ticket_id + ',' + ticket.ticketId,
          teamId: user.data.team_id + ',' + teamId,
        });
      } else {
        const usersCount = await axios.get(
          'https://bitvprayukti.bitsathy.ac.in/api/fetchUsers',
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        const userId =
          'VPU-' + (usersCount.data.count + 670).toString().padStart(4, '0');
        users.push({
          ...ticket.users[i],
          userId: userId,
          ticketId: ticket.ticketId,
          teamId: teamId,
        });
      }
    }

    const usersId = [];
    for (let i = 0; i < users.length; i++) {
      usersId.push(users[i].userId);
    }

    const ticketData = {
      ...ticket,
      users: users,
      usersId: JSON.stringify(usersId),
      eventName: props.title,
    };

    // await sendEmail({
    //   name: ticketData.users[0].name,
    //   email: ticketData.users[0].email,
    //   ticketId: ticketData.teamId,
    //   eventName: props.title,
    // });

    setSingleUser(ticketData);

    try {
      const storeUser = await axios.post(
        'https://bitvprayukti.bitsathy.ac.in/api/createUser',
        ticketData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (storeUser.status === 200) {
        setMultiStep(3);
      }
    } catch (error) {
      alert('Error Submitting Data. You can try later!');
    }

    //Register tickets
    // const uniqueTeamId = await generateTeamID(props.eventId);
    // setSingleUser((prev) => ({ ...prev, id: uniqueTeamId }));
    // await firestoreAddDoc('registerTickets', {
    //   ...singleUser,
    //   id: uniqueTeamId,
    // });
    //Register users
    // const querySnapshot = await firestoreGetDocs(
    //   ['registerUsers'],
    //   ['email', '==', singleUser.users[0].email]
    // );
    // if (querySnapshot.size === 0) {
    //   await firestoreAddDoc('registerUsers', {
    //     ...singleUser.users[0],
    //     ticketId: [singleUser.ticketId],
    //     teamId: [uniqueTeamId],
    //   });
    // } else {
    //   await firestoreUpdateDoc(['registerUsers', querySnapshot.docs[0].id], {
    //     ticketId: arrayUnion(singleUser.ticketId),
    //     teamId: arrayUnion(uniqueTeamId),
    //   });
    // }
  };

  const displaySteps = (steps) => {
    switch (steps) {
      case 1:
        return (
          <PersonalInfo
            {...singleUser}
            handleInputChange={handleInputChange}
            setMultiStep={setMultiStep}
            setSingleUser={setSingleUser}
          />
        );
      case 2:
        return (
          <PaymentInfo
            {...singleUser}
            handlePaymentChange={handlePaymentChange}
            handleSubmit={handleSubmit}
            setSingleUser={setSingleUser}
          />
        );
      case 3:
        return <RegistrationSuccess {...singleUser} />;
      default:
        break;
    }
  };

  return (
    <div className="w-full min-h-screen relative bg-primary py-12">
      <div className="container max-w-6xl mx-auto px-5 md:px-2 text-center">
        <h5 className="text-lg font-medium uppercase text-accent">
          Get your Tickets
        </h5>
        <h3 className="text-4xl my-2 tracking-wider font-medium uppercase text-white">
          Registration
        </h3>
        <div className="w-full relative flex flex-wrap mt-10 items-center">
          <div className="basis-full md:basis-1/3">
            {multiStep === 2 ? <AccountInfo /> : <RegisterTicket {...props} />}
          </div>
          <div className="basis-full md:basis-2/3 md:p-4 mt-10 md:mt-0">
            <div className="contact-container bg-[#ffffff0d] rounded-md p-4">
              {displaySteps(multiStep)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRegister;
