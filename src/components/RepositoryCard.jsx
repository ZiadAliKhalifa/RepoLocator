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

const RepositoryCard = ({ item }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
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
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default RepositoryCard;
