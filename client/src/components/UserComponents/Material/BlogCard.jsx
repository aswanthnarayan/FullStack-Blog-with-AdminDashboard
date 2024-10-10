import React from "react";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const BlogCard = () => {
  return (
    <Card className="mt-6 w-[310px] md:w-[350px] lg:w-[310px] xl:w-[400px] shadow-lg border border-lime-100">
      <img
        src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
        alt="card-image"
        className="p-2 rounded-md"
      />
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="">
          UI/UX Review Check
        </Typography>
        <div className="flex justify-between mb-2">                                     
        <p className="text-sm">25-03-1998</p>
        <p className="text-sm">Aswanth C K</p>
        </div>
        <Typography className="line-clamp-1 text-ellipsis">
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.13ecgeyiu3f1cg3yerfdye3fgcyig1sd2oxuyige28oy1crter82fde1ycdfgxe8yo2g`x8y2ef`gd8e2fd8yofew`286dfe28`6orfd8o6e`2rftd68o73e2td86rf`
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <p>Read More</p>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
