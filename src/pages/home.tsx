/**
 * Copyright (c) 2021, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { useAuthContext } from "@asgardeo/auth-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React, { FunctionComponent, ReactElement, useEffect, useState } from "react";
import { default as authConfig } from "../config.json";
import HOME_BACKGROUND from "../images/home-bg.jpg";
import COMPANY_LOGO from "../images/logo.png";
import COMPANY_LOGO_INVERSE from "../images/logo-inverse.png";
import FOOTER_LOGO from "../images/footer-logo.png";
import { DefaultLayout } from "../layouts/default";

/**
 * Decoded ID Token Response component Prop types interface.
 */
type HomePagePropsInterface = {};

/**
 * Home page for the Sample.
 *
 * @param {HomePagePropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const HomePage: FunctionComponent<HomePagePropsInterface> = (
    props: HomePagePropsInterface
): ReactElement => {

    const {
        state,
        signIn,
        signOut,
        getBasicUserInfo,
        getIDToken,
        getDecodedIDToken
    } = useAuthContext();

    const [ derivedAuthenticationState, setDerivedAuthenticationState ] = useState<any>(null);
    const [ hasAuthenticationErrors, setHasAuthenticationErrors ] = useState<boolean>(false);

    useEffect(() => {

        if (!state?.isAuthenticated) {
            return;
        }

        (async (): Promise<void> => {
            const basicUserInfo = await getBasicUserInfo();
            const idToken = await getIDToken();
            const decodedIDToken = await getDecodedIDToken();

            const derivedState = {
                authenticateResponse: basicUserInfo,
                idToken: idToken.split("."),
                decodedIdTokenHeader: JSON.parse(atob(idToken.split(".")[0])),
                decodedIDTokenPayload: decodedIDToken
            };

            setDerivedAuthenticationState(derivedState);
            console.log(derivedState.decodedIDTokenPayload);
        })();
    }, [ state.isAuthenticated ]);

    const handleLogin = () => {
        signIn()
            .catch(() => setHasAuthenticationErrors(true));
    };

    const handleLogout = () => {
        signOut();
    };

    const handleDropdownOnClick = (e) => {
        e.target.classList.toggle("show");
    };

    // If `clientID` is not defined in `config.json`, show a UI warning. 
    if (!authConfig?.clientID) {

        return (
            <div className="content">
                <h2>You need to update the Client ID to proceed.</h2>
                <p>Please open "src/config.json" file using an editor, and update
                    the <code>clientID</code> value with the registered application's client ID.</p>
                <p>Visit repo <a
                    href="https://github.com/asgardeo/asgardeo-auth-react-sdk/tree/master/samples/asgardeo-react-app">README</a> for
                    more details.</p>
            </div>
        );
    }

    return (
        <DefaultLayout
            isLoading={ state.isLoading }
            hasErrors={ hasAuthenticationErrors }
        >
            {
                state.isAuthenticated
                    ? (
                        <>
                            <div className="header">
                                <img src={ COMPANY_LOGO } className="company-logo-image logo"/>
                                <ul className="nav">
                                    <li>Online Certificates</li>
                                    <li>Group Programs</li>
                                    <li>Keynotes</li>
                                    <li className="dropdown dropdown-toggle" onClick={ (e) => { handleDropdownOnClick(e) } }>
                                        Welcome { derivedAuthenticationState?.decodedIDTokenPayload.given_name || derivedAuthenticationState?.decodedIDTokenPayload.username }
                                        <ul className="dropdown-menu text-small show">
                                            <li><a className="dropdown-item" onClick={ () => { handleLogout() } }>Sign out</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={ faMagnifyingGlass } />
                                    </li>
                                </ul>
                            </div>
                            <div className="content">
                                <div className="container">
                                    <div className="grid">
                                        <div className="column side-nav-section">
                                            <ul className="side-nav">
                                                <li className="active">Student Profile</li>
                                                <li>Certifications</li>
                                                <li>Announcements</li>
                                                <li>Events</li>
                                                <li>Help</li>
                                            </ul>
                                        </div>
                                        <div className="column">
                                            <h1 className="page-title">Student Profile</h1>
                                            <div>
                                                <form>
                                                    <h2>Personal Information</h2>
                                                    <div className="field">
                                                        <label>First Name :</label>
                                                        <input type="text" readOnly value={ derivedAuthenticationState?.decodedIDTokenPayload.given_name } />
                                                    </div>
                                                    <div className="field">
                                                        <label>Date of Birth :</label>
                                                        <input type="text" readOnly value={ derivedAuthenticationState?.decodedIDTokenPayload.birthdate } />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="section-box">
                                                <div className="section-box-header">Events</div>
                                                <div className="section-box-content"></div>
                                            </div>
                                            <div className="section-box">
                                                <div className="section-box-header">Announcements</div>
                                                <div className="section-box-content"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <footer>
                                <div className="container">
                                    <div className="left">
                                        <img src={ FOOTER_LOGO } className="footer-logo-image logo"/>
                                        <ul className="footer-links">
                                            <li>About ABC University</li>
                                            <li>Contact us</li>
                                            <li>Student Alumni</li>
                                            <li>University Course Guide</li>
                                        </ul>
                                    </div>
                                </div>
                            </footer>
                        </>
                    )
                    : (
                        <div className="content flex-center home-page-content" style={ { backgroundImage: `url(${HOME_BACKGROUND})`} }>
                            <img src={ COMPANY_LOGO_INVERSE } className="company-logo-image logo"/>
                            <h1 className="home-description">
                                Welcome to ABC Uni Student Portal. Please login to proceed.
                            </h1>
                            <button
                                className="btn primary home-button"
                                onClick={ () => {
                                    handleLogin();
                                } }
                            >
                                Login
                            </button>
                        </div>
                    )
            }
        </DefaultLayout>
    );
};
