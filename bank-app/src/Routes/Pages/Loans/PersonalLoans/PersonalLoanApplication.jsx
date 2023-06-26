import React, { useEffect, useState } from "react";
import Input from "../../../../Components/UI/Input/Input";
import classes from "./PersonalLoanApplication.module.css";
import Card from "../../../../Components/UI/Card/Card";
import Select from "../../../../Components/UI/Input/Select";
import Button from "../../../../Components/UI/Button/Button";
import InputGroup from "../../../../Components/UI/Input/InputGroup";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
const PersonalLoanApplication = () => {
  let location = useLocation();
  let navigate = useNavigate();
  let { auth } = useSelector((state) => state);
  let [formData, setFormData] = useState({
    type: "Personal-Loan",
    amount: null,
    tenure: null,
    interest: 0,
    approved: false,
    userId :auth.token
  });

  let options = [
    { name: "3 Months", value: 3 },
    { name: "6 Months", value: 6 },
    { name: "12 Months", value: 12 },
    { name: "18 Months", value: 18 },
    { name: "24 Months", value: 24 },
    { name: "36 Months", value: 36 },
  ];
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        process.env.REACT_APP_ACCOUNT + `applications.json`,
        { method: "POST", body: JSON.stringify(formData) }
      );
      if (!response.ok) {
        throw new Error("Network Error. Try again");
      }

      alert("Applied Successfully");
      return navigate(
        location.pathname + `/../../track-application/${auth.token}`
      );
    } catch (error) {
      return alert(error.message);
    }
  };

  let handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "tenure" && value) {
      let tenure = value?.split("-")[1].split(" ")[0];
      setFormData((prev) => {
        return {
          ...prev,
          [name]: +tenure,
        };
      });
    } else if (name === "amount") {
      setFormData((prev) => {
        return {
          ...prev,
          [name]: +value,
        };
      });
    }
  };
  useEffect(() => {
    // amount <10000 && tenure <12 ====7.8%
    // amount > 10000 and amount < 250000 && tenure >12 === 5.4%
    // amount >10000 && amount < 250000 && tenure <12 ===8.4 %
    // amount >250000 && amount < 500000 and tenure >12 === 6.7 %

    if (formData.amount === 0 || formData.tenure === 0) {
      setFormData((prev) => {
        return {
          ...prev,
          interest: 0,
        };
      });
    }
    if (
      formData.amount > 10000 &&
      formData.amount < 250000 &&
      formData.tenure &&
      formData.tenure <= 12
    ) {
      setFormData((prev) => {
        return { ...prev, interest: 8.4 };
      });
    } else if (
      formData.amount > 10000 &&
      formData.amount < 250000 &&
      formData.tenure &&
      formData.tenure > 12
    ) {
      setFormData((prev) => {
        return { ...prev, interest: 5.4 };
      });
    } else if (
      formData.amount > 250000 &&
      formData.amount < 500000 &&
      formData.tenure &&
      formData.tenure < 12
    ) {
      setFormData((prev) => {
        return { ...prev, interest: 8.4 };
      });
    } else if (
      formData.amount > 500000 &&
      formData.tenure &&
      formData.tenure > 12
    ) {
      setFormData((prev) => {
        return {
          ...prev,
          interest: 6.4,
        };
      });
    }
  }, [formData.amount, formData.tenure]);
  return (
    <form className={classes.form}>
      <Card>
        <Link to="..">
          <>&#8592; Back</>
        </Link>
        <h3>Apply Personal Loan</h3>

        <Input
          onChange={handleChange}
          label={"Amount"}
          inputName={"amount"}
          inputType={"number"}
          value={formData.amount}
        />
        <Select
          onChange={handleChange}
          label={"Tenure"}
          inputName="tenure"
          initialSelectValue={"Select Tenure"}
          options={options}
          valu
        />
        {formData.amount > 0 && formData.tenure && (
          <table>
            <thead></thead>
            <tbody>
              <tr>
                <td>Amount</td>
                <td>{formData.amount}</td>
              </tr>
              <tr>
                <td>Tenure Period</td>
                <td>{formData.tenure} Months</td>
              </tr>
              <tr>
                <td>Rate of Interest</td>
                <td>{formData.interest} % (P.A)</td>
              </tr>
              <tr>
                <td>Total Amount (incd. interest)</td>
                <td>
                  {formData.amount
                    ? ((formData.interest * formData.amount) / 100 / 12) *
                        formData.tenure +
                      formData.amount
                    : 0}
                </td>
              </tr>
            </tbody>
            <tfoot></tfoot>
          </table>
        )}
        <InputGroup>
          <Button onClick={handleSubmit} varient={"solid"} type={"submit"}>
            Apply
          </Button>
        </InputGroup>
      </Card>
    </form>
  );
};

export default PersonalLoanApplication;
