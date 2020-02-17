import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

import {
  Grid,
  Typography,
  Link,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Hidden,
  Box,
  Container,
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DraftsIcon from "@material-ui/icons/Drafts";
import LocationOnSharpIcon from "@material-ui/icons/LocationOnSharp";
import PhoneSharpIcon from "@material-ui/icons/PhoneSharp";

import {getContacts} from "../../../store/actions/contacts";
import useStyles from "./useStyles";

import AmericanExpress from "../Payment/pics/AmericanExpress.png";
import Visa from "../Payment/pics/visa.png";
import MasterCard from "../Payment/pics/mastercard.png";
import PayPal from "../Payment/pics/PayPal.png";

const ContactUs = ({getContactsVar, contacts}) => {
  const classes = useStyles();
  const [phone, setPhone] = useState({text: "phoneTEST", link: "phone"});
  const [email, setEmail] = useState({text: "email", link: "email"});
  const [location, setLocation] = useState({text: "location", link: "location"});

  useEffect(() => {
    if(contacts.length === 0 ){
      getContactsVar();
      contacts.forEach(item => {
        if (item.option === "phone") {
          setPhone({text: item.content[0].text, link: item.content[0].link})
          console.log(contacts)
        }
      })
    }
  }, [getContactsVar, contacts.length]);

  return (
    <Grid item xs={12} lg={4} md={12}>
      <Hidden mdUp>
        <ExpansionPanel className={classes.mainContainer}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.containerTittle}>CONTACT US</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <DraftsIcon className={classes.contactUsIcon} />
            <Link className={classes.contactUsItem} color="secondary" href="/#">
              plantlyshop@gmail.com
            </Link>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <LocationOnSharpIcon className={classes.contactUsIcon} />
            <Link href="/#" color="secondary" className={classes.contactUsItem}>
              Location
            </Link>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <PhoneSharpIcon className={classes.contactUsIcon} />
            <Link href={phone.link} color="secondary" className={classes.contactUsItem}>
              {phone.text}
            </Link>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Hidden>
      <Hidden smDown>
        <Container className={classes.mainContainer}>
          <Link href="/#" className={classes.logoContainer}>
            <img src="/img/Logo.svg" alt="logo" className={classes.logo} />
          </Link>
          <Box className={classes.itemContainer}>
            <DraftsIcon className={classes.contactUsIcon} />
            <Link className={classes.contactUsItem} color="secondary" href="/#">
              plantlyshop@gmail.com
            </Link>
          </Box>
          <Box className={classes.itemContainer}>
            <LocationOnSharpIcon className={classes.contactUsIcon} />
            <Link href="/#" color="secondary" className={classes.contactUsItem}>
              Location
            </Link>
          </Box>
          <Box className={classes.itemContainer}>
            <PhoneSharpIcon className={classes.contactUsIcon} />
            <Link href="/#" color="secondary" className={classes.contactUsItem}>
              Phone
            </Link>
          </Box>
          <Box className={classes.paymentMethods}>
            <img
              className={classes.paymentMethod}
              src={AmericanExpress}
              alt="American Express"
            />
            <img className={classes.paymentMethod} src={PayPal} alt="PayPal" />
            <img
              className={classes.paymentMethod}
              src={MasterCard}
              alt="Master Card"
            />
            <img className={classes.paymentMethod} src={Visa} alt="Visa" />
          </Box>
        </Container>
      </Hidden>
    </Grid>
  );
};

function mapStateToProps(state) {
  return {
    contacts: state.contactsReducer.contacts,
  };
}

export default connect(mapStateToProps,{ getContactsVar: getContacts })(ContactUs);
