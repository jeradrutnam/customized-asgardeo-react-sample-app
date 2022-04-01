<%--
  ~ Copyright (c) 2019, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
  ~
  ~ WSO2 Inc. licenses this file to you under the Apache License,
  ~ Version 2.0 (the "License"); you may not use this file except
  ~ in compliance with the License.
  ~ You may obtain a copy of the License at
  ~
  ~    http://www.apache.org/licenses/LICENSE-2.0
  ~
  ~ Unless required by applicable law or agreed to in writing,
  ~ software distributed under the License is distributed on an
  ~ "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  ~ KIND, either express or implied.  See the License for the
  ~ specific language governing permissions and limitations
  ~ under the License.
  --%>

<%@ include file="localize.jsp" %>
<%@ page import="org.wso2.carbon.identity.application.authentication.endpoint.util.AuthenticationEndpointUtil" %>

<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel="icon" href="libs/themes/default/assets/images/favicon.ico" type="image/x-icon"/>
<link href="libs/themes/default/theme.min.css" rel="stylesheet">
<link href="libs/fontawesome-free-6.1.1-web/css/all.css" rel="stylesheet">

<style type="text/css">

a {
    color: #bc261a;
}

.width-100 {
    width: 100%;
}

hr.page-title-underline {
    width: 40px;
    margin: 0 auto;
    height: 3px;
    background-color: #bc261a;
    margin-bottom: 30px;
}

footer {
    background: #111;
    color: #fff;
}

.page-title {
    font-weight: 300;
    margin-bottom: 25px;
}

.ui.primary.button, .ui.primary.buttons .button {
    background-color: #bc261a;
}

.ui.button.link-button {
    color: #bc261a;
}

.ui.primary.button:hover, .ui.primary.buttons .button:hover {
    background-color: #6f0800;
}

.ui.segment {
    background-color: #f1f1f1;
}

.hide {
  display: none !important;
}

.header:not(.ui) {
    background-color: #333333;
    color: #ffffff;
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.header:not(.ui) > .company-logo-image {
    height: 40px;
    margin-right: auto;
}

.header:not(.ui) > ul.nav {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 8px 0;
    text-transform: uppercase;
}

.header:not(.ui) > ul.nav > li {
    margin: 0 10px;
    cursor: pointer;
}

.header:not(.ui) > ul.nav > li:hover {
    color: #bc261a;
}

.dropdown {
    position: relative;
    margin: 0 20px !important;
}

.dropdown.show > .dropdown-menu {
    display: block;
}

.dropdown-toggle {
    cursor: pointer;
}

.dropdown-toggle::after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
}

.dropdown-menu {
    background: #111;
    color: #fff;
    position: absolute;
    inset: 0px auto auto 0px;
    margin: 0;
    padding: 0;
    list-style: none;
    min-width: 100%;
    transform: translate3d(0px, 34px, 0px);
    display: none;
}

.dropdown-menu a {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    font-size: 14px;
    width: 100%;
    padding: 10px 0;
    display: block;
}
</style>

<title><%=AuthenticationEndpointUtil.i18n(resourceBundle, "wso2.identity.server")%></title>

<script src="libs/jquery_3.4.1/jquery-3.4.1.js"></script>
