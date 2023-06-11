import React, { useEffect, useState } from "react";
import { Country, State, City } from "country-state-city";
import Card from "../UI/Card/Card";
import classes from "./DematAccountForm.module.css";
import Input from "../UI/Input/Input";
import Select from "../UI/Input/Select";
import InputGroup from "../UI/Input/InputGroup";
import Button from "../UI/Button/Button";

const DematAccountForm = () => {
  let [locationData, setLocationData] = useState({
    country: "",
    countryCode: "",
    state: "",
    stateCode: "",
    city: "",
  });
  let [countries, setCountries] = useState([]);
  let [states, setStates] = useState([]);
  let [cities, setCities] = useState([]);
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    panNumber: "",
    aadharNumber: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    password: "",
    confirmPassword: "",
  });
  useEffect(() => {
    let allCountries = Country.getAllCountries();
    let displayCountrys = allCountries.map((country) => {
      return { name: country.name, code: country.isoCode };
    });

    if (locationData.countryCode !== "") {
      let allStates = State.getStatesOfCountry(locationData.countryCode);

      let displayStates = allStates.map((state) => {
        return { name: state.name, code: state.isoCode };
      });
      setStates(displayStates);
    } else {
      setStates([]);
    }
    if (locationData.stateCode !== "") {
      let allCities = City.getCitiesOfState(
        locationData.countryCode,
        locationData.stateCode
      );
      let displayCities = allCities.map((city) => {
        return {
          name: city.name,
          code: city.countryCode,
        };
      });
      setCities(displayCities);
    } else {
      setCities([]);
    }

    setCountries(displayCountrys);
  }, [locationData.stateCode, locationData.countryCode]);

  let handleCountryChange = (e) => {
    let { name, value } = e.target;
    if (value === "") {
      setLocationData((prev) => {
        return {
          ...prev,
          [name]: "",
          countryCode: "",
        };
      });
    }
    setLocationData((prev) => {
      return {
        ...prev,
        [name]: value.split("-")[1],
        countryCode: value.split("-")[0],
      };
    });
  };

  let handleStateChange = (e) => {
    let { name, value } = e.target;
    setLocationData((prev) => {
      return {
        ...prev,
        [name]: value.split("-")[1],
        stateCode: value.split("-")[0],
      };
    });
  };

  let handleCityChange = (e) => {
    let { name, value } = e.target;

    setLocationData((prev) => {
      return {
        ...prev,
        [name]: value.split("-")[1],
      };
    });
  };
  let handleChangeInput = (e) => {
    let { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.phone.length !== 10) {
      return alert("please enter valid phone number");
    }
    if (formData.password !== formData.confirmPassword) {
      return alert("Password and confirm password must be same");
    }
    let data = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      panNumber: formData.panNumber,
      aadharNumber: formData.aadharNumber,
      country: locationData.country,
      state: locationData.state,
      city: locationData.city,
      pincode: formData.pincode,
      password: formData.password,
      accountNumber: Date.now(),
    };
    let sendRequest = async (url) => {
      let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
      });
      let isOk = response.ok;
      if (isOk) {
        alert("Demat account created success");
      } else {
        throw new Error("Something went wrong! try again.");
      }
    };

    try {
      console.log(process.env.REACT_APP_ACCOUNT_HOLDERS);
      await sendRequest(process.env.REACT_APP_ACCOUNT_HOLDERS);
    } catch (error) {
      return alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={classes.dematAccForm}>
      <Card>
        <h1>Open Demat Account</h1>
        <InputGroup>
          <Input
            label={"Name"}
            inputName={"name"}
            inputId={"name"}
            inputType={"text"}
            onChange={handleChangeInput}
          />
          <Input
            label={"email"}
            inputType={"email"}
            inputId={"email"}
            inputName={"email"}
            onChange={handleChangeInput}
          />
        </InputGroup>
        <Input
          label={"Phone"}
          inputType={"text"}
          inputId={"phone"}
          inputName={"phone"}
          onChange={handleChangeInput}
        />
        <InputGroup>
          <Input
            label={"Pancard Number"}
            inputType={"text"}
            inputId={"pancard"}
            inputName={"panNumber"}
            onChange={handleChangeInput}
          />
          <Input
            label={"Aadhar Number"}
            inputType={"text"}
            inputId={"aadhar"}
            inputName={"aadharNumber"}
            onChange={handleChangeInput}
          />
        </InputGroup>
        <InputGroup>
          <Select
            options={countries}
            onChange={handleCountryChange}
            inputName={"country"}
            label={"Select Country"}
            initialSelectValue={"Select Country"}
          />
          <Select
            options={states}
            inputName={"state"}
            label={"Select State"}
            onChange={handleStateChange}
            initialSelectValue={"Select State"}
          />
        </InputGroup>
        <InputGroup>
          <Select
            onChange={handleCityChange}
            options={cities}
            inputName={"city"}
            label={"Select City"}
            initialSelectValue={"Select City"}
          />
          <Input
            label={"Pincode"}
            inputType={"text"}
            inputId={"pincode"}
            inputName={"pincode"}
            onChange={handleChangeInput}
          />
        </InputGroup>
        <Input
          inputType={"password"}
          label={"Password"}
          inputId={"password"}
          inputName={"password"}
          onChange={handleChangeInput}
        />
        <Input
          inputType={"password"}
          label={"Confirm Password"}
          inputId={"confirmPassword"}
          inputName={"confirmPassword"}
          onChange={handleChangeInput}
        />
        <div className={classes["form-actions"]}>

        <Button varient={"solid"} type={"submit"}>Create Account</Button>
        </div>
      </Card>
    </form>
  );
};

export default DematAccountForm;
