import { useForm, useFieldArray } from "react-hook-form";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const zodSchema = z.object({
  username: z.string().nonempty("Username is required"),
  email: z.string().email("Enter valid email").nonempty("Email is required"),
  channel: z.string().nonempty("Channel is required"),
});

const ZodValidatedForm = () => {
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      channel: "ABC",
    },
    resolver: zodResolver(zodSchema),
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log("Form submitted ", data);
  };

  return (
    <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label className="control-label col-sm-2" htmlFor="username">
          UserName:
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            id="username"
            name="username"
            {...register("username")}
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
            {...register("channel")}
          ></input>
          <p className="error">{errors.channel?.message} </p>
        </div>
      </div>

      <div className="form-group">
        <div className="col-sm-offset-2 col-sm-10">
          <button type="submit" className="btn btn-default">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ZodValidatedForm;
