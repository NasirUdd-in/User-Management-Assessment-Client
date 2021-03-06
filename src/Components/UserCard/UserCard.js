import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const UserCard = ({ singleUser }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://i.ibb.co/QrcZS1R/placeholder-image-person-jpg-300x248-2.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {singleUser.firstname} {singleUser.lastname}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {singleUser.gender}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {singleUser.dateofbirth}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {singleUser.email}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {singleUser.phone}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default UserCard;
