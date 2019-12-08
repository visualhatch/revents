import React from "react";
import { Grid } from "semantic-ui-react";
import SettingsNav from "./SettingsNav";
import { Route } from "react-router-dom";
import BasicPage from "./BasicPage";
import AboutPage from "./AboutPage";
import PhotosPage from "./PhotosPage";
import AccountPage from "./AccountPage";
import { Redirect } from "react-router-dom";
import { Switch } from "react-router";
import { connect } from "react-redux";

import { updatePassword } from "../../../store/actions/authActions";

const actions = {
  updatePassword
};

const mapStateToProps = state => ({
  providerId: state.firebase.auth.isLoaded && state.firebase.auth.providerData[0].providerId
});

const SettingsDashboard = ({ updatePassword, providerId }) => {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Switch>
          <Redirect exact from={"/settings"} to={"/settings/basic"} />
          <Route path={"/settings/basic"} component={BasicPage} />
          <Route path={"/settings/about"} component={AboutPage} />
          <Route path={"/settings/photos"} component={PhotosPage} />
          <Route
            path={"/settings/account"}
            render={() => (
              <AccountPage
                updatePassword={updatePassword}
                providerId={providerId}
              />
            )}
          />
        </Switch>
      </Grid.Column>
      <Grid.Column width={4}>
        <SettingsNav />
      </Grid.Column>
    </Grid>
  );
};

export default connect(mapStateToProps, actions)(SettingsDashboard);
