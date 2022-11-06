/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
// ------------------------------
// dev by omar
// ------------------------------
import React, { useEffect } from "react";
import css from "../../styles/pages/info-page";
import { useSelector } from "react-redux";
import { InfoContainer } from "../comps/InfoPages/InfoContainer";
const Main = css.Main;
const ContentLine = css.MainContentLine;

const InstallAkk = () => {

  const title = useSelector((state) => state.main.infoPageTitle);
  useEffect(() => (document.documentElement.scrollTop = 0), []);

  return (
    <Main>
      <style>@import url('http://fonts.cdnfonts.com/css/mont');</style>
      <ContentLine style={{ marginBottom: "35px", marginTop: "9px" }}>
        <h2
          style={{
            fontFamily: "Mont",
            fontSize: 40,
            color: "#2E2E2E",
            fontWeight: 800
          }}
        >Установка аккумулятора</h2>
      </ContentLine>
      <ContentLine
        style={{
          marginBottom: "35px",
          marginTop: "2px",
          fontSize: "13px",
          color: "grey",
        }}
      >
        <InfoContainer>
          <div>
            <div style={{ display: "flex", gap: 74, marginBottom: 30 }}>
              <div
                style={{
                  width: "40%",
                  height: 220,
                  display: "flex",
                  gap: 20,
                  padding: 20,
                  paddingRight: 50,
                  background:
                    "radial-gradient(82.08% 199.3% at 83.17% 18.37%, #EBFFFF 0%, #F9F0FF 100%)",
                  boxShadow:
                    "22px 53px 23px rgba(163, 163, 163, 0.03), 12px 30px 19px rgba(163, 163, 163, 0.09), 5px 13px 14px rgba(163, 163, 163, 0.15), 1px 3px 8px rgba(163, 163, 163, 0.18), 0px 0px 0px rgba(163, 163, 163, 0.18)",
                  borderRadius: "12px",
                }}
              >
                <div style={{ marginTop: 8 }}>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.1437 12.2555C19.6906 12.2555 21.1446 12.8565 22.2372 13.9492L23.3084 15.0205C25.4963 14.0504 27.2046 12.1057 27.7716 9.73497C28.0847 8.42685 28.0636 7.1603 27.7834 5.99436C27.6405 5.39936 26.8849 5.20085 26.4524 5.63321L22.6848 9.40116H18.5508V5.31569L22.3184 1.54773C22.7511 1.11505 22.5522 0.359378 21.9573 0.216644C20.7914 -0.0636287 19.525 -0.0846833 18.217 0.228402C15.193 0.951915 12.8368 3.52167 12.355 6.59401C12.2762 7.04928 12.2598 7.49225 12.2653 7.92975L16.7919 12.4611C17.2359 12.3102 17.6898 12.2555 18.1437 12.2555ZM20.9981 15.236C19.7316 13.9694 17.85 13.7282 16.3288 14.4758L10.4498 8.64068V5.24952L3.49968 8.20025e-05L0 3.45085L5.24952 10.4016L8.64203 10.4021L14.4767 16.2317C13.7291 17.7531 13.9708 19.6349 15.2373 20.9015L21.6351 27.3054C22.4346 28.0983 23.7246 28.0983 24.5175 27.3053L27.402 24.4205C28.1949 23.6275 28.1949 22.338 27.4019 21.5379L20.9981 15.236ZM12.4621 16.7891L9.22494 13.5571L1.08271 21.7C-0.359264 23.1421 -0.359264 25.4778 1.08271 26.9199C1.80234 27.6391 2.74561 28 3.69107 28C4.63653 28 5.57981 27.6395 6.30052 26.9183L12.8132 20.405C12.3309 19.2664 12.1723 18.0141 12.4621 16.7891ZM3.49968 25.8125C2.77514 25.8125 2.1873 25.2246 2.1873 24.5C2.1873 23.7749 2.77514 23.1875 3.49968 23.1875C4.22423 23.1875 4.81206 23.7727 4.81206 24.5C4.81206 25.2274 4.22423 25.8125 3.49968 25.8125Z" fill="#565656"/>
                  </svg>
                </div>
                <div>
                  <h1
                    style={{
                      fontFamily: "Mont",
                      fontStyle: "normal",
                      fontWeight: 800,
                      fontSize: "30px",
                      lineHeight: "38px",
                      color: "#565656",
                      marginBottom: 20,
                    }}
                  >Установка АКБ простая * 40 - 79 Ач</h1>
                  <div>
                    <span
                      style={{
                        fontFamily: "Mont",
                        fontStyle: "normal",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 800,
                        fontSize: "40px",
                        lineHeight: "51px",
                        color: "#2BC631",
                      }}
                    >бесплатно</span>
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  height: 220,
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  padding: "20px 50px",
                  background:
                    "radial-gradient(100.71% 275.25% at 103.02% -6.82%, #FFEBFF 0%, #F4FFFD 100%)",
                  boxShadow:
                    "22px 53px 23px rgba(163, 163, 163, 0.03), 12px 30px 19px rgba(163, 163, 163, 0.09), 5px 13px 14px rgba(163, 163, 163, 0.15), 1px 3px 8px rgba(163, 163, 163, 0.18), 0px 0px 0px rgba(163, 163, 163, 0.18)",
                  borderRadius: "12px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    gap: 28,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h1
                      style={{
                        fontSize: 20,
                        fontFamily: "Mont",
                        fontWeight: 800,
                        color: "#565656",
                      }}
                    >Установка аккумулятора простая (ёмкость 80 - 110 Ач)</h1>
                    <p
                      style={{
                        fontSize: 24,
                        fontFamily: "Mont",
                        fontWeight: 800,
                        color: "#2BC631",
                      }}
                    >250 ₽ </p>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h1
                      style={{
                        fontSize: 20,
                        fontFamily: "Mont",
                        fontWeight: 800,
                        color: "#565656",
                      }}
                    >Установка аккумулятора простая (ёмкость 80 - 110 Ач)</h1>
                    <p
                      style={{
                        fontSize: 24,
                        fontFamily: "Mont",
                        fontWeight: 800,
                        color: "#2BC631",
                      }}
                    >250 ₽ </p>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h1
                      style={{
                        fontSize: 20,
                        fontFamily: "Mont",
                        fontWeight: 800,
                        color: "#565656",
                      }}
                    >Установка аккумулятора простая (ёмкость 80 - 110 Ач)</h1>
                    <p
                      style={{
                        fontSize: 24,
                        fontFamily: "Mont",
                        fontWeight: 800,
                        color: "#2BC631",
                      }}
                    >250 ₽ </p>
                  </div>
                </div>
              </div>
            </div>
            <p
              style={{
                marginTop: 20,
                fontSize: 20,
                fontStyle: "normal",
                fontFamily: "Mont",
              }}
            >
              Установка аккумулятора на месте осуществляется при наличии
              технической возможности и по предварительной договоренности с
              менеджером интернет-магазина на этапе оформления заявки.
              <br/>
              <br/>
              Бесплатная установка и обслуживание аккумуляторов, приобретенных в
              сети розничных магазинов «Аккумуляторный мир», осуществляется в
              наших сервисных центрах:
              <br/>
              <br/>— Автомагистральная, 33а;
              <br/>— Аппаратная, 5;
              <br/>— Патриса Лумумбы, 4в;
              <br/>— Раевского, 9/1. Обращаем внимание, что есть автомобили, на
              которых требуется регистрация аккумулятора. Данная услуга доступна
              исключительно на СТО «G-Energy Service» по адресу
              Автомагистральная, 33а по предварительной записи с понедельника по
              пятницу с 09.00 до 19.00. Телефон для записи: +7 (962) 388-82-52.
              Стоимость услуги – 600 рублей.
              <br/>
              <br/>
              Контактная информация и стоимость услуг представлены в разделе
              «Услуги СТО».
            </p>
            <p
              style={{
                marginTop: 40,
                fontSize: 20,
                fontFamily: "Mont",
                fontStyle: "normal",
                color: "#000000",
                fontWeight: 700,
              }}
            >
              * Простой считается установка, не требующая демонтажа
              оборудования, дополнительных деталей автомобиля (кожух, панели,
              накладки и прочее).
              <br/>
              <br/>
              В сервисных центрах осуществляются установки любой сложности, в
              магазинах - при наличии технической возможности (определяется
              продавцом-консультантом).
              <br/>
              <br/>
              Установки на грузовые автомобили, спецтехнику и автобусы не
              осуществляются.
            </p>
          </div>
        </InfoContainer>
      </ContentLine>
    </Main>
  );
};

export default InstallAkk;
