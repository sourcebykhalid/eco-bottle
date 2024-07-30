import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import Reveal from "./Reveal";

const Contact = () => {
  return (
    <Card
      color="transparent"
      shadow={false}
      className=" bg-neutral-900 text-neutral-300 p-2 rounded-md shadow-md shadow-green-400 w-fit mx-auto mb-5 mt-11"
    >
      <Reveal>
        <Typography variant="h4" color="blue-gray">
          Feedback
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Give a valuable feedback.
        </Typography>
      </Reveal>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <Reveal>
          {" "}
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              size="lg"
              placeholder="Name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Message
            </Typography>
            <Textarea
              type="password"
              size="lg"
              placeholder="Enter your message here"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
        </Reveal>
        <Reveal>
          <Button className="mt-6 text-neutral-200" fullWidth>
            Send Feedback
          </Button>
        </Reveal>
      </form>
    </Card>
  );
};

export default Contact;
