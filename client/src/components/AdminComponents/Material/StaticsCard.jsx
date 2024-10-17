import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export function StaticsCard() {
  return (
    <Card className="mt-6 w-60 h-52 ">
      <CardBody className="flex flex-col items-center justify-center space-y-2 my-auto">
        <Typography variant="h5" color="blue-gray" className="text-center">
          POSTS
        </Typography>
        <Typography variant="h2" className="text-center">
          2500
        </Typography>
        <Typography variant="h6" color="blue-gray" className="text-center">
          42%
        </Typography>
      </CardBody>
    </Card>
  );
}
