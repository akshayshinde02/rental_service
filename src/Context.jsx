import { createContext, useContext, useEffect, useState } from "react";

const OrderContext = createContext();

const Context = ({ children }) => {
  const [user, setUser] = useState();
  const [senderZip, setSenderZip] = useState("");
  const [receiverZip, setReceiverZip] = useState("");
  const [typeOfCourier, setTypeOfCourier] = useState();
  const [weight, setWeight] = useState();
  const [length, setLength] = useState();
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [value, setValue] = useState();
  const [content, setContent] = useState();
  const [paid, setPaid] = useState();
  const [serviceType, setServiceType] = useState();
  const [riskSurcharge, setRiskSurcharge] = useState();
  const [bookingOption, setBookingOption] = useState();
  const [parcelImage, setParcelImage] = useState();
  const [pickUpDate, setPickUpDate] = useState();
  const [cost, setCost] = useState();
  const [serviceClass, setServiceClass] = useState();
  const [o_address, setOAddress] = useState();
  const [d_address, setDAddress] = useState();
  const [availableServices, setAvailableServices] = useState([]);
  const [localServices, setLocalServices] = useState([]);
  const [vendor, setVendor] = useState();
  const [service, setService] = useState();
  const [step, setStep] = useState();


  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [age, setage] = useState('');


  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
  }, []);

  return (
    <OrderContext.Provider
      value={{
        step,
        setStep,
        user,
        setUser,
        senderZip,
        setSenderZip,
        receiverZip,
        setReceiverZip,
        typeOfCourier,
        setTypeOfCourier,
        weight,
        setWeight,
        length,
        setLength,
        height,
        setHeight,
        width,
        setWidth,
        value,
        setValue,
        content,
        setContent,
        paid,
        setPaid,
        riskSurcharge,
        setRiskSurcharge,
        serviceType,
        setServiceType,
        bookingOption,
        setBookingOption,
        parcelImage,
        setParcelImage,
        pickUpDate,
        setPickUpDate,
        cost,
        setCost,
        serviceClass,
        setServiceClass,
        o_address,
        setOAddress,
        d_address,
        setDAddress,
        availableServices,
        setAvailableServices,
        localServices,
        setLocalServices,
        service,
        setService,
        vendor,
        setVendor,
        category,
        setCategory,
        subCategory,
        setSubCategory,
        age,
        setage,

      }}>
      {children}
    </OrderContext.Provider>
  );
};

export const OrderState = () => {
  return useContext(OrderContext);
};

export default Context;