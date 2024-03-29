import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// nodejs library that concatenates classes
import classNames from "classnames";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Fade from "react-reveal/Fade";

import styles from "assets/jss/material-kit-react/views/landingPageSections/storyStyle.js";

const useStyles = makeStyles(styles);

export default function Story() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <Fade duration={2000} bottom cascade>
        <GridContainer justify="center">
          <h2 className={classes.title2}>RARITY</h2>

          <GridItem xs={12} sm={10} md={20} className={classes.sectionArea}>
            <GridItem xs={12} sm={8} md={6}>
              <h4 className={classes.description}>
                {
                  "Our Producer Passes are designed to become your Twitter banner. We chose this underutilized stvle to accentuate the fact that while our characters may originate in different communities, thev only exist together here on The R3eal Metaverse. Over 100 different traits algorithmi- cally combine iconic locations in Los Angeles with award winning animation to generate over 4 million combinations. The Mint will randomly produce XXXX unique Producer Passes. In addition, 20 Ultra Rare Passes will be created. If you're lucky enough to mint one of these rare NFT's you will automatically receive 100 bonus points to be included on the Leader-board for a chance to win amazing opportunities."
                }
              </h4>
            </GridItem>
            <GridItem xs={12} sm={4} md={6}>
              {/* <img
                className={classes.image}
                src={
                  "https://ik.imagekit.io/mbhxghyf1m2/Screen_Shot_2022-06-27_at_3.27.02_PM_bBPIlXfFYy.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656368867146"
                }
                alt="Disconaut Scene"
              /> */}
            </GridItem>
          </GridItem>
          <GridItem
            xs={12}
            sm={10}
            md={10}
            className={classNames(
              classes.sectionArea,
              classes.sectionAreaMargin
            )}
          >
            <GridItem xs={12} sm={4} md={6}>
              <img
                className={classes.image}
                src={
                  "https://ik.imagekit.io/mbhxghyf1m2/Screen_Shot_2022-06-27_at_3.37.16_PM_2yIgJycx1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656369449609"
                }
                alt="Gathering Scene"
              />
            </GridItem>
            <GridItem xs={12} sm={8} md={6}>
              <h4
                className={classNames(
                  classes.description,
                  classes.descriptionRight
                )}
              >
                {
                  "And, just like a reality TV show, our cast is ready for primetime! Fights? Parties? Bad Advice? Let’s just say, they’ll share a house, make some jokes, make some mistakes, and maybe even make out!"
                }
              </h4>
            </GridItem>
          </GridItem>
          <GridItem
            xs={12}
            sm={10}
            md={10}
            className={classNames(
              classes.sectionArea,
              classes.sectionAreaMargin
            )}
          >
            <GridItem xs={12} sm={8} md={6}>
              <h4 className={classes.description}>
                {
                  "Join our community to influence cast decisions, create episodes, and control the fate of Season 2!"
                }
              </h4>
            </GridItem>
            <GridItem xs={12} sm={4} md={6} className={classes.right}>
              {/* <img
                className={classes.image}
                src={
                  "https://ik.imagekit.io/mbhxghyf1m2/Screen_Shot_2022-06-27_at_3.27.13_PM_-D3Uq14Rt.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656368866964"
                }
                alt="Party Scene"
              /> */}
            </GridItem>
          </GridItem>
        </GridContainer>
      </Fade>
    </div>
  );
}
