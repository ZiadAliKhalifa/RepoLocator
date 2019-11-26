import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import clsx from "clsx";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import FaceIcon from "@material-ui/icons/Face";
import BusinessIcon from "@material-ui/icons/Business";
import Tooltip from "@material-ui/core/Tooltip";
import Chip from "@material-ui/core/Chip";
import RepositoryInfo from "./RepositoryInfo";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 900,
    width: 900,
    zIndex: 900,
    margin: 15,
    border: "1px solid #e8e8e8"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  ownerTypeIcon: {
    padding: 8
  }
}));

const RepositoryCard = ({ item, id }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    console.log(item);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <>
            {item.owner.avatar_url && (
              <Avatar
                aria-label="avatar"
                className={classes.avatar}
                src={item.owner.avatar_url}
              />
            )}
          </>
        }
        action={
          <>
            {item.owner.type === "User" && (
              <Tooltip title="Owned by a user" aria-label="Tooltip">
                <FaceIcon className={classes.ownerTypeIcon} />
              </Tooltip>
            )}
            {item.owner.type !== "User" && (
              <Tooltip title="Owned by an organization" aria-label="Tooltip">
                <BusinessIcon className={classes.ownerTypeIcon} />
              </Tooltip>
            )}
          </>
        }
        title={
          <>
            <strong>{item.name}</strong>
          </>
        }
        subheader={item.owner.login}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          style={{
            marginInlineStart: "2rem",
            marginBottom: "1rem",
            marginTop: "-1rem"
          }}
        >
          {item.description}
        </Typography>

        {item.language && (
          <Chip
            label={item.language}
            color="primary"
            size="small"
            style={{ marginInlineStart: "0.3rem" }}
          />
        )}
      </CardContent>
      <CardActions disableSpacing style={{ marginTop: "-1.6rem" }}>
        <Typography
          variant="body2"
          color="primary"
          component="p"
          style={{ marginInlineStart: "1rem" }}
        >
          <strong>Forks: </strong>
          {item.forks_count}
        </Typography>
        <Typography
          variant="body2"
          color="primary"
          component="p"
          style={{ marginInlineStart: "1rem" }}
        >
          <strong>Watchers: </strong>
          {item.watchers}
        </Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto">
        <CardContent>
          <RepositoryInfo />
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default RepositoryCard;
