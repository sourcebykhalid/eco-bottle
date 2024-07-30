import { Typography, Avatar, Rating } from "@material-tailwind/react";
import Reveal from "./Reveal";

const Testimonials = () => {
  return (
    <div className="px-8  border-x-2 w-2/3 mx-auto py-24 text-center flex flex-col justify-center items-center gap-y-4">
      <Reveal>
        {" "}
        <div className="">
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-2   font-medium"
          >
            &quot;This is an excellent product, I would highly recommend to use
            this Eco bottle on daily basis.&quot;
          </Typography>
          <Avatar
            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image"
            className=" w-24 h-24 rounded-full mx-auto"
          />
          <Typography variant="h6" className="mt-4">
            Tania Andrew
          </Typography>
          <Typography color="gray" className="mb-4 font-normal">
            Lead Frontend Developer
          </Typography>
        </div>
      </Reveal>
      <Reveal>
        {" "}
        <div className="">
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-2   font-medium"
          >
            &quot;This is an excellent product, I would highly recommend to use
            this Eco bottle on daily basis.&quot;
          </Typography>
          <Avatar
            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image"
            className=" w-24 h-24 rounded-full mx-auto"
          />
          <Typography variant="h6" className="mt-4">
            Tania Andrew
          </Typography>
          <Typography color="gray" className="mb-4 font-normal">
            Lead Frontend Developer
          </Typography>
        </div>
      </Reveal>
      <Reveal>
        {" "}
        <div className="">
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-2   font-medium"
          >
            &quot;This is an excellent product, I would highly recommend to use
            this Eco bottle on daily basis.&quot;
          </Typography>
          <Avatar
            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image"
            className=" w-24 h-24 rounded-full mx-auto"
          />
          <Typography variant="h6" className="mt-4">
            Tania Andrew
          </Typography>
          <Typography color="gray" className="mb-4 font-normal">
            Lead Frontend Developer
          </Typography>
        </div>
      </Reveal>
    </div>
  );
};

export default Testimonials;
