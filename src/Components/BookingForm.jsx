import styled from 'styled-components';
import {React, useState} from 'react';
import DatePicker from "react-datepicker";
import validateEmail from "../utils";
import { format } from 'date-fns';

import "react-datepicker/dist/react-datepicker.css";

const Container = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10% 20%;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: fit-content;
    min-width: 500px;
`

const Section = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Field = styled.fieldset`
    display: flex;
    flex-direction: column;
    border: none;
    padding: 0;
    width: 45%;

    input[type=number]::-webkit-outer-spin-button, 
    input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: inner-spin-button !important;
        width: 25px;
        position: absolute;
        top: 3px;
        right: 3px;
        height: 90%;
      }

    label {
        margin-top: 25px;
        margin-bottom: 5px;
        color: #EDEFEE;
    }

    .other-input {
        border-radius: 10px;
        height: 40px;
        padding-left: 10px;
        padding-top: 0px;
        padding-bottom: 0px;
        border: 0;
    }

    .date-input {
        padding-left: 30px;
        height: 40px;
        border-radius: 10px;
        border: 0;
        padding-top: 0px;
        padding-bottom: 0px;
        padding-right: 0px;
    }

    .react-datepicker__calendar-icon {
        padding-top: 11px
    }

    select {
        border-radius: 10px;
        height: 40px;
        padding-left: 10px;
        border: 0;
    }

    textarea {
        border-radius: 10px;
        height: 125px;
        padding: 10px;
    }
`

const MyContainer = styled.div`
    background-color: #EDEFEE;
`

const Submit = styled.button`
        margin-left: auto;
        //margin-right: auto;
        height: 50px;
        width: 45%;
        color: #333333;
        background-color: #F4CE14;
        font-family: 'Karla';
        font-weight: 700;
        font-size: 18px;
        border: none;
        border-radius: 10px;
        margin-top: 25px;
        cursor: pointer;
        transition: all 0.2s ease;
        transform: scale(1);

        &:hover:not(:disabled) {
            box-shadow: 0px 5px 5px #333333;
            transform: scale(1.01) perspective(1px);
            }

        &:active {
        color: #EDEFEE;
        background-color: #495E57;
        }

        &:disabled {
            color: #495E57;
            background-color: #EDEFEE;
            opacity: 50%;
        }
`

const Message = styled.p`
    color: #F4CE14;
    font-size: small;
    padding: 0px;
    padding-bottom: 5px;
`

const ErrorMessage = styled.p`
    color: #f41414;
    font-size: small;
    padding: 0px;
    padding-bottom: 5px;
`

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 40px 50px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  h2{
    margin: 10px;
  }

  img {
    height: 100px;
    margin-bottom: 20px;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const Button = styled.button`
  background: #f4ce14;
  color: #333333;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 20px;
  font-family: 'Karla';
  font-weight: 700;
  font-size: 18px;
  transition: all 0.2s ease;
  transform: scale(1);

    &:hover:not(:disabled) {
            box-shadow: 0px 5px 5px #333333;
            transform: scale(1.01) perspective(1px);
            }

    &:active {
        color: #EDEFEE;
        background-color: #495E57;
        }
`;

const CustomAlert = ({ message, onClose, startDate, firstName, guests, time,}) => {
    return (
      <>
        <Overlay />
        <Modal>
            <img src="./images/check.png" alt="check" />
            <h3>Thank you, {firstName}</h3>
            <h2>{message}</h2>
            <p>Reservation Date:</p>
            <h4>{format(startDate, "EEEE, MMMM dd, yyyy")}</h4>
            <p>Number of guests:</p>
            <h4>{guests}</h4>
            <p>Time:</p>
            <h4>{time}</h4>
            <p>You will receive an email with all the details from your reservation.</p>
            <Button onClick={onClose}>OK</Button>
        </Modal>
      </>
    );
  };



const BookingForm = () => {
    //Alert
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    //Reservation Info
    const [startDate, setStartDate] = useState(new Date());
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [details, setDetails] = useState("");
    const [guests, setGuests] = useState("-");
    const [time, setTime] = useState("choose time");
    const [occasion, setOccasion] = useState("occasion");
    //Info Message
    const [messageVisible, setMessageVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [errorMessageVisible, setErrorMessageVisible] = useState(false);
    const [errorEmailVisible, setErrorEmailVisible] = useState(false);
    const [errorNameVisible, setErrorNameVisible] = useState(false);
    const [errorOccasionVisible, setErrorOccasionVisible] = useState(false);
    const [errorTimeVisible, setErrorTimeVisible] = useState(false);

    const handleFocus = () => {
        setMessageVisible(true);
        setErrorMessageVisible(false);
    };

    const handleTimeBlur = () => {
        if (time === "choose time") {
            setErrorTimeVisible(true);
        } else {
            setErrorTimeVisible(false);
        }
    }

    const handleOccasionBlur = () => {
        if (occasion === "occasion") {
            setErrorOccasionVisible(true);
        } else {
            setErrorOccasionVisible(false);
        }
    }

    const handleEmailBlur = () => {
        if (!validateEmail({email})) {
            setErrorEmailVisible(true);
        } else {
            setErrorEmailVisible(false);
        }
    }

    const handleNameBlur = () => {
        if (firstName.length < 5) {
            setErrorNameVisible(true);
        } else {
            setErrorNameVisible(false);
        }
    }

    const handleBlur = () => {
        setMessageVisible(false);
        setErrorMessageVisible(true);
        if (guests > 8) {
            setErrorMessage("For more than 8 guests, call for a reservation");
          } else if (guests < 1) {
            setErrorMessage("Select a valid number of guests");
          } else {
            setErrorMessage(""); // Clear the error message if guests are valid
          }
    };

    const getIsFormValid = () => {
        return (
          firstName &&
          startDate &&
          validateEmail({ email }) &&
          guests >= 1 && guests <= 8 &&
          time !== "choose time" &&
          occasion !== "occasion"
        );
      };

    const clearForm = () => {
        setStartDate(new Date());
        setFirstName("");
        setEmail("");
        setDetails("");
        setGuests("-");
        setTime("");
        setOccasion("");
    };
      
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            startDate,
            firstName,
            email,
            details,
            guests,
            time,
            occasion,
          };
        
        if (getIsFormValid()) {
          
          console.log('Form submitted with data:', JSON.stringify(formData, null, 2));
          
          setAlertMessage('Your Reservation is Confirmed!');
          setShowAlert(true);
        } else {
            setAlertMessage('Form is not valid.');
            setShowAlert(true);
        }
      };

      const closeAlert = () => {
        setShowAlert(false);
        clearForm();
      };


    return (
        <Container>
            <Form action="book_table" onSubmit={handleSubmit}>
                <Section>
                    <Field>
                        <label htmlFor="datepicker">Select Date:</label>
                        <DatePicker
                            showIcon
                            className='date-input'
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            dateFormat="dd/MM/yyyy"
                            calendarContainer={MyContainer}
                            closeOnScroll={true}
                            shouldCloseOnSelect={true}
                            minDate={new Date()}
                            placeholder={new Date()}
                        />

                        <label htmlFor="res-time">Choose time</label>
                        {errorTimeVisible && <ErrorMessage>Please select a valid time.</ErrorMessage>}
                        <select
                            id="res-time"
                            placeholder='choose time'
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            onBlur={handleTimeBlur}
                        >
                            <option value="choose time">Choose Time</option>
                            <option value="17:00">17:00</option>
                            <option value="18:00">18:00</option>
                            <option value="19:00">19:00</option>
                            <option value="20:00">20:00</option>
                            <option value="21:00">21:00</option>
                            <option value="22:00">22:00</option>
                        </select>
                        <label htmlFor="guests">Number of guests</label>
                        {messageVisible && (
                            <Message className="Message">For more than 8 guests please call to make a reservation.</Message>
                        )}
                        {errorMessage && errorMessageVisible && <ErrorMessage>{errorMessage}</ErrorMessage>}
                        <input
                            className='other-input'
                            type="number"
                            placeholder="-"
                            min="1"
                            max="8"
                            id="guests"
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                            onFocus= {handleFocus}
                            onBlur={handleBlur}
                        />

                        <label htmlFor="occasion">Occasion:</label>
                        {errorOccasionVisible && <ErrorMessage>Please select an occasion</ErrorMessage>}
                        <select
                            id="occasion"
                            value={occasion}
                            onChange={(e) => setOccasion(e.target.value)}
                            onBlur= {handleOccasionBlur}
                        >
                            <option value="occasion">Occasion</option>
                            <option value="birthday">Birthday</option>
                            <option value="anniversary">Anniversary</option>
                            <option value="engagement">Engagement</option>
                            <option value="other">Other</option>
                        </select>
                    </Field>

                    <Field>
                        <label htmlFor="name">First name:</label>
                        {errorNameVisible && <ErrorMessage>Should be at least 5 characters.</ErrorMessage>}
                        <input
                            className='other-input'
                            type="text"
                            id="name"
                            name="name"
                            placeholder="ex. John"
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value);
                            }}
                            onBlur= {handleNameBlur}
                        />

                        <label htmlFor="email">E-mail</label>
                        {errorEmailVisible && <ErrorMessage>E-mail not valid.</ErrorMessage>}
                        <input
                            className='other-input'
                            type="email" id="email"
                            name="email"
                            placeholder="ex. john@mail.com"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            onBlur={handleEmailBlur}
                        />

                        <label htmlFor="details">Special Requests <sup>(optional)</sup></label>
                        <textarea
                            name="details"
                            maxLength="200"
                            placeholder="ex. baby chair required"
                            value={details}
                            onChange={(e) => {
                                setDetails(e.target.value);
                            }}
                        />
                    </Field>
                </Section>
                
                <Submit type="submit" disabled={!getIsFormValid()}>Make your Reservation</Submit>
            </Form>
            {showAlert && (
                <CustomAlert
                    message={alertMessage}
                    startDate={startDate}
                    firstName={firstName}
                    guests={guests}
                    time={time}
                    onClose={closeAlert}
                />
            )}
        </Container>
    );
   }
   export default BookingForm;