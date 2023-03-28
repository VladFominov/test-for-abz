import { useEffect, useState } from "react";

import "../../scss/custom.scss"
import { addUser, getToken } from "../../services/api";

import UploadInput from "../uploadInput/UploadInput";
import styles from "./_bootstrap.module.scss"
import successImg from "../../assets/images/success-image.svg"

const RegistrationForm = () => {
     const [token, setToken] = useState("");
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      role: "",
      photo: null,
      position_id:"3"
    });
    const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});
   const [isNameValid, setIsNameValid] = useState(null);
  const [isEmailValid, setIsEmailValid] = useState(null);
  const [isPhoneValid, setIsPhoneValid] = useState(null);
   const [buttonBackgroundColor, setButtonBackgroundColor] =
     useState("#B4B4B4");
  
  // const [isPhotoValid, setIsPhotoValid] = useState(null);

  useEffect(() => {
     
       getToken()
         .then((res) => setToken(res.token))
         .catch((error) => {
           console.error(error);
         });
     }, []);
  
const isFormEmpty =
  !formData.name ||
  !formData.email ||
  !formData.phone ||
  !formData.role ||
    !formData.photo;
  
  
  const handleInputChange = (event) => {
    if (isFormEmpty) {
      setButtonBackgroundColor("#B4B4B4");
    } else {
      setButtonBackgroundColor("#F4E041");
    }
    console.log(event.target.value);
    const { name, value } = event.target;
    setIsNameValid(
      formData.name.length >= 2 && formData.name.length <= 60
        ? true
        : false
    );
    setIsEmailValid(
      formData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? true : false
    );

    setIsPhoneValid(formData.phone.match(/^\+380\d{9}$/) ? true : false);
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
    };

    const handlePhotoChange = (event) => {
        setFormData((prevState) => ({
            ...prevState,
            photo: event.target.files[0],
        }));
      
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            addUser( formData,token);
           setIsSuccess(true);
              setFormData({
                name: "",
                email: "",
                phone: "",
                role: "",
                photo: null,
              });
        } catch (error) {
            console.error(error);
            setErrors(error.response.data);
        }
       
    };


  return (
    <div>
      {isSuccess ? (
        <div>
          <p className={styles.successText}>User successfully registered</p>
          <img src={successImg} alt="success" />
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div class="form-floating mb-3">
            <input
              type="name"
              name="name"
              className={`form-control ${
                isNameValid === true
                  ? "is-valid"
                  : isNameValid === false
                  ? "is-invalid"
                  : ""
              }`}
              placeholder="name"
              value={formData.name}
              onChange={handleInputChange}
              aria-describedby="validationServer03Feedback"
              required
            />
            <label className={styles.inputText} htmlFor="floatingInput">
              Your name
            </label>
            {isNameValid === false && (
              <div id="validationServer03Feedback" className="invalid-feedback">
                Name must be between 2 and 60 characters
              </div>
            )}
          </div>
          <div class="form-floating mb-3">
            <input
              type="email"
              name="email"
              className={`form-control ${
                isEmailValid === true
                  ? "is-valid"
                  : isEmailValid === false
                  ? "is-invalid"
                  : ""
              }`}
              placeholder="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <label className={styles.inputText} htmlFor="floatingInput">
              Email address
            </label>
            {isEmailValid === false && (
              <div className="invalid-feedback">
                Please enter a valid email address
              </div>
            )}
          </div>
          <div className="form-floating mb-3">
            <input
              type="tel"
              name="phone"
              className={`form-control ${
                isPhoneValid === true
                  ? "is-valid"
                  : isPhoneValid === false
                  ? "is-invalid"
                  : ""
              }`}
              placeholder="name@example.com"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            <label className={styles.inputText} htmlFor="floatingInput">
              Phone
            </label>
            {isPhoneValid === false && (
              <div className="invalid-feedback">
                Phone number must start with +380 and be 12 digits long
              </div>
            )}
            <p className={styles.inputTel}>+38(XXX)XXX-XX-XX</p>
          </div>
          <div className={styles.radioBtnWrapper}></div>
          <p>Select your position</p>
          <div class="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="role"
              value="Frontend developer"
              onChange={handleInputChange}
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Frontend developer
            </label>
          </div>
          <div class="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="role"
              value="Backend developer"
              onChange={handleInputChange}
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Backend developer
            </label>
          </div>
          <div class="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="role"
              id="flexRadioDefault1"
              value="Designer"
              onChange={handleInputChange}
            />
            <label className="form-check-label" for="flexRadioDefault1">
              Designer
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="role"
              id="flexRadioDefault1"
              value="Qa"
              onChange={handleInputChange}
            />
            <label className="form-check-label" for="flexRadioDefault1">
              Qa
            </label>
          </div>

          <UploadInput onChange={handlePhotoChange} />
          <div className={styles.BtnWrapper}>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isFormEmpty}
              style={{ backgroundColor: buttonBackgroundColor }}
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
    }

export default RegistrationForm;