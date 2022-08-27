import { Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";
import { useForm } from "react-hook-form";
import "./SendMail.css";
function SendMail() {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>New Message</h3>
        <Close className="sendMail_close" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="To"
          type="text"
          {...register("to", { required: true })}
        />
        <p errors={errors} name="to" >{errors && console.log('errors')}</p>
         {/* {errors=errors.to && <p>To is required</p>} */}
        {/* {errors.to && <p>To is required</p> } */}
        <input
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
        <input
          placeholder="Message"
          type="text"
          className="sendMail_message"
          {...register("message", { required: true })}
          // name="message"
          //  <input ref={register({ required: true })} name="test" /> old
          //  <input {...register('test', { required: true })} /> new
        />
        <div className="sendMail_options">
          <Button
            className="sendMail_button"
            varient="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
