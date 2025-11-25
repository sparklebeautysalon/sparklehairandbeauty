import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import { Card } from "primereact/card";
import { Toast } from "primereact/toast";

import { Message } from "primereact/message";
import { InputTextarea } from "primereact/inputtextarea";
import ContactUsimg from "../../Images/logohd.jpg";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { FiRefreshCw } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { TbWorldWww } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import ContactUsBanner from "../../Images/downloads/contactusbanner.png";
import {
  FaUserTie,
  FaClipboardList,
  FaMoneyCheckAlt,
  FaUsers,
  FaChartLine,
  FaHeartbeat,
  FaBalanceScale,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaPeopleCarry,
  FaBrain,
  FaUserFriends,
  FaTools,
  FaPiggyBank,
  FaGlobeAmericas,
  FaBookOpen,
} from "react-icons/fa";

function ContactUsPage() {
  const [invalid, setInvalid] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [answer, setAnswer] = useState("");
  const [captchaText, setCaptchaText] = useState("");
  const [text, setText] = useState("");
  const [fullName, setFullName] = useState("");
  const [emailID, setEmailID] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [contactReason, setContactReason] = useState("");
  const [mobilePrefix, setMobilePrefix] = useState(91);
  const toast = useRef(null);

  const generateCaptcha = () => {
    const number1 = Math.floor(Math.random() * 10) + 1;
    const number2 = Math.floor(Math.random() * 10) + 1;
    const operation = Math.random() < 0.5 ? "+" : "-";
    const result = operation === "+" ? number1 + number2 : number1 - number2;

    setCaptchaText(`${number1} ${operation} ${number2} = `);
    setAnswer(result.toString());
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmitTest = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFullName("");
 setEmailID("");
 setMobilePrefix(44);
 setMobileNumber("");
 setSubject("");
 setContactReason("");
 setText("");
 generateCaptcha();
  
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "Form submitted successfully.",
        life: 3000,
      });
     
  };

  const handleSaveContactUsEnquiry = async (event) => {
    event.preventDefault();

    if (answer !== text) {
      toast.current.show({
        severity: "error",
        summary: "Invalid Captcha",
        detail: "Please enter a valid Captcha",
        life: 2000,
      });
      setInvalid(true);
      generateCaptcha();
      return;
    }

    setInvalid(false);

    if (!fullName || fullName.length < 3 || fullName.length > 50) {
      toast.current.show({
        severity: "error",
        summary: "Invalid Name",
        detail: "Please enter a valid full name (3–50 characters).",
        life: 2000,
      });
      return;
    }

    if (!emailID || !/\S+@\S+\.\S+/.test(emailID)) {
      toast.current.show({
        severity: "error",
        summary: "Invalid Email",
        detail: "Please enter a valid email address.",
        life: 2000,
      });
      return;
    }

    if (!mobileNumber || mobileNumber.length !== 10 || isNaN(mobileNumber)) {
      toast.current.show({
        severity: "error",
        summary: "Invalid Number",
        detail: "Please enter a valid 10-digit mobile number.",
        life: 2000,
      });
      return;
    }

    if (!subject || subject.length < 3 || subject.length > 200) {
      toast.current.show({
        severity: "error",
        summary: "Invalid Subject",
        detail: "Subject must be between 3 and 120 characters.",
        life: 2000,
      });
      return;
    }

    if (
      !contactReason ||
      contactReason.length < 3 ||
      contactReason.length > 1000
    ) {
      toast.current.show({
        severity: "error",
        summary: "Invalid Reason",
        detail: "Reason must be between 3 and 250 characters.",
        life: 2000,
      });
      return;
    }

    try {
      const response = await fetch("/saveContactUsEnquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          emailID,
          mobileNumber: parseInt(mobilePrefix + "" + mobileNumber),
          subject,
          contactReason,
        }),
      });

      if (response.ok) {
        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: "Contact form data saved successfully.",
          life: 2000,
        });

        // Reset form
        setFullName("");
        setEmailID("");
        setMobilePrefix(91);
        setMobileNumber("");
        setSubject("");
        setContactReason("");
        setText("");
        generateCaptcha();
      } else {
        toast.current.show({
          severity: "error",
          summary: "Failed",
          detail: "Failed to save contact form data. Try again later.",
          life: 2000,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "An error occurred while submitting the form.",
        life: 2000,
      });
    }
  };

  const handleMailClick = () => {
    window.location.href = "mailto:info@sparklebeautystudio.co.uk";
  };

  const handlePhoneClick = () => {
    window.open(`tel:+44 7944733339`, "_blank");
  };

  const handleWebsiteClick = () => {
    window.open(`https://sparklehairandbeauty.co.uk/`, "_blank");
  };

 

  return (
    <>
      <div className="" style={{ marginTop: "100px" }}>
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[900px] xl:h-[800px] banner">
          <img
            src={ContactUsBanner}
            className="inset-0 w-full h-full object-cover"
            alt=""
          />
                  
        </div>

        <div className="ContactSection">
          <Toast ref={toast} />

          <div className="contact-subsection-left">
            <div className="innersection-left">
              <img src={ContactUsimg} alt="contactimage" />
              <p>Feel Free to reach out to us!</p>
              <div className="contacts-sources">
                <Message
                  className="contcatDblock  avhrProject-h3"
                  severity="info"
                  text="+44 7944733339"
                  onClick={handlePhoneClick}
                  icon={<IoCallOutline className="contact-icon" />}
                />
                <Message
                  className="contcatDblock avhrProject-h3"
                  severity="info"
                  text="info@sparklebeautystudio.co.uk"
                  onClick={handleMailClick}
                  icon={<TfiEmail className="contact-icon" />}
                />
                <Message
                  className="contcatDblock avhrProject-h3"
                  severity="info"
                  style={{ marginBottom: "30px" }}
                  onClick={handleWebsiteClick}
                  text="https://sparklehairandbeauty.co.uk/"
                  icon={<TbWorldWww className="contact-icon" />}
                />
                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19230.127863493224!2d-1.1706492652343679!3d52.9526337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c3b8616eaf65%3A0xea0be3fd1b80f61c!2sSparkle%20Hair%20and%20Beauty%20Studio!5e0!3m2!1sen!2sin!4v1763052671333!5m2!1sen!2sin"
                    width="300"
                    height="250"
                    style={{ border: 0 }}
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Sparkle Hair And Beauty Studio"></iframe>
                </div>
              </div>
            </div>
          </div>

          <div className=" contact-subsection-right">
            <h2 className="Contact-heading avhrProject-h2">Enquiry Now</h2>
            <Card style={{ boxShadow: "none" }} className="contact-form">
              <form onSubmit={handleSubmitTest}>
                {/* handleSubmit */}
                <table className="contact-form-table" cellPadding={"8px"}>
                  <tbody>
                    <tr>
                      <td colSpan={2} className="floating-label-container">
                        <InputText
                          keyfilter={/^[a-zA-Z ]*$/}
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          pattern=".{3,50}"
                          placeholder=" "
                        />
                        <div className="label-line">Enter Your Name</div>
                      </td>
                    </tr>

                    <tr>
                      <td
                        colSpan={2}
                        className="floating-label-container mobile-label">
                        <Dropdown
                          options={[{ name: "+44", value: 44 }]}
                          value={mobilePrefix}
                          onChange={(e) => setMobilePrefix(e.value)}
                          optionLabel="name"
                          placeholder="+44"
                          className="drop-down-contact"
                          style={{ zIndex: "2" }}
                        />
                        <InputText
                          className="contact-number"
                          keyfilter="pint"
                          placeholder=" "
                          pattern=".{10}"
                          value={mobileNumber}
                          onChange={(e) => setMobileNumber(e.target.value)}
                        />

                        <div className="label-line">Contact Number</div>
                      </td>
                    </tr>

                    <tr>
                      <td colSpan={2} className="floating-label-container">
                        <InputText
                          type="email"
                          placeholder=" "
                          keyfilter={"email"}
                          value={emailID}
                          onChange={(e) => setEmailID(e.target.value)}
                        />
                        <div className="label-line">Enter Your Email</div>
                      </td>
                    </tr>

                    {/* <tr>
                      <td colSpan={2} className="floating-label-container">
                        <Dropdown
                          value={subject}
                          options={enquiryGroups}
                          onChange={(e) => setSubject(e.value)}
                          optionGroupLabel="label"
                          optionGroupChildren="items"
                          placeholder="Select Enquiry"
                          className="w-full"
                        />
						keyfilter={/^[a-zA-Z0-9 ]*$/}
                        <div className="label-line">Enquiry About</div>
                      </td>
                    </tr> */}

                    <tr>
                      <td colSpan={2} className="floating-label-container">
                        <Dropdown
                          value={subject}
                          options={[
                            {
                              label: "Hair Services",
                              value: "Hair Services",
                            },
                            {
                              label: "Facial Services",
                              value: "Facial Services",
                            },
                            {
                              label: "Waxing Services",
                              value: "Waxing Services",
                            },
                            {
                              label: "Threading Services",
                              value: "Threading Services",
                            },
                            {
                              label: "Tinting Services",
                              value: "Tinting Services",
                            },
                            {
                              label: "Massage Services",
                              value: "Massage Services",
                            },
                          ]}
                          onChange={(e) => setSubject(e.value)}
                          placeholder="Enquiry About"
                          className="w-full"
                          filter
                        />
                      </td>
                    </tr>

                    <tr>
                      <td colSpan={2} className="floating-label-container">
                        <InputTextarea
                          style={{ width: "100%" }}
                          rows={5}
                          value={contactReason}
                          placeholder=" "
                          onChange={(e) => setContactReason(e.target.value)}
                          cols={30}
                        />
                        <div className="label-line">
                          Let us know more details...
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td style={{ padding: "0px" }} colSpan={2}>
                        <div className="captcha">
                          {captchaText}{" "}
                          <FiRefreshCw
                            onClick={generateCaptcha}
                            className="captcha-icon"
                          />
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="floating-label-container">
                        <InputText
                          keyfilter={"int"}
                          value={text}
                          placeholder=" "
                          onChange={(e) => setText(e.target.value)}
                        />
                        <div className="label-line">Enter Captcha</div>
                        {invalid && (
                          <p
                            style={{
                              color: "red",
                              margin: "0",
                              marginTop: "10px",
                            }}>
                            Invalid Captcha
                          </p>
                        )}
                      </td>
                    </tr>

                    <tr>
                      <td colSpan={2}>
                        <Button
                          disabled={
                            !fullName ||
                            !emailID ||
                            !mobileNumber ||
                            !subject ||
                            !contactReason ||
                            !text
                          }
                          label="Submit"
                          type="submit"
                          className="buttonAvhrProject"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsPage;
