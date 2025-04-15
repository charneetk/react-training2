import { useForm, useFieldArray } from "react-hook-form";
import React from "react";

const SampleForm = () => {
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      channel: "ABC",
      social: {
        twitter: "",
        facebook: "",
      },
      phoneNumbers: ["", ""],
      allNumbers: [
        {
          number: "",
        },  
      ],
      age: 18,
      dob: new Date(),
    },
    mode: "onSubmit",
  });
  const { register, handleSubmit, formState, control, watch, reset, trigger } =
    form;
  const { errors, isDirty, isValid } = formState;

  console.log("Is Valid ", { isValid });
  const onSubmit = (data) => {
    console.log("Form submitted ", data);
  };

  const { fields, append, remove } = useFieldArray({
    name: "allNumbers",
    control,
  });

  const onError = (errors) => {
    console.log("Errors ", errors);
  };

  return (
    <form
      className="form-horizontal"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <div className="form-group">
        <label className="control-label col-sm-2" htmlFor="username">
          UserName:
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            id="username"
            name="username"
            {...register("username", {
              required: {
                value: true,
                message: "Username is required",
              },
            })}
          ></input>
          <p className="error">{errors.username?.message} </p>
        </div>
      </div>
      <div className="form-group">
        <label className="control-label col-sm-2" htmlFor="email">
          Email:
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            id="email"
            name="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^[^@]+@[^@]+\.[^@]+$/,
                message: "Invalid Email",
              },
              validate: {
                notAdmin: (fieldValue) => {
                  return (
                    fieldValue !== "admin@example.com" ||
                    "Enter a different email address"
                  );
                },
              },
            })}
          ></input>
          <p className="error">{errors.email?.message} </p>
        </div>
      </div>
      <div className="form-group">
        <label className="control-label col-sm-2" htmlFor="channel">
          Channel:
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            id="channel"
            name="channel"
            {...register("channel", {
              required: {
                value: true,
                message: "Channel is required",
              },
            })}
          ></input>
          <p className="error">{errors.channel?.message} </p>
        </div>
      </div>

      <div className="form-group">
        <label className="control-label col-sm-2" htmlFor="twitter">
          Twitter:
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            id="twitter"
            name="twitter"
            {...register("social.twitter", {
              disabled: watch("channel") === "",
            })}
          ></input>
        </div>
      </div>
      <div className="form-group">
        <label className="control-label col-sm-2" htmlFor="facebook">
          Facebook:
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            id="facebook"
            name="facebook"
            {...register("social.facebook")}
          ></input>
        </div>
      </div>
      <div className="form-group">
        <label className="control-label col-sm-2" htmlFor="primaryPhoneNumber">
          Primary Phone Number:
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            id="primaryPhoneNumber"
            name="primaryPhoneNumber"
            {...register("phoneNumbers.0")}
          ></input>
        </div>
      </div>

      <div className="form-group">
        <label
          className="control-label col-sm-2"
          htmlFor="secondaryPhoneNumber"
        >
          Secondary Phone Number:
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            id="secondaryPhoneNumber"
            name="secondaryPhoneNumber"
            {...register("phoneNumbers.1")}
          ></input>
        </div>
      </div>

      <div className="form-group">
        <label className="control-label col-sm-2" htmlFor="allNumbers">
          List of Numbers:
        </label>
        <div className="col-sm-10">
          {fields.map((field, index) => {
            return (
              <div>
                <input
                  type="text"
                  {...register(`allNumbers.${index}.number`)}
                ></input>
                {index > 0 && (
                  <button type="button" onClick={() => remove(index)}>
                    Remove Number
                  </button>
                )}
              </div>
            );
          })}
          <button type="button" onClick={() => append({ number: "" })}>
            Add Number
          </button>
        </div>
      </div>

      <div className="form-group">
        <label className="control-label col-sm-2" htmlFor="age">
          Age:
        </label>
        <div className="col-sm-10">
          <input
            type="number"
            id="age"
            name="age"
            {...register("age", {
              valueAsNumber: true,
            })}
          ></input>
        </div>
      </div>

      <div className="form-group">
        <label className="control-label col-sm-2" htmlFor="dob">
          Date Of Birth:
        </label>
        <div className="col-sm-10">
          <input
            type="date"
            id="dob"
            name="dob"
            {...register("dob", {
              valueAsDate: true,
            })}
          ></input>
        </div>
      </div>

      <div className="form-group">
        <div className="col-sm-offset-2 col-sm-10">
          <button type="submit" className="btn btn-default" disabled={!isValid}>
            Submit
          </button>
          <button
            type="reset"
            className="btn btn-default"
            onClick={() => reset()}
          >
            Reset
          </button>
          <button
            type="trier"
            className="btn btn-default"
            onClick={() => trigger()}
          >
            Validate
          </button>
        </div>
      </div>
    </form>
  );
};

export default SampleForm;
