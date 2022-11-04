/* eslint-disable no-lone-blocks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import css from "../../styles/header";
import Button from "../comps/button/Button.jsx";
import StartCatalog from "./StartCatalog";
import HeaderSearch from "../../services/search.service";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import cabinet from "../../img/cabinet.png";
import geonumber from "../../img/geonumber.png";
import catalog from "../../img/menuMenu.png";
import tools from "../../img/menuTools.png";
import search from "../../img/search.png";
import byClickImage from "../../img/byClickGrey.png";
import sravnenieImg from "../../img/sravnenie.png";
import likeImg from "../../img/like.png";
import glushImg from "../../img/glushka.png";

import { useSelector, useDispatch } from "react-redux";
import {
  setOrdersCount,
  setMobile,
  setInfoPageTitle,
  setMessageShow,
  setMessageContent,
} from "../../appStore/reducers/mainReducer";
import { useNavigate } from "react-router-dom";
import Rds from "../../appStore/reducers/storageReducers/mainReducer";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Head = css.Header;
const HeadMenu = css.HeaderMenu;
const MenuButton = css.HeaderMenuButton;
const LogoContent = css.HeaderLogoLine;
const LogoContentWrapper = css.HeaderLogoLineWrapper;
const LogoTitle = css.HeaderLogoTitle;
const MainContentWrapper = css.HeaderMainContentWrapper;

const Header = () => {
  const [showModalCatalog, setShowModalCatalog] = useState("page");
  const [authUserName, setAuthUserName] = useState("Личный кабинет");

  const orders = useSelector((state) => state.main.ordersCount);
  const sravnenie = useSelector((state) => state.main.sravnenieCount);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openCities, setOpenCities] = useState(false);

  async function authValidation() {
    if (Rds.getAuthStatus() === false) {
      {
        /* технический долг, вынести логику в useRef */
      }
      {
        /* или другое более подходящее решение" */
      }

      document.getElementById("googleAuth").style.display = "block";
    } else {
      if (Rds.getAuthUserToken().indexOf("num") === -1) {
        const [header, payload] = Rds.getAuthUserToken().split(".");
        !false && console.log(window.atob(header));
        !false && console.log(window.atob(payload));

        const data = JSON.parse(window.atob(payload));
        const user = data.name;

        console.log(data);
        console.log(user);

        setAuthUserName(user);
        navigate("../cabinet");
      } else {
        const userInfo = Rds.getAuthData();
        console.log(userInfo);
        navigate("../cabinet");
      }
    }
  }

  useEffect(() => {
    dispatch(setOrdersCount(Rds.getOrdersCount()));
  }, []);
  function showCatalog() {
    setShowModalCatalog("modal");
  }

  const options = ["one", "two", "three"];
  const defaultOption = options[0];

  return (
    <React.Fragment>
      {/* <style>@import url('http://fonts.cdnfonts.com/css/mont');</style> */}

      <Head>
        {showModalCatalog === "modal" ? (
          <StartCatalog type={showModalCatalog} action={setShowModalCatalog} />
        ) : null}

        <HeadMenu>
          <Link
            style={{ textDecoration: "none", color: "#858585", fontStyle: "normal",
            fontWeight: 700,
            fontSize: 20px;
            line-height: 26px; }}
            to="/podbor-akkumulyatora"
          >
            <MenuButton style={{ fontWeight: "normal", fontFamily: "Mont" }}>
              Подбор аккумулятора
            </MenuButton>
          </Link>
          <Link style={{ textDecoration: "none", color: "black" }} to="/oplata">
            <MenuButton
              style={{ fontWeight: "normal", fontFamily: "Mont" }}
              onClick={() => dispatch(setInfoPageTitle("Оплата и доставка"))}
            >
              Оплата
            </MenuButton>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/novosti"
          >
            <MenuButton
              style={{ fontWeight: "normal", fontFamily: "Mont" }}
              onClick={() =>
                dispatch(setInfoPageTitle("Новости нашей компании"))
              }
            >
              Доставка
            </MenuButton>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/novosti"
          >
            <MenuButton
              style={{ fontWeight: "normal", fontFamily: "Mont" }}
              onClick={() =>
                dispatch(setInfoPageTitle("Новости нашей компании"))
              }
            >
              Новости
            </MenuButton>
          </Link>
          <Link style={{ textDecoration: "none", color: "black" }} to="/accii">
            <MenuButton
              style={{ fontWeight: "normal", fontFamily: "Mont" }}
              onClick={() => dispatch(setInfoPageTitle("Наши акции"))}
            >
              Акции
            </MenuButton>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/o-kompanii"
          >
            <MenuButton
              style={{ fontWeight: "normal", fontFamily: "Mont" }}
              onClick={() => dispatch(setInfoPageTitle("О компании"))}
            >
              О компании
            </MenuButton>
          </Link>
          <MenuButton
            style={{ fontWeight: "normal", fontFamily: "Mont" }}
            onClick={() => dispatch(setMobile())}
          >
            MOBILE
          </MenuButton>
        </HeadMenu>
        <LogoContent>
          <LogoContentWrapper>
            <React.Fragment>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/glavnaya"
              >
                <LogoTitle
                  style={{
                    overflow: "hidden",
                    position: "relative",
                    width: "600px",
                    height: "60px",
                  }}
                >
                  <img
                    style={{
                      display: "block",
                      position: "absolute",
                      width: "800px",
                      top: "0px",
                      left: "0px",
                      marginLeft: "-114px",
                      marginTop: "-4px",
                    }}
                    src={glushImg}
                    alt={""}
                  />
                </LogoTitle>
              </Link>
            </React.Fragment>
          </LogoContentWrapper>
          <LogoContentWrapper
            style={{ justifyContent: "space-between", position: "relative" }}
          >
            {Rds.getAuthStatus() === "NON_STATUS" ? (
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/cabinet"
              >
                <Button
                  params={{
                    width: 200,
                    height: 30,
                    background: "white",
                  }}
                  inner={authUserName}
                  css={{
                    fontSize: "13px",
                    boxShadow: "none",
                    borderRadius: "15px",
                  }}
                  children={
                    <img
                      style={{
                        display: "block",
                        position: "absolute",
                        width: "22px",
                        height: "22px",
                        top: "50%",
                        marginTop: "-11px",
                        marginLeft: "10px",
                      }}
                      src={cabinet}
                      alt={""}
                    />
                  }
                />
              </Link>
            ) : (
              <Button
                params={{
                  width: 200,
                  height: 30,
                  background: "white",
                }}
                inner={"Личный кабинет"}
                css={{
                  fontSize: "13px",
                  boxShadow: "none",
                  borderRadius: "15px",
                }}
                action={authValidation}
                children={
                  <img
                    style={{
                      display: "block",
                      position: "absolute",
                      width: "22px",
                      height: "22px",
                      top: "50%",
                      marginTop: "-11px",
                      marginLeft: "10px",
                    }}
                    src={cabinet}
                    alt={""}
                  />
                }
              />
            )}

            <div style={{ position: "relative" }}>
              <button
                style={{
                  outline: "none",
                  background: "transparent",
                  border: "none",
                }}
                onClick={() => setOpenCities(!openCities)}
              >
                <Button
                  params={{
                    width: 200,
                    height: 30,
                    background: "white",
                  }}
                  inner={"Екатеринбург"}
                  css={{
                    fontSize: "13px",
                    boxShadow: "none",
                    borderRadius: "15px",
                  }}
                  children={
                    <>
                      <img
                        style={{
                          display: "block",
                          position: "absolute",
                          width: "18px",
                          top: "50%",
                          marginTop: "-10px",
                          marginLeft: "9px",
                        }}
                        src={geonumber}
                        alt={""}
                      />
                    </>
                  }
                  // action={() => {
                  //   dispatch(
                  //     setMessageContent({
                  //       title: "Выбор города ограничен",
                  //       message:
                  //         "На этапе тестирования сайта город по умолчанию установлен Екатеринбург. При загрузке боевой версии будет добавлено распознавание",
                  //       type: "success",
                  //     })
                  //   );
                  //   dispatch(setMessageShow(true));
                  // }}
                />
              </button>
              {openCities && (
                <>
                  <div
                    style={{
                      position: "absolute",
                      height: 200,
                      right: 0,
                      width: "100%",
                      background: "#FFFFFF",
                      /* 99 */
                      padding: "25px 37px",
                      boxShadow:
                        "22px 53px 23px rgba(163, 163, 163, 0.03), 12px 30px 19px rgba(163, 163, 163, 0.09), 5px 13px 14px rgba(163, 163, 163, 0.15), 1px 3px 8px rgba(163, 163, 163, 0.18), 0px 0px 0px rgba(163, 163, 163, 0.18)",
                      borderRadius: "12px",
                      zIndex: 2,
                      top: 40,
                      display: "flex",
                      flexDirection: "column",
                      gap: 14,
                      // marginBottom: 26
                      // paddingBottom: 26
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 13,
                      }}
                    >
                      <p>Екатеринбург</p>
                      <div
                        style={{
                          width: "50%",
                          height: 1,
                          backgroundColor: "#D3D3D3",
                        }}
                      ></div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 13,
                      }}
                    >
                      <p>Тюмень</p>
                      <div
                        style={{
                          width: "50%",
                          height: 1,
                          backgroundColor: "#D3D3D3",
                        }}
                      ></div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 13,
                      }}
                    >
                      <p>Нижний Тагил</p>
                      <div
                        style={{
                          width: "50%",
                          height: 1,
                          backgroundColor: "#D3D3D3",
                        }}
                      ></div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 13,
                      }}
                    >
                      <p
                        style={{
                          marginBottom: 26,
                        }}
                      >
                        Серов
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
            <Button
              params={{
                width: 200,
                height: 30,
                background: "white",
              }}
              inner={"8(343)261-62-62"}
              css={{
                fontSize: "13px",
                boxShadow: "none",
                borderRadius: "15px",
              }}
              children={
                <img
                  style={{
                    display: "block",
                    position: "absolute",
                    width: "18px",
                    top: "50%",
                    marginTop: "-10px",
                    marginLeft: "9px",
                  }}
                  src={geonumber}
                  alt={""}
                />
              }
            />
          </LogoContentWrapper>
        </LogoContent>
        <MainContentWrapper>
          <div
            style={{
              display: "flex",
              position: "relative",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Button
              params={{
                width: 154,
                height: 36,
                background: "#2E2E2E",
              }}
              inner={"Каталог"}
              css={{
                fontSize: "13px",
                boxShadow: "none",
                color: "white",
                marginRight: "24px",
                borderRadius: "12px",
                letterSpacing: "1px",
                paddingLeft: "4px",
              }}
              children={
                <img
                  style={{
                    display: "block",
                    position: "absolute",
                    width: "16px",
                    height: "16px",
                    top: "50%",
                    marginTop: "-8px",
                    marginLeft: "9px",
                  }}
                  src={catalog}
                  alt={""}
                />
              }
              action={showCatalog}
            />

            <Button
              params={{
                width: 154,
                height: 36,
                background: "#D62E2B",
              }}
              inner={"Сервис"}
              css={{
                fontSize: "13px",
                boxShadow: "none",
                color: "white",
                marginRight: "24px",
                borderRadius: "12px",
                letterSpacing: "1px",
                paddingLeft: "4px",
              }}
              children={
                <img
                  style={{
                    display: "block",
                    position: "absolute",
                    width: "18px",
                    height: "18px",
                    top: "50%",
                    marginTop: "-9px",
                    marginLeft: "9px",
                  }}
                  src={tools}
                  alt={""}
                />
              }
              action={() => {
                dispatch(
                  setMessageContent({
                    title: "Сервис доступен локально",
                    message:
                      "Платформа сервиса лежит на отдельном локальном сервере, в данный момент нецелесообразно выкладывать ее",
                    type: "success",
                  })
                );
                dispatch(setMessageShow(true));
              }}
            />
          </div>

          {/* вынести в отдельный компонент */}
          {/* все элементы input будут компонентом */}

          <div
            style={{
              display: "flex",
              position: "relative",
              flexDirection: "row",
              alignItems: "center",
              width: "70%",
            }}
          >
            <img
              style={{
                display: "block",
                position: "absolute",
                width: "19px",
                left: "0px",
                marginLeft: "40px",
              }}
              src={search}
              alt={""}
            />

            <HeaderSearch></HeaderSearch>

            <Button
              params={{
                width: 36,
                height: 36,
                background: "white",
              }}
              inner={""}
              css={{
                fontSize: "13px",
                boxShadow: "none",
                marginLeft: "16px",
                borderRadius: "12px",
              }}
              children={
                <React.Fragment>
                  <img
                    alt={""}
                    src={likeImg}
                    style={{
                      display: "block",
                      position: "absolute",
                      width: "17px",
                      left: 0,
                      marginLeft: "9px",
                      top: "50%",
                      marginTop: "-7px",
                    }}
                  />
                </React.Fragment>
              }
              action={() => {
                dispatch(
                  setMessageContent({
                    title: "Модуль находится в планировании",
                    message:
                      "Данный функционал необходимо согласовать и добавить в общий макет сайта",
                    type: "error",
                  })
                );
                dispatch(setMessageShow(true));
              }}
            />

            <Button
              params={{
                width: 160,
                height: 36,
                background: "white",
              }}
              inner={"Сравнение"}
              css={{
                fontSize: "13px",
                boxShadow: "none",
                marginLeft: "16px",
                borderRadius: "12px",
              }}
              children={
                <React.Fragment>
                  <img
                    alt={""}
                    src={likeImg}
                    style={{
                      display: "block",
                      position: "absolute",
                      width: "17px",
                      left: 0,
                      marginLeft: "10px",
                      top: "50%",
                      marginTop: "-7px",
                    }}
                  />
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-around",
                      position: "absolute",
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      backgroundColor: "#D62E2B",
                      color: "white",
                      textAlign: "center",
                      fontSize: "10px",
                      left: "100%",
                      marginLeft: "-32px",
                      top: "50%",
                      marginTop: "-12px",
                    }}
                  >
                    <span style={{ marginTop: "2px" }}>{sravnenie}</span>
                  </span>
                </React.Fragment>
              }
              action={() => {
                dispatch(
                  setMessageContent({
                    title: "Модуль находится в планировании",
                    message:
                      "Данный функционал необходимо согласовать и добавить в общий макет сайта",
                    type: "error",
                  })
                );
                dispatch(setMessageShow(true));
              }}
            />

            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/order"
            >
              <Button
                params={{
                  width: 160,
                  height: 36,
                  background: "white",
                }}
                inner={"Корзина"}
                css={{
                  fontSize: "13px",
                  boxShadow: "none",
                  marginLeft: "16px",
                  textDecoration: "none",
                  borderRadius: "12px",
                }}
                children={
                  <React.Fragment>
                    <img
                      alt={""}
                      src={likeImg}
                      style={{
                        display: "block",
                        position: "absolute",
                        width: "17px",
                        left: 0,
                        marginLeft: "10px",
                        top: "50%",
                        marginTop: "-7px",
                      }}
                    />
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-around",
                        position: "absolute",
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        backgroundColor: "#2BC631",
                        color: "white",
                        textAlign: "center",
                        fontSize: "10px",
                        left: "100%",
                        marginLeft: "-32px",
                        top: "50%",
                        marginTop: "-12px",
                      }}
                    >
                      <span style={{ marginTop: "2px" }}>{orders}</span>
                    </span>
                  </React.Fragment>
                }
              />
            </Link>
          </div>
        </MainContentWrapper>
      </Head>
    </React.Fragment>
  );
};

export default Header;
